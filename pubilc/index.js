const ulElement = document.querySelector('.ul-container');

fetch('http://localhost:3000/data')
  .then((res) => res.json())
  .then((foods) => {
    console.log(foods);
    foods.forEach((food) => {
      const liElement = document.createElement('li');
      liElement.textContent = `${food.name} - ${food.cuisine} - $${food.price}`;
      ulElement.appendChild(liElement);
    });
  })
  ;
