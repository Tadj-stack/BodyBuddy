import React from "react";
import styles from "./Meals.module.css";

import { MealsScheduel } from "./MealsScheduel";
import { ProgressMeals } from "./ProgressMeals";
export const HealthyMeals = () => {
  return (
    // <div className={styles.workoutsPageContainer}>
    <div className={styles.workoutContainer}>
  {/* les component de base de la page **/}
      <ProgressMeals />
      <MealsScheduel />
    </div>
  );
};
