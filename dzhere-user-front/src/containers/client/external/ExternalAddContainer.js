import React, { useState, useCallback, useRef } from "react";
import { Alert } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import NetInfo from "@react-native-community/netinfo";
import ExternalForm from "../../../components/client/external/ExternalAdd";
import { addWifi } from "../../../lib/api/external/external";
import * as Location from "expo-location";
import { setWifi, getList } from "../../../modules/client/external/external";
// import AsyncStorage from "@react-native-async-storage/async-storage";

// ExternalContainer 에서 받아온다.
const ExternalAddContainer = () => {
  // wifi 정보를 받을 state 변수 생성
  const [wifiInfo, setwifiInfo] = useState({});
  // 외부 장소명 정보를 받을 state 변수 생성
  const [locInfo, setLocInfo] = useState({});
  // const [localData, setLocalData] = useState({ u_phone: "" });
  // const wifiList = useSelector(({ external }) => external.loclist);
  const dispatch = useDispatch();
  const LocInput = useRef("");
  const { phone, token } = useSelector(({auth}) => ({
    phone: auth.login.userPhone,
    token: auth.auth.token,
}));

  // AsyncStorage.setItem("u_phone", "01072695524");

  // useEffect(async () => {
  //   if (await AsyncStorage.getItem("u_phone")) {
  //     const phone = await AsyncStorage.getItem("u_phone");
  //     setLocalData({ u_phone: phone });
  //   }
  // }, []);
  
  const lastAlert = () => {
    alert("등록이 완료되었습니다.");
    return true;
  };

  const checkTextInput = () => {
    // console.log("알람전 테스트:", locInfo.location);
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
            onSubmit();
            lastAlert();
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
      // console.log("onChange:", locInfo);
    },
    [locInfo]
  );

  async function againApiList() {
    // console.log(token);
    const newExternal = Object.assign({}, wifiInfo, locInfo);
    // console.log(newExternal);
    console.log("등록 완료");
    // console.log(phone);
    const apiList = Object.assign({}, newExternal, {u_phone: phone, token: token});
    const data = await addWifi(apiList);
    dispatch(getList(data));
    dispatch(setWifi(newExternal));
  }

  // 등록 버튼 이벤트
  const onSubmit = () => {
    // const newExternal = Object.assign({}, wifiInfo, locInfo);
    // // console.log(newExternal);
    // console.log("등록 완료");
    // // console.log(phone);
    // const apiList = Object.assign({}, newExternal, {u_phone: phone, token: token});
    // dispatch(getList(addWifi(apiList)));
    // setExternalList({ ...externalInfo, ...newExternalObject });
    againApiList();
    setLocInfo("");
    setwifiInfo("");
  }

  // WIFI 수집 버튼 이벤트
  const onPressWifi = useCallback(() => {
    console.log("WIFI 수집");
    // 위치 권한에 접근할 수 있게 허용해주는 함수 -> ssid 를 꺼내올 수 있다.
    if (Location.requestForegroundPermissionsAsync()) {
      NetInfo.fetch("wifi").then((state) => {
        console.log("SSID", state.details.ssid);
        console.log("ipAddress", state.details.ipAddress);
        console.log("BSSID", state.details.bssid);
        console.log("Is connected?", state.isConnected);
        setwifiInfo({
          ssid: state.details.ssid,
          bssid: state.details.bssid,
        });
      });
    }
  }, [wifiInfo]);

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
