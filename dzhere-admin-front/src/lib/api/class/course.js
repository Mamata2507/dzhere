import client from "../index";

//----------------------- 강의 리스트 뷰 (select)

// 관리자 기관의 강의(class) 리스트 가져오기
export const getClassList = (data) => {
  console.log("강의 목록(class) 리스트 API 호출");
  return client
    .post("/api/class/list", {
      u_phone: data.u_phone,
    })
    .then(function (response) {
      console.log(response.data.data);
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 관리자 기관의 강의 리스트(classtime) 가져오기
export const getClasstimeList = (data) => {
  console.log("강의 목록(classtime) 리스트 API 호출");
  return client
    .post("/api/class/time/list", {
      ag_idx: data.ag_idx,
    })
    .then(function (response) {
      console.log(response.data.data);
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 관리자 기관의 강의 장소 리스트(classlocation) 가져오기
export const getClasslocationList = (data) => {
  console.log("강의 장소 목록(classlocation) 리스트 API 호출");
  return client
    .post("/api/class/location/list", {
      ag_idx: data.ag_idx,
    })
    .then(function (response) {
      console.log(response.data.data);
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 관리자 기관의 강의 외부 장소 리스트(external) 가져오기
export const getExternalList = (data) => {
  console.log("강의 외부 장소 목록(external) 리스트 API 호출");
  return client
    .post("/api/class/external/list", {
      c_idx: data.c_idx,
      u_name: data.u_name,
      ag_idx: data.ag_idx,
    })
    .then(function (response) {
      console.log(response.data.data);
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 관리자 정보 및 기관 가져오기
export const getAdmin = (data) => {
  console.log("관리자 정보 및 기관 API 호출");
  return client
    .post("/api/admin/agency", {
      u_phone: data.u_phone,
    })
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
  console.log("강의별 수강생 리스트 API 호출");
  return client
    .post("/api/class/student/list", {
      c_idx: data.c_idx,
      ag_idx: data.ag_idx,
    })
    .then(function (response) {
      console.log(response.data.data);
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

//----------------------- 강의 등록 (insert/update)

// 강의명 등록하기
export const setClassName = (data) => {
  console.log("강의명 등록 API 호출");
  return client
    .post("/api/class/add", {
      ag_idx: data.ag_idx,
      c_name: data.c_name,
    },
    {
      headers:{
          "Access-Control-Allow-Origin": "*",
      }
    }
   )
    .then(function (response) {
      console.log(response.data);
      return response.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};

// 강의 등록하기
export const setClasstime = (data) => {
  console.log("강의(classtime) 등록 API 호출");
  return client
    .post("/api/class/time/add", {
      ct_day: data.day,
      ct_start_time: data.start_time,
      ct_end_time: data.end_time,
      ct_attend_starttime: data.check_start_time,
      ct_attend_endtime: data.check_end_time,
      ct_start_date: data.start_date,
      ct_end_date: data.end_date,
      c_idx: data.c_idx,
      ag_idx: data.ag_idx,
      // c_name: data.c_name,
    })
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};


// 강의 장소 (update) 등록하기
export const setClassLocAdd = (data) => {
  console.log("강의(classlocation) 등록 API 호출");
  return client
    .post("/api/class/location/add", {
      c_idx: data.c_idx,
      cl_name: data.cl_name,
      i_name: data.i_name,
      i_ssid: data.i_ssid,
      i_bssid: data.i_bssid,
      ag_idx: data.ag_idx,
      // c_name: data.c_name,
    })
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};


// 강의 수정하기
export const updateClass = (data) => {
  console.log("강의(classtime) 수정 API 호출");
  return client
    .post("/api/class/time/update", {
      ct_day: data.day,
      ct_start_time: data.start_time,
      ct_end_time: data.end_time,
      ct_attend_starttime: data.check_start_time,
      ct_attend_endtime: data.check_end_time,
      ct_start_date: data.start_date,
      ct_end_date: data.end_date,
      c_idx: data.c_idx,
      ag_idx: data.ag_idx,
      // c_name: data.c_name,
    })
    .then(function (response) {
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};


// 강의 삭제하기
export const deleteClass = (data) => {
  console.log("강의 삭제 API 호출");
  return client
    .post("/api/class/delete", {
      ag_idx: data.ag_idx,
      c_idx: data.c_idx,
    },
    {
      headers:{
          "Access-Control-Allow-Origin": "*",
      }
    }
   )
    .then(function (response) {
      console.log(response.data.data);
      return response.data.data;
    })
    .catch(function (error) {
      console.log(error);
    });
};