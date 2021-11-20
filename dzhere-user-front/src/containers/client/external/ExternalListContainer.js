import React, { useEffect, useState, useCallback } from "react";
import { useIsFocused, useFocusEffect } from "@react-navigation/native";
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
  const [localData, setLocalData] = useState({});
  // const [lists, setLists] = useState([]);
  const wifiLog = useSelector(({ external }) => external.wifi);
  console.log("wifiLog:", wifiLog);
  // const wifiList = useSelector(({ external }) => external.loclist);
  // console.log("wifiList:", wifiList);
  // const userPhone = useSelector(({external}) => external.u_phone);
  // console.log(userPhone);

  AsyncStorage.setItem("u_phone", "01072695524");

  async function getStorage() {
    console.log("로컬 스토리지 접근");
    const phone = await AsyncStorage.getItem("u_phone");
    setLocalData({ u_phone: phone });
    console.log("phone", phone);
  }

  useEffect(() => {
    getStorage();
  }, []);

  async function getApiList() {
    console.log("최초 렌더링");
    const select = await allWifi(localData);
    setApiLog(select);
    dispatch(getList(apiLog));
  }

  useEffect(() => {
    getApiList();
  }, [localData]);

  async function againApiList() {
    console.log("리렌더링");
    setApiLog(null);
    const select = await allWifi(localData);
    setApiLog(select);
    dispatch(getList(apiLog));
  }


  useEffect(() => {
    if (isFocused) {
      againApiList();
    }
  }, [isFocused, wifiLog]);
  // useEffect(async () => {
  //   const phone = await AsyncStorage.getItem("u_phone");
  //   setLocalData({ u_phone: phone });
  //   console.log("phone", phone);
  //   // dispatch(savePhone(localData));
  // }, []);

  // useEffect(async () => {
  //   console.log("최초 렌더링");
  //   setApiLog(await allWifi(localData));
  //   dispatch(getList(apiLog));
  // }, []);

  // useEffect(async () => {
  //   console.log("리렌더링");
  //   const select = await allWifi(localData);
  //   console.log(select);
  //   dispatch(getList(select));
  //   setApiLog(select);
  //   console.log(apiLog);
  //   // Your code here
  // }, [apiLog]);

  // useEffect(() => {
  //   const unsubscribe = navigation.addListener("focus", async () => {
  //     const select = await allWifi(localData);
  //     dispatch(getList(select));
  //   });
  //   return unsubscribe;
  // }, [navigation]);

  // useFocusEffect(
  //   useCallback(async () => {
  //     console.log("리렌더링");
  //     const response = await allWifi(localData);
  //     setApiLog(response);
  //     dispatch(getList(apiLog));
  //   }, [])
  // );
  // console.log("리렌더링");
  // // const select = await allWifi(localData);
  // setApiLog(await allWifi(localData));
  // dispatch(getList(apiLog));
  // console.log(apiLog);

  // useFocusEffect(async () => {
  //   const select = await allWifi(localData);
  //   dispatch(getList(select));
  // }, []);

  // const getwifi = useCallback(async () => {
  //       console.log("렌더링", wifiList);
  //       const select = await allWifi(localData);
  //       dispatch(getList(select));
  //   },
  // )
  // useEffect(() => {
  //   console.log("렌더링", wifiList);
  //   getwifi();
  //   // const select = await allWifi(localData);
  //   // dispatch(getList(select));
  //   return () => {
  //     console.log("리렌더링 전", wifiList);
  //   };
  // }, []);

  return <ExternalTemplate wifiList={apiLog} navigation={navigation} />;
};

export default ListContainer;
