import * as React from "react";
import { TextInput, Image, View, Text, StyleSheet, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import image from '../../../../assets/logo.png'
import { StatusBar } from "react-native";
import axios from 'axios'
import { NavigationContainer, CommonActions } from '@react-navigation/native';
import AsyncStorage from "@react-native-async-storage/async-storage";
import { AuthContext } from "../../../App";

const auth_index = ({ navigation, route }) => {
  const [phone, setPhone] = React.useState('');
  const [password, setPassword] = React.useState('');
  const {signIn} = React.useContext(AuthContext);
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={styles.container}>
          <Image
            source={image}
            style={styles.logo}
          />
          <Text style={styles.logoTitle}>DHero</Text>
          <TextInput
            value={phone}
            onChangeText={(phone) => setPhone(phone)}
            placeholder={'휴대폰 번호'}
            maxLength={13}
            keyboardType="numeric"
            style={styles.inputPhone}
          />

          <TextInput
            value={password}
            onChangeText={(password) => setPassword(password)}
            placeholder={'패스워드'}
            style={styles.inputPassword}
          />

          <Text
            style={styles.txtFindPassword}
            onPress={() => navigation.navigate("UserFindPassword")}
          >비밀번호 찾기</Text>

          <TouchableOpacity
            style={styles.loginBtn}
            onPress={() => {
              signIn({ phone, password });

              // navigation.dispatch(
              //   CommonActions.navigate({
              //     name: 'UserAttendPage',
              //     params: {
              //       phone: phone,
              //       password: password
              //     },
              //   })
              // )

              // axios({
              //   method:"POST",
              //   url:'http://172.30.1.40:8080/api/user/login',
              //   headers:{
              //     "X-Requested-With": "XMLHttpRequest"
              //   },
              //   data:{
              //     u_phone: "01050276384",
              //     u_pw: "1234"
              //   }
              // }).then(res => {
              //   console.log(res.data.token);
              //   console.log(signIn);
              // })

              // navigation.reset({
              //   index: 0,
              //   routes: [
              //     {
              //       name: "UserAttendPage",
              //       params: {
              //         phone: phone,
              //         password: password,
              //       },
              //     },
              //   ],
              // });
            }
          }
          >
            <Text style={styles.text}>로그인</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.signupBtn}
            onPress={() => navigation.navigate("UserRegister")}
          >
            <Text style={styles.text}>회원가입</Text>
          </TouchableOpacity>
        </View>
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

export default auth_index;
