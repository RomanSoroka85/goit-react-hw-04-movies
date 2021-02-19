const baseURL = "https://api.themoviedb.org/3";
const APY_KEY = "909fc48fa03ae2859591c18d4196af2e";

const fetchShowTrending = () => {
  return fetch(`${baseURL}/trending/all/day?api_key=${APY_KEY}`)
    .then((res) => res.json())
    .then((entries) => entries.results);
};

const movieShowDetails = (movie_id) => {
  return fetch(`${baseURL}/movie/${movie_id}?api_key=${APY_KEY}`)
    .then((res) => res.json())
    .then((entries) => {
      return entries;
    });
};

const fetchCast = (movie_id) => {
  return fetch(`${baseURL}/movie/${movie_id}/credits?api_key=${APY_KEY}`)
    .then((res) => res.json())
    .then((entries) => {
      return entries;
    });
};
const fetchReviews = (movie_id) => {
  return fetch(`${baseURL}/movie/${movie_id}/reviews?api_key=${APY_KEY}`)
    .then((res) => res.json())
    .then((data) => {
      return data.results;
    });
};

const searchMovies = (query) => {
  return fetch(`${baseURL}/search/movie?query=${query}&api_key=${APY_KEY}`)
    .then((res) => res.json())
    .then((entries) => {
      return entries;
    });
};
export default {
  fetchReviews,
  fetchShowTrending,
  movieShowDetails,
  fetchCast,
  searchMovies,
};
