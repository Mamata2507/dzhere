import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useIsFocused } from "@react-navigation/core";
import {
  getClasslocationList,
  setClassName,
  setClassLocAdd,
} from "../../../../lib/api/class/course";
import {
  getClasslocation,
  setCheck,
  setValue,
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
  const agency = useSelector(({ classes }) => classes.agency);
  const classId = useSelector(({ classes }) => classes.classid);
  console.log(agency);

  async function classlocationListApi() {
    console.log("강의 장소 리스트 불러오기");
    const data = await getClasslocationList({ ag_idx: agency.ag_idx });
    console.log(data);
    setClasslcoationList(data);
    dispatch(getClasslocation(classlocationList));
  }

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
      cl_name: location,
      i_name: location,
      i_ssid: ssid,
      i_bssid: bssid,
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

  // useEffect(() => {
  //     // classlocationListApi();
  //     dispatch(setCheck(false));
  //     // dispatch(setValue(0))
  //     // setBssid("");
  //     // setSsid("");
  //     // setLocation("");
  //     // setType("");
  // }, [visible]);

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
  }, [visible]);

  // 페이지에서 등록 버튼 누를 때
  const onModalShow = () => {
    console.log(classId);
    const data = classlocationList.filter((item) => item.c_idx == classId);
    setClassname(data[0].c_name);
    console.log(classlocationList);
    console.log(data);
    console.log("data", data[0].c_name);
    console.log("name", classname);
    setVisible(true);
  };

  const onSubmit = () => {
    if (location == "") {
      alert("강의 장소 입력해주세요.");
    } else {
      classlocationAddApi();
      alert("강의 장소를 등록하시겠습니까?");
      setVisible(false);
    }
  };

  const hideModalShow = () => {
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
      onSubmit={onSubmit}
      visible={visible}
      type={type}
      ssid={ssid}
      bssid={bssid}
      location={location}
    />
  );
};

export default ClassLocationContainer;
