const API = 'https://api.themoviedb.org/3/trending/movie/day?language=es'

export async function getTrendingMovies () {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_AUTHORITAZION
    }
  };

  try {
    const response = await fetch(API, options);
    const data = await response.json();
    const movies = data.results
    return movies
  } catch (e) {
    throw new Error(e.message)
  }

}