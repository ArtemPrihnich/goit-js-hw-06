const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

const createLiEl = () => {
  ingredients.map(ingredient => {
    const liCreate = document.createElement('li')
    
    liCreate.textContent = `${ingredient}`;
  
    liCreate.classList.add('item')

    list.append(liCreate);
  })
}

createLiEl();