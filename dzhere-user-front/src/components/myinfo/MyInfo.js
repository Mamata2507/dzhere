import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image } from 'react-native';
import logo from '../../../assets/logo.png'
import { images } from './MyInfoImages';
import IconButton from './MyInfoIconButton';
import { useNavigation } from '@react-navigation/native'
import { Platform } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export const Header = () => {
  return (
    <>
    <StatusBar />
    {/* <View style={styles.container, {alignItems: 'center', marginTop: 20}}> */}
    <View style={styles.container}>
      <View style={styles.header}></View>
      <Image
        style={styles.headerImage}
        source={logo}
      />
    </View>
    </>
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
    margin: 20,
    // width: Platform.OS === "android" ? "95%" : "90%",
    top: 10,
    // justifyContent: 'center',
    padding: Platform.OS === "android" ? "1%" : "1.5%",
    // alignSelf: "center",
    // alignContent: "center",
    alignItems: "center",
    // height: 190,
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