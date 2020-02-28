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

  let cardItem = document.querySelectorAll('.card'),
    content = document.querySelectorAll('.card_content');


  fetch('./dbHeroes.json')
    .then(response => response.json())
    .then(data => practice(data))
    .catch(err => console.error(err));

  const practice = (response) => {
    response.forEach((item) => {
      
      createDiv(item);
      
        /* cardItem.forEach((elem, index) => {
            console.log(elem[index])
          elem[index] = document.createElement('div');
          elem[index].classList.add('card_item');
          cardItem[index].appendChild(elem[index]);
          photo.src = item.photo;
        })
        content.forEach((elem, index) => {
          elem[index] = document.createElement('div');
          elem[index].classList.add('card_content');
          content[index].appendChild(elem[index]);
          name.textContent = item.name;
          species.textContent = item.species;
          gender.textContent = item.genger;
          birthDay.textContent = item.birthDay;
          deathDay.textContent = item.deathDay;
          status.textContent = item.status;
          actors.textContent = item.actors;
          movies.textContent = item.movies; 
        }) */
    
    });

  };

  const createDiv = (item) => {
    cardItem.forEach((elem, index) => {
        console.log(elem[index])
        elem[index] = document.createElement('div');
        elem[index].classList.add('card_item');
        //cardItem[0].appendChild(elem[index]);
        cardItem[index].appendChild(elem[index]);
        let img = document.createElement('img');
        img.classList.add('heroe_photo');
        elem[index].appendChild(img);
        img.src = item.photo;
        let newContent = document.createElement('div');
        newContent.classList.add('card_content');
        elem[index].appendChild(newContent);

        let newName = document.createElement('div');
        newName.classList.add('heroe_name');
        newContent.appendChild(newName);
        newName.textContent = item.name;

        let newSpecies = document.createElement('div');
        newSpecies.classList.add('heroe_species');
        newContent.appendChild(newSpecies);
        newSpecies.textContent = item.species;

        let newGender = document.createElement('div');
        newGender.classList.add('heroe_gender');
        newContent.appendChild(newGender);
        newGender.textContent = item.genger;

        let birthDay = document.createElement('div');
        birthDay.classList.add('birthDay');
        newContent.appendChild(birthDay);
        birthDay.textContent = item.birthDay;

        let deathDay = document.createElement('div');
        deathDay.classList.add('deathDay');
        newContent.appendChild(deathDay);
        deathDay.textContent = item.deathDay;

        let newStatus = document.createElement('div');
        newStatus.classList.add('heroe_status');
        newContent.appendChild(newStatus);
        newStatus.textContent = item.status;

        let newActors = document.createElement('div');
        newActors.classList.add('heroe_actors');
        newContent.appendChild(newActors);
        newActors.textContent = item.actors;

        let newMovies= document.createElement('div');
        newMovies.classList.add('heroe_movies');
        newContent.appendChild(newMovies);
        newMovies.textContent = item.movies; 
    })
  
};

})
