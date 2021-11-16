import { StatusBar } from "react-native";
import * as React from "react";
import { TextInput, Image, View, Text, StyleSheet, SafeAreaView, Picker } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import goBack from '../../../../assets/goBack.png'

const auth_register = ({ navigation }) => {
  const [phone, setPhone] = React.useState('');
  const [authNum, setAuthNum] = React.useState('');
  return (
    <SafeAreaView style={styles.safearea}>

      <View style={{flex:1, flexDirection: 'row', margin: 10}}>
        <Picker style={{flex:1, margin: 10, borderColor: '#5d7bba', borderWidth: 2,}}>
          <Picker.Item label="KT" value="KT" />
          <Picker.Item label="LG" value="LG" />
          <Picker.Item label="SKT" value="SKT" />
          <Picker.Item label="알뜰폰" value="알뜰폰" />
        </Picker>
        <TextInput
          value={phone}
          onChangeText={(phone) => setPhone(phone)}
          placeholder={'📞 휴대폰 번호'}
          placeholderTextColor="#5d7bba"
          maxLength={30}
          style={{flex:2, margin: 10, borderColor: '#5d7bba', borderWidth: 2,}}
        />
      </View>

      <View style={{flex: 1, margin: 10}}>
        <TouchableOpacity style={{flex:1, margin: 10, borderColor: '#5d7bba', borderWidth: 2,}}>
          <Text>인증 요청</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <TextInput
            value={authNum}
            onChangeText={(authNum) => setAuthNum(authNum)}
            placeholder={'📞 인증번호'}
            placeholderTextColor="#5d7bba"
            maxLength={30}
            style={{flex:2, margin: 10, borderColor: '#5d7bba', borderWidth: 2,}}
        />
        <TouchableOpacity
          style={{flex:1, margin: 10, borderColor: '#5d7bba', borderWidth: 2,}}
        >
          <Text>확인</Text>
        </TouchableOpacity>
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <TextInput
              value={authNum}
              onChangeText={(authNum) => setAuthNum(authNum)}
              placeholder={'🔓 비밀번호'}
              placeholderTextColor="#5d7bba"
              maxLength={30}
              style={{flex:2, margin: 10, borderColor: '#5d7bba', borderWidth: 2,}}
        />
      </View>

      <View style={{flex: 1, flexDirection: 'row'}}>
        <TextInput
              value={authNum}
              onChangeText={(authNum) => setAuthNum(authNum)}
              placeholder={'🔐 비밀번호 확인'}
              placeholderTextColor="#5d7bba"
              maxLength={30}
              style={{flex:2, margin: 10, borderColor: '#5d7bba', borderWidth: 2,}}
        />
      </View>

      <View style={{flex: 1, flexDirection: "column"}}>
        <Text style={{flexDirection: "row", margin: 10}}>비밀번호 찾기에 사용됩니다. 정확히 입력해주세요.</Text>
        <TextInput
              value={authNum}
              onChangeText={(authNum) => setAuthNum(authNum)}
              placeholder={'✉ 이메일 주소'}
              placeholderTextColor="#5d7bba"
              maxLength={30}
              style={{flexDirection: "row", margin: 10, borderColor: '#5d7bba', borderWidth: 2,}}
        />
      </View>

      <View style={{flex: 1, flexDirection: "column"}}>
        <Text style={{flexDirection: "row", margin: 10}}>약관동의</Text>
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
  // title: {
  //   color: "black",
  //   fontSize: 40,
  //   fontWeight: "bold",
  //   marginBottom: 177,
  // },
  // inputEmail: {
  //   width: 285,
  //   height: 55,
  //   padding: 10,
  //   marginBottom: 37,
  //   backgroundColor: 'white',
  //   borderColor: '#5d7bba',
  //   borderWidth: 2,
  //   borderRadius: 40,
  //   paddingHorizontal: 30,
  //   fontSize:17,
  // },
  // text: {
  //   color: "gray",
  //   fontSize: 17,
  //   fontWeight: "bold",
  // },
  // textLast:{
  //   color: "gray",
  //   fontSize: 17,
  //   fontWeight: "bold",
  //   marginBottom: 37,
  // },
  // submitBtn: {
  //   backgroundColor: "#FFC279",
  //   borderRadius: 20,
  //   marginBottom: 20,
  //   paddingHorizontal: 43,
  //   padding: 15,
  // },
});

export default auth_register;
