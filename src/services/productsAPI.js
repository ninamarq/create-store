export function getCategories() {
  const URL = "https://api.mercadolibre.com/sites/MLB/categories";
  return (
    fetch(URL)
      .then((response) => response.json())
      .then((data) => data)
  );
}

export function getProductsFromCategoryAndQuery({ id }, query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${id}&q=${query}`;
  return (
    fetch(URL)
      .then((response) => response.json())
      .then((data) => data.results)
  );
}

export function getProductsByQuery(query) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?q=${query}`;
  return (
    fetch(URL)
      .then((response) => response.json())
      .then((data) => data.results)
  );
}

export function getProductsByCategory(id) {
  const URL = `https://api.mercadolibre.com/sites/MLB/search?category=${id}`;
  return (
    fetch(URL)
      .then((response) => response.json())
      .then((data) => data.results)
  );
}

export function getAdressByZipCode(zip) {
  const URL = `https://api.pagar.me/1/zipcodes/${zip}`;
  return (
    fetch(URL)
    .then((response) => response.json())
    .then((data) => data)
  );
}
