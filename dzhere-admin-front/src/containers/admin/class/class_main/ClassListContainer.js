import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import ClassListComponent from "../../../../components/admin/class/class_main/ClassListComponent";
import { useIsFocused, useNavigation } from "@react-navigation/core";
import { getAdmin, getClassList } from "../../../../lib/api/class/course";
import { getClass, setAgency } from "../../../../modules/admin/class/course";

const ClassListContainer = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [today, setToday] = useState("");
  const [agency, setAgencyInfo] = useState({});
  const [classList, setClassList] = useState(null);
  const clist = useSelector(({ classes }) => classes.clist);
  const isFocused = useIsFocused();
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
    console.log("렌더링) 관리자 정보 및 기관 불러오기");
    const data = await getAdmin({ u_phone: "hohoho" });
    // console.log(data);
    setAgencyInfo(data);
    dispatch(setAgency(data));
  }

  async function classListApi() {
    console.log("렌더링) 강의 리스트 불러오기");
    const data = await getClassList({ u_phone: "hohoho" });
    // console.log(data);
    setClassList(data);
    dispatch(getClass(data));
  }

  useEffect(() => {
    setToday(calculate_today());
    console.log("렌더링) 날짜 계산");
  }, [today]);

  useEffect(() => {
    adminInfoApi();
    classListApi();
  }, []);

  useEffect(()=>{
    if(isFocused){
      classListApi();
    }
  },[isFocused])

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
