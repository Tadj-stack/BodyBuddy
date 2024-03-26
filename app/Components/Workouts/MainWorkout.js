import React from "react";
import styles from "./Workouts.module.css";

const MainWorkout = ({ setSelectedExercise,data }) => {
  // Define an array of objects representing each exercise
  const exercises =  data;
  console.log(data)

  return (
    <div className={styles.Container}>
      <div className={styles.picCont}>
        {/* Utiliser une carte pour afficher les exercices. Nous allons changer cela en un composant avec des props comme paramètres lorsque nous programmerons le backend. */}
        {exercises.map((exercise, index) => (
          <div
            key={index}
            className={styles.repCont}
            onClick={() => setSelectedExercise(exercise.name)
            }
          
          >
           
            <img src={exercise.imageSrc} alt="image" />
            <div className={styles.DetailsRepCont}>
              <span className={styles.exerciceNumb}>{exercise.name}</span>
              <p className={styles.workoutsInfo}>
                <span>{exercise.reps}</span> <span> {exercise.reps}</span>
              </p>
              <button className={styles.button}>Check</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MainWorkout;
