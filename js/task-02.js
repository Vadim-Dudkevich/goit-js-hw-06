const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsListRef = document.getElementById('ingredients');

const ingredientsEl = ingredients.map(ingredient => {
  const ingredientsList = document.createElement('li');
  ingredientsList.classList.add('item');
  ingredientsList.textContent = ingredient;

  return ingredientsList;
});
console.log(ingredientsEl);

ingredientsListRef.append(...ingredientsEl);

// const listEl = document.querySelector('ul');

// const firstItem = document.createElement('li');
// firstItem.classList.add('item');
// firstItem.textContent = 'Potatoes';
// // document.body.appendChild(firstItem);
// // console.log(firstItem);

// const secondItem = document.createElement('li');
// secondItem.classList.add('item');
// secondItem.textContent = 'Mushrooms';
// // document.body.appendChild(secondItem);
// // console.log(secondItem);

// const thirdItem = document.createElement('li');
// thirdItem.classList.add('item');
// thirdItem.textContent = 'Garlic';
// // document.body.appendChild(thirdItem);
// // console.log(thirdItem);

// const fourthItem = document.createElement('li');
// fourthItem.classList.add('item');
// fourthItem.textContent = 'Tomatos';
// // document.body.appendChild(fourthItem);
// // console.log(fourthItem);

// const fifthItem = document.createElement('li');
// fifthItem.classList.add('item');
// fifthItem.textContent = 'Herbs';
// // document.body.appendChild(fifthItem);
// // console.log(fifthItem);

// const sixthItem = document.createElement('li');
// sixthItem.classList.add('item');
// sixthItem.textContent = 'Condiments';
// // document.body.appendChild(sixthItem);
// // console.log(sixthItem);

// listEl.append(
//   fifthItem,
//   secondItem,
//   thirdItem,
//   fourthItem,
//   fifthItem,
//   sixthItem,
// );
