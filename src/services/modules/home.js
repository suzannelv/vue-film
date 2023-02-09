import hyRequest  from '../request/index'
// import API_KEY from '@/services/request/config'


export function getPopularMovies() {
  return hyRequest.get({
    url:`/movie/popular?api_key=${API_KEY}&language=en-US&page=1`
  })
}