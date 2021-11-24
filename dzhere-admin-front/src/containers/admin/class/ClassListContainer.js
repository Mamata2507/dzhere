import React, { useEffect, useState } from "react";
import ClassListComponent from "../../../components/admin/class/ClassListComponent";
import { Dimensions } from "react-native";

const ClassListContainer = () => {
  const [today, setToday] = useState("");
  const calculate_today = () => {
    const now = new Date();
    const todayYear = now.getFullYear() + "년 ";
    const todayMonth = now.getMonth() + 1 + "월 ";
    const todayDate = now.getDate() + "일 ";
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const todayDay = week[now.getDay()] + "요일";
    return todayYear + todayMonth + todayDate + todayDay;
  };

  const ag_name = "비트 교육원"
  useEffect(() => {
    setToday(calculate_today);
  }, [today]);

  return <ClassListComponent today={today} agency={ag_name}/>;
};

export default ClassListContainer;
