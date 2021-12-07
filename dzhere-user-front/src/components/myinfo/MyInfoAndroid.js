import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import { images } from './MyInfoImages';
import IconButton from './MyInfoIconButton';
import { useNavigation } from '@react-navigation/native'
import { Platform } from 'react-native';


export const MyInfoAndroid = ({ phone, onPress, onNotify, notifyStatus }) => {

  const navigation = useNavigation();

  return(
    <View style={[styles.container, {height: 500, backgroundColor: '#CEEDFF', marginTop: 50}]}>
      <View style={styles.myInfo}>
        <IconButton type={images.phone}/>
        <Text style={styles.myInfoText}>휴대폰번호</Text>
        <Text style={{fontSize: 22}}>{phone}</Text>
      </View>
      <View style={styles.myInfo}>
        <IconButton type={images.email}/>
        <Text style={styles.myInfoText}>이메일 변경</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('MyPageEmailUpdate')}>
          <Image style={[{width: 30, height: 30}]} source={require('../../../assets/myinfo/right.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.myInfo}>
        <IconButton type={images.lock}/>
        <Text style={styles.myInfoText}>비밀번호 변경</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('MyPagePassUpdate')}>
          <Image style={[{width: 30, height: 30}]} source={require('../../../assets/myinfo/right.png')} />
        </TouchableOpacity>
      </View>
      <View style={styles.myInfo}>
        <IconButton type={images.ring}/>
        <Text style={styles.myInfoText}>푸시 알림</Text>
        {notifyStatus?
          <TouchableOpacity onPress={onNotify}>
            <Image style={[{width: 30, height: 30}]} source={images.on} />
          </TouchableOpacity>
          :
          <TouchableOpacity onPress={onNotify}>
            <Image style={[{width: 30, height: 30}]} source={images.off} />
          </TouchableOpacity>
        }
      </View>
      <View style={styles.myInfo}>
        <Text style={styles.myInfoText, {marginLeft: 14, fontSize: 18}}>이용약관</Text>
      </View>
      <View style={styles.myInfo}>
        <Text style={styles.myInfoText, {marginLeft: 14, fontSize: 18}}>개인정보 처리방침</Text>
      </View>
      <View style={styles.btnContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={onPress}
          >
          <Text style={[{ fontSize: 22 }, styles.text]}>로그아웃</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    margin: 20,
    width: Platform.OS === "android" ? "93%" : "90%",
    justifyContent: 'center',
    alignSelf: "center",
    alignContent: "center",
    padding: Platform.OS === "android" ? "2%" : "1.5%",
    borderRadius: 20,
    height: 190,
  },
  header: {
    height: 70
  },
  headerImage: {
    width: 100,
    height: 98,
  },
  myInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 10,
    padding: 5,
    margin: 3,
  },
  myInfoText: {
    flex: 1,
    fontSize: 22,
  },
  footer: {
    height: "15%",
  },
  btnContainer: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    alignItems: "center",
    margin: Platform.OS === "android" ? "1%" : "4%",
  },
  btn: {
    backgroundColor: "#5AA0C8",
    borderRadius: 10,
    width: Platform.OS === "android" ? "95%" : "30%",
    margin: 10,
    alignItems: "center",
    paddingVertical: 8,
    padding: 10,
  },
  text: {
    color: "white",
    fontWeight: "bold",
    margin: 10,
  },
});