import React, { useEffect, useState, useCallback, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Alert, Platform } from "react-native";
import { getExternalList } from "../../../../lib/api/class/course";
import { setExternal } from "../../../../modules/admin/class/course";
import ClassExternalComponent from "../../../../components/admin/class/class_external/ClassExternalComponent";
import { useIsFocused } from "@react-navigation/core";

const ClassExternalContainer = () => {
  const dispatch = useDispatch();
  const [externaList, setExternaList] = useState(null);
  const [name, setName] = useState(null);
  const [click, setClick] = useState(null);
  const selectClass = useSelector(({ classes }) => classes.selectClass);
  const agency = useSelector(({ classes }) => classes.agency);
  const externalist = useSelector(({ classes }) => classes.externalist);
  const isFocused = useIsFocused();
  const NameRef = useRef(null)
  
  async function classExternalListApi() {
    console.log("강의 외부장소 리스트 불러오기");
    const data = await getExternalList({
      c_idx: selectClass,
      u_name: name.trim().replace(" ", ""),
      ag_idx: agency.ag_idx,
    });
    data.length === 0 && setClick("검색 결과가 없습니다.");
    data.length !== 0 && setClick(null);
    setExternaList(data);
    dispatch(setExternal(data));
  }

  const onChangeLoc = (name) => {
    NameRef.current;
    setName(name);
  };

  const onSearch = () => {
    console.log(name);
    checkTextInput() && classExternalListApi();
  };

  const checkTextInput = () => {
    console.log(name);
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
    }; // cleanup function을 이용
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
    />
  );
};

export default ClassExternalContainer;
