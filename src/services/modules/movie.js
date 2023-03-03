import ffRequest  from '../request';
import { API_KEY } from '../request/config';

// effectuer une requête HTTP GET à l'API pour récupérer les infos sur les films populaires. 
export function getPopularMovies(currentPage) {
  return ffRequest.get({
    url:`/movie/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
  })
}

// effectuer une requête HTTP GET à l'API pour récupérer les infos sur les films similaires. 
export function getSimilarMovies(movieId) {
  return ffRequest.get({
    url:`movie/${movieId}/similar?api_key=${API_KEY}&language=en-US&page=1`
  })
}

// effectuer une requête HTTP GET à l'API pour récupérer les infos sur les films à venir. 
export function getComingMovies(currentPageComing) {
  return ffRequest.get({
    url:`movie/upcoming?api_key=${API_KEY}&language=en-US&page=${currentPageComing}`
  })
}


// effectuer une requête HTTP GET à l'API pour récupérer les infos sur les top films. 
export function getTopMovies(currentPageTop) {
  return ffRequest.get({
    url:`movie/top_rated?api_key=${API_KEY}&language=en-US&page=${currentPageTop}`
  })
}
