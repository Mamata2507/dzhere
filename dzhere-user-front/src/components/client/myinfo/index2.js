import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';
import logo from '../../../../assets/logo.png'
import { images } from './Images';
import IconButton from './IconButton';


export const Header = () => {
  return (
    <View style={styles.container, {alignItems: 'center', marginTop: 40}}>
      <View style={styles.header}></View>
      <Image
        style={styles.headerImage}
        source={logo}
      />
    </View>
  );
};

export const Contents = ({data}) => {
  console.log(data);
  return (
    <View style={[styles.container, {height: 500, backgroundColor: '#CEEDFF', marginTop: 50}]}>
      <View style={styles.myInfo}>
        <IconButton type={images.phone}/>
        <Text style={styles.myInfoText}>휴대폰번호</Text>
        <Text style={{fontSize: 22}}>{data}</Text>
      </View>
      <View style={styles.myInfo}>
        <IconButton type={images.email}/>
        <Text style={styles.myInfoText}>이메일 변경</Text>
        <IconButton type={images.right}/>
      </View>
      <View style={styles.myInfo}>
        <IconButton type={images.lock}/>
        <Text style={styles.myInfoText}>비밀번호 변경</Text>
        <IconButton type={images.right}/>
      </View>
      <View style={styles.myInfo}>
        <IconButton type={images.ring}/>
        <Text style={styles.myInfoText}>푸시 알림</Text>
        <IconButton type={images.on}/>
      </View>
      <View style={styles.myInfo}>
        <Text style={styles.myInfoText}>이용약관</Text>
      </View>
      <View style={styles.myInfo}>
        <Text style={styles.myInfoText}>개인정보 처리방침</Text>
      </View>
    </View>
  );
};

export const Footer = () => {
  return (
    <View style={[styles.container, styles.footer]}>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '95%',
    justifyContent: 'center',
    height: 190,
  },
  header: {
    height: 70
  },
  headerImage: {
    width: 100,
    height: 100,
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
    fontSize: 22
  },
  footer: {
    height: 80,
  },
});
