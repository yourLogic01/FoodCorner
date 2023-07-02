import '../component/search-bar.js';
import DataSource from '../data/data-source.js';

const main = () => {
  const searchElement = document.querySelector('search-bar');
  const foodListElement = document.querySelector('#foodList');

  const onButtonSearchClicked = () => {
    DataSource.searchFood(searchElement.value)
        .then(renderResult)
        .catch(fallbackResult);
  };

  const renderResult = results => {
    foodListElement.innerHTML = '';
    results.forEach ( foods => {
      const {idMeal, strMeal, strArea , strYoutube,strMealThumb,strCategory,} = foods;

      const foodElement = document.createElement('div');
      foodElement.setAttribute('class', 'food');

      foodElement.innerHTML = `
      <div class="foodInfo">
        <p class="id-food" hidden>#${idMeal}</p>
        <img class="thumb" src="${strMealThumb}" alt="thumbnail">
        <h3>${strMeal}</h3><br>
        <h5>Kategori : ${strCategory}</h5>
        <h5>Asal : ${strArea}</h5>
        <p>Tutorial : <a class="btn btn-danger btn-sm" href="${strYoutube}" target="_blank">Youtube</a></p>
      </div>
    `;

      foodListElement.appendChild(foodElement);
    });
  };

  const fallbackResult = message => {
      foodListElement.innerHTML = '';
      foodListElement.innerHTML += `<p class="rejectMessage">Maaf makanan "${message}" yang anda cari tidak ditemukan</p>`;
  };

  searchElement.clickEvent = onButtonSearchClicked;
};

export default main;