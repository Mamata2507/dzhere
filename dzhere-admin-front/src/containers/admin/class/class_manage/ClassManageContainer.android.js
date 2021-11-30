import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert } from "react-native";
import {
  getClasstimeList,
  setClassName,
  setClasstime,
  deleteClass,
  updateClasstime,
} from "../../../../lib/api/class/course";
import { getClasstime, IsVisible, setCheck, setValue } from "../../../../modules/admin/class/course";
import ClassManageAndroid from "../../../../components/admin/class/class_manage/ClassManageAndroid";
import { useIsFocused } from "@react-navigation/core";

const ClassManageAndroidContainer = () => {
  const dispatch = useDispatch();
  const [startDateShow, setStartDateShow] = useState(false);
  const [endDateShow, setEndDateShow] = useState(false);
  const [endTimeShow, setEndTimeShow] = useState(false);
  const [startTimeShow, setStartTimeShow] = useState(false);
  const [endCheckTimeShow, setEndCheckTimeShow] = useState(false);
  const [startCheckTimeShow, setStartCheckTimeShow] = useState(false);
  const [startBreakTimeShow, setStartBreakTimeShow] = useState(false);
  const [endBreakTimeShow, setEndBreakTimeShow] = useState(false);

  const [classtimeList, setClasstimeList] = useState(null);
  const [visible, setVisible] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [startTime, setStartTime] = useState("");
  const [endTime, setEndTime] = useState("");
  const [checkStartTime, setCheckStartTime] = useState("");
  const [checkEndTime, setCheckEndTime] = useState("");
  const [startBreakTime, setStartBreakTime] = useState("");
  const [endBreakTime, setEndBreakTime] = useState("");

  const [classname, setClassname] = useState("");
  const [oldClassname, setOldClassname] = useState("");

  const [update, setUpdate] = useState(false);

  const [oldStartDate, setOldStartDate] = useState("");
  const [oldEndDate, setOldEndDate] = useState("");
  const [oldStartTime, setOldStartTime] = useState("");
  const [oldEndTime, setOldEndTime] = useState("");
  const [oldCheckStartTime, setOldCheckStartTime] = useState("");
  const [oldCheckEndTime, setOldCheckEndTime] = useState("");
  const [oldStartBreakTime, setOldStartBreakTime] = useState("");
  const [oldEndBreakTime, setOldEndBreakTime] = useState("");

  const [days, setDays] = useState("");
  const [olddays, setOldDays] = useState("");
  const [monday, setMon] = useState(false);
  const [tuesday, setTus] = useState(false);
  const [wednesday, setWed] = useState(false);
  const [thursday, setThr] = useState(false);
  const [friday, setFri] = useState(false);
  const [saturday, setSat] = useState(false);
  const [sunday, setSun] = useState(false);

  const [oldmonday, setOldMon] = useState(false);
  const [oldtuesday, setOldTus] = useState(false);
  const [oldwednesday, setOldWed] = useState(false);
  const [oldthursday, setOldThr] = useState(false);
  const [oldfriday, setOldFri] = useState(false);
  const [oldsaturday, setOldSat] = useState(false);
  const [oldsunday, setOldSun] = useState(false);
  const [updateList, setUpdateList] = useState(null);
  const isFocused = useIsFocused();
  const agency = useSelector(({ classes }) => classes.agency);
  const classId = useSelector(({ classes }) => classes.classid);

  async function classtimeListApi() {
    console.log("강의 리스트 불러오기");
    const data = await getClasstimeList({ ag_idx: agency.ag_idx });
    setClasstimeList(data);
    dispatch(getClasstime(classtimeList));
  }

  async function classAddApi() {
    console.log("강의 등록하기");
    const data = await setClassName({
      ag_idx: agency.ag_idx,
      c_name: classname,
    });
    const newData = await setClasstime({
      day: days,
      start_date: startDate,
      end_date: endDate,
      start_time: startTime,
      end_time: endTime,
      check_start_time: checkStartTime,
      check_end_time: checkEndTime,
      break_start: startBreakTime,
      break_end: endBreakTime,
      c_idx: data,
      ag_idx: agency.ag_idx,
    });
    setClasstimeList(newData);
    dispatch(getClasstime(newData));
    // dispatch(setCheck(false));
  }

  async function classUpdateApi() {
    console.log("강의(classtime) 수정하기");
    const data = await updateClasstime({
      day: olddays,
      start_date: oldStartDate,
      end_date: oldEndDate,
      start_time: oldStartTime,
      end_time: oldEndTime,
      check_start_time: oldCheckStartTime,
      check_end_time: oldCheckEndTime,
      break_start: oldStartBreakTime,
      break_end: oldEndBreakTime,
      c_idx: classId,
      ag_idx: agency.ag_idx,
    });
    setClasstimeList(data);
    dispatch(getClasstime(data));
    // dispatch(setCheck(false));
    dispatch(IsVisible(true));
  }

  async function classtimeDeleteApi() {
    console.log("강의 삭제");
    const data = await deleteClass({ ag_idx: agency.ag_idx, c_idx: classId });
    setClasstimeList(data);
    dispatch(getClasstime(classtimeList));
    dispatch(setCheck(false));
  }

  useEffect(() => {
    classtimeListApi();
  }, []);

  useEffect(() => {
    if (isFocused) {
      classtimeListApi();
      dispatch(setCheck(false));
    }
  }, [isFocused]);

  useEffect(() => {
    setClassname("");
    setStartDate(null);
    setEndDate(null);
    setStartTime(null);
    setEndTime(null);
    setCheckStartTime(null);
    setCheckEndTime(null);
    setStartBreakTime(null);
    setEndBreakTime(null);
    // setOldClassname("");
    // setOldStartDate(null);
    // setOldEndDate(null);
    // setOldStartTime(null);
    // setOldEndTime(null);
    // setOldCheckStartTime(null);
    // setOldCheckEndTime(null);
    setMon(false);
    setTus(false);
    setWed(false);
    setThr(false);
    setFri(false);
    setSat(false);
    setSun(false);
    // setOldMon(false);
    // setOldTus(false);
    // setOldWed(false);
    // setOldThr(false);
    // setOldFri(false);
    // setOldSat(false);
    // setOldSun(false);
    // setOldDays("");
    setDays("");
  }, [visible]);

  // 페이지에서 등록 버튼 누를 때
  const onModalShow = () => {
    setVisible(true);
  };

  // 모달 오픈 이벤트

  const showStartDatepicker = () => {
    setStartDateShow(true);
  };
  const showEndDatepicker = () => {
    setEndDateShow(true);
  };
  const showStartTimepicker = () => {
    setStartTimeShow(true);
  };
  const showEndTimepicker = () => {
    setEndTimeShow(true);
  };
  const showStartChcekTimepicker = () => {
    setStartCheckTimeShow(true);
  };
  const showEndChcekTimepicker = () => {
    setEndCheckTimeShow(true);
  };

  const showStartBreakTimepicker = () => {
    setStartBreakTimeShow(true);
  };
  const showEndBreakTimepicker = () => {
    setEndBreakTimeShow(true);
  };

  // 모달 숨기기 이벤트
  const hideStartDatepicker = () => {
    setStartDateShow(false);
  };
  const hideEndDatepicker = () => {
    setEndDateShow(false);
  };
  const hideStartTimepicker = () => {
    setStartTimeShow(false);
  };
  const hideEndTimepicker = () => {
    setEndTimeShow(false);
  };

  const hideStartCheckTimepicker = () => {
    setStartCheckTimeShow(false);
  };
  const hideEndCheckTimepicker = () => {
    setEndCheckTimeShow(false);
  };

  const hideStartBreakTimepicker = () => {
    setStartBreakTimeShow(false);
  };
  const hideEndBreakTimepicker = () => {
    setEndBreakTimeShow(false);
  };

  // 값 Change 이벤트
  const onChangeStartDate = (date) => {
    const data =
      date.getFullYear().toString() +
      "-" +
      (date.getMonth() + 1).toString() +
      "-" +
      date.getDate().toString();
    hideStartDatepicker();
    setStartDate(data);
  };

  const onChangeEndDate = (date) => {
    const data =
      date.getFullYear().toString() +
      "-" +
      (date.getMonth() + 1).toString() +
      "-" +
      date.getDate().toString();
    hideEndDatepicker();
    setEndDate(data);
  };

  const onChangeStartTime = (time) => {
    const data =
      time.getHours().toString() + ":" + time.getMinutes().toString();
    hideStartTimepicker();
    setStartTime(data);
  };

  const onChangeEndTime = (time) => {
    const data =
      time.getHours().toString() + ":" + time.getMinutes().toString();
    hideEndTimepicker();
    setEndTime(data);
  };

  const onChangeStartCheckTime = (time) => {
    const data =
      time.getHours().toString() + ":" + time.getMinutes().toString();
    hideStartCheckTimepicker();
    setCheckStartTime(data);
  };

  const onChangeEndCheckTime = (time) => {
    const data =
      time.getHours().toString() + ":" + time.getMinutes().toString();
    hideEndCheckTimepicker();
    setCheckEndTime(data);
  };

  const onChangeStartBreakTime = (time) => {
    const data =
      time.getHours().toString() + ":" + time.getMinutes().toString();
    hideStartBreakTimepicker();
    setStartBreakTime(data);
  };

  const onChangeEndBreakTime = (time) => {
    const data =
      time.getHours().toString() + ":" + time.getMinutes().toString();
    hideEndBreakTimepicker();
    setEndBreakTime(data);
  };

  //----------- 수정 이벤트

  const onChangeOldText = (value) => {
    setOldClassname(value);
  };

  const onChangeOldStartDate = (date) => {
    const currentDate = date || oldStartDate;
    const data =
      currentDate.getFullYear().toString() +
      "-" +
      (currentDate.getMonth() + 1).toString() +
      "-" +
      currentDate.getDate().toString();
    setOldStartDate(data);
    hideStartDatepicker();
  };

  const onChangeOldEndDate = (date) => {
    const currentDate = date || oldEndDate;
    const data =
      currentDate.getFullYear().toString() +
      "-" +
      (currentDate.getMonth() + 1).toString() +
      "-" +
      currentDate.getDate().toString();
    setOldEndDate(data);
    hideEndDatepicker();
  };

  const onChangeOldStartTime = (time) => {
    const currentTime = time || oldStartTime;
    const data =
      currentTime.getHours().toString() +
      ":" +
      currentTime.getMinutes().toString();
    setOldStartTime(data);
    hideStartTimepicker();
  };

  const onChangeOldEndTime = (time) => {
    const currentTime = time || oldEndTime;
    const data =
      currentTime.getHours().toString() +
      ":" +
      currentTime.getMinutes().toString();
    setOldEndTime(data);
    hideEndTimepicker();
  };

  const onChangeOldStartCheckTime = (time) => {
    const currentTime = time || oldCheckStartTime;
    const data =
      currentTime.getHours().toString() +
      ":" +
      currentTime.getMinutes().toString();
    setOldCheckStartTime(data);
    hideStartCheckTimepicker();
  };

  const onChangeOldEndCheckTime = (time) => {
    const currentTime = time || oldCheckEndTime;
    const data =
      currentTime.getHours().toString() +
      ":" +
      currentTime.getMinutes().toString();
    setOldCheckEndTime(data);
    hideEndCheckTimepicker();
  };

  const onChangeOldStartBreakTime = (time) => {
    const currentTime = time || oldStartBreakTime;
    const data =
      currentTime.getHours().toString() +
      ":" +
      currentTime.getMinutes().toString();
    setOldStartBreakTime(data);
    hideStartBreakTimepicker();
  };

  const onChangeOldEndBreakTime = (time) => {
    const currentTime = time || oldEndBreakTime;
    const data =
      currentTime.getHours().toString() +
      ":" +
      currentTime.getMinutes().toString();
    setOldEndBreakTime(data);
    hideEndBreakTimepicker();
  };

  // Form 모달 숨기기 이벤트
  const hideModalShow = () => {
    setVisible(false);
    setUpdate(false);
    setOldMon(false);
    setOldTus(false);
    setOldWed(false);
    setOldThr(false);
    setOldFri(false);
    setOldSat(false);
    setOldSun(false);
    setOldDays("");
    setOldClassname("");
    setOldStartDate("");
    setOldEndDate("");
    setOldStartTime("");
    setOldEndTime("");
    setOldCheckStartTime("");
    setOldCheckEndTime("");
    setOldStartBreakTime("");
    setOldEndBreakTime("");
  };

  // 모달에서 등록 버튼 누를 때
  const onSubmit = () => {
    classAddApi();
    Alert.alert("강의 등록이 완료되었습니다.");
    setVisible(false);
  };

  const onChangeText = (value) => {
    setClassname(value);
  };

  // 페이지에서 삭제 버튼 누를 때
  const onDelete = useCallback(() => {
    if (classId === null) {
      Alert.alert("삭제할 강의를 선택해주세요.");
    } else {
      Alert.alert("강의가 삭제되었습니다.");
      classtimeDeleteApi();
    }
  });

  // 요일 선택 이벤트
  const onSelectMonDay = () => {
    if (!monday) {
      setDays(days.concat("월"));
      setMon(true);
    } else {
      setMon(false);
      setDays(days.replace("월", ""));
    }
  };

  const onSelectTusDay = () => {
    if (!tuesday) {
      setDays(days.concat("화"));
      setTus(true);
    } else {
      setTus(false);
      setDays(days.replace("화", ""));
    }
  };

  const onSelectWedDay = () => {
    if (!wednesday) {
      setWed(true);
      setDays(days.concat("수"));
    } else {
      setWed(false);
      setDays(days.replace("수", ""));
    }
  };

  const onSelectThrDay = () => {
    if (!thursday) {
      setThr(true);
      setDays(days.concat("목"));
    } else {
      setThr(false);
      setDays(days.replace("목", ""));
    }
  };

  const onSelectFriDay = () => {
    if (!friday) {
      setFri(true);
      setDays(days.concat("금"));
    } else {
      setFri(false);
      setDays(days.replace("금", ""));
    }
  };

  const onSelectSatDay = () => {
    if (!saturday) {
      setSat(true);
      setDays(days.concat("토"));
    } else {
      setSat(false);
      setDays(days.replace("토", ""));
    }
  };

  const onSelectSunDay = () => {
    if (!sunday) {
      setSun(true);
      setDays(days.concat("일"));
    } else {
      setSun(false);
      setDays(days.replace("일", ""));
    }
  };

  // 수정 이벤트
  const onSelectOldMonDay = () => {
    if (!oldmonday) {
      setOldDays(olddays.concat("월"));
      setOldMon(true);
    } else {
      setOldMon(false);
      setOldDays(olddays.replace("월", ""));
    }
  };

  const onSelectOldTusDay = () => {
    if (!oldtuesday) {
      setOldDays(olddays.concat("화"));
      setOldTus(true);
    } else {
      setOldTus(false);
      setOldDays(olddays.replace("화", ""));
    }
  };

  const onSelectOldWedDay = () => {
    if (!oldwednesday) {
      setOldWed(true);
      setOldDays(olddays.concat("수"));
    } else {
      setOldWed(false);
      setOldDays(olddays.replace("수", ""));
    }
  };

  const onSelectOldThrDay = () => {
    if (!oldthursday) {
      setOldThr(true);
      setOldDays(olddays.concat("목"));
    } else {
      setOldThr(false);
      setOldDays(olddays.replace("목", ""));
    }
  };

  const onSelectOldFriDay = () => {
    if (!oldfriday) {
      setOldFri(true);
      setOldDays(olddays.concat("금"));
    } else {
      setOldFri(false);
      setOldDays(olddays.replace("금", ""));
    }
  };

  const onSelectOldSatDay = () => {
    if (!oldsaturday) {
      setOldSat(true);
      setOldDays(olddays.concat("토"));
    } else {
      setOldSat(false);
      setOldDays(olddays.replace("토", ""));
    }
  };

  const onSelectOldSunDay = () => {
    if (!oldsunday) {
      setOldSun(true);
      setOldDays(olddays.concat("일"));
    } else {
      setOldSun(false);
      setOldDays(olddays.replace("일", ""));
    }
  };

  const onUpdate = () => {
    if (classId === null) {
      Alert.alert("수정할 강의를 선택해주세요.");
    } else {
      setUpdate(true);
      setVisible(true);
      const updateItem = classtimeList.filter((item) => item.c_idx == classId);
      setOldClassname(updateItem[0].c_name);
      setOldStartDate(updateItem[0].ct_start_date);
      setOldEndDate(updateItem[0].ct_end_date);
      const time1 = updateItem[0].ct_start_time.split(":");
      setOldStartTime(parseInt(time1[0]).toString() + ":" + parseInt(time1[1]).toString());
      const time2 = updateItem[0].ct_end_time.split(":");
      setOldEndTime(parseInt(time2[0]).toString() + ":" + parseInt(time2[1]).toString());
      const time3 = updateItem[0].ct_attend_starttime.split(":");
      setOldCheckStartTime(parseInt(time3[0]).toString() + ":" + parseInt(time3[1]).toString());
      const time4 = updateItem[0].ct_attend_endtime.split(":");
      setOldCheckEndTime(parseInt(time4[0]).toString() + ":" + parseInt(time4[1]).toString());
      const time5 = updateItem[0].ct_break_start.split(":");
      setOldStartBreakTime(parseInt(time5[0]).toString() + ":" + parseInt(time5[1]).toString());
      const time6 = updateItem[0].ct_break_end.split(":");
      setOldEndBreakTime(parseInt(time6[0]).toString() + ":" + parseInt(time6[1]).toString());
      setOldDays(updateItem[0].ct_day);
      updateItem[0].ct_day.indexOf("월") !== -1 && setOldMon(true);
      updateItem[0].ct_day.indexOf("화") !== -1 && setOldTus(true);
      updateItem[0].ct_day.indexOf("수") !== -1 && setOldWed(true);
      updateItem[0].ct_day.indexOf("목") !== -1 && setOldThr(true);
      updateItem[0].ct_day.indexOf("금") !== -1 && setOldFri(true);
      updateItem[0].ct_day.indexOf("토") !== -1 && setOldSat(true);
      updateItem[0].ct_day.indexOf("일") !== -1 && setOldSun(true);
    }
  };

  const onUpdateSubmit = () => {
    classUpdateApi();
    Alert.alert("수정이 완료되었습니다.");
    dispatch(IsVisible(false));
    setVisible(false);
    dispatch(setCheck(false));
    dispatch(setValue(0));
  };

  return (
    <ClassManageAndroid
      agency={agency.ag_name}
      classList={classtimeList}
      onModalShow={onModalShow}
      visible={visible}
      hideModalShow={hideModalShow}
      onSubmit={onSubmit}
      onChangeText={onChangeText}
      onChangeOldText={onChangeOldText}
      onSelectMonDay={onSelectMonDay}
      onSelectTusDay={onSelectTusDay}
      onSelectWedDay={onSelectWedDay}
      onSelectThrDay={onSelectThrDay}
      onSelectFriDay={onSelectFriDay}
      onSelectSatDay={onSelectSatDay}
      onSelectSunDay={onSelectSunDay}
      onSelectOldMonDay={onSelectOldMonDay}
      onSelectOldTusDay={onSelectOldTusDay}
      onSelectOldWedDay={onSelectOldWedDay}
      onSelectOldThrDay={onSelectOldThrDay}
      onSelectOldFriDay={onSelectOldFriDay}
      onSelectOldSatDay={onSelectOldSatDay}
      onSelectOldSunDay={onSelectOldSunDay}
      monday={monday}
      tuesday={tuesday}
      wednesday={wednesday}
      thursday={thursday}
      friday={friday}
      saturday={saturday}
      sunday={sunday}
      oldmonday={oldmonday}
      oldtuesday={oldtuesday}
      oldwednesday={oldwednesday}
      oldthursday={oldthursday}
      oldfriday={oldfriday}
      oldsaturday={oldsaturday}
      oldsunday={oldsunday}
      classname={classname}
      oldClassname={oldClassname}
      onChangeStartDate={onChangeStartDate}
      onChangeEndDate={onChangeEndDate}
      onChangeStartTime={onChangeStartTime}
      onChangeEndTime={onChangeEndTime}
      onChangeStartCheckTime={onChangeStartCheckTime}
      onChangeEndCheckTime={onChangeEndCheckTime}
      onChangeStartBreakTime={onChangeStartBreakTime}
      onChangeEndBreakTime={onChangeEndBreakTime}
      onChangeOldStartDate={onChangeOldStartDate}
      onChangeOldEndDate={onChangeOldEndDate}
      onChangeOldStartTime={onChangeOldStartTime}
      onChangeOldEndTime={onChangeOldEndTime}
      onChangeOldStartCheckTime={onChangeOldStartCheckTime}
      onChangeOldEndCheckTime={onChangeOldEndCheckTime}
      onChangeOldStartBreakTime={onChangeOldStartBreakTime}
      onChangeOldEndBreakTime={onChangeOldEndBreakTime}
      startDate={startDate}
      endDate={endDate}
      startTime={startTime}
      endTime={endTime}
      checkstartTime={checkStartTime}
      checkendTime={checkEndTime}
      startBreakTime={startBreakTime}
      endBreakTime={endBreakTime}
      oldStartDate={oldStartDate}
      oldEndDate={oldEndDate}
      oldStartTime={oldStartTime}
      oldEndTime={oldEndTime}
      oldCheckStartTime={oldCheckStartTime}
      oldCheckEndTime={oldCheckEndTime}
      oldStartBreakTime={oldStartBreakTime}
      oldEndBreakTime={oldEndBreakTime}
      onDelete={onDelete}
      onUpdate={onUpdate}
      update={update}
      onUpdateSubmit={onUpdateSubmit}
      showStartDatepicker={showStartDatepicker}
      showEndDatepicker={showEndDatepicker}
      showStartTimepicker={showStartTimepicker}
      showEndTimepicker={showEndTimepicker}
      showStartChcekTimepicker={showStartChcekTimepicker}
      showEndChcekTimepicker={showEndChcekTimepicker}
      showStartBreakTimepicker={showStartBreakTimepicker}
      showEndBreakTimepicker={showEndBreakTimepicker}
      startDateShow={startDateShow}
      endDateShow={endDateShow}
      startTimeShow={startTimeShow}
      endTimeShow={endTimeShow}
      startCheckTimeShow={startCheckTimeShow}
      endCheckTimeShow={endCheckTimeShow}
      startBreakTimeShow={startBreakTimeShow}
      endBreakTimeShow={endBreakTimeShow}
      hideStartDatepicker={hideStartDatepicker}
      hideEndDatepicker={hideEndDatepicker}
      hideStartTimepicker={hideStartTimepicker}
      hideEndTimepicker={hideEndTimepicker}
      hideStartCheckTimepicker={hideStartCheckTimepicker}
      hideEndCheckTimepicker={hideEndCheckTimepicker}
      hideStartBreakTimepicker={hideStartBreakTimepicker}
      hideEndBreakTimepicker={hideEndBreakTimepicker}
    />
  );
};

export default ClassManageAndroidContainer;
