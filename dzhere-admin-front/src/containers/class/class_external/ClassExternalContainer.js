import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Platform } from "react-native";
import { getExternalList, deleteExternal } from "../../../lib/api/class/course";
import {
  setExternal,
  setCheck,
  setValue,
  setUserName,
} from "../../../modules/class/course";
import ClassExternalComponent from "../../../components/class/class_external/ClassExternalComponent";
import { useIsFocused } from "@react-navigation/core";

const ClassExternalContainer = () => {
  const dispatch = useDispatch();
  const [externaList, setExternaList] = useState(null);
  const [name, setName] = useState(null);
  const [click, setClick] = useState(null);
  const selectClass = useSelector(({ classes }) => classes.selectClass);
  const agency = useSelector(({ classes }) => classes.agency);
  const classId = useSelector(({ classes }) => classes.classid);
  const isFocused = useIsFocused();
  const NameRef = useRef(null);

  async function classExternalListApi() {
    console.log("강의 외부장소 리스트 불러오기");
    dispatch(setUserName(name));
    const data = await getExternalList({
      c_idx: selectClass,
      u_name: name.trim().replace(" ", ""),
      ag_idx: agency.ag_idx,
    });
    if (data.length == 0 || data == null) {
      setClick("검색 결과가 없습니다.");
      // setName("");
    }
    data.length !== 0 && setClick(null);
    setExternaList(data);
    dispatch(setExternal(data));
  }

  async function classExternalDeleteApi() {
    console.log("외부장소 삭제");
    const data = await deleteExternal({
      e_idx: classId,
      c_idx: selectClass,
      ag_idx: agency.ag_idx,
      u_name: name.trim().replace(" ", ""),
    });
    if (data.length == 0 || data == null) {
      setName(null);
      dispatch(setUserName(null));
      dispatch(setExternal(null));
    }
    setExternaList(data);
    dispatch(setExternal(data));
    dispatch(setCheck(false));
    setClick(null);
  }

  const onChangeLoc = (name) => {
    NameRef.current;
    setName(name);
  };

  const onSearch = () => {
    checkTextInput() && classExternalListApi();
    // dispatch(setCheck(false));
    // dispatch(setValue(null));
  };

  // 페이지에서 삭제 버튼 누를 때
  const onDelete = () => {
    if (classId === null) {
      Platform.OS === "android"
        ? Alert.alert("삭제할 항목을 선택해주세요.")
        : alert("삭제할 항목을 선택해주세요.");
    } else {
      Platform.OS === "android"
        ? Alert.alert("외부장소가 삭제되었습니다.")
        : alert("외부장소가 삭제되었습니다.");
      classExternalDeleteApi();
      // dispatch(setCheck(false));
      // dispatch(setValue(null));
      // setClick(null);
    }
  };

  const checkTextInput = () => {
    if (name === null || name.trim().length < 3) {
      Platform.OS === "android"
        ? Alert.alert("검색할 수강생 명을 입력해주세요.")
        : alert("검색할 수강생 명을 입력해주세요.");
      return false;
    } else {
      return true;
    }
  };

  useEffect(() => {
    console.log("isFocused");
    return () => {
      setClick(null);
      setName(null);
      setExternaList(null);
    };
  }, [isFocused]);

  return (
    <ClassExternalComponent
      agency={agency.ag_name}
      externalist={externaList}
      onSearch={onSearch}
      click={click}
      onChangeText={onChangeLoc}
      name={name}
      NameRef={NameRef}
      onDelete={onDelete}
    />
  );
};

export default ClassExternalContainer;
