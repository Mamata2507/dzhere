import client from "../index";

// 관리자 기관의 강의 리스트 가져오기
export const getClassList = (data) => {
  // const accessToken = data.token;
  console.log("강의 목록 리스트 API 호출");
  return client
    .post(
      "/api/class/list",
      {
        u_phone: data.u_phone,
      },
    //   {
    //     headers: {
    //       Authorization: "Bearer " + accessToken,
    //     },
    //   }
    )
    .then(function (response) {
      console.log(response.data.data);
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 관리자(기관) 정보 가져오기
export const getAdmin = (data) => {
  // const accessToken = data.token;
  console.log("관리자(기관) 정보 API 호출");
  return client
    .post(
      "/api/admin/agency",
      {
        u_phone: data.u_phone,
      },
    //   {
    //     headers: {
    //       Authorization: "Bearer " + accessToken,
    //     },
    //   }
    )
    .then(function (response) {
      console.log(response.data.data);
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 강의별 수강생 리스트 가져오기
export const getStudentList = (data) => {
  // const accessToken = data.token;
  // console.log("강의별 수강생 리스트 API 호출", accessToken);
  return client
    .post(
      "/api/class/student/list",
      {
        c_idx: data.c_idx,
        ag_idx: data.ag_idx,
      },
    //   {
    //     headers: {
    //       Authorization: "Bearer " + accessToken,
    //     },
    //   }
    )
    .then(function (response) {
      console.log(response.data.data);
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};


// // 외부장소 리스트
// export const allWifi = (phone, token) => {
//   // const accessToken = data.token;
//   console.log("외부장소 리스트 API 호출", token);
//   const data = client
//     .post(
//       "/api/external/select",
//       {
//         u_phone: phone,
//       },
//       {
//         headers: {
//           Authorization: "Bearer " + token,
//         },
//       }
//     )
//     .then(function (response) {
//       console.log("받아오는 response", response.data.data, response.data.data.length);
//       return response.data.data;
//     })
//     .catch(function (error) {
//       console.log(error);
//     });
//     return data;
// };