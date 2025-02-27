'use client'
import { useState } from 'react';
import Title from "@/app/Components/Head";
import { Inter } from "next/font/google";
import Link from 'next/link';
import { validateEmail, validatePassword, validateName } from './validation';
import { useRouter } from 'next/navigation';
import { signIn } from 'next-auth/react';


function Home() {
  const router = useRouter();
  const [activePanel, setActivePanel] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
//true is just for testing 
  const [isValid, setIsValid] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [logerrorMessage, logsetErrorMessage] = useState('');


  const handleToggle = (panel) => {
    setActivePanel(panel);
    const container = document.getElementById('container');
    if (container) {
      if (panel === 'register') {
        container.classList.add('active');
      } else if (panel === 'login') {
        container.classList.remove('active');
      }
    }
  };

  const handleSignUp = async () => {
    event.preventDefault();
    setErrorMessage('');

    // Validate name
    if (!validateName(name)) {
      setErrorMessage('Name is required');
      setIsValid(false);
    }

    // Validate email
    if (!validateEmail(email)) {
      setErrorMessage('Invalid email address');
      setIsValid(false);
    }

    // Validate password
    if (!validatePassword(password)) {
      setErrorMessage('Password must contain at least 8 characters including at least one uppercase letter, one lowercase letter, and one number');
      setIsValid(false);
    }
    if(validatePassword(password) && validateEmail(email) && validateName(name) ){
        setIsValid(true)
    }
    
    if(isValid) {
      try{

        const resUserExists = await fetch('api/userExists',{
          method:"POST",
          headers:{
            "Content-type":"application/json"
          },
          body: JSON.stringify({
            email  
          })
        })


        const {user} = await resUserExists.json()
        if(user){
          setIsValid(false)
          setErrorMessage("user exists")
          return;
        }
       const res =  await fetch('api/register',{
          method:"POST",
          headers:{
            "COntent-type":"application/json"
          },
          body: JSON.stringify({
            name,
            email,
            password
          })
        })
        if(res.ok){
          console.log("registred form page")
          router.push('/Inscription');

        }else{
          console.log("failed")
        }
      }catch(error){
        console.log("error"+error)

      }

    }

  
  };
  const handleLogIn = async (e) => {
    e.preventDefault();
    console.log("hola")
    try {
      const res = await signIn("credentials", {
        email,
        password,
        redirect: false,
      });

      if (res.error) {
        logsetErrorMessage("Invalid Credentials");
        return;
      }

      router.replace("Home");
    } catch (error) {
      console.log(error);
    }

  }

  return (
    <>
      <Title />

      <div className="container" id="container">
        <div className={`form-container sign-up ${activePanel === 'register' ? 'active' : ''}`}>
          <div className="brand">
            <div className="logo">
              <img src="/images/logo.png" alt="Logo" className="logo" />
            </div>
            
          </div>
          <form>
          
            {!isValid && <p className="error">{errorMessage}</p>}
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />      
              <button onClick={handleSignUp}>Sign Up</button>
          </form>
        </div>

        <div className={`form-container sign-in ${activePanel === 'login' ? 'active' : ''}`}>
          <div className="brand">
            <div className="logo">
              <img src="/images/logo.png" alt="Logo" className="logo" />
            </div>
           
          </div>
          <form onSubmit={handleLogIn}>
            {!isValid && <p className="error">{logerrorMessage}</p>}

            <input type="email" placeholder="Email"  value={email} onChange={(e) => setEmail(e.target.value)} />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <button type='submit'>Sign In</button> 
          </form>
        </div>

        <div className="toggle-container">
          <div className="toggle">
            <div
              className={`toggle-panel toggle-left ${activePanel === 'login' ? 'active' : ''}`}
            >
              <h1>Welcome Back!</h1>
              <p>Enter your personal details to use all of site features</p>
              <button className="hidden" onClick={() => handleToggle('login')}>
                Sign In
              </button>
            </div>
            <div
              className={`toggle-panel toggle-right ${activePanel === 'register' ? 'active' : ''}`}
            >
              <h1>Hello, Friend!</h1>
              <p>Register with your personal details to use all of site features</p>
              <button className="hidden" onClick={() => handleToggle('register')}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
