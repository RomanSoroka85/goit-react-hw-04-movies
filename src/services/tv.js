// const baseURL = "https://api.themoviedb.org/3/movie/";
const baseURL = "https://api.themoviedb.org/3";
const APY_KEY = "909fc48fa03ae2859591c18d4196af2e";
// const baseURL = 'https://api.tvmaze.com'
const fetchShowDetails = (showID) => {
  return fetch(`${baseURL}/movie/${showID}?api_key=${APY_KEY}`).then((res) =>
    res.json()
  );
  // .then((res) => console.log(res));
};

const fetchShowWithQuery = (SarchQuery) => {
  // `https://api.themoviedb.org/3/search/movie?api_key=909fc48fa03ae2859591c18d4196af2e&query=car&language=en-US&page=1&include_adult=false`
  return fetch(`${baseURL}/search/movie?query=${SarchQuery}&api_key=${APY_KEY}`)
    .then((res) => res.json())
    .then((entries) => entries.results);
  // .then((response) =>  response.results);
};

export default { fetchShowDetails, fetchShowWithQuery };
