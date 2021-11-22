import api from "../index";
// import { useSelector } from "react-redux";
// 외부장소 추가
export const addWifi = (data) => {
  const accessToken = data.token;
  console.log("외부장소 추가 API 호출", accessToken);
  api
    .post(
      "/api/external/add",
      {
        e_ssid: data.ssid,
        e_bssid: data.bssid,
        e_name: data.location,
        u_phone: data.u_phone,
      },
      {
        headers: { Authorization: "Bearer " + accessToken },
        withCredentials: true,
        crossDomain: true,
        credentials: "include",
      }
    )
    .then(function (response) {
      // console.log(response);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 외부장소 삭제
export const delWifi = (data) => {
  const accessToken = data.token;
  console.log("외부장소 삭제 API 호출", accessToken);
  api
    .post(
      "/api/external/delete",
      {
        e_idx: data.id,
        u_phone: data.u_phone,
      },
      {
        headers: { Authorization: "Bearer " + accessToken },
        withCredentials: true,
        crossDomain: true,
        credentials: "include",
      }
    )
    .then(function (response) {
      // console.log(response.data.data);
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 외부장소 리스트
export const allWifi = (data) => {
  const accessToken = data.token;
  console.log("외부장소 리스트 API 호출");
  return api
    .post(
      "/api/external/select",
      {
        u_phone: data.u_phone,
      },
      {
        headers: { Authorization: "Bearer " + accessToken },
        withCredentials: true,
        crossDomain: true,
        credentials: "include",
      }
    )
    .then((response) => () => {
      // console.log("data", response.data.data);
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};
