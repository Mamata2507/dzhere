import React from "react";
import {SafeAreaView, View, Image, Text, StyleSheet, TouchableOpacity, StatusBar, ScrollView,} from "react-native";
import { Picker } from "@react-native-picker/picker";
import CustomTextInput from "./CustomTextInput";
import CustomCheckbox from "./CustomCheckbox";
import ErrorMessage from "./ErrorMessage";

const AuthFormRegister = ({
  form,
  onChangeText,
  onPress,
  error,
  navigation,
  route,
}) => {
  return (
    <>
      <StatusBar style="light" />
      <ScrollView style={{ flex: 1, paddingHorizontal: 15 }}>
        <View style={styles.container}>
          <View style={{ flexDirection: "row", margin: 10 }}>
            <Picker
              style={{
                margin: 10,
                borderColor: "#5d7bba",
                borderWidth: 1,
                width: 100,
              }}
              itemStyle={{
                margin: 10,
                borderColor: "#5d7bba",
                borderWidth: 1,
                width: 100,
              }}
            >
              <Picker.Item label="KT" value="KT" />
              <Picker.Item label="LG" value="LG" />
              <Picker.Item label="SKT" value="SKT" />
              <Picker.Item label="알뜰폰" value="알뜰폰" />
            </Picker>
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
                margin: 10,
                borderColor: "#5d7bba",
                borderWidth: 2,
                width: 200,
                paddingHorizontal: 20,
              }}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
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
          </View>

          <View style={{ flexDirection: "row" }}>
            <CustomTextInput
              name="password"
              value={form.password}
              onChangeText={onChangeText}
              placeholder={"🔓 비밀번호"}
              placeholderTextColor="#5d7bba"
              maxLength={20}
              keyboardType="default"
              style={{
                margin: 10,
                borderColor: "#5d7bba",
                borderWidth: 2,
              }}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            <CustomTextInput
              name="passwordConfirm"
              value={form.passwordConfirm}
              onChangeText={onChangeText}
              placeholder={"🔓 비밀번호 확인"}
              placeholderTextColor="#5d7bba"
              maxLength={20}
              keyboardType="default"
              style={{
                margin: 10,
                borderColor: "#5d7bba",
                borderWidth: 2,
              }}
            />
          </View>

          <View style={{ flexDirection: "column" }}>
            <Text
              style={{
                flexDirection: "row",
                marginTop: 10,
                marginBottom: 10,
                flexShrink: 1,
              }}
            >
              비밀번호 찾기에 사용됩니다. 정확히 입력해주세요.
            </Text>
            <CustomTextInput
              name="userEmail"
              value={form.userEmail}
              onChangeText={onChangeText}
              placeholder={"✉ 이메일 주소"}
              placeholderTextColor="#5d7bba"
              maxLength={30}
              keyboardType="email-address"
              style={{
                marginBottom: 10,
                borderColor: "#5d7bba",
                borderWidth: 2,
              }}
            />
          </View>

          <View style={{ flexDirection: "row" }}>
            {error && <ErrorMessage>{error}</ErrorMessage>}
          </View>

          <View style={{ flexDirection: "column",  }}>
            <Text style={{ flexDirection: "row", margin: 10 }}>약관동의</Text>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <CustomCheckbox
                name="isChecked1"
                value={form.isChecked1}
                onChangeText={onChangeText}
                color={form.isChecked1 ? "#4630EB" : undefined}
                style={{ marginRight:10, marginLeft:10 }}
              />
              <Text style={{ marginRight:10, marginLeft:10, flexShrink: 1 }}>
                DZHere 서비스 이용 약관에 동의합니다.
              </Text>
            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <CustomCheckbox
                name="isChecked2"
                value={form.isChecked2}
                onChangeText={onChangeText}
                color={form.isChecked2 ? "#4630EB" : undefined}
                style={{ marginRight:10, marginLeft:10 }}
              />
              <Text style={{ marginRight:10, marginLeft:10, flexShrink: 1 }}>
                사용자의 AP(wifi) 관련 정보 수집 및 서비스 이용 약관에
                동의합니다.
              </Text>
            </View>
            <View style={{ flexDirection: "row", margin: 10 }}>
              <CustomCheckbox
                name="isChecked3"
                value={form.isChecked3}
                onChangeText={onChangeText}
                color={form.isChecked3 ? "#4630EB" : undefined}
                style={{ marginRight:10, marginLeft:10 }}
              />
              <Text style={{ marginRight:10, marginLeft:10, flexShrink: 1 }}>
                사용자 관리를 위한 개인정보 처리방침에{'\n'}동의합니다.
              </Text>
            </View>
          </View>

          <View style={{ flexDirection: "row", margin: 10 }}>
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                flex: 1,
                margin: 10,
                borderColor: "#5d7bba",
                borderWidth: 2,
              }}
            >
              <Text>돌아가기</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={onPress}
              style={{
                margin: 10,
                borderColor: "#5d7bba",
                borderWidth: 2,
              }}
            >
              <Text>회원가입</Text>
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
