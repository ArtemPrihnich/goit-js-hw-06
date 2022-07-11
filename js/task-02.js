const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const list = document.querySelector('#ingredients')

function createLiEl() {
  const test = [];
  ingredients.map(ingredient => {
    const liCreate = document.createElement('li')
    
    liCreate.textContent = `${ingredient}`;
  
    liCreate.classList.add('item')
    
    return test.push(liCreate)
  })
  list.append(...test);
}

createLiEl();
