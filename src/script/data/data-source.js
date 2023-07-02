class DataSource {
  static searchFood(keyword) {
    return fetch(`https://themealdb.com/api/json/v1/1/search.php?s=${keyword}`)
        .then(response => {
          return response.json();
        })
        .then(responseJson => {
          if (responseJson.meals) {
            return Promise.resolve(responseJson.meals);
          } else {
            return Promise.reject(`${keyword}`);
          }
        });
  }
}
 
export default DataSource;