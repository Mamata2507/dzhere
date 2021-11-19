import React from "react";
import { TouchableOpacity, Image, StyleSheet, Platform } from "react-native";
// import styled from "styled-components/native";
import PropTypes from "prop-types";
import { images } from "../../../components/common/images";

const DeleteButton = ({ type, id }) => {
  // 삭제 버튼 이벤트
  const onDelete = () => {
    const newExternal = Object.assign({}, wifiInfo, locInfo);
    console.log(newExternal);
    console.log("삭제 완료");
    dispatch(setWifi(newExternal));
    const apiList = Object.assign({}, newExternal, localData);
    delWifi(apiList);
  };

  const lastAlert = () => {
    alert("삭제 완료되었습니다.");
    return true;
  };

  const deleteAlert = () => {
    Alert.alert(
      "해당 외부 장소를 삭제하시겠습니까?",
      locInfo.location + " : " + wifiInfo.ssid + "(" + wifiInfo.bssid + ")",
      [
        {
          text: "취소",
          onPress: () => {
            alert("삭제를 취소하였습니다.");
          },
        },
        {
          text: "확인",
          onPress: () => {
            if (lastAlert() == true) {
              onDelete();
            }
          },
        },
      ]
    );
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
DeleteButton.propTypes = {
  type: PropTypes.oneOf(Object.values(images)).isRequired,
  // onPressOut: PropTypes.func,
  id: PropTypes.string,
  // completed: PropTypes.bool,
};

export default DeleteButton;
