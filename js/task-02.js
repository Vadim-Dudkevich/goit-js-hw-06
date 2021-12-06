const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsList = document.getElementById('ingredients');
console.log(ingredientsList);

const fragmentList = document.createDocumentFragment();

ingredients.forEach(ingredient => {
  const ingredientsListElement = document.createElement('li');
  ingredientsListElement.textContent = ingredient;
  ingredientsListElement.classList.add('item');
  fragmentList.append(ingredientsListElement);
});

ingredientsList.append(fragmentList);
console.log(fragmentList);

// ! пробую изменить стиль (=
ingredientsList.style.color = '#288BA8';

// const ingredientsListRef = document.getElementById('ingredients');
// const ingredientsEl = ingredients.map(ingredient => {
//   const ingredientsList = document.createElement('li');
//   ingredientsList.classList.add('item');
//   ingredientsList.textContent = ingredient;

//   return ingredientsList;
// });
// console.log(ingredientsEl);

// ingredientsListRef.append(...ingredientsEl);
