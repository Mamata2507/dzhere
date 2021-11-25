import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClassListComponent from "../../../components/admin/class/ClassListComponent";
import { useNavigation } from "@react-navigation/core";
import { getAdmin, getClassList } from "../../../lib/api/class/classlist";
import { getClass, setAgency } from "../../../modules/admin/class/classlist";

const ClassListContainer = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [today, setToday] = useState("");
  const [agency, setAgencyInfo] = useState({});
  const [classList, setClassList] = useState(null);
  const classes = useSelector(({classes}) => classes.clist);
  const calculate_today = () => {
    const now = new Date();
    const todayYear = now.getFullYear() + "년 ";
    const todayMonth = now.getMonth() + 1 + "월 ";
    const todayDate = now.getDate() + "일 ";
    const week = ["일", "월", "화", "수", "목", "금", "토"];
    const todayDay = week[now.getDay()] + "요일";
    return todayYear + todayMonth + todayDate + todayDay;
  };

  async function adminInfoApi() {
    console.log('관리자 기관 불러오기');
    const data = await getAdmin({ u_phone: "hohoho" });
    console.log(data);
    setAgencyInfo(data);
    dispatch(setAgency(agency));
  }

  async function classListApi() {
    console.log('강의 리스트 불러오기');
    const data = await getClassList({ u_phone: "hohoho" });
    console.log(data);
    setClassList(data);
    dispatch(getClass(classList));
  }

  useEffect(() => {
    setToday(calculate_today());
    console.log('날짜 계산');
  }, [today]);

  useEffect(() => {
    adminInfoApi();
    classListApi();
    console.log(classes);
  }, []);
  
  return (
    <ClassListComponent
      today={today}
      agency={agency}
      classname={classList}
      navigation={navigation}
    />
  );
};

export default ClassListContainer;
