import ffRequest  from '../request';
import { API_KEY } from '../request/config';

// effectuer une requête HTTP GET à l'API pour récupérer les infos sur les tvs populaires. 
export function getPopularTv(currentPage) {
  return ffRequest.get({
    url:`/tv/popular?api_key=${API_KEY}&language=en-US&page=${currentPage}`
  })
}

// effectuer une requête HTTP GET à l'API pour récupérer les infos sur les tvs récentes. 
export function getLatestTv(currentPageLatest) {
  return ffRequest.get({
    url:`/tv/on_the_air?api_key=${API_KEY}&language=en-US&page=${currentPageLatest}`
  })
}

// effectuer une requête HTTP GET à l'API pour récupérer les infos sur les top tv. 
export function getTopTv(currentPageTop) {
  return ffRequest.get({
    url:`/tv/top_rated?api_key=${API_KEY}&language=en-US&page=${currentPageTop}`
  })
}