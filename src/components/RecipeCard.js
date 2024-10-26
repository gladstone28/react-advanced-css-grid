import React from 'react';

const RecipeCard = ({ imgSrc, title, time, mins, description }) => {
  return (
    <div className="recipe">
      <img src={imgSrc} alt={title} />
      <h2>{title}</h2>
      <img
        src="https://content.codecademy.com/courses/learn-css-grid/lesson-ii/time.svg"
        className="time"
        alt="time icon"
      />
      <p className="mins">{mins} mins</p>
      <p className="description">{description}</p>
    </div>
  );
};

export default RecipeCard;
