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


export async function getSearchMovies (search) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_AUTHORITAZION
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${search}&language=es&page=1`, options);
    const data = await response.json();
    const movies = data.results
    return movies
  } catch (e) {
    throw new Error(e.message)
  }
}


export async function getMoviesByPopularity (popularity) {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: import.meta.env.VITE_AUTHORITAZION
    }
  };

  try {
    const response = await fetch(`https://api.themoviedb.org/3/discover/movie?language=es&page=1&sort_by=${popularity}`, options);
    const data = await response.json();
    const movies = data.results
    return movies
  } catch (e) {
    throw new Error(e.message)
  }
}