const API_URL = "https://api.punkapi.com/v2/beers";

const getBeers = (searchTerm, isClassic, isHighAlcohol, page) => {
  const params = [];

  if (searchTerm.length > 0) {
    params.push(`beer_name=${searchTerm}`);
  }

  if (isClassic) {
    params.push("brewed_before=01-2010");
  }

  if (isHighAlcohol) {
    params.push("abv_gt=6");
  }

  params.push(`page=${page}`);

  const URL = `${API_URL}?${params.join("&")}`;

  return fetch(URL)
    .then((res) => res.json())
    .then((jsonResponse) => {
      return jsonResponse;
    });
};

export default getBeers;
