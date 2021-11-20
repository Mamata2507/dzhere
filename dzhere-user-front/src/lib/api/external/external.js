import api from "../index";

// 외부장소 추가
export const addWifi = (data) => {
  console.log("외부장소 추가 API 호출");
  api
    .post("/api/external/add", {
      e_ssid: data.ssid,
      e_bssid: data.bssid,
      e_name: data.location,
      u_phone: data.u_phone,
    })
    .then(function (response) {
      console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 외부장소 삭제
export const delWifi = (data) => {
  console.log("외부장소 삭제 API 호출");
  api
    .post("/api/external/delete", {
      e_idx: data.idx,
      u_phone: data.u_phone,
    })
    .then(function (response) {
      console.log(response.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 외부장소 리스트
export const allWifi = (data) => {
  console.log("외부장소 리스트 API 호출");
  return api
    .post("/api/external/select", { u_phone: data.u_phone })
    .then(response => () => {
      console.log("data", response.data.data);
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
