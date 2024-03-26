// StandardMeals.jsx
import React from "react";
import styles from "./Coach.module.css";
// la format general d'un repas 
const StandardCoach = ({ 
  imageSrc, 
  name,
  description,
  services,
  email,
  contactDetails,
  location ,experience}) => {
  return (
    <div className={styles.PictureAdvices}>
      <div className={styles.BodyDetailsExercice}>
        <div className={styles.PicturesWorkout}>
          {imageSrc.map((imageSrc, index) => (
            <img key={index} src={imageSrc} alt={`Image ${index + 1}`} />
          ))}
        </div>

        <div className={styles.WorkoutAdvices}>
          <span>What do you need to know about me</span>
          <p>Name: {name}</p>
          <p>Location: {location}</p>
          <p>Number: {contactDetails}</p>
          <p>Email: {email}</p>
          <p>Services: {services}</p>
          <p>Experience: {experience}</p>

          <p>Description: {description}</p>
          
          
        </div>
    </div>
    </div>
  );
};

export default StandardCoach;
