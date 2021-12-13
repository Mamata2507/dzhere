import image from '../../../assets/sidebar-logo.png';
import client from "../../lib/api/client";
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Image,
  Text,
  Platform
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { logout } from '../../modules/auth/auth';
import { apiLogout } from '../../lib/api/auth/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CustomSidebarMenu = (props) => {
  const info = useSelector(({check}) => check)
  const dispatch = useDispatch()
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#CEEDFF"}}>
      {/*Top Large Image */}
      <Image source={image} style={styles.sideMenuProfileIcon} />
      <Text style={styles.headName}>🌸 {info?.name}님 환영합니다 🌸</Text>
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
      </DrawerContentScrollView>
      <View>
      <TouchableOpacity
          onPress={() => {
            apiLogout()
              .then(async (res) => {
                if (res.result) {
                  console.log("result : ", res.message);
                  dispatch(logout());
                  try {
                    await AsyncStorage.clear();
                    client.defaults.headers.common["Authorization"] = "";
                    props.navigation.reset({
                      index: 0,
                      routes: [{ name: "UserLoginPage" }],
                    });
                  } catch (e) {
                    console.log("Storage is not working : ", e);
                  }
                } else {
                  console.log(res.message);
                  dispatch(logout());
                  try {
                    await AsyncStorage.clear();
                    client.defaults.headers.common["Authorization"] = "";
                    props.navigation.reset({
                      index: 0,
                      routes: [{ name: "UserLoginPage" }],
                    });
                  } catch (e) {
                    console.log("Storage is not working : ", e);
                  }
                }
              })
              .catch((e) => {
                console.log("apiLogout.catch - e:", e);
              });
          }}
        >
          <Text
            style={{
              fontSize: 25,
              textAlign: "center",
              marginBottom: 16,
            }}
          >
            로그아웃
          </Text>
        </TouchableOpacity>
      </View>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: "grey",
          marginBottom: Platform.OS === "android" ? 40 : 30,
        }}
      >
        더조은HERE
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sideMenuProfileIcon: {
    resizeMode: "center",
    width: 100,
    height: 100,
    alignSelf: "center",
    marginTop: 40,
  },
  iconStyle: {
    width: 15,
    height: 15,
    marginHorizontal: 5,
  },
  customItem: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
  },
  text: { 
    fontSize: 16, 
    textAlign: "center", 
    color: "grey" 
  },
  headerImage: {
    width: 90,
    height: 78,
    alignSelf: "center",
    marginTop: Platform.OS === "android" ? 70 : 30,
  },
  headName: {
    alignSelf: "center",
    marginTop: Platform.OS ==='android' ? "15%" : 35, 
    fontSize: Platform.OS ==='android' ? 16 : 14,
  }
});

export default CustomSidebarMenu;
