import { movies } from "../modules/data.js";

const ulOfMovies = document.querySelector(".promo__interactive-list");
const ulOfGenres = document.querySelector(".genres");
const genres = [...new Set(movies.map((el) => el.Genre))];

function renderLiOfMovies(arr, genre) {
  arr.forEach((elems) => {
    let h3 = document.createElement("h3");
    h3.innerText = elems.Title;
    if (elems.Genre === genre) {
      ulOfMovies.append(h3);
    }
    if (!genre || genre === 'Movies') {
      ulOfMovies.append(h3);
    }
  });
}

renderLiOfMovies(movies);

genres.forEach((str) => {
  let li = document.createElement("li");
  li.innerText = str;
  li.classList.add("promo__menu-item");
  ulOfGenres.append(li);
});

let arr = ulOfGenres.children;
let arr2 = [...arr];

arr2.forEach((el) => {
  el.onclick = () => {
    arr2.forEach((li) => li.classList.remove("promo__menu-item_active"));
    el.classList.add("promo__menu-item_active");
    ulOfMovies.innerHTML = "";
    renderLiOfMovies(movies, el.innerText);
  };
});
