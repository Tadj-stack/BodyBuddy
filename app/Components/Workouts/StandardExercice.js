// StandardExercises.jsx
import React from "react";
import styles from "./Workouts.module.css";
// la format generale d un exercice 
const StandardExercises = ({ imageSrc, workoutAdvice }) => {
  return (
    <div className={styles.PictureAdvices}>
      <div className={styles.BodyDetailsExercice}>
        <div className={styles.PicturesWorkout}>
          <img src={imageSrc} alt="Exercise" />
        </div>

        <div
          className={styles.WorkoutAdvices}
          dangerouslySetInnerHTML={{ __html: workoutAdvice }}
        />
      </div>
    </div>
  );
};

export default StandardExercises;
