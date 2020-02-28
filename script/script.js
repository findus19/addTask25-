window.addEventListener('DOMContentLoaded', () =>{
  'use strict';
  const name = document.querySelector('.heroe_name'),
    species = document.querySelector('.heroe_species'),
    gender = document.querySelector('.heroe_gender'),
    birthDay = document.querySelector('.birthDay'),
    deathDay = document.querySelector('.deathDay'),
    status = document.querySelector('.heroe_status'),
    actors = document.querySelector('.heroe_actors'),
    movies = document.querySelector('.heroe_movies'),
    photo = document.querySelector('.heroe_photo');

  let cardItem = document.querySelectorAll('.card_item'),
    content = document.querySelector('.card_content');


  fetch('./dbHeroes.json')
    .then(response => response.json())
    .then(data => practice(data))
    .catch(err => console.error(err));

  const practice = (response) => {
    response.forEach((item) => {
          cardItem.forEach((elem, index) => {
          elem[index] = document.createElement('div');
          elem[index].classList.add('card_item');
          cardItem[0].appendChild(elem[index]);
          photo.src = item.photo;
          name.textContent = item.name;
          species.textContent = item.species;
          gender.textContent = item.gender;
          birthDay.textContent = item.birthDay;
          deathDay.textContent = item.deathDay;
          status.textContent = item.status;
          actors.textContent = item.actors;
          movies.textContent = item.movies;
      })
    });

  }
})
