import React from 'react';
import RecipeCard from './RecipeCard';

const Main = () => {
  const recipes = [
    {
      imgSrc: 'https://content.codecademy.com/courses/learn-css-grid/lesson-ii/image-1.png',
      title: 'CHOCOLATE MOUSSE',
      time: 'time.svg',
      mins: '20',
      description: 'This delicious chocolate mousse will delight dinner guests of all ages!'
    },
    {
      imgSrc: 'https://content.codecademy.com/courses/learn-css-grid/lesson-ii/image-2.png',
      title: 'SMOKED LAMB WITH RICE',
      time: 'time.svg',
      mins: '120',
      description: 'This comfort meal of smoked lamb and rice will quickly become a weekend favorite!'
    },
    {
      imgSrc: 'https://content.codecademy.com/courses/learn-css-grid/lesson-ii/image-5.png',
      title: 'GOAT CHEESE SALAD',
      time: 'time.svg',
      mins: '25',
      description: 'This salad includes kale, avocado, and farro to balance it out.'
    },
    {
      imgSrc: 'https://content.codecademy.com/courses/learn-css-grid/lesson-ii/image-4.png',
      title: 'CHICKEN SANDWICH',
      time: 'time.svg',
      mins: '45',
      description: 'This sandwich is packed with shredded cabbage, caramelized onions, and more.'
    },
    {
      imgSrc: 'https://content.codecademy.com/courses/learn-css-grid/lesson-ii/image-3.png',
      title: 'SWEET CHURROS',
      time: 'time.svg',
      mins: '90',
      description: 'This classic summer treat will remind you of childhood park outings.'
    },
    {
      imgSrc: 'https://content.codecademy.com/courses/learn-css-grid/lesson-ii/image-6.png',
      title: 'BERRY PARFAIT',
      time: 'time.svg',
      mins: '10',
      description: 'This parfait is great for breakfast, dessert, or post-workout.'
    }
  ];

  return (
    <main>
      {recipes.map((recipe, index) => (
        <RecipeCard key={index} {...recipe} />
      ))}
    </main>
  );
};

export default Main;
