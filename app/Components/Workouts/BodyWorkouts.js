import React from "react";
import styles from "./Workouts.module.css";
import { ProgressInformation } from "./ProgressInformation";
import { WorkoutSchedule } from "./WorkoutSchedule";
export const BodyWorkouts = () => {
  return (
    // <div className={styles.workoutsPageContainer}>
    <div className={styles.workoutContainer}>
        {/* les component de base de la page **/}
      <ProgressInformation />
      <WorkoutSchedule />
    </div>
  );
};
