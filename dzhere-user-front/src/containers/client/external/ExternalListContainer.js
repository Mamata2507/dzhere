import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import ExternalTemplate from "../../../components/client/external/ExternalTemplate";
import { getList, savePhone } from "../../../modules/client/external/external";
import { allWifi } from "../../../lib/api/external/external";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ListContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [apiLog, setApiLog] = useState(null);
  // const [eid, setEid] = useState({});
  const [localData, setLocalData] = useState({});
  const wifiLog = useSelector(({ external }) => external.wifi);
  const wifiId = useSelector(({ external }) => external.id);
  // console.log(wifiId);
  // console.log("wifiLog:", wifiLog);
  // const wifiList = useSelector(({ external }) => external.loclist);
  // console.log("wifiList:", wifiList);

  AsyncStorage.setItem("u_phone", "01072695524");

  async function getStorage() {
    console.log("로컬 스토리지 접근");
    const phone = await AsyncStorage.getItem("u_phone");
    setLocalData({ u_phone: phone });
    // console.log("phone", phone);
  }

  // 최초 렌더링 시 getStorage() 함수 실행
  useEffect(() => {
    getStorage();
  }, []);

  // async function getApiList() {
  //   console.log("최초 렌더링");
  //   const select = await allWifi(localData);
  //   setApiLog(select);
  //   dispatch(getList(apiLog));
  // }

  // // 최초 렌더링 시 getApiList() 함수 실행
  // useEffect(() => {
  //   getApiList();
  // }, [localData]);

  async function againApiList() {
    // console.log("리렌더링");
    // const select = await allWifi(localData);
    // console.log("data 길이", select.length);
    setApiLog(await allWifi(localData));
    // console.log(apiLog.length);
    dispatch(getList(apiLog));
  }

  // 리렌더링 시 getApiList() 함수 실행
  useEffect(() => {
    console.log("추가 시 리렌더링");
    if (isFocused) {
      // setApiLog(null);
      againApiList();
    }
  }, [isFocused, wifiLog]);

  // 리렌더링 시 getApiList() 함수 실행
  useEffect(() => {
    console.log("삭제 시 리렌더링");
    if (isFocused) {
      setApiLog(null);
      setTimeout(() => {
        againApiList();
      }, 10);
    }
  }, [localData, wifiId]);

  // useFocusEffect(
  //   useCallback(async () => {
  //     console.log("리렌더링");
  //     const response = await allWifi(localData);
  //     setApiLog(response);
  //     dispatch(getList(apiLog));
  //   }, [])
  // );

  return (
    <ExternalTemplate
      localData={localData}
      wifiList={apiLog}
      navigation={navigation}
    />
  );
};

export default ListContainer;
