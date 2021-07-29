
import request from './index'

export function getApi() {
  return request({
    url: "url",
    method: "get",
    params: query
  });
}


export function postApi(data) {
  return request({
    url: "url",
    method: "get",
    params: data
  });
}