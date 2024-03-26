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
  
  let data = [];
  workoutsdata.forEach(element => {
    data.push({
      id:element._id,
      name:element.name,
      imageSrc:element.image,
      workoutImages:element.workoutImages,
      reps:element.reps,
      sets:element.sets,
      targets:element.targets,
      level:element.level,
      description:element.description,
    })
  });
  const exercises = workoutsdata;
console.log(data)
  return (
    <div>
      <div className={styles.MainWorkoutSheduel}>
        {!selectedExercise && (
          <MainWorkout setSelectedExercise={setSelectedExercise}
          data={data} />
        )}

        {/* Map pour chauqe element de la table */}
        {exercises.map(
          (exercise) =>
            selectedExercise === exercise.name && (
              <StandardExercises
                key={exercise.id}
                workoutImages={exercise.workoutImages}
                workoutAdvice={exercise.workoutAdvice}
                reps={exercise.reps}
                sets={exercise.sets}
                name={exercise.name}
                targets={exercise.targets}
                level={exercise.level}
                description={exercise.description}
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
