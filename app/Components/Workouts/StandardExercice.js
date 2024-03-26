// StandardExercises.jsx
import React from "react";
import styles from "./Workouts.module.css";
// la format generale d un exercice 
const StandardExercises = ({  imageSrc, 
  name,
  description,
  workoutImages,
  reps,
  sets,
  targets ,
  level}) => {
  return (
    <div className={styles.PictureAdvices}>
      <div className={styles.BodyDetailsExercice}>
      <div className={styles.PicturesWorkout}>
  <img
  src={workoutImages}
  alt="image"
  onClick={() => setSelectedCoach(name)}

/>

        </div>

        <div className={styles.WorkoutAdvices}>
          <span>What do you need to know about me</span>
          <p>Name: {name}</p>
          <p>target: {targets}</p>
          <p>level: {level}</p>
          <p>reps: {reps}</p>
          <p>sets: {sets}</p>
          <p>Description: {description}</p>
          
          
        </div>
      </div>
    </div>
  );
};

export default StandardExercises;
