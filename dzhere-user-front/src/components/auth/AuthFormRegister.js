import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView, Platform,} from "react-native";
// import { Picker } from "@react-native-picker/picker";
import CustomTextInput from "./CustomTextInput";
import CustomCheckbox from "./CustomCheckbox";
import ErrorMessage from "./ErrorMessage";
import CustomPicker from "./CustomPicker";

const AuthFormRegister = ({form, onChangeText, onPress, error, navigation, route, validErrors }) => {
  return (
    <>
      <StatusBar style="light" />
      <ScrollView style={{ flex: 1, paddingHorizontal: 5 }}>
        <View style={styles.container}>
          {Platform.OS === "web" ? (
            <View
              style={{
                flexDirection: "row",
                marginVertical: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  marginLeft: 5,
                }}
              >
                <CustomPicker
                  name="userPhoneAgency"
                  selectedValue={form.userPhoneAgency}
                  onChangeText={onChangeText}
                  style={{
                    width: 107,
                    height: 42,
                    borderRadius: 15,
                    paddingHorizontal: 10,
                    borderColor: "#5d7bba",
                    borderWidth: 2,
                  }}
                />
              </View>
              <CustomTextInput
                name="userPhone"
                autoCompleteType="tel"
                value={form.userPhone}
                onChangeText={onChangeText}
                placeholder={"📞 휴대폰 번호"}
                placeholderTextColor="#5d7bba"
                maxLength={13}
                keyboardType="numeric"
                style={{
                  margin: 5,
                  borderColor: "#5d7bba",
                  borderWidth: 2,
                  borderRadius: 15,
                  width: 210,
                  paddingHorizontal: 15,
                  height: 40,
                }}
              />
            </View>
          ) : (
            <View
              style={{
                flexDirection: "row",
                marginVertical: 10,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  borderColor: "#5d7bba",
                  borderWidth: 2,
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  alignSelf: "center",
                  marginLeft: 15,
                  borderRadius: 15,
                }}
              >
                <CustomPicker
                  name="userPhoneAgency"
                  selectedValue={form.userPhoneAgency}
                  onChangeText={onChangeText}
                  style={{
                    width: 107,
                    height: 42,
                    borderRadius: 15,
                    borderColor: "#5d7bba",
                    borderWidth: 2,
                  }}
                />
              </View>
              <CustomTextInput
                name="userPhone"
                autoCompleteType="tel"
                value={form.userPhone}
                onChangeText={onChangeText}
                placeholder={"📞 휴대폰 번호"}
                placeholderTextColor="#5d7bba"
                maxLength={13}
                keyboardType="numeric"
                style={{
                  margin: 5,
                  borderColor: "#5d7bba",
                  borderWidth: 2,
                  width: 210,
                  paddingHorizontal: 15,
                  height: 40,
                  borderRadius: 15,
                  marginLeft: 10,
                }}
              />
            </View>
          )}

          {/* <View style={{ flexDirection: "row" }}>
            {validErrors.error1 && <ErrorMessage>{validErrors.error1}</ErrorMessage>}
          </View> */}

          {/* <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                flex: 1,
                margin: 10,
                borderColor: "#5d7bba",
                borderWidth: 2,
              }}
            >
              <Text>인증 요청</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row" }}>
            <CustomTextInput
              name="authNum"
              value={form.authNum}
              onChangeText={onChangeText}
              placeholder={"📞 인증번호"}
              placeholderTextColor="#5d7bba"
              maxLength={12}
              keyboardType="numeric"
              style={{
                margin: 10,
                borderColor: "#5d7bba",
                borderWidth: 2,
              }}
            />
            <TouchableOpacity
              style={{
                margin: 10,
                borderColor: "#5d7bba",
                borderWidth: 2,
              }}
            >
              <Text>확인</Text>
            </TouchableOpacity>
          </View> */}

          <View style={{ flexDirection: "row" }}>
            <CustomTextInput
              name="password"
              value={form.password}
              onChangeText={onChangeText}
              placeholder={"비밀번호"}
              placeholderTextColor="#5d7bba"
              maxLength={16}
              keyboardType="default"
              secureTextEntry={true}
              style={{
                margin: 10,
                borderColor: "#5d7bba",
                borderWidth: 2,
                paddingHorizontal: 10,
                width: 325,
                height: 35,
                borderRadius: 15,
                textAlign: 'left',
              }}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            {validErrors.error2 && <ErrorMessage>{validErrors.error2}</ErrorMessage>}
          </View>

          <View style={{ flexDirection: "row" }}>
            <CustomTextInput
              name="passwordConfirm"
              value={form.passwordConfirm}
              onChangeText={onChangeText}
              placeholder={"비밀번호 확인"}
              placeholderTextColor="#5d7bba"
              maxLength={16}
              keyboardType="default"
              secureTextEntry={true}
              style={{
                margin: 10,
                borderColor: "#5d7bba",
                borderWidth: 2,
                paddingHorizontal: 10,
                width: 325,
                height: 35,
                borderRadius: 15,
                textAlign: 'left',
              }}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            {validErrors.error3 && <ErrorMessage>{validErrors.error3}</ErrorMessage>}
          </View>

          <View
            style={{
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              alignContent: "center",
            }}
          >
            <CustomTextInput
              name="userEmail"
              value={form.userEmail}
              onChangeText={onChangeText}
              placeholder={"✉ 이메일 주소"}
              placeholderTextColor="#5d7bba"
              maxLength={30}
              // keyboardType="default"
              style={{
                marginTop: 10,
                marginBottom: 10,
                borderColor: "#5d7bba",
                borderWidth: 2,
                paddingHorizontal: 10,
                width: 325,
                height: 35,
                borderRadius: 15,
              }}
            />
            <Text
              style={{
                flexDirection: "row",
                marginBottom: 10,
                flexShrink: 1,
              }}
            >
              비밀번호 찾기에 사용됩니다. 정확히 입력해주세요.
            </Text>
          </View>

          <View style={{ flexDirection: "row" }}>
            {validErrors.error4 && <ErrorMessage>{validErrors.error4}</ErrorMessage>}
          </View>

          <View style={{ flexDirection: "column" }}>
            <Text
              style={{ flexDirection: "row", margin: 10, fontWeight: "bold" }}
            >
              약관동의
            </Text>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <CustomCheckbox
                name="isChecked1"
                value={form.isChecked1}
                onChangeText={onChangeText}
                color={form.isChecked1 ? "#4630EB" : undefined}
                style={{ marginRight: 10, marginLeft: 10 }}
              />
              <Text style={{ marginRight: 10, marginLeft: 10, flexShrink: 1 }}>
                DZHere 서비스 이용 약관에 동의합니다.
              </Text>
            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <CustomCheckbox
                name="isChecked2"
                value={form.isChecked2}
                onChangeText={onChangeText}
                color={form.isChecked2 ? "#4630EB" : undefined}
                style={{ marginRight: 10, marginLeft: 10 }}
              />
              <Text style={{ marginRight: 10, marginLeft: 10, flexShrink: 1 }}>
                사용자의 AP(wifi) 관련 정보 수집 및 서비스{"\n"}이용 약관에
                동의합니다.
              </Text>
            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <CustomCheckbox
                name="isChecked3"
                value={form.isChecked3}
                onChangeText={onChangeText}
                color={form.isChecked3 ? "#4630EB" : undefined}
                style={{ marginRight: 10, marginLeft: 10 }}
              />
              <Text style={{ marginRight: 10, marginLeft: 10, flexShrink: 1 }}>
                사용자 관리를 위한 개인정보 처리방침에{"\n"}동의합니다.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row" }}>
            {validErrors.error5 && <ErrorMessage>{validErrors.error5}</ErrorMessage>}
          </View>

          <View style={{ flexDirection: "row", margin: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                flex: 1,
                margin: 10,
                backgroundColor: '#808080',
                opacity: 0.7,
                borderRadius: 15,
                height: 50,
                width: 150,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  textAlign: "center",
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                돌아가기
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPress}
              style={{
                flex: 1,
                margin: 10,
                borderRadius: 15,
                backgroundColor: "#9FC1FF",
                height: 50,
                width: 150,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  color: "white",
                  fontSize: 18,
                  fontWeight: "bold",
                }}
              >
                회원가입
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default AuthFormRegister;

const styles = StyleSheet.create({
  safearea: { flex: 1, backgroundColor: "white" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: 'center',
    alignSelf: 'center',
    paddingHorizontal: 30,
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
  },
  textLast: {
    color: "gray",
    fontSize: 17,
    fontWeight: "bold",
    marginBottom: 37,
  },
  submitBtn: {
    backgroundColor: "#FFC279",
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 43,
    padding: 15,
  },
});
