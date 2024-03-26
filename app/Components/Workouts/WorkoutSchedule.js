'use client'
import React, { useState } from "react";
import StandardExercises from "./StandardExercice";
import MainWorkout from "./MainWorkout";
import styles from "./Workouts.module.css";
import WorkoutsList from "./WorkoutsList";

export const WorkoutSchedule = () => {
  const [selectedExercise, setSelectedExercise] = useState(false);

  const handleGoBack = () => {
    setSelectedExercise(false);
  };

  const workoutsdata=WorkoutsList();

    // Return null or handle loading state until events data is fetched
    if (workoutsdata.length === 0) {
      return <div>Loading...</div>;
    }
    const exercises = workoutsdata;
  let data = [];
  workoutsdata.forEach(element => {
    data.push({
      id:element._id,
      name:element.name,
      imageSrc:element.image,
    })
  });
console.log(data)
  return (
    <div>
      <div className={styles.MainWorkoutSheduel}>
        {!selectedExercise && (
          <MainWorkout setSelectedExercise={setSelectedExercise}
          data={workoutsdata} />
        )}

        {/* Map pour chauqe element de la table */}
        {exercises.map(
          (exercise) =>
            selectedExercise === exercise.name && (
              <StandardExercises
                key={exercise.id}
                imageSrc={exercise.imageSrc}
                workoutAdvice={exercise.workoutAdvice}
              />
            )
        )}

        {selectedExercise && (
          <button className={styles.BackButton} onClick={handleGoBack}>
            {"< Back"}
          </button>
        )}
      </div>
    </div>
  );
};

export default WorkoutSchedule;
