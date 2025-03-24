
import axios from "axios";

//#####··········域名管理··········#####//
const server = axios.create({
//   baseURL: "http://localhost:8081",
  time: 10000,
});

const URL = process.env.NODE_ENV === 'development' ? process.env.VUE_APP_BASE_URL : process.env.VUE_APP_BASE_URL
console.log(URL);

//#####·········配置默认请求··········#####//
//####········GET请求········####//
export function getReq(url, params) {
  return server({ method: "GET", url, params });
}