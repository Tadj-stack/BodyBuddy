// StandardMeals.jsx
import React from "react";
import styles from "./Meals.module.css";
    
const StandardMeals =  ({ imageSrc, workoutAdvice }) => {
    
  return (
    <div className={styles.PictureAdvices}>
      <div className={styles.BodyDetailsExercice}>
        <div className={styles.PicturesWorkout}>
          {imageSrc.map((imageSrc, index) => (
            <img key={index} src={imageSrc} alt={`Image ${index + 1}`} />
          ))}
        </div>

        <div
          className={styles.WorkoutAdvices}
          dangerouslySetInnerHTML={{ __html: workoutAdvice }}
        />
      </div>
    </div>
  );
};

export default StandardMeals;
