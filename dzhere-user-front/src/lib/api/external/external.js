import client from "../index";
// 외부장소 추가
export const addWifi = (data) => {
  const accessToken = data.token;
  console.log("외부장소 추가 API 호출", accessToken);
  return client
    .post(
      "/api/external/add",
      {
        e_ssid: data.ssid,
        e_bssid: data.bssid,
        e_name: data.location,
        u_phone: data.u_phone,
      },
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    )
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 외부장소 삭제
export const delWifi = (data) => {
  const accessToken = data.token;
  console.log("외부장소 삭제 API 호출", accessToken);
  return client
    .post(
      "/api/external/delete",
      {
        e_idx: data.id,
        u_phone: data.u_phone,
      },
      {
        headers: {
          Authorization: "Bearer " + accessToken,
        },
      }
    )
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};


// 외부장소 리스트
export const allWifi = (phone, token) => {
  // const accessToken = data.token;
  console.log("외부장소 리스트 API 호출", token);
  const data = client
    .post(
      "/api/external/select",
      {
        u_phone: phone,
      },
      {
        headers: {
          Authorization: "Bearer " + token,
        },
      }
    )
    .then(function (response) {
      console.log("받아오는 response", response.data.data, response.data.data.length);
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
    return data;
};
