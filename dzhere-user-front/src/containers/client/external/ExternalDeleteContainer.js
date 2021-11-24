import React, { useState } from "react";
import {
  TouchableOpacity,
  Image,
  StyleSheet,
  Platform,
  Alert,
} from "react-native";
import { delWifi } from "../../../lib/api/external/external";
import { deleteWifi, getList } from "../../../modules/client/external/external";
import { useDispatch, useSelector } from "react-redux";
const DeleteButton = ({ type, item }) => {
  const dispatch = useDispatch();
  const [id, setId] = useState({});
  const { phone, token } = useSelector(({ auth }) => ({
    phone: auth.login.userPhone,
    token: auth.auth.token,
  }));

  // AsyncStorage.setItem("u_phone", "01072695524");

  // async function getStorage() {
  //   console.log("로컬 스토리지 접근");
  //   const phone = await AsyncStorage.getItem("u_phone");
  //   setLocalData({ u_phone: phone });
  //   console.log("phone", phone);
  // }

  async function againApiList() {
    // console.log(token);
    const data = await delWifi({
      id: item.e_idx,
      u_phone: phone,
      token: token,
    });
    dispatch(getList(data));
    dispatch(deleteWifi(id));
  }

  // 삭제 버튼 이벤트
  const onDelete = () => {
    setId({ id: item.e_idx });
    againApiList();
    // dispatch(deleteWifi({ id: item.e_idx }));
    console.log(token, phone, id);
  };

  const lastAlert = () => {
    alert("삭제 완료되었습니다.");
    return true;
  };

  const firstAlert = () => {
    alert(
      "해당 외부 장소를 삭제하시겠습니까?\n 외부장소: " +
        item.e_name +
        "(" +
        item.e_ssid +
        ")"
    );
    return true;
  };
  const deleteAlert = () => {
    console.log("삭제 완료");
    Platform.OS === "android"
      ? Alert.alert(
          "해당 외부 장소를 삭제하시겠습니까?",
          "외부장소: " + item.e_name + "(" + item.e_ssid + ")",
          [
            {
              text: "취소",
              onPress: () => {
                alert("삭제를 취소하였습니다.");
                console.log("삭제 취소");
              },
            },
            {
              text: "확인",
              onPress: () => {
                onDelete();
                lastAlert();
              },
            },
          ]
        )
      : (firstAlert(), onDelete(), lastAlert());
  };

  return (
    <TouchableOpacity onPress={deleteAlert}>
      <Image style={styles.icon} source={type} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  icon: {
    width: Platform.OS === "android" ? 20 : 30,
    height: Platform.OS === "android" ? 20 : 30,
  },
});

export default DeleteButton;
