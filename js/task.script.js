'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };


const addForm = document.querySelector('form.add'),
      addInput = addForm.querySelector('.adding__input'),
      checkbox = addForm.querySelector('[type="checkbox"]'),
      movieList = document.querySelector('.promo__interactive-list');

addForm.addEventListener('submit', (event) => {
  event.preventDefault();

  const newFilm = addInput.value;
  const favorite = checkbox.checked;

  movieDB.movies.push(newFilm);
  movieDB.movies.sort();

  
  function createMovieList(films, parent) {
    parent.innerHTML = "";

    films.forEach((film, i) => {
        parent.innerHTML += `
          <li class="promo__interactive-item"> ${ i + 1 } ${film}  
            <div class="delete"></div>
          </li>
        `;
    });
  }

  createMovieList(movieDB.movies, movieList);



});    



});

  