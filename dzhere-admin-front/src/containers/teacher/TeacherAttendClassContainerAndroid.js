import React, { useCallback, useEffect, useState } from "react";
import TeacherAttendClass from "../../components/teacher/TeacherAttendClass"; //"../../components/teacher/TeacherAttendClass";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import {
  getAgencyList,
  getLessonList,
  getSearchAttend,
  resetList,
  updateTeacherAttend,
  setLateStatus,
  setAbscentStatus,
  setLeaveStatus,
  setNotExitStatus,
  setCheck,
} from "../../modules/user/teacherClassAttend";
import { Alert } from "react-native";

const TeacherAttendClassContainerAndroid = () => {
  const nowDate = moment().format("YY-MM-DD");
  // const [newStartDate, setStartNewDate] = useState(moment().format("YY-MM-DD"));
  const dispatch = useDispatch();
  const [btnFlag, setBtnFlag] = useState(0);
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
  const [isModalDatePickerVisible, setModalDatePickerVisibility] =
    useState(false);
  const [modalDate, setModalDate] = useState(moment().format("YYYY-MM-DD"));

  const [isModalTimePickerVisible, setModalTimePickerVisibility] =
    useState(false);
  const [modalStartTime, setModalStartTime] = useState(
    moment().format("HH:mm:ss")
  );
  const [modalEndTime, setModalEndTime] = useState(moment().format("HH:mm:ss"));
  const [modalTimePickerFlag, setModalTimePickerFlag] = useState(false);
  const [userState, setUserState] = useState();

  const [selectLesson, setSelectLesson] = useState();
  const [selectAgency, setSelectAgency] = useState();
  const [startSearchDate, setStartSearchDate] = useState(
    moment().format("YY-MM-DD")
  );
  const [endSearchDate, setEndSearchDate] = useState(
    moment().format("YY-MM-DD")
  );
  const [btn1, setbtn1] = useState(false);
  const [btn2, setbtn2] = useState(false);
  const [btn3, setbtn3] = useState(false);
  const [btn4, setbtn4] = useState(false);

  const [selectAttendState, setSelectAttendState] = useState(0);
  const [selectDateState, setSelectDateState] = useState(0);
  const [btnDisable, setBtnDisable] = useState(true);
  const [teacherName, setTeacherName] = useState("");

  const [updateBtn, setUpdateBtn] = useState(false); // visible

  const phone = useSelector(({ auth }) => auth.userInfo.userPhone);
  // const phone = "01088630406";
  const { lessonList, agencyList, searchList, uid, checkid, updateResult, clist } =
    useSelector(({ teacher, classes }) => ({
      agencyList: teacher.agencyList,
      lessonList: teacher.lessonList,
      searchList: teacher.searchList,
      uid: teacher.uid,
      checkid: teacher.checkid,
      updateResult: teacher.updateResult,
      agencyListError: teacher.agencyListError,
      lessonListError: teacher.lessonListError,
      searchListError: teacher.searchListError,
      clist: classes.clist,
    }));

  // load
  useEffect(() => {
    setModalDatePickerVisibility(false);
    dispatch(setCheck(false));
    dispatch(getAgencyList(phone));
    dispatch(getLessonList(phone));
  }, []);

  useEffect(() => {
    setbtn1(uid && uid.a_late_status ? true : false); //??????
    setbtn2(uid && uid.a_abscent ? true : false); //??????
    setbtn3(uid && uid.a_leave ? true : false); //??????
    setbtn4(uid && uid.a_not_exit ? true : false); //?????????
    setModalDate(uid.a_today_date);
    setModalStartTime(uid.a_attend_time && uid.a_attend_time.substring(11, 19));
    setModalEndTime(uid.a_exit_time && uid.a_exit_time.substring(11, 19));
    // console.log(uid);
  }, [uid]);

  useEffect(() => {
    setSelectLesson(() => lessonList[0]);
    setSelectAgency(() => agencyList[0]);
  }, [lessonList, agencyList]);

  useEffect(() => {
    // console.log(btnFlag);
  }, [btnFlag]);

  const showDatePickerSbtn = () => {
    setBtnFlag(0);
    setDatePickerVisibility(true);
  };
  const showDatePickerEbtn = () => {
    setBtnFlag(1);
    setDatePickerVisibility(true);
  };
  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  const startDate = (date) => {
    setDatePickerVisibility(true);
    let temp = date.toString();
    let current_datetime = new Date(temp);
    current_datetime =
      current_datetime.getFullYear() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getDate();
    setStartSearchDate(() => current_datetime);
    hideDatePicker();
  };
  const endDate = (date) => {
    setDatePickerVisibility(true);
    let temp = date.toString();
    let current_datetime = new Date(temp);
    current_datetime =
      current_datetime.getFullYear() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getDate();
    setEndSearchDate(() => current_datetime);
    hideDatePicker();
  };

  // modal date picker on/off
  const showModalDatePickerBtn = () => {
    setModalDatePickerVisibility(true);
  };
  const hideModalDatePickerBtn = () => {
    setModalDatePickerVisibility(false);
  };
  const modalSetDate = (date) => {
    // console.log('123123123123');
    setModalDatePickerVisibility(true);
    let temp = date.toString();
    let current_datetime = new Date(temp);
    current_datetime =
      current_datetime.getFullYear() +
      "-" +
      (current_datetime.getMonth() + 1) +
      "-" +
      current_datetime.getDate();
    setModalDate(() => current_datetime);
    hideModalDatePickerBtn();
  };
  // modal time picker on / off
  const showModalTimePickerBtn1 = () => {
    setModalTimePickerFlag(() => true);
    setModalTimePickerVisibility(true);
  };
  const showModalTimePickerBtn2 = () => {
    setModalTimePickerFlag(() => false);
    setModalTimePickerVisibility(true);
  };
  const hideModalTimePickerBtn = () => {
    setModalTimePickerVisibility(false);
  };
  const setStartTime = (date) => {
    setModalTimePickerVisibility(true);
    let temp = date.toString();
    let current_datetime = new Date(temp);
    current_datetime =
      current_datetime.getHours() +
      ":" +
      current_datetime.getMinutes() +
      ":" +
      "00";
    setModalStartTime(() => current_datetime);
    hideModalTimePickerBtn();
  };
  const setEndTime = (date) => {
    setModalTimePickerVisibility(true);
    let temp = date.toString();
    let current_datetime = new Date(temp);
    current_datetime =
      current_datetime.getHours() +
      ":" +
      current_datetime.getMinutes() +
      ":" +
      current_datetime.getSeconds();
    setModalEndTime(() => current_datetime);
    hideModalTimePickerBtn();
  };

  const handleSetTeacherName = (text) => {
    setTeacherName(text);
  };

  const handleUpdateBtn = async () => {
    dispatch(resetList());
    uid.a_today_date = modalDate;
    uid.a_attend_time = modalStartTime;
    uid.a_exit_time = modalEndTime;
    dispatch(updateTeacherAttend(uid));
    // if(updateResult>0){
    setUpdateBtn(false);
    alert("?????? ??????");

    const searchObject = {
      agency: selectAgency,
      lesson: selectLesson,
      name: teacherName,
      u_phone: phone,
      sDate: startSearchDate,
      eDate: endSearchDate,
      attend_state: selectAttendState,
      attend_date_state: selectDateState,
      u_auth: 2,
    };
    // checkId = false;
    dispatch(getSearchAttend(searchObject));
    dispatch(setCheck(false));
    // }else{
    //   alert('?????? ??????')
    // }
  };

  // ??????,??????,??????,??????,?????????
  const handleSetAttend = useCallback((e) => {
    console.log(e);
    setSelectAttendState(() => e);
  });
  // ??????,??????
  const handleSetDate = useCallback((e) => {
    console.log(e);
    btnDisable ? setBtnDisable(() => false) : setBtnDisable(() => true);
    setSelectDateState(() => e);
  });

  const handleSetSelectLesson = (e) => {
    console.log(e);
    setSelectLesson(e);
  };

  // modal ?????????
  const handleVisibleUpdateBtn = () => {
    if (checkid) {
      updateBtn ? setUpdateBtn(false) : setUpdateBtn(true);
    } else {
      Alert.alert("????????? ????????? ?????????");
    }
  };
  const handleVisibleBtn = () => {
    setUpdateBtn(false);
  };

  const searchHandler = () => {
    dispatch(resetList);
    if (teacherName === "") {
      Alert.alert("???????????? ?????? ?????????");
      return;
    }
    const searchObject = {
      agency: selectAgency,
      lesson: selectLesson,
      name: teacherName,
      u_phone: phone,
      sDate: startSearchDate,
      eDate: endSearchDate,
      attend_state: selectAttendState,
      attend_date_state: selectDateState,
      u_auth: 2,
    };
    dispatch(getSearchAttend(searchObject));
  };

  const handleEventBtn01 = () => {
    setbtn1(!btn1);
    uid.a_late_status = uid.a_late_status && uid.a_late_status > 0 ? 0 : 1;
    dispatch(setLateStatus());
  };
  const handleEventBtn02 = () => {
    setbtn2(!btn2);
    uid.a_abscent = uid.a_abscent && uid.a_abscent > 0 ? 0 : 1;
    dispatch(setAbscentStatus());
  };
  const handleEventBtn03 = () => {
    setbtn3(!btn3);
    uid.a_leave = uid.a_leave && uid.a_leave > 0 ? 0 : 1;
    dispatch(setLeaveStatus());
  };
  const handleEventBtn04 = () => {
    setbtn4(!btn4);
    uid.a_not_exit = uid.a_not_exit && uid.a_not_exit > 0 ? 0 : 1;
    dispatch(setNotExitStatus());
  };

  return (
    <>
      <TeacherAttendClass
        clist={clist}
        btnFlag={btnFlag}
        startSearchDate={startSearchDate}
        endSearchDate={endSearchDate}
        showDatePickerSbtn={showDatePickerSbtn}
        showDatePickerEbtn={showDatePickerEbtn}
        isDatePickerVisible={isDatePickerVisible}
        startDate={startDate}
        endDate={endDate}
        hideDatePicker={hideDatePicker}
        searchHandler={searchHandler}
        handleSetAttend={handleSetAttend}
        handleSetDate={handleSetDate}
        lessonList={lessonList}
        agencyList={agencyList}
        searchList={searchList}
        handleSetTeacherName={handleSetTeacherName}
        btnDisable={btnDisable}
        handleVisibleUpdateBtn={handleVisibleUpdateBtn}
        handleVisibleBtn={handleVisibleBtn}
        handleUpdateBtn={handleUpdateBtn}
        handleSetSelectLesson={handleSetSelectLesson}
        // modal
        isModalDatePickerVisible={isModalDatePickerVisible}
        showModalDatePickerBtn={showModalDatePickerBtn}
        hideModalDatePickerBtn={hideModalDatePickerBtn}
        modalSetDate={modalSetDate}
        modalDate={modalDate}
        isModalTimePickerVisible={isModalTimePickerVisible}
        showModalTimePickerBtn1={showModalTimePickerBtn1}
        showModalTimePickerBtn2={showModalTimePickerBtn2}
        hideModalTimePickerBtn={hideModalTimePickerBtn}
        setStartTime={setStartTime}
        setEndTime={setEndTime}
        modalStartTime={modalStartTime}
        modalEndTime={modalEndTime}
        modalTimePickerFlag={modalTimePickerFlag}
        updateBtn={updateBtn}
        btn1={btn1}
        btn2={btn2}
        btn3={btn3}
        btn4={btn4}
        handleEventBtn01={handleEventBtn01}
        handleEventBtn02={handleEventBtn02}
        handleEventBtn03={handleEventBtn03}
        handleEventBtn04={handleEventBtn04}
        teacherName={teacherName}
      />
    </>
  );
};
export default TeacherAttendClassContainerAndroid;
