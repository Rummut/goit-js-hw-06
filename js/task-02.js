const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ingredientsEl = document.querySelector('#ingredients')

for (const ingredient of ingredients) {
  const listItem = document.createElement('li')
  listItem.textContent = ingredient
  listItem.classList.add('item')
  ingredientsEl.append(listItem)
}

console.log(ingredientsEl)