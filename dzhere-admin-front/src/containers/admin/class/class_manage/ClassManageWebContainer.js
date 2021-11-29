import React, { useEffect, useState, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getClasstimeList,
  setClassName,
  setClasstime,
  deleteClass,
  updateClass,
} from "../../../../lib/api/class/course";
import { getClasstime, setCheck } from "../../../../modules/admin/class/course";
import ClassManageWeb from "../../../../components/admin/class/class_manage/ClassManageWeb";
import { useIsFocused } from "@react-navigation/core";

const ClassManageWebContainer = () => {
  const dispatch = useDispatch();
  const [classtimeList, setClasstimeList] = useState(null);
  const [visible, setVisible] = useState(false);
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [checkStartTime, setCheckStartTime] = useState(null);
  const [checkEndTime, setCheckEndTime] = useState(null);
  const [classname, setClassname] = useState("");
  const [classtime, setData] = useState(null);
  const [days, setDays] = useState("");
  const [monday, setMon] = useState(false);
  const [tuesday, setTus] = useState(false);
  const [wednesday, setWed] = useState(false);
  const [thursday, setThr] = useState(false);
  const [friday, setFri] = useState(false);
  const [saturday, setSat] = useState(false);
  const [sunday, setSun] = useState(false);
  const [update, setUpdate] = useState(false);
  const [updateList, setUpdateList] = useState(null);
  const isFocused = useIsFocused();
  const agency = useSelector(({ classes }) => classes.agency);
  const classId = useSelector(({ classes }) => classes.classid);

  async function classtimeListApi() {
    console.log("강의 리스트 불러오기");
    const data = await getClasstimeList({ ag_idx: agency.ag_idx });
    console.log(data);
    setClasstimeList(data);
    dispatch(getClasstime(classtimeList));
  }

  async function classAddApi() {
    console.log("강의 등록하기");
    const data = await setClassName({
      ag_idx: agency.ag_idx,
      c_name: classname,
    });
    console.log(data, classname, days, startDate);
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
      c_idx: data,
      ag_idx: agency.ag_idx,
    });
    console.log(newData);
    setClasstimeList(newData);
    dispatch(getClasstime(newData));
  }

  async function classtimeDeleteApi() {
    console.log("강의 삭제");
    alert("강의를 삭제하시겠습니까?");
    const data = await deleteClass({ ag_idx: agency.ag_idx, c_idx: classId });
    console.log(data);
    setClasstimeList(data);
    dispatch(getClasstime(classtimeList));
    dispatch(setCheck(false));
  }

  // async function classtimeUpdateApi() {
  //   console.log("강의 수정");
  //   alert("강의를 수정하시겠습니까?");
  //   const data = await updateClass({
  //     day: days,
  //     start_date:
  //       startDate.getFullYear() +
  //       "-" +
  //       (startDate.getMonth() + 1).toString() +
  //       "-" +
  //       startDate.getDate(),
  //     end_date:
  //       endDate.getFullYear() +
  //       "-" +
  //       (endDate.getMonth() + 1).toString() +
  //       "-" +
  //       endDate.getDate(),
  //     start_time:
  //       startTime.getHours() +
  //       ":" +
  //       startTime.getMinutes() +
  //       ":" +
  //       startTime.getSeconds(),
  //     end_time:
  //       endTime.getHours() +
  //       ":" +
  //       endTime.getMinutes() +
  //       ":" +
  //       endTime.getSeconds(),
  //     check_start_time:
  //       checkStartTime.getHours() +
  //       ":" +
  //       checkStartTime.getMinutes() +
  //       ":" +
  //       checkStartTime.getSeconds(),
  //     check_end_time:
  //       checkEndTime.getHours() +
  //       ":" +
  //       checkEndTime.getMinutes() +
  //       ":" +
  //       checkEndTime.getSeconds(),
  //     c_idx: data,
  //     ag_idx: agency.ag_idx,
  //    });
  //   console.log(data);
  //   setClasstimeList(data);
  //   dispatch(getClasstime(classtimeList));
  //   dispatch(setCheck(false));
  // }

  useEffect(() => {
    classtimeListApi();
    console.log(classtimeList);
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
    setMon(false);
    setTus(false);
    setWed(false);
    setThr(false);
    setFri(false);
    setSat(false);
    setSun(false);
    setDays("");
  }, [visible]);

  // 페이지에서 등록 버튼 누를 때
  const onModalShow = () => {
    setVisible(true);
  };

  const hideModalShow = () => {
    setVisible(false);
    // setUpdate(false);
  };

  // 모달에서 등록 버튼 누를 때
  const onSubmit = () => {
    classAddApi();
    alert("등록");
    setVisible(false);
  };

  const onChangeText = (value) => {
    setClassname(value);
    console.log(classname);
  };

  const onChangeStartDate = (date) => {
    setStartDate(date);
    console.log(startDate);
  };
  const onChangeEndDate = (date) => {
    setEndDate(date);
    console.log(endDate);
  };
  const onChangeStartTime = (time) => {
    setStartTime(time);
    console.log(startTime);
  };
  const onChangeEndTime = (time) => {
    setEndTime(time);
    console.log(endTime);
  };
  const onChangeStartCheckTime = (time) => {
    setCheckStartTime(time);
    console.log(checkStartTime);
  };
  const onChangeEndCheckTime = (time) => {
    setCheckEndTime(time);
    console.log(checkEndTime);
  };

  const onDelete = useCallback(() => {
    classtimeDeleteApi();
  });

  const onSelectMonDay = () => {
    if (!monday) {
      setDays(days.concat("월"));
      setMon(true);
    } else {
      setMon(false);
      setDays(days.replace("월", ""));
    }
    console.log(monday);
  };

  const onSelectTusDay = () => {
    if (!tuesday) {
      setDays(days.concat("화"));
      setTus(true);
    } else {
      setTus(false);
      setDays(days.replace("화", ""));
    }
    console.log(tuesday);
  };

  const onSelectWedDay = () => {
    if (!wednesday) {
      setWed(true);
      setDays(days.concat("수"));
    } else {
      setWed(false);
      setDays(days.replace("수", ""));
    }
    console.log(wednesday);
  };

  const onSelectThrDay = () => {
    if (!thursday) {
      setThr(true);
      setDays(days.concat("목"));
    } else {
      setThr(false);
      setDays(days.replace("목", ""));
    }
    console.log(wednesday);
  };

  const onSelectFriDay = () => {
    if (!friday) {
      setFri(true);
      setDays(days.concat("금"));
    } else {
      setFri(false);
      setDays(days.replace("금", ""));
    }
    console.log(friday);
  };

  const onSelectSatDay = () => {
    if (!saturday) {
      setSat(true);
      setDays(days.concat("토"));
    } else {
      setSat(false);
      setDays(days.replace("토", ""));
    }
    console.log(saturday);
  };

  const onSelectSunDay = () => {
    if (!sunday) {
      setSun(true);
      setDays(days.concat("일"));
    } else {
      setSun(false);
      setDays(days.replace("일", ""));
    }
    console.log(days);
  };

  // const onUpdate = useCallback(() => {
  //   setUpdate(true);
  //   console.log(update);
  //   setVisible(true);
  //   console.log(classtimeList);
  //   // const updateItem = classtimeList.filter(item => item.c_idx == classId);
  //   // setUpdateList(updateItem);
  //   console.log(updateItem);
  //   setClassname(updateItem.c_name);
  //   setStartDate(updateItem.ct_start_date);
  //   setEndDate(updateItem.ct_end_date);
  //   setStartTime(updateItem.ct_start_time);
  //   setEndTime(updateItem.ct_end_time);
  //   setCheckStartTime(updateItem.ct_attend_starttime);
  //   setCheckEndTime(updateItem.ct_attend_endtime);
  //   setDays(updateItem.ct_day);
  //   days.indexOf('월') !== -1 && setMon(true);
  //   days.indexOf('화') !== -1 && setTus(true);
  //   days.indexOf('수') !== -1 && setWed(true);
  //   days.indexOf('목') !== -1 && setThr(true);
  //   days.indexOf('금') !== -1 && setFri(true);
  //   days.indexOf('토') !== -1 && setSat(true);
  //   days.indexOf('일') !== -1 && setSun(true);
  // }, [visible]);

  // const onDelete = useCallback(() => {
  //   classtimeDeleteApi();
  //   // classtimeUpdateApi();
  // });

  return (
    <ClassManageWeb
      agency={agency.ag_name}
      classList={classtimeList}
      onModalShow={onModalShow}
      visible={visible}
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
      monday={monday}
      tuesday={tuesday}
      wednesday={wednesday}
      thursday={thursday}
      friday={friday}
      saturday={saturday}
      sunday={sunday}
      classname={classname}
      onChangeStartDate={onChangeStartDate}
      onChangeEndDate={onChangeEndDate}
      onChangeStartTime={onChangeStartTime}
      onChangeEndTime={onChangeEndTime}
      onChangeStartCheckTime={onChangeStartCheckTime}
      onChangeEndCheckTime={onChangeEndCheckTime}
      startDate={startDate}
      endDate={endDate}
      startTime={startTime}
      endTime={endTime}
      checkstartTime={checkStartTime}
      checkendTime={checkEndTime}
      onDelete={onDelete}
      // onUpdate={onUpdate}
      update={update}
      // updateList={updateList}
    />
  );
};

export default ClassManageWebContainer;
