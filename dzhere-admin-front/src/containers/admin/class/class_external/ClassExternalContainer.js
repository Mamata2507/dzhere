import React, { useEffect, useState, useRef, useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
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
  const NameInput = useRef("");
  console.log("선택한 클래스 id ", selectClass);
  const isFocused = useIsFocused();

  async function classExternalListApi() {
    console.log("강의 외부장소 리스트 불러오기");
    const data = await getExternalList({
      c_idx: selectClass,
      u_name: name,
      ag_idx: agency.ag_idx,
    });

    // console.log("data", data);
    data.length === 0 && setClick("검색 결과가 없습니다.");
    data.length !== 0 && setClick(null);
    setExternaList(data);
    dispatch(setExternal(data));
  }

  const onChangeLoc = useCallback(
    (name) => {
      NameInput.current;
      setName(name);
      // console.log(name);
    },
    [name]
  );

  const onSearch = useCallback(() => {
    classExternalListApi();
  }, [name, selectClass]);


  useEffect(() => {
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
    />
  );
};

export default ClassExternalContainer;
