import * as React from "react";
import { ScrollView, StatusBar, TextInput, Image, View, Text, StyleSheet, SafeAreaView } from "react-native";
import Checkbox from 'expo-checkbox';
import { TouchableOpacity } from "react-native-gesture-handler";
import image from '../../../../assets/logo.png'
import axios from 'axios'
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../App";
import { Picker } from "@react-native-picker/picker";


const auth_register = ({ navigation, route }) => {
  const [phone, setPhone] = React.useState('');
  const [authNum, setAuthNum] = React.useState('');
  const [pwd, setPwd] = React.useState('');
  const [pwdRe, setPwdRe] = React.useState('');
  const [email, setEmail] = React.useState(''); 
  const [isChecked1, setChecked1] = React.useState(false);
  const [isChecked2, setChecked2] = React.useState(false);
  const [isChecked3, setChecked3] = React.useState(false);

  const {signUp} = React.useContext(AuthContext);
  const {signOut} = React.useContext(AuthContext);
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={{ flex: 1, padding: 16 }}>
        <ScrollView style={{flex: 1, paddingHorizontal:15}}>
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
              <TextInput
                value={phone}
                onChangeText={(phone) => setPhone(phone)}
                placeholder={"📞 휴대폰 번호"}
                placeholderTextColor="#5d7bba"
                keyboardType="numeric"
                maxLength={13}
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
              <TextInput
                value={authNum}
                onChangeText={(authNum) => setAuthNum(authNum)}
                placeholder={"📞 인증번호"}
                placeholderTextColor="#5d7bba"
                maxLength={30}
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
              <TextInput
                value={pwd}
                onChangeText={(pwd) => setPwd(pwd)}
                placeholder={"🔓 비밀번호"}
                placeholderTextColor="#5d7bba"
                maxLength={30}
                style={{
                  margin: 10,
                  borderColor: "#5d7bba",
                  borderWidth: 2,
                }}
              />
            </View>

            <View style={{ flexDirection: "row" }}>
              <TextInput
                value={pwdRe}
                onChangeText={(pwdRe) => setPwdRe(pwdRe)}
                placeholder={"🔐 비밀번호 확인"}
                placeholderTextColor="#5d7bba"
                maxLength={30}
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
              <TextInput
                value={email}
                onChangeText={(email) => setEmail(email)}
                placeholder={"✉ 이메일 주소"}
                placeholderTextColor="#5d7bba"
                maxLength={30}
                style={{
                  marginBottom: 10,
                  borderColor: "#5d7bba",
                  borderWidth: 2,
                }}
              />
            </View>

            <View style={{ flexDirection: "column" }}>
              <Text style={{ flexDirection: "row", margin: 10 }}>약관동의</Text>
              <View style={{ flexDirection: "row", margin: 10 }}>
                <Checkbox
                  style={{ margin: 10 }}
                  value={isChecked1}
                  onValueChange={setChecked1}
                  color={isChecked1 ? "#4630EB" : undefined}
                />
                <Text style={{ margin: 10, flexShrink: 1,}}>
                  DZHere 서비스 이용 약관에 동의합니다.
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 10 }}>
                <Checkbox
                  style={{ margin: 10 }}
                  value={isChecked2}
                  onValueChange={setChecked2}
                  color={isChecked2 ? "#4630EB" : undefined}
                />
                <Text style={{ margin: 10, flexShrink: 1, }}>
                  사용자의 AP(wifi) 관련 정보 수집 및 서비스 이용 약관에
                  동의합니다.
                </Text>
              </View>
              <View style={{ flexDirection: "row", margin: 10 }}>
                <Checkbox
                  style={{ margin: 10 }}
                  value={isChecked3}
                  onValueChange={setChecked3}
                  color={isChecked3 ? "#4630EB" : undefined}
                />
                <Text style={{ margin: 10, flexShrink: 1, }}>
                  사용자 관리를 위한 개인정보 처리방침에 동의합니다.
                </Text>
              </View>
            </View>

            <View style={{ flexDirection: "row", margin: 10 }}>
              <TouchableOpacity
                onPress={() => navigation.navigate("UserLoginPage")}
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
                onPress={() => {
                  signUp({ phone, pwd });
                  signOut();
                  navigation.navigate("UserLoginPage");
                }}
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
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  logo: {
    resizeMode: 'center',
    width: 150,
    height: 150,
    alignSelf: 'center',
    marginBottom: 15,
  },
  logoTitle: {
    color: "black",
    fontSize: 40,
    fontWeight: "bold",
    marginBottom: 57,
  },
  inputPhone: {
    width: 277,
    height: 44,
    padding: 10,
    marginBottom: 15,
    backgroundColor: '#e8e8e8',
    borderRadius: 40,
  },
  inputPassword: {
    width: 277,
    height: 44,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#e8e8e8',
    borderRadius: 40,
  },
  txtFindPassword: {
    marginBottom: 57,
    paddingRight: 10,
    textAlign: 'right'
  },
  safearea: { flex: 1, backgroundColor: "white" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    backgroundColor: "#FFC279",
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 43,
    padding: 15,
  },
  signupBtn: {
    backgroundColor: "#8DC1FF",
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 30,
    padding: 15,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default auth_register;
