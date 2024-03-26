import React from "react";
import styles from "./Events.module.css";

const StandardEvent = ({
  imageSrc,
  name,
  description,
  participantLimit,
  creator,
  eventAddress,
  eventDate
}) => {
  return (
    <div className={styles.PictureAdvices}>
      <div className={styles.BodyDetailsExercice}>
        <div className={styles.PicturesWorkout}>
          {imageSrc.map((image, index) => (
            <img key={index} src={image} alt={`Image ${index + 1}`} />
          ))}
        </div>

        <div className={styles.WorkoutAdvices}>
          <span>What do you need to know about the event</span>
          <p>Name: {name}</p>
          <p>Date: {eventDate}</p>
          <p>Location: {eventAddress}</p>
          <p>Participant Limit: {participantLimit}</p>
          <p>Creator: {creator}</p>
          <p>Description: {description}</p>
        </div>
      </div>
    </div>
  );
};

export default StandardEvent;
