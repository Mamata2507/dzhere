import axios from "axios";

const client = axios.create();

// client.defaults.baseURL = "http://192.168.0.4:8080/api/user/";
client.defaults.baseURL = "http://ec2-3-133-198-159.us-east-2.compute.amazonaws.com:8080/api/user/";
client.defaults.timeout = 7000;

/*
  글로벌 설정 예시:
  
  // API 주소를 다른 곳으로 사용함
  client.defaults.baseURL = 'https://external-api-server.com/' 
  // 헤더 설정
  client.defaults.headers.common['Authorization'] = 'Bearer a1b2c3d4';
  // 인터셉터 설정
  axios.intercepter.response.use(\
    response => {
      // 요청 성공 시 특정 작업 수행
      return response;
    }, 
    error => {
      // 요청 실패 시 특정 작업 수행
      return Promise.reject(error);
    }
  })  
*/

export default client;
