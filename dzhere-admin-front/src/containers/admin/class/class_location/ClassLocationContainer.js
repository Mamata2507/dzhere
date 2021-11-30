import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/core";
import { Platform, Alert } from "react-native";
import {
  getClasslocationList,
  setClassName,
  setClassLocAdd,
  setClassLocUpdate,
} from "../../../../lib/api/class/course";
import {
  getClasslocation,
  setCheck,
  setValue,
  IsVisible
} from "../../../../modules/admin/class/course";
import ClassLocationComponent from "../../../../components/admin/class/class_location/ClassLocationComponent";

const ClassLocationContainer = () => {
  const dispatch = useDispatch();
  const [classlocationList, setClasslcoationList] = useState(null);
  const [classname, setClassname] = useState(null);
  const [visible, setVisible] = useState(false);
  const isFocused = useIsFocused();
  const [type, setType] = useState("");
  const [ssid, setSsid] = useState("");
  const [bssid, setBssid] = useState("");
  const [location, setLocation] = useState("");
  const [updates, setUpdate] = useState(false);
  const [oldtype, setOldType] = useState("");
  const [oldssid, setOldSsid] = useState("");
  const [oldbssid, setOldBssid] = useState("");
  const [oldlocation, setOldLocation] = useState("");
  const agency = useSelector(({ classes }) => classes.agency);
  const classId = useSelector(({ classes }) => classes.classid);
  console.log(agency);

  async function classlocationListApi() {
    console.log("강의 장소(classlocation) 리스트 불러오기");
    const data = await getClasslocationList({ ag_idx: agency.ag_idx });
    console.log(data);
    setClasslcoationList(data);
    dispatch(getClasslocation(classlocationList));
  }

  // async function classInternalListApi() {
  //   console.log("강의 장소(internal) 리스트 불러오기");
  //   const data = await getClassInternalList({ c_idx: classId });
  //   console.log(data);
  //   setClasslcoationList(data);
  //   dispatch(getClasslocation(classlocationList));
  // }

  async function classlocationAddApi() {
    console.log("강의 장소 등록하기");
    console.log(agency.ag_idx);
    console.log(classId);
    console.log(location);
    console.log(ssid);
    console.log(bssid);
    const data = await setClassLocAdd({
      ag_idx: agency.ag_idx,
      c_idx: classId,
      i_name: location,
      i_ssid: ssid,
      i_bssid: bssid,
    });
    console.log(data);
    setClasslcoationList(data);
    dispatch(getClasslocation(classlocationList));
    dispatch(setCheck(false));
  }

  async function classlocationUpdateApi() {
    console.log("강의 장소 수정하기");
    console.log(agency.ag_idx);
    console.log(classId);
    console.log(oldlocation);
    console.log(oldssid);
    console.log(oldbssid);
    const data = await setClassLocUpdate({
      ag_idx: agency.ag_idx,
      c_idx: classId,
      i_name: oldlocation,
      i_ssid: oldssid,
      i_bssid: oldbssid,
    });
    console.log(data);
    setClasslcoationList(data);
    dispatch(getClasslocation(classlocationList));
    dispatch(setCheck(false));
  }
  useEffect(() => {
    classlocationListApi();
    console.log(classlocationList);
    dispatch(setCheck(false));
  }, []);

  useEffect(() => {
    if (isFocused) {
      classlocationListApi();
      dispatch(setCheck(false));
      dispatch(setValue(null));
    }
  }, [isFocused]);

  useEffect(() => {
    setBssid("");
    setSsid("");
    setLocation("");
    setType("");
    // setUpdate(false);
  }, [visible]);

  // 페이지에서 등록 버튼 누를 때
  const onModalShow = () => {
    console.log(classId);
    const data = classlocationList.filter((item) => item.c_idx == classId);
    if(classId == null){
      Platform.OS === "android"
      ? Alert.alert(
          "등록할 강의를 선택해주세요."
        )
      : alert(
        "등록할 강의를 선택해주세요."
        );
    }
    else if (data[0].i_name !== "") {
      Platform.OS === "android"
        ? Alert.alert("해당 강의에는 장소가 이미 등록되어 있습니다.")
        : alert("해당 강의에는 장소가 이미 등록되어 있습니다.");
    } else {
      setClassname(data[0].c_name);
      console.log(classlocationList);
      console.log(data);
      console.log("data", data[0].c_name);
      console.log("name", classname);
      setVisible(true);
    }
  };

  const onSubmit = () => {
    if (location == "") {
      alert("강의 장소 입력해주세요.");
    } else {
      classlocationAddApi();
      dispatch(IsVisible(true));
      Platform.OS === "android"
        ? Alert.alert("강의 장소가 등록되었습니다.")
        : alert("강의 장소가 등록되었습니다.");
      setVisible(false);
    }
  };

  const onChangeSubmit = () => {
    classlocationUpdateApi();
    dispatch(IsVisible(true));
    Platform.OS === "android"
      ? Alert.alert("강의 장소가 수정되었습니다.")
      : alert("강의 장소를 수정하시겠습니까?");
    setVisible(false);
    setCheck(false);
    setUpdate(false);
    setOldBssid("");
    setOldSsid("");
    setOldLocation("");
    setOldType("");
  };

  const hideModalShow = () => {
    dispatch(IsVisible(false));
    setVisible(false);
  };

  const onChangeType = (value) => {
    setType(value);
  };

  const onChangeSsid = (value) => {
    setSsid(value);
  };

  const onChangeBssid = (value) => {
    setBssid(value);
  };

  const onChangeLocation = (value) => {
    setLocation(value);
  };

  const onChangeOldType = (value) => {
    setOldType(value);
  };

  const onChangeOldSsid = (value) => {
    setOldSsid(value);
  };

  const onChangeOldBssid = (value) => {
    setOldBssid(value);
  };

  const onChangeOldLocation = (value) => {
    setOldLocation(value);
  };

  const onUpdate = () => {
    const data = classlocationList.filter((item) => item.c_idx == classId);
    if(classId == null){
      Platform.OS === "android"
      ? Alert.alert(
          "수정할 강의를 선택해주세요."
        )
      : alert(
        "수정할 강의를 선택해주세요."
        );
    }
    else if (data[0].i_name === "") {
      Platform.OS === "android"
        ? Alert.alert(
            "해당 강의에 등록된 장소가 없습니다.\n장소를 먼저 등록해주세요."
          )
        : alert(
            "해당 강의에 등록된 장소가 없습니다. 장소를 먼저 등록해주세요."
          );
    } else {
      setUpdate(true);
      setClassname(data[0].c_name);
      console.log(data[0].c_name);
      setOldBssid(data[0].i_bssid);
      setOldSsid(data[0].i_ssid);
      setOldLocation(data[0].i_name);
      setOldType("wifi");
      // alert('수정하시겠습니까?');
      setVisible(true);
      console.log(classname, bssid, ssid, location, type);
    }
  };

  return (
    <ClassLocationComponent
      agency={agency.ag_name}
      classList={classlocationList}
      classname={classname}
      onModalShow={onModalShow}
      hideModalShow={hideModalShow}
      onChangeType={onChangeType}
      onChangeSsid={onChangeSsid}
      onChangeBssid={onChangeBssid}
      onChangeLocation={onChangeLocation}
      onChangeOldType={onChangeOldType}
      onChangeOldSsid={onChangeOldSsid}
      onChangeOldBssid={onChangeOldBssid}
      onChangeOldLocation={onChangeOldLocation}
      onSubmit={onSubmit}
      onChangeSubmit={onChangeSubmit}
      onUpdate={onUpdate}
      visible={visible}
      type={type}
      ssid={ssid}
      bssid={bssid}
      location={location}
      updates={updates}
      oldbssid={oldbssid}
      oldlocation={oldlocation}
      oldssid={oldssid}
      oldtype={oldtype}
    />
  );
};

export default ClassLocationContainer;
