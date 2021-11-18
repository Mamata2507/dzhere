import React, { useState, useCallback, useRef } from "react";
import { Alert } from "react-native";
import { useDispatch } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import ExternalForm from "../../../pages/client/external/ExternalForm";
import { setExternal } from "../../../modules/client/external/external";

// ExternalContainer 에서 받아온다.
const ExternalAddContainer = () => {
  // wifi 정보를 받을 state 변수 생성
  const [wifiInfo, setwifiInfo] = useState({ ssid: "", bssid: "" });
  // 외부 장소명 정보를 받을 state 변수 생성
  const [locInfo, setLocInfo] = useState("");
  const [externalInfo, setExternalInfo] = useState({});
  const [externalList, setExternalList] = useState({});
  // const [externalInfo, setExternaInfo] = useState({});
  const dispatch = useDispatch();

  const LocInput = useRef();

  const InsertAlert = () => {
    Alert.alert(
      "해당 WIFI 를 외부 장소로 추가하시겠습니까?",
      locInfo + " : " + wifiInfo.ssid + "(" + wifiInfo.bssid + ")",
      [
        {
          text: "취소",
          onPress: () => {
            Alert.alert("등록이 취소되었습니다.");
            console.log("등록 취소");
          },
        },
        {
          text: "완료",
          onPress: () => {
            onSubmit();
          },
        },
      ]
    );
  };

  // TextInput 값이 변경되는 이벤트
  const onChangeLoc = useCallback(
    (loc) => {
      LocInput.current;
      setLocInfo(loc);
    },
    [locInfo]
  );
  console.log("setLocInfo: " + locInfo);

  // 등록 버튼 이벤트
  const onSubmit = () => {
    // dispatch(setExternal(wifiInfo, locInfo));
    const ID = Date.now().toString();
    const newExternalObject = {
      [ID]: { id: ID, text: externalInfo, completed: false },
    };
    setExternalInfo(wifiInfo, locInfo);
    console.log("setExternalInfo: " + externalInfo);
    dispatch(setExternal(externalInfo));
    // dispatch(getLoc(locInfo));
    // dispatch(getWifi(wifiInfo));
    console.log("등록 완료");
    Alert.alert("등록이 완료되었습니다.");
    setExternalList({ ...externalInfo, ...newExternalObject });
    console.log("externalInfo:" + externalInfo);
    // dispatch(setList(externalList));
    console.log("externalList: " + externalList);
    setLocInfo("");
    setwifiInfo("");
  };

  // const _saveExternal = async ({wifiInfo, locInfo}) => {
  //   try {
  //     await AsyncStorage.setItem('external', JSON.stringify(wifiInfo, locInfo));
  //     setExternaInfo(wifiInfo, locInfo);
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // WIFI 수집 버튼 이벤트
  const onPressWifi = () => {
    console.log("WIFI 수집");
    // Location.requestPermissionsAsync();
    NetInfo.fetch().then((state) => {
      console.log("SSID", state.details.ssid);
      console.log("ipAddress", state.details.ipAddress);
      console.log("BSSID", state.details.bssid);
      console.log("Is connected?", state.isConnected);
      setwifiInfo({
        ssid: state.details.ssid,
        bssid: state.details.bssid,
      });
      console.log("setwifiInfo: " + wifiInfo);
    });
  };

  return (
    <ExternalForm
      onPressWifi={onPressWifi}
      onChangeLoc={onChangeLoc}
      onSubmit={InsertAlert}
      LocInput={LocInput}
      wifi={wifiInfo}
      location={locInfo}
    />
  );
};

export default ExternalAddContainer;
