import hyRequest from '../request/index'

export function getDetailInfos(id) {
  return hyRequest.get({
    url:"/detail/infos",
    params: {
     id
    }
  })
}