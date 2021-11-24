import React, { useState, useCallback, useRef } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import ExternalForm from "../../../components/client/external/ExternalAdd";
import {
  getLoc,
  getWifi,
  setExternal,
} from "../../../modules/client/external/external";

// ExternalContainer 에서 받아온다.
const ExternalAddContainer = () => {
  // wifi 정보를 받을 state 변수 생성
  const [wifiInfo, setwifiInfo] = useState({});
  // 외부 장소명 정보를 받을 state 변수 생성
  const [locInfo, setLocInfo] = useState({});
  const { ssid, bssid, location } = useSelector(({ external }) => ({
    ssid: external.wifi.ssid,
    bssid: external.wifi.bssid,
    location: external.wifi.location,
  }));

  console.log("Test: ", ssid, bssid, location);
  const dispatch = useDispatch();
  const LocInput = useRef();

  const lastAlert = () => {
    alert("등록이 완료되었습니다.");
    return true;
  };

  const checkTextInput = () => {
    console.log("알람전 테스트:", locInfo.location);
    if (locInfo.location === undefined || locInfo.location.trim().length < 1) {
      alert("외부 장소의 명칭은 필수 입력입니다!");
      return;
    } else {
      InsertAlert();
    }
  };
  const InsertAlert = () => {
    Alert.alert(
      "해당 WIFI 를 외부 장소로 추가하시겠습니까?",
      locInfo.location + " : " + wifiInfo.ssid + "(" + wifiInfo.bssid + ")",
      [
        {
          text: "취소",
          onPress: () => {
            alert("등록이 취소되었습니다.");
          },
        },
        {
          text: "완료",
          onPress: () => {
            if (lastAlert() == true) {
              onSubmit();
            }
          },
        },
      ]
    );
  };
  // TextInput 값이 변경되는 이벤트
  const onChangeLoc = useCallback(
    (loc) => {
      LocInput.current;
      setLocInfo({ location: loc });
      console.log("onChange:", locInfo);
    },
    [locInfo]
  );

  // 등록 버튼 이벤트
  const onSubmit = () => {
    const ID = Date.now().toString();
    // const newExternalObject = {
    //   [ID]: { id: ID, text: externalInfo, completed: false },
    // };
    // const newLoc = locInfo.location === undefined ? { location: "추가" } : locInfo;
    // setLocInfo(newLoc);
    const newExternal = Object.assign({}, wifiInfo, locInfo);
    // dispatch(getLoc(locInfo));
    // dispatch(getWifi(wifiInfo));
    console.log("등록 완료");
    dispatch(setExternal(newExternal));
    console.log("Test: ", ssid, bssid, location);
    // setExternalList({ ...externalInfo, ...newExternalObject });
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
  const onPressWifi = useCallback(() => {
    console.log("WIFI 수집");
    // Location.requestPermissionsAsync();
    NetInfo.fetch().then(
      (state) => {
        console.log("SSID", state.details.ssid);
        console.log("ipAddress", state.details.ipAddress);
        console.log("BSSID", state.details.bssid);
        console.log("Is connected?", state.isConnected);
        setwifiInfo({
          ssid: state.details.ssid,
          bssid: state.details.bssid,
        });
      },
      [wifiInfo]
    );
  });

  return (
    <ExternalForm
      onPressWifi={onPressWifi}
      onChangeLoc={onChangeLoc}
      onSubmit={checkTextInput}
      LocInput={LocInput}
      wifi={wifiInfo}
      location={locInfo}
    />
  );
};

export default ExternalAddContainer;
