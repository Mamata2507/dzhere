import React, { useCallback, useEffect, useState, useReducer } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import Netinfo from "@react-native-community/netinfo";
import * as Location from "expo-location";
import { Contents, Header } from "../../components/check/CheckLayout";
import {
  loadClassList,
  loadClassTimeList,
  checkInsert,
  checkLeaveInsert,
  checkExitInsert,
  checkWifi,
  initCheckWifiInfo,
  checkLoadTodayAttendList,
  refreshCheckList,
  refreshResetCheckList,
  setName,
  outgoInsert,
  outgoEndInsert,
} from "../../modules/check/check";
import { AsyncStorage, Platform, Alert } from "react-native";
import CheckHeaderContainer from "./CheckHeaderContainer";
import { getUserName } from "../../lib/api/check/check";

// wifi 정보 저장용 state
let wifiInfo = {};
let tempAttendList = [];

const CheckContainer = () => {
  const [first, setFirt] = useState(true);
  const [btnState, setBtnState] = useState(0);
  const [btnClick, setBtnClick] = useState(false);
  const phone = useSelector(({ auth }) => auth.userInfo.userPhone);
  const temp_uphone = phone;
  const [endtime, setEndtime] = useState();
  const [btnDisable, setBtnDisable] = useState(false); // 버튼 토글용 상태
  const [outgoBtnDisable, setOutgoBtnDisable] = useState(false);
  const [outgoBtnDisable2, setOutgoBtnDisable2] = useState(false);

  const [exitBtnDisable, setExitBtnDisable] = useState(true);
  const dispatch = useDispatch();
  const [error, setError] = useState(null);
  const {
    Refresh,
    classTime,
    classList,
    result,
    checkWifiInfo,
    todayAttendList,
    classLoadError,
    classTimeLoadError,
    attendError,
    checkWifiError,
    todayAttendListError,
  } = useSelector(({ check }) => ({
    Refresh: check.Refresh,
    classTime: check.classTime,
    classList: check.classList,
    result: check.result,
    checkWifiInfo: check.checkWifiInfo,
    todayAttendList: check.todayAttendList,
    classLoadError: check.classLoadError,
    classTimeLoadError: check.classTimeLoadError,
    attendError: check.attendError,
    checkWifiError: check.checkWifiError,
    todayAttendListError: check.todayAttendListError,
  }));

  // 출석 시간 저장 state
  const [attendStartTime, setAttendStartTime] = useState({});
  const [attendEndTime, setAttendEndTime] = useState({});
  const [attendList, setAttendList] = useState([]);

  const startPermissionWifi = async () => {
    const u_phone = temp_uphone;
    if (Location.requestForegroundPermissionsAsync()) {
      try {
        await Netinfo.fetch("wifi").then((connectInfo) => {
          wifiInfo = {
            connect: connectInfo.isConnected,
            ssid: connectInfo.details.ssid,
            ipAddress: connectInfo.details.ipAddress,
            bssid: connectInfo.details.bssid,
            u_phone: u_phone,
          };
          // console.log(wifiInfo);
        });
      } catch (e) {
        console.log(e);
      }
    }
  };

  const startWifi = async () => {
    await startPermissionWifi();
    // wifi 연결 되어 있는지 확인
    if (wifiInfo && wifiInfo.connect) {
      console.log(wifiInfo);
      dispatch(checkWifi(wifiInfo));
      return true;
    } else {
      Platform.OS === "android"
        ? Alert.alert("wifi를 연결해 주세요.")
        : alert("wifi를 연결해 주세요.");
      return false;
    }
  };

  // 출석 버튼 이벤트
  const onPressStartTime = async () => {
    if (Platform.OS === "android") {
      setBtnClick(true);
      // setOutgoBtnDisable(true); // 외출 시작
      setBtnState(1);
      if (await startWifi()) {
        console.log("출석 버튼 click");
      } else {
        console.log("wifi connect error");
      }
    } else {
      alert("Web 환경에서는 출석/퇴실 이 불가능 합니다.");
    }
  };

  // 외출 버튼 이벤트
  const onPressOutgo = () => {
    const ID = Date.now();
    const u_phone = temp_uphone;
    const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");

    const newCheckObject4 = {
      id: ID + 3,
      time: nowTime,
      attendState: "외출",
    };

    if (Platform.OS === "android") {
      setAttendList((list) => list.concat(newCheckObject4));
      dispatch(outgoInsert({ u_phone, nowTime }));
      setOutgoBtnDisable(false);
      setOutgoBtnDisable2(true);
      setExitBtnDisable(true);
    } else {
      alert("Web 환경에서는 외출/외출종료 가 불가능 합니다.");
    }
  };

  // 외출 종료 버튼 이벤트
  const onPressOutgo2 = () => {
    const ID = Date.now();
    const u_phone = temp_uphone;
    const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");

    const newCheckObject5 = {
      id: ID + 4,
      time: nowTime,
      attendState: "외출종료",
    };

    if (Platform.OS === "android") {
      setAttendList((list) => list.concat(newCheckObject5));
      dispatch(outgoEndInsert({ u_phone, nowTime }));
      setOutgoBtnDisable(false);
      setOutgoBtnDisable2(false);
      setExitBtnDisable(false);
    } else {
      alert("Web 환경에서는 외출/외출종료 가 불가능 합니다.");
    }
  };

  // 조퇴 버튼 이벤트
  const onPressLeaveTime = async () => {
    if (Platform.OS === "android") {
      setBtnClick(true);
      setBtnState(2);
      // 출석을 한 경우에만 퇴실 가능
      if (await startWifi()) {
        console.log("조퇴 버튼 click");
      } else {
        console.log("wifi connect error");
      }
    } else {
      alert("Web 환경에서는 출석/퇴실 이 불가능 합니다.");
    }
  };

  // 퇴실 버튼 이벤트
  const onPressExitTime = async () => {
    if (Platform.OS === "android") {
      setBtnClick(true);
      setBtnState(3);
      // 출석을 한 경우에만 퇴실 가능
      if (await startWifi()) {
        console.log("퇴실 버튼 click");
      } else {
        console.log("wifi connect error");
      }
    } else {
      alert("Web 환경에서는 출석/퇴실 이 불가능 합니다.");
    }
  };

  async function getName() {
    const data = await getUserName(phone);
    // console.log("이름", data);
    dispatch(setName(data));
  }

  const insertAttend = () => {
    const attend_starttime = classTime && classTime[0].ct_attend_starttime;
    const u_phone = temp_uphone;
    const ID = Date.now();
    const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
    const newCheckObject = { id: ID, time: nowTime, attendState: "출석" };
    const newCheckObject2 = { id: ID + 1, time: nowTime, attendState: "조퇴" };
    const newCheckObject3 = { id: ID + 2, time: nowTime, attendState: "퇴실" };
    if (btnState === 1) {
      // 출석
      if (attendStartTime && moment().format("HH:mm:ss") > attend_starttime) {
        dispatch(checkInsert({ u_phone, nowTime }));
        console.log("asdlkfjsal;kdfjlasdjf");
        setAttendStartTime(nowTime);
        setAttendList(attendList.concat(newCheckObject));
        setBtnDisable(true);
        setExitBtnDisable(false);
        setOutgoBtnDisable(true); // 외출 시작
      } else {
        Platform.OS === "android"
          ? Alert.alert("출석 인증 시간이 아닙니다.")
          : alert("출석 인증 시간이 아닙니다.");
      }
    } else {
      if (attendStartTime) {
        console.log("퇴실");
        setAttendEndTime(nowTime);
        if (btnState === 2) {
          // 조퇴
          dispatch(checkLeaveInsert({ u_phone, nowTime }));
          setAttendList(attendList.concat(newCheckObject2));
          setOutgoBtnDisable(false);
          setOutgoBtnDisable2(false);
        } else {
          // 퇴실
          dispatch(checkExitInsert({ u_phone, nowTime }));
          setAttendList(attendList.concat(newCheckObject3));
        }

        setExitBtnDisable(true);
      }
    }
  };

  // useEffect(() => {
  //   console.log("------btnState--------");
  //   console.log(btnState);
  //   console.log("------btnState--------");
  // }, [btnState]);

  // 출석 리스트 받아 오기
  const loadCheckList = () => {
    const u_phone = temp_uphone;
    const today = moment().format("YYYY-MM-DD");
    dispatch(checkLoadTodayAttendList({ u_phone, today }));
  };

  useEffect(() => {
    const ID = Date.now();
    const nowTime = moment().format("YYYY-MM-DD HH:mm:ss");
    // console.log(todayAttendList);
    const newCheckObject = {
      id: ID,
      time: todayAttendList.a_attend_time,
      attendState: "출석",
    };
    const newCheckObject2 = {
      id: ID + 1,
      time: todayAttendList.a_exit_time,
      attendState: "조퇴",
    };
    const newCheckObject3 = {
      id: ID + 2,
      time: todayAttendList.a_exit_time,
      attendState: "퇴실",
    };
    const newCheckObject4 = {
      id: ID + 3,
      time: todayAttendList.a_start_outgo,
      attendState: "외출",
    };
    const newCheckObject5 = {
      id: ID + 4,
      time: todayAttendList.a_end_outgo,
      attendState: "외출종료",
    };

    setAttendList(() => []);
    console.log(todayAttendList);
    if (todayAttendList) {
      if (todayAttendList.a_attend_time) {
        setAttendEndTime(nowTime);
        setBtnDisable(true); // 출석
        setOutgoBtnDisable(true);
        setExitBtnDisable(false); // 퇴실
        setAttendList((list) => list.concat(newCheckObject));

        if (todayAttendList.a_start_outgo) {
          // 외출
          if (todayAttendList.a_outgo_status == 1) {
            setAttendList((list) => list.concat(newCheckObject4));
            setOutgoBtnDisable(false);
            setOutgoBtnDisable2(true);
            setExitBtnDisable(true);
          }
          if (todayAttendList.a_outgo_end_status == 1) {
            setAttendList((list) => list.concat(newCheckObject5));
            setOutgoBtnDisable(false);
            setOutgoBtnDisable2(false);
            setExitBtnDisable(false);
          }
        }

        if (todayAttendList.a_exit_time) {
          todayAttendList.a_leave == 1
            ? setAttendList((list) => list.concat(newCheckObject2))
            : setAttendList((list) => list.concat(newCheckObject3));
          setExitBtnDisable(true);
        }
      }
    }
    // console.log(attendList);
  }, [todayAttendList]);

  useEffect(() => {
    console.log(btnClick, first, checkWifiInfo);
    if (!first && btnClick && checkWifiInfo && checkWifiInfo === "ok") {
      first && setFirt(false);
      insertAttend();
    } else {
      setFirt(false);
      if (!first && btnClick) {
        Platform.OS === "android"
          ? Alert.alert("등록된 장소가 아닙니다.")
          : alert("등록된 장소가 아닙니다.");
      }
    }
    dispatch(initCheckWifiInfo());
    setBtnClick(false);
  }, [checkWifiInfo]);

  // 수업 목록 load
  useEffect(() => {
    // const u_phone = (Platform.OS==='android')? AsyncStorage.getItem('u_phone'):temp_uphone;
    const u_phone = temp_uphone;
    // 퇴실 인정 시간
    setEndtime("23:50:00");
    loadCheckList();
    // class list load
    dispatch(loadClassList(u_phone));
    getName();
    // class time load
    setTimeout(() => {
      u_phone && dispatch(loadClassTimeList(u_phone));
    }, 10);
  }, []);

  // Error
  useEffect(() => {
    if (classLoadError) {
      console.log("CLASS LOAD 오류 발생");
      setError(classLoadError);
      return;
    }
    if (classTimeLoadError) {
      console.log("CLASS TIME LOAD 오류 발생");
      setError(classTimeLoadError);
      return;
    }
    if (attendError) {
      console.log("ATTEND INSET 오류 발생");
      setError(attendError);
      return;
    }
    if (checkWifiError) {
      console.log("CHECK WIFI 오류 발생");
      setError(checkWifiError);
      return;
    }
    if (todayAttendListError) {
      console.log("TODAY ATEEND LOAD 오류 발생");
      setError(todayAttendListError);
      return;
    }
  }, [
    classLoadError,
    classTimeLoadError,
    attendError,
    checkWifiError,
    todayAttendListError,
  ]);

  useEffect(() => {
    if (error) {
      console.log(error);
      setError(null);
    }
  }, [error]);

  useEffect(() => {
    console.log("---리프레시---");
    if (Refresh) {
      console.log(222);
      phone && dispatch(loadClassTimeList(phone));
      dispatch(refreshResetCheckList());
      setFirt(true);
    }
  }, [Refresh]);

  return (
    <>
      <Contents
        onPressStartTime={onPressStartTime}
        onPressLeaveTime={onPressLeaveTime}
        onPressExitTime={onPressExitTime}
        classList={classList}
        classTime={classTime}
        endtime={endtime}
        attendList={attendList}
        btnDisable={btnDisable}
        exitBtnDisable={exitBtnDisable}
        outgoBtnDisable={outgoBtnDisable}
        outgoBtnDisable2={outgoBtnDisable2}
        onPressOutgo={onPressOutgo}
        onPressOutgo2={onPressOutgo2}
      />
    </>
  );
};

export default CheckContainer;
