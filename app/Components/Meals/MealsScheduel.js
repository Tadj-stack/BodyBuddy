'use client'
import React, { useState } from "react";
import StandardMeals from "./StandardMeals";
import MainMeals from "./MainMeals";
import styles from "./Meals.module.css";
import MealsList from "./MealsList"

export const   MealsScheduel = () => {
  const [selectedMeal, setSelectedMeal] = useState(false);

  const handleGoBack = () => {
    setSelectedMeal(false);
  };
  const mealsData =  MealsList();
  

  let data = [];
  mealsData.forEach(element => {
    data.push({
      id:element._id,
      name:element.name,
      imageSrc:element.image,
    })
  });

  // Define an array of objects representing different Meals
  const Meals = mealsData;

  return (
    <div>
      <div className={styles.MainWorkoutSheduel}>
        {!selectedMeal && <MainMeals setSelectedMeal={setSelectedMeal} data={data} />}

        {/* Map over the array of Meals and render StandardMeals component for each */}
        {Meals.map(
          (Meal) =>
            selectedMeal === Meal.name && (
              <StandardMeals
                key={Meal.id}
                imageSrc={[...Meal.mealImages]}
                workoutAdvice={Meal.workoutAdvice}
              />
            )
        )}

        {/* Render a back button if an Meal is selected */}
        {selectedMeal && (
          <button className={styles.BackButton} onClick={handleGoBack}>
            {"< Back"}
          </button>
        )}

       
      </div>
    </div>
  );
};

export default MealsScheduel;
