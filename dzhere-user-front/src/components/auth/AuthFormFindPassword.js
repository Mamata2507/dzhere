import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, StatusBar} from "react-native";
import CustomTextInput from "./CustomTextInput";

const AuthFormFindPassword = ({
  form,
  onChangeText,
  onPress,
  error,
  navigation,
  route,
}) => {
  console.log("AuthFormLogin");
  console.log("form : ", form);
  return (
    <>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={styles.container}>
          {/* <Text style={styles.title}>비밀번호 찾기</Text> */}
          <CustomTextInput
            name="userEmail"
            autoCompleteType="email"
            value={form.userEmail}
            onChangeText={onChangeText}
            placeholder={"✉ 이메일"}
            placeholderTextColor="#5d7bba"
            maxLength={30}
            keyboardType="email-address"
            style={styles.inputEmail}
          />
          <Text style={styles.text}>
            DHero 가입 시,{'\n'}입력하신 이메일 주소를 입력하세요.{'\n'}해당 이메일로 임시 비밀번호가 발송됩니다.
          </Text>

          <TouchableOpacity
            style={styles.submitBtn}
            onPress={() => navigation.navigate("UserLoginPage")}
          >
            <Text style={styles.submitBtnTxt}>전송</Text>
          </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </>
  );
};

export default AuthFormFindPassword;

const styles = StyleSheet.create({
  safearea: { flex: 1, backgroundColor: "white" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 177,
  },
  inputEmail: {
    width: 285,
    height: 55,
    padding: 10,
    marginBottom: 37,
    backgroundColor: "white",
    borderColor: "#5d7bba",
    borderWidth: 2,
    borderRadius: 40,
    paddingHorizontal: 30,
    fontSize: 17,
  },
  text: {
    color: "gray",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 37,
    textAlign: 'center'
  },
  submitBtn: {
    backgroundColor: "#FFC279",
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 43,
    padding: 15,
  },
  submitBtnTxt: {
    color: "gray",
    fontSize: 17,
    fontWeight: "bold",
  }
});
