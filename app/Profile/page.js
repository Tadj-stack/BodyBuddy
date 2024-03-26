"use client"
import React, { useState } from 'react';
import Title from "@/app/Components/Head";
import Sidebar from '@/app/Components/Sidebar';
import { Button } from '@mui/material';

function Profile() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [country, setCountry] = useState('');
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [profilePicture, setProfilePicture] = useState(null);

  const handleFirstNameChange = (e) => setFirstName(e.target.value);
  const handleLastNameChange = (e) => setLastName(e.target.value);
  const handleEmailChange = (e) => setEmail(e.target.value);
  const handlePasswordChange = (e) => setPassword(e.target.value);
  const handleDateOfBirthChange = (e) => setDateOfBirth(e.target.value);
  const handleCountryChange = (e) => setCountry(e.target.value);
  const handleHeightChange = (e) => setHeight(e.target.value);
  const handleWeightChange = (e) => setWeight(e.target.value);
  const handleProfilePictureChange = (e) => setProfilePicture(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Profile Updated!');
    console.log('Profile Picture:', profilePicture);
  };

  return (
    <> 
    <div className="splitter">
      <Title />
      <Sidebar />
      <main>
      <div className="profile-container">
        <div className="profile-header">
          <img src="/images/profile.jpg" alt="Profile" className="profile-picture" />
        </div>
        <h1>Profile Page</h1>
        <form onSubmit={handleSubmit} className="login-form">
          <div className="personal-info">
            <h2>Données Personnelles</h2>
            <div class="user-details">
              <div class="input-box">
                <span class="details">First Name</span>
                <input type="text" placeholder="Enter your first name" />
              </div>
              <div class="input-box">
                <span class="details">Last Name</span>
                <input type="text" placeholder="Enter your last name" />
              </div>
            
            
              <div class="input-box">
                <span class="details">Height</span>
                <input type="text" placeholder="Enter your height in cm" />
              </div>
              <div class="input-box">
                <span class="details">Weight</span>
                <input type="text" placeholder="Enter your weight in kg" />
              </div>
            
            
              <div class="input-box">
                <span class="details">Date of birth</span>
                <input type="text" placeholder="Enter your date of birth" />
              </div>
              <div class="input-box">
                <span class="details">Counrty</span>
                <input type="text" placeholder="Enter your country" />
              </div>
            </div>
          </div>

          <div className="login-info">
            <h2>Informations de Connexion</h2>
            <div class="user-details">
              <div class="input-box">
                <span class="details">E-mail</span>
                <input type="text" placeholder="Enter your e-mail" />
              </div>
              <div class="input-box">
                <span class="details">Password</span>
                <input type="password" placeholder="Enter your password" />
              </div>
            </div>
          </div>

          <label>
            Profile Picture:
            <input type="file" accept="image/*" onChange={handleProfilePictureChange} />
          </label>
          <br />
          <button class="profile-btn" type="submit">Update Profile</button>
        </form>
      </div>
      </main>
      </div>
    </>
  );
}

export default Profile;
