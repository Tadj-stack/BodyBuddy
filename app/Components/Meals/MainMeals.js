import React from "react";
import styles from "./Meals.module.css";
import Button from "../Button";

const MainMeals = ({ setSelectedMeal ,data}) => {
  // Define an array of objects representing each exercise
  const Meals = data;
  return (
    <div className={styles.Container}>
      <div className={styles.picCont}>
                {/* Utiliser une carte pour afficher les exercices. Nous allons changer cela en un composant avec des props comme paramètres lorsque nous programmerons le backend. */}

        {Meals.map((Meal, index) => (
          <div key={index} className={styles.repCont}>
            <img
              src={Meal.imageSrc}
              alt="image"
              onClick={() => setSelectedMeal(Meal.name)}
            />
            <div className={styles.DetailsRepCont}>
              <span className={styles.exerciceNumb}>{Meals.name}</span>
              <p className={styles.workoutsInfo}>
                <span>Meal {index + 1}</span>
              </p>
              <Button />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default MainMeals;
