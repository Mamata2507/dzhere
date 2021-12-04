import client from "../client";
import qs from "qs";
const teacherUrl = "/m/teacher";

export const getAgencyList = async (u_phone) => {
  const queryString = qs.stringify({ u_phone });
  return await client.get(`${teacherUrl}/agency/load?${queryString}`);
};

export const getLessonList = async (u_phone) => {
  const queryString = qs.stringify({ u_phone });
  return await client.get(`${teacherUrl}/lesson/load?${queryString}`);
};

export const getTeacherSearch = async (item) => {
  const {
    agency,
    lesson,
    name,
    u_phone,
    sDate,
    eDate,
    attend_state,
    attend_date_state,
  } = item;

  return await client.post(`${teacherUrl}/search`, {
    ag_idx: agency.ag_idx,
    c_inx: agency.c_inx,
    c_name: lesson.c_name,
    ag_name: agency.ag_name,
    u_name: name,
    u_phone: u_phone,
    start_date: sDate,
    end_date: eDate,
    attend_state: attend_state,
    attend_date_state: attend_date_state,
  });
};

export const updateTeacherAttend = async (item) => {
  // console.log("-=-=-=-=-=-=-=-=-=-=");
  // console.log(item.a_today_date);
  return await client.post(`${teacherUrl}/update/attend`, {
    a_absent: item.a_abscent,
    a_attend_time: item.a_today_date + " " + item.a_attend_time,
    a_exit_time: item.a_today_date + " " + item.a_exit_time,
    a_idx: item.a_idx,
    a_late_status: item.a_late_status,
    a_leave: item.a_leave,
    a_not_exit: item.a_not_exit,
    a_today_date: item.a_today_date,
    ag_idx: item.ag_idx,
    ag_name: item.ag_name,
    attend_date_state: item.attend_date_state,
    attend_state: item.attend_state,
    c_inx: item.c_inx,
    c_name: item.c_name,
    end_date: item.end_date,
    start_date: item.start_date,
    u_name: item.u_name,
    u_phone: item.u_phone,
  });
};
