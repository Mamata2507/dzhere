import * as React from "react";
import { TextInput, Image, View, Text, StyleSheet, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import goBack from '../../../../assets/goBack.png'
import { StatusBar } from "react-native";

const auth_findPassword = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  return (
    <SafeAreaView style={styles.safearea}>
      <View style={{ flex: 1, padding: 16 }}>
        <View style={styles.container}>
        <TouchableOpacity>
          {/*Donute Button Image */}
          <Image
            source={goBack}
            style={{ width: 47, height: 47, margin: 15 }}
          />
        </TouchableOpacity>
        <Text style={styles.title}>비밀번호 찾기</Text>
        <TextInput
          value={email}
          onChangeText={(email) => setEmail(email)}
          placeholder={'✉ 이메일'}
          placeholderTextColor="#5d7bba"
          maxLength={30}
          style={styles.inputEmail}
        />
        <Text style={styles.text} >DHero 가입 시,</Text>
        <Text style={styles.text} >입력하신 이메일 주소를 입력하세요.</Text>
        <Text style={styles.textLast} >해당 이메일로 임시 비밀번호가 발송됩니다.</Text>

        <TouchableOpacity
          style={styles.submitBtn}
          onPress={() => navigation.navigate("ClientDrawer")}
        >
        <Text style={styles.text}>전송</Text>
        </TouchableOpacity>
        </View>
      </View>
      <StatusBar style="light" />
    </SafeAreaView>
  );
};

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
    backgroundColor: 'white',
    borderColor: '#5d7bba',
    borderWidth: 2,
    borderRadius: 40,
    paddingHorizontal: 30,
    fontSize:17,
  },
  text: {
    color: "gray",
    fontSize: 17,
    fontWeight: "bold",
  },
  textLast:{
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

export default auth_findPassword;
