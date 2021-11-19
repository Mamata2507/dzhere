import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import ExternalTemplate from "../../../components/client/external/ExternalTemplate";
import { getList, savePhone } from "../../../modules/client/external/external";
import { allWifi } from "../../../lib/api/external/external";
import AsyncStorage from "@react-native-async-storage/async-storage";

const ListContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [localData, setLocalData] = useState({});
  const wifiLog = useSelector(({ external }) => external.wifi);
  console.log("wifiLog:", wifiLog);
  const wifiList = useSelector(({ external }) => external.loclist);
  console.log("wifiList:", wifiList);
  // const userPhone = useSelector(({external}) => external.u_phone);
  // console.log(userPhone);

  AsyncStorage.setItem("u_phone", "01072695524");

  useEffect(async () => {
    if (await AsyncStorage.getItem("u_phone")) {
      const phone = await AsyncStorage.getItem("u_phone");
      setLocalData({ u_phone: phone });
      // dispatch(savePhone(localData));
    }
  }, []);

  useEffect(async () => {
    const select = await allWifi(localData);
    dispatch(getList(select));
  });

  return <ExternalTemplate wifiList={wifiList} navigation={navigation} />;
};

export default ListContainer;
