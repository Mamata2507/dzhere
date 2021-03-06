import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getClasstimeList,
  setClassName,
  setClasstime,
  deleteClass,
  updateClasstime,
} from "../../../lib/api/class/course";
import {
  getClasstime,
  setSelectClass,
  IsVisible,
  setCheck,
  setValue,
} from "../../../modules/class/course";
import ClassManageWeb from "../../../components/class/class_manage/ClassManageWeb";
import { useIsFocused } from "@react-navigation/core";

const ClassManageWebContainer = () => {
  const dispatch = useDispatch();
  const [classtimeList, setClasstimeList] = useState(null);
  const [classSelect, setClassSelect] = useState(null);
  const [visible, setVisible] = useState(false);
  const [click, setClick] = useState(null);
  const [search, setOnSearch] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [checkStartTime, setCheckStartTime] = useState(null);
  const [checkEndTime, setCheckEndTime] = useState(null);
  const [breakStartTime, setBreakStartTime] = useState(null);
  const [breakEndTime, setBreakEndTime] = useState(null);
  const [classname, setClassname] = useState("");
  const [oldClassname, setOldClassname] = useState("");
  const [oldStartDate, setOldStartDate] = useState(null);
  const [oldEndDate, setOldEndDate] = useState(null);
  const [oldStartTime, setOldStartTime] = useState(null);
  const [oldEndTime, setOldEndTime] = useState(null);
  const [oldCheckStartTime, setOldCheckStartTime] = useState(null);
  const [oldCheckEndTime, setOldCheckEndTime] = useState(null);
  const [oldBreakStartTime, setOldBreakStartTime] = useState(null);
  const [oldBreakEndTime, setOldBreakEndTime] = useState(null);

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
  const [update, setUpdate] = useState(false);

  const isFocused = useIsFocused();
  const agency = useSelector(({ classes }) => classes.agency);
  const classId = useSelector(({ classes }) => classes.classid);
  const selectClass = useSelector(({ classes }) => classes.selectClass);
  const ctlist = useSelector(({ classes }) => classes.ctlist);

  // ------------- API ??????

  async function classtimeListApi() {
    console.log("?????? ????????? ????????????");
    const data = await getClasstimeList({ ag_idx: agency.ag_idx });
    setClasstimeList(data);
    dispatch(getClasstime(classtimeList));
  }

  async function classAddApi() {
    console.log("?????? ????????????");
    const data = await setClassName({
      ag_idx: agency.ag_idx,
      c_name: classname,
    });
    const newData = await setClasstime({
      day: days,
      start_date:
        startDate.getFullYear() +
        "-" +
        (startDate.getMonth() + 1).toString() +
        "-" +
        startDate.getDate(),
      end_date:
        endDate.getFullYear() +
        "-" +
        (endDate.getMonth() + 1).toString() +
        "-" +
        endDate.getDate(),
      start_time:
        startTime.getHours() +
        ":" +
        startTime.getMinutes() +
        ":" +
        startTime.getSeconds(),
      end_time:
        endTime.getHours() +
        ":" +
        endTime.getMinutes() +
        ":" +
        endTime.getSeconds(),
      check_start_time:
        checkStartTime.getHours() +
        ":" +
        checkStartTime.getMinutes() +
        ":" +
        checkStartTime.getSeconds(),
      check_end_time:
        checkEndTime.getHours() +
        ":" +
        checkEndTime.getMinutes() +
        ":" +
        checkEndTime.getSeconds(),
        break_start:
        breakStartTime == null
          ? null
          : breakStartTime.getHours() +
            ":" +
            breakStartTime.getMinutes() +
            ":" +
            breakStartTime.getSeconds(),
      break_end:
        breakEndTime == null
          ? null
          : breakEndTime.getHours() +
            ":" +
            breakEndTime.getMinutes() +
            ":" +
            breakEndTime.getSeconds(),
      c_idx: data,
      ag_idx: agency.ag_idx,
    });
    if(selectClass == 0){
      setClasstimeList(newData);
      setClassSelect(newData)
    }
    else{
      setClassSelect(newData.filter((item) => item.c_idx == selectClass));
      setClasstimeList(newData);
    }
    dispatch(getClasstime(newData));
  }

  async function classUpdateApi() {
    console.log("??????(classtime) ????????????");
    const data = await updateClasstime({
      day: olddays,
      start_date:
        oldStartDate.getFullYear() +
        "-" +
        (oldStartDate.getMonth() + 1).toString() +
        "-" +
        oldStartDate.getDate(),
      end_date:
        oldEndDate.getFullYear() +
        "-" +
        (oldEndDate.getMonth() + 1).toString() +
        "-" +
        oldEndDate.getDate(),
      start_time:
        oldStartTime.getHours() +
        ":" +
        oldStartTime.getMinutes() +
        ":" +
        oldStartTime.getSeconds(),
      end_time:
        oldEndTime.getHours() +
        ":" +
        oldEndTime.getMinutes() +
        ":" +
        oldEndTime.getSeconds(),
      check_start_time:
        oldCheckStartTime.getHours() +
        ":" +
        oldCheckStartTime.getMinutes() +
        ":" +
        oldCheckStartTime.getSeconds(),
      check_end_time:
        oldCheckEndTime.getHours() +
        ":" +
        oldCheckEndTime.getMinutes() +
        ":" +
        oldCheckEndTime.getSeconds(),
      break_start:
        oldBreakStartTime == null
          ? null
          : oldBreakStartTime.getHours() +
            ":" +
            oldBreakStartTime.getMinutes() +
            ":" +
            oldBreakStartTime.getSeconds(),
      break_end:
        oldBreakEndTime == null
          ? null
          : oldBreakEndTime.getHours() +
            ":" +
            oldBreakEndTime.getMinutes() +
            ":" +
            oldBreakEndTime.getSeconds(),
      c_idx: classId,
      ag_idx: agency.ag_idx,
    });
    setClassSelect(data.filter((item) => item.c_idx == classId));
    setClasstimeList(data);
    setOnSearch(false);
    setClick(null);
    dispatch(getClasstime(data));
    dispatch(IsVisible(true));
    // dispatch(setSelectClass(0));
    // setOnSearch(false);
    // setClassSelect(null);
    // setClick(null);
  }

  async function classtimeDeleteApi() {
    console.log("?????? ??????");
    const data = await deleteClass({ ag_idx: agency.ag_idx, c_idx: classId});
    setClasstimeList(data);
    dispatch(getClasstime(data));
    dispatch(setCheck(false));
    dispatch(setSelectClass(0));
    setOnSearch(false);
    setClassSelect(null);
    setClick(null);
  }
  

  // ------------- UseEffect ?????? ??????

  // ------------- ?????? ????????? ??? classtime ????????? ????????????
  useEffect(() => {
    classtimeListApi();
  }, []);

  // ------------- ?????? ?????? ???????????? ?????? ??? classtime ????????? ????????????
  useEffect(() => {
    if (isFocused) {
      classtimeListApi();
      dispatch(setCheck(false));
      setOnSearch(false);
      setClassSelect(null);
    }
  }, [isFocused]);

  // ------------- ?????? ?????? ?????? ????????? ??? ???????????????
  useEffect(() => {
    setClassname("");
    setStartDate(null);
    setEndDate(null);
    setStartTime(null);
    setEndTime(null);
    setCheckStartTime(null);
    setCheckEndTime(null);
    setBreakStartTime(null);
    setBreakEndTime(null);
    setMon(false);
    setTus(false);
    setWed(false);
    setThr(false);
    setFri(false);
    setSat(false);
    setSun(false);
    setDays("");
  }, [visible]);

  // ------------- ?????? ?????????

  // ------------- ??????????????? ??? ????????? ?????? ??? ?????????
  const onModalShow = () => {
    setVisible(true);
  };

  // ------------- ??????????????? ??? ????????? ?????????
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
    setOldStartDate(null);
    setOldEndDate(null);
    setOldStartTime(null);
    setOldEndTime(null);
    setOldCheckStartTime(null);
    setOldCheckEndTime(null);
    setOldBreakStartTime(null);
    setOldBreakEndTime(null);
  };

  // ------------- ???????????? ??????(submit) ?????? ?????? ???
  const onSubmit = () => {
    if (
      classname == "" ||
      startDate == null ||
      endDate == null ||
      startTime == null ||
      endTime == null ||
      checkStartTime == null ||
      checkEndTime == null ||
      days == ""
    ) {
      alert("??? ????????? ????????????.");
    } else {
      classAddApi();
      alert("????????? ?????????????????????.");
      setVisible(false);
    }
  };

  // ------------- ?????? ?????? ?????????
  const onDelete = useCallback(() => {
    if (classId == null || classId == 0) {
      alert("????????? ????????? ??????????????????.");
    } else {
      alert("????????? ?????????????????????.");
      classtimeDeleteApi();
    }
  });

  function classSelectFunc() {
    console.log("?????? ??????");
    if (selectClass == 0) {
      setClassSelect(classtimeList);
    } else {
      setClassSelect(classtimeList.filter((item) => item.c_idx == selectClass));
    }
    selectClass >= 0 && classSelect != null && setClick(null);
    // setClassSelect(data);
    // dispatch(setCheck(false));
    // dispatch(setValue(null));
  }

  // ------------- ?????? ?????? ?????????
  const onSearch = () => {
    setOnSearch(true);
    classSelectFunc();
  };

  // ------------- ??????????????? ?????? ?????? ???????????? ?????? ????????? ?????? ???????????? ?????????

  const onUpdate = () => {
    if (classId == null || classId == 0) {
      alert("????????? ????????? ??????????????????.");
    } else {
      setUpdate(true);
      setVisible(true);
      const updateItem = classtimeList.filter((item) => item.c_idx == classId);
      setOldClassname(updateItem[0].c_name);
      setOldStartDate(new Date(updateItem[0].ct_start_date.replace(/-/g, "/")));
      setOldEndDate(new Date(updateItem[0].ct_end_date.replace(/-/g, "/")));
      const time1 = updateItem[0].ct_start_time.split(":");
      setOldStartTime(new Date(2021, 11, 29, time1[0], time1[1], time1[2]));
      const time2 = updateItem[0].ct_end_time.split(":");
      setOldEndTime(new Date(2021, 11, 29, time2[0], time2[1], time2[2]));
      const time3 = updateItem[0].ct_attend_starttime.split(":");
      setOldCheckStartTime(
        new Date(2021, 11, 29, time3[0], time3[1], time3[2])
      );
      const time4 = updateItem[0].ct_attend_endtime.split(":");
      setOldCheckEndTime(new Date(2021, 11, 29, time4[0], time4[1], time4[2]));

      if (updateItem[0].ct_break_start == null) {
        setOldBreakStartTime(null);
      } else {
        const time5 = updateItem[0].ct_break_start.split(":");
        setOldBreakStartTime(
          new Date(2021, 11, 29, time5[0], time5[1], time5[2])
        );
      }

      if (updateItem[0].ct_break_end == null) {
        setOldBreakEndTime(null);
      } else {
        const time6 = updateItem[0].ct_break_end.split(":");
        setOldBreakEndTime(
          new Date(2021, 11, 29, time6[0], time6[1], time6[2])
        );
      }

      setOldDays(updateItem[0].ct_day);
      updateItem[0].ct_day.indexOf("???") !== -1 && setOldMon(true);
      updateItem[0].ct_day.indexOf("???") !== -1 && setOldTus(true);
      updateItem[0].ct_day.indexOf("???") !== -1 && setOldWed(true);
      updateItem[0].ct_day.indexOf("???") !== -1 && setOldThr(true);
      updateItem[0].ct_day.indexOf("???") !== -1 && setOldFri(true);
      updateItem[0].ct_day.indexOf("???") !== -1 && setOldSat(true);
      updateItem[0].ct_day.indexOf("???") !== -1 && setOldSun(true);
    }
  };

  // -------------  ?????? ?????? ??? ?????????

  const onUpdateSubmit = () => {
    classUpdateApi();
    alert("?????? ????????? ?????????????????????.");
    dispatch(IsVisible(false));
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
    setOldStartDate(null);
    setOldEndDate(null);
    setOldStartTime(null);
    setOldEndTime(null);
    setOldCheckStartTime(null);
    setOldCheckEndTime(null);
    setOldBreakStartTime(null);
    setOldBreakEndTime(null);
    setVisible(false);
    dispatch(setCheck(false));
    dispatch(setValue(0));
  };

  // ------------- ?????? ??? ?????? ?????????

  const onChangeText = (value) => {
    setClassname(value);
  };

  const onChangeStartDate = (date) => {
    setStartDate(date);
  };

  const onChangeEndDate = (date) => {
    setEndDate(date);
  };

  const onChangeStartTime = (time) => {
    setStartTime(time);
  };

  const onChangeEndTime = (time) => {
    setEndTime(time);
  };

  const onChangeStartCheckTime = (time) => {
    setCheckStartTime(time);
  };

  const onChangeEndCheckTime = (time) => {
    setCheckEndTime(time);
  };

  const onChangeBreakStartTime = (time) => {
    setBreakStartTime(time);
    console.log(breakStartTime);
  };

  const onChangeBreakEndTime = (time) => {
    setBreakEndTime(time);
    console.log(breakEndTime);
  };

  // ------------- ?????? ?????? ?????????

  const onSelectMonDay = () => {
    if (!monday) {
      setDays(days.concat("???"));
      setMon(true);
    } else {
      setMon(false);
      setDays(days.replace("???", ""));
    }
  };

  const onSelectTusDay = () => {
    if (!tuesday) {
      setDays(days.concat("???"));
      setTus(true);
    } else {
      setTus(false);
      setDays(days.replace("???", ""));
    }
  };

  const onSelectWedDay = () => {
    if (!wednesday) {
      setWed(true);
      setDays(days.concat("???"));
    } else {
      setWed(false);
      setDays(days.replace("???", ""));
    }
  };

  const onSelectThrDay = () => {
    if (!thursday) {
      setThr(true);
      setDays(days.concat("???"));
    } else {
      setThr(false);
      setDays(days.replace("???", ""));
    }
  };

  const onSelectFriDay = () => {
    if (!friday) {
      setFri(true);
      setDays(days.concat("???"));
    } else {
      setFri(false);
      setDays(days.replace("???", ""));
    }
  };

  const onSelectSatDay = () => {
    if (!saturday) {
      setSat(true);
      setDays(days.concat("???"));
    } else {
      setSat(false);
      setDays(days.replace("???", ""));
    }
  };

  const onSelectSunDay = () => {
    if (!sunday) {
      setSun(true);
      setDays(days.concat("???"));
    } else {
      setSun(false);
      setDays(days.replace("???", ""));
    }
  };

  //------ ?????? ??? ?????? ?????????

  const onChangeOldStartDate = (date) => {
    setOldStartDate(date);
  };

  const onChangeOldEndDate = (date) => {
    setOldEndDate(date);
  };

  const onChangeOldStartTime = (time) => {
    setOldStartTime(time);
  };

  const onChangeOldEndTime = (time) => {
    setOldEndTime(time);
  };

  const onChangeOldStartCheckTime = (time) => {
    setOldCheckStartTime(time);
  };

  const onChangeOldEndCheckTime = (time) => {
    setOldCheckEndTime(time);
  };

  const onChangeOldBreakStartTime = (time) => {
    setOldBreakStartTime(time);
  };

  const onChangeOldBreakEndTime = (time) => {
    setOldBreakEndTime(time);
  };

  // ------------- ?????? ??? ?????? ?????? ?????????

  const onSelectOldMonDay = () => {
    if (!oldmonday) {
      setOldDays(olddays.concat("???"));
      setOldMon(true);
    } else {
      setOldMon(false);
      setOldDays(olddays.replace("???", ""));
    }
  };

  const onSelectOldTusDay = () => {
    if (!oldtuesday) {
      setOldDays(olddays.concat("???"));
      setOldTus(true);
    } else {
      setOldTus(false);
      setOldDays(olddays.replace("???", ""));
    }
  };

  const onSelectOldWedDay = () => {
    if (!oldwednesday) {
      setOldWed(true);
      setOldDays(olddays.concat("???"));
    } else {
      setOldWed(false);
      setOldDays(olddays.replace("???", ""));
    }
  };

  const onSelectOldThrDay = () => {
    if (!oldthursday) {
      setOldThr(true);
      setOldDays(olddays.concat("???"));
    } else {
      setOldThr(false);
      setOldDays(olddays.replace("???", ""));
    }
  };

  const onSelectOldFriDay = () => {
    if (!oldfriday) {
      setOldFri(true);
      setOldDays(olddays.concat("???"));
    } else {
      setOldFri(false);
      setOldDays(olddays.replace("???", ""));
    }
  };

  const onSelectOldSatDay = () => {
    if (!oldsaturday) {
      setOldSat(true);
      setOldDays(olddays.concat("???"));
    } else {
      setOldSat(false);
      setOldDays(olddays.replace("???", ""));
    }
  };

  const onSelectOldSunDay = () => {
    if (!oldsunday) {
      setOldSun(true);
      setOldDays(olddays.concat("???"));
    } else {
      setOldSun(false);
      setOldDays(olddays.replace("???", ""));
    }
  };

  return (
    <ClassManageWeb
      agency={agency.ag_name}
      classList={classtimeList}
      onModalShow={onModalShow}
      visible={visible}
      classId={classId}
      onSearch={onSearch}
      search={search}
      click={click}
      classSelect={classSelect}
      pickerItem={selectClass}
      hideModalShow={hideModalShow}
      onSubmit={onSubmit}
      onChangeText={onChangeText}
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
      onChangeBreakStartTime={onChangeBreakStartTime}
      onChangeBreakEndTime={onChangeBreakEndTime}
      onChangeOldStartDate={onChangeOldStartDate}
      onChangeOldEndDate={onChangeOldEndDate}
      onChangeOldStartTime={onChangeOldStartTime}
      onChangeOldEndTime={onChangeOldEndTime}
      onChangeOldStartCheckTime={onChangeOldStartCheckTime}
      onChangeOldEndCheckTime={onChangeOldEndCheckTime}
      onChangeOldBreakStartTime={onChangeOldBreakStartTime}
      onChangeOldBreakEndTime={onChangeOldBreakEndTime}
      startDate={startDate}
      endDate={endDate}
      startTime={startTime}
      endTime={endTime}
      checkstartTime={checkStartTime}
      checkendTime={checkEndTime}
      breakStartTime={breakStartTime}
      breakEndTime={breakEndTime}
      oldStartDate={oldStartDate}
      oldEndDate={oldEndDate}
      oldStartTime={oldStartTime}
      oldEndTime={oldEndTime}
      oldCheckStartTime={oldCheckStartTime}
      oldCheckEndTime={oldCheckEndTime}
      oldBreakStartTime={oldBreakStartTime}
      oldBreakEndTime={oldBreakEndTime}
      onDelete={onDelete}
      onUpdate={onUpdate}
      update={update}
      onUpdateSubmit={onUpdateSubmit}
    />
  );
};

export default ClassManageWebContainer;
