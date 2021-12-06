import React, { useEffect, useState } from "react";
import { useIsFocused } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/core";
import ExternalTemplate from "../../components/external/ExternalTemplate";
import { getList } from "../../modules/external/external";
import { allWifi } from "../../lib/api/external/external";

const ListContainer = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const [apiLog, setApiLog] = useState(null);
  const wifiLog = useSelector(({ external }) => external.wifi);
  const wifiId = useSelector(({ external }) => external.id);
  const locList = useSelector(({ external }) => external.loclist);
  const phone = useSelector(({ auth }) => auth.userInfo);
  console.log("유저 정보!!!!", phone.userPhone);

  async function againApiList() {
    const data = await allWifi(phone.userPhone);
    setApiLog(data);
    dispatch(getList(apiLog));
  }

  // 최초 렌더링 시 getApiList() 함수 실행
  useEffect(() => {
    // setLocalData({ u_phone: phone, token: token });
    againApiList();
  }, []);

  // 리렌더링 시 getApiList() 함수 실행
  useEffect(() => {
    console.log("해당 페이지로 돌아왔을 때 리렌더링");
    if (isFocused) {
      againApiList();
    }
  }, [isFocused]);

  // 리렌더링 시 getApiList() 함수 실행
  useEffect(() => {
    console.log("추가 시 리렌더링");
    console.log(wifiLog);
    // if (isFocused) {
      setApiLog(locList);
    // }
  }, [wifiLog]);

  // 리렌더링 시 getApiList() 함수 실행
  useEffect(() => {
    console.log("삭제 시 리렌더링");
    console.log(wifiId);
    if (isFocused) {
      setApiLog(locList);
      console.log(locList);
    }
  }, [wifiId]);

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
      wifiList={apiLog}
      navigation={navigation}
    />
  );
};

export default ListContainer;
