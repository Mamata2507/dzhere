import React from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import logo from "../../../assets/logo.png";

export const Header = () => {
  return (
    <View style={styles.container, {alignItems: 'center', marginTop: 20}}>
    <View style={styles.header}></View>
    <Image
      style={styles.headerImage}
      source={logo}
    />
  </View>
  );
};

export const Contents = () => {
  return (
    <View
      style={[
        styles.container,
        { height: 500, backgroundColor: "#CEEDFF", marginTop: 50 },
      ]}
    >
      <View style={styles.myInfo}>
        <Text style={styles.myInfoText}>본문</Text>
      </View>
    </View>
  );
};

export const Footer = () => {
  return <View style={[styles.container, styles.footer]}></View>;
};

const styles = StyleSheet.create({
  container: {
    margin: 20,
    width: "90%",
    justifyContent: "center",
    height: 190,
  },
  header: {
    height: 70,
  },
  headerImage: {
    width: 100,
    height: 98,
  },
  myInfo: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 10,
    padding: 5,
    margin: 3,
  },
  myInfoText: {
    flex: 1,
    fontSize: 22,
  },
  footer: {
    height: 80,
  },
  myInfoText: {
    flex: 1,
    fontSize: 22,
  },
});
