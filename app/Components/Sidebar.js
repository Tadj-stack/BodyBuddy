'use client'

import { useState } from 'react';
import Link from 'next/link';
import { GiWhistle } from "react-icons/gi";
import { MdEmojiEvents } from "react-icons/md";

import { FaHome, FaDumbbell, FaCalendar, FaBullseye, FaSignOutAlt } from 'react-icons/fa';
import { useRouter ,usePathname} from 'next/navigation';
import styles from './Sidebar.module.css';
import { FaBowlFood } from "react-icons/fa6";
import { signOut } from 'next-auth/react';
import { useSession } from 'next-auth/react';
const Sidebar = () => {
  const [activeItem, setActiveItem] = useState('');
  const router = usePathname(); 
  const {data:session} = useSession();
  // Check if the current route is the profile page
 const isProfilePage = router === '/Profile';
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <button className={styles.menuBtn} id="menu-close">
          <i><FaHome size={30} /></i>
        </button>
        <img className={styles.img} src="/images/logo.png" alt="Logo" />
        <a href="#" className={styles.a}>TrackFit</a>
      </div>

      {/* Render the profile section only if not on the profile page */}
      {!isProfilePage && (
        <div className={styles.profile}>
          <Link href="/Profile">
            <img src="/images/profile.jpg" alt="Profile" className={styles.profileImage} />
          </Link>
          <div className={styles.data}>
          <div>
            <h3>{session?.user?.name}</h3>
          </div>
         
          <div className={styles.age}>Age 28 years</div>
          <hr className={styles.hr} />
          <div className={styles.details}>
            <div>
              <div className={styles.detailsLabel}>HEIGHT</div>
              <div className={styles.valeur}>181 cm</div>
            </div>
            <div className={styles.verticalLine}></div>
            <div>
              <div className={styles.detailsLabel}>WEIGHT</div>
              <div className={styles.valeur}>78 kg</div>
            </div>
          </div>
          </div>
        </div>
      )}
      <hr className={styles.hr} />

      <div className={styles.tabs}>
        <div id='item' className={`${styles.item} ${activeItem === 'overview' ? styles.active : ''}`}>
          <Link href="/Home">
            <i><FaHome size={30} /></i>
            <p>Overview</p>
          </Link>
        </div>
        <div id='item' className={`${styles.item} ${activeItem === 'workouts' ? styles.active : ''}`}>
          <Link href="/Workouts">
            <i><FaDumbbell size={30} /></i>
            <p>Workouts</p>
          </Link>
        </div>
        <div id='item' className={`${styles.item} ${activeItem === 'Meals' ? styles.active : ''}`}>
          <Link href="/Meals">
            <i><FaBowlFood  size={30} /></i>
            <p>Meals</p>
          </Link>
        </div>
       
        <div id='item' className={`${styles.item} ${activeItem === 'Coaches' ? styles.active : ''}`}>
          <Link href="/Coaches">
            <i><GiWhistle  size={30} /></i>
            <p>Coaches</p>
            
          </Link>
        </div>
        <div id='item' className={`${styles.item} ${activeItem === 'Events' ? styles.active : ''}`}>
          <Link href="/Events">
            <i><MdEmojiEvents size={30} /></i>
            <p>Events</p>
            
          </Link>
        </div>
        <div id='item' className={`${styles.item} ${activeItem === 'goals' ? styles.active : ''}`}>
          <Link href="#">
            <i><FaBullseye size={30} /></i>
            <p>Goals</p>
          </Link>
        </div>


       
      </div>

      <div className={styles.logoutButton}>
        <Link href="/">
          <button className={styles.menuBtn} onClick={()=>signOut()}>
            <i><FaSignOutAlt /></i>
            <p >Logout</p>
          </button>
        </Link>
      </div>
    </aside>
  );
};

export default Sidebar;
