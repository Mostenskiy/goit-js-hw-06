const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const listE1 = document.querySelector("#ingredients");

const makeIngredientsList = options => {
  return options.map(option => {
    const liE1 = document.createElement("li");
    liE1.classList.add("item");
    liE1.textContent = option;

    return liE1;
  })
}

const elements = makeIngredientsList(ingredients);
console.log(elements);
listE1.append(...elements);