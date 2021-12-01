// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/
import image from "../../../assets/sidebar-logo.png";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
  Platform,
  TouchableOpacity,
} from "react-native";

import { useDispatch } from "react-redux";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";

import { apiLogout } from "../../lib/api/auth/auth";
import { logout } from "../../modules/auth/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import client from "../../lib/api/client";
import toggle_down from "../../../assets/class/toggle_down.png";

const CustomSidebarMenu = (props) => {
  const [pressMain, setPressMain] = useState(false);
  const [pressClass, setPressClass] = useState(false);
  const [pressStudent, setPressStudent] = useState(false);
  const [pressTeacher, setPressTeacher] = useState(false);
  const [labels, setLabel] = useState("");
  const [colors, setColors] = useState("#565966");
  const [weight, setWeight] = useState("300");

  const dispatch = useDispatch();

  const onPressMain = () => {
    if (pressClass || pressStudent || pressTeacher) {
      setPressMain(!pressMain);
      setPressClass(false);
      setPressTeacher(false);
      setPressStudent(false);
    } else {
      setPressMain(!pressMain);
    }
    props.navigation.navigate("ClassList");
    setLabel("ClassList");
  };

  const onPressClass = () => {
    if (pressStudent || pressTeacher) {
      setPressClass(!pressClass);
      setPressTeacher(false);
      setPressStudent(false);
    } else {
      setPressClass(!pressClass);
    }
  };
  
  const onPressStudent = () => {
    if (pressClass || pressTeacher) {
      setPressStudent(!pressStudent);
      setPressTeacher(false);
      setPressClass(false);
    } else {
      setPressStudent(!pressStudent);
    }
  };

  const onPressTeacher = () => {
    if (pressStudent || pressClass) {
      setPressTeacher(!pressTeacher);
      setPressClass(false);
      setPressStudent(false);
    } else {
      setPressTeacher(!pressTeacher);
    }
  };

  return (
    <SafeAreaView
      style={{ flex: 1, backgroundColor: "#CEEDFF", paddingRight: 40 }}
    >
      {/*Top Large Image */}
      <Image source={image} style={styles.headerImage} />
      <DrawerContentScrollView
        {...props}
        style={{
          padding: Platform.OS === "android" ? 5 : 10,
          marginTop: Platform.OS === "android" ? 0 : 23,
        }}
      >
        {/* <DrawerItemList {...props} /> */}
        <View>
          <TouchableOpacity onPress={onPressMain}>
            <Text
              style={{
                padding: 16,
                flexDirection: "row",
                alignItems: "center",
                fontWeight: "bold",
                fontSize: 20,
              }}
            >
              HOME
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={onPressClass}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>강의 및 장소</Text>
              <Image source={toggle_down} style={{ width: 15, height: 12 }} />
            </View>
          </TouchableOpacity>
        </View>
        {pressClass === true ? (
          <View style={{ marginLeft: 10 }}>
            <DrawerItem
              label={labels === "ClassManage" ? ">  강의 관리" : "강의 관리"}
              labelStyle={{
                color: labels === "ClassManage" ? "black" : colors,
                fontWeight: labels === "ClassManage" ? "bold" : weight,
              }}
              onPress={() => {
                props.navigation.navigate("ClassManage");
                setLabel("ClassManage");
                setColors("#565966");
                setWeight("300");
              }}
            />
            <DrawerItem
              label={
                labels === "ClassLocation"
                  ? ">  강의 장소 관리"
                  : "강의 장소 관리"
              }
              labelStyle={{
                color: labels === "ClassLocation" ? "black" : colors,
                fontWeight: labels === "ClassLocation" ? "bold" : weight,
              }}
              onPress={() => {
                props.navigation.navigate("ClassLocation");
                setLabel("ClassLocation");
                setColors("#565966");
                setWeight("300");
              }}
            />
            <DrawerItem
              label={
                labels === "ClassExternal"
                  ? ">  외부 장소 관리"
                  : "외부 장소 관리"
              }
              labelStyle={{
                color: labels === "ClassExternal" ? "black" : colors,
                fontWeight: labels === "ClassExternal" ? "bold" : weight,
              }}
              onPress={() => {
                props.navigation.navigate("ClassExternal");
                setLabel("ClassExternal");
                setColors("#565966");
                setWeight("300");
              }}
            />
          </View>
        ) : (
          <></>
        )}
        <View>
          <TouchableOpacity onPress={onPressStudent}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>수강생</Text>
              <Image source={toggle_down} style={{ width: 15, height: 12 }} />
            </View>
          </TouchableOpacity>
        </View>
        {pressStudent === true ? (
          <View style={{ marginLeft: 10 }}>
            <DrawerItem
              label={
                labels === "StudentList"
                  ? ">  수강생 정보 관리"
                  : "수강생 정보 관리"
              }
              labelStyle={{
                color: labels === "StudentList" ? "black" : colors,
                fontWeight: labels === "StudentList" ? "bold" : weight,
              }}
              onPress={() => {
                props.navigation.navigate("StudentList");
                setLabel("StudentList");
                setColors("#565966");
                setWeight("300");
              }}
            />
            <DrawerItem
              label={
                labels === "StudentAttend"
                  ? ">  수강생별 출결 현황"
                  : "수강생별 출결 현황"
              }
              labelStyle={{
                color: labels === "StudentAttend" ? "black" : colors,
                fontWeight: labels === "StudentAttend" ? "bold" : weight,
              }}
              onPress={() => {
                props.navigation.navigate("StudentAttend");
                setLabel("StudentAttend");
                setColors("#565966");
                setWeight("300");
              }}
            />
            <DrawerItem
              label={
                labels === "StudentAttendClass"
                  ? ">  강의별 출결 현황(수강생)"
                  : "강의별 출결 현황(수강생)"
              }
              labelStyle={{
                color: labels === "StudentAttendClass" ? "black" : colors,
                fontWeight: labels === "StudentAttendClass" ? "bold" : weight,
              }}
              onPress={() => {
                props.navigation.navigate("StudentAttendClass");
                setLabel("StudentAttendClass");
                setColors("#565966");
                setWeight("300");
              }}
            />
          </View>
        ) : (
          <></>
        )}
        <View>
          <TouchableOpacity onPress={onPressTeacher}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <Text style={styles.title}>강사</Text>
              <Image source={toggle_down} style={{ width: 15, height: 12 }} />
            </View>
          </TouchableOpacity>
        </View>
        {pressTeacher === true ? (
          <View style={{ marginLeft: 10 }}>
            <DrawerItem
              label={
                labels === "TeacherList"
                  ? ">  강사 정보 관리"
                  : "강사 정보 관리"
              }
              labelStyle={{
                color: labels === "TeacherList" ? "black" : colors,
                fontWeight: labels === "TeacherList" ? "bold" : weight,
              }}
              onPress={() => {
                props.navigation.navigate("TeacherList");
                setLabel("TeacherList");
                setColors("#565966");
                setWeight("300");
              }}
            />
            <DrawerItem
              label={
                labels === "TeacherAttendClass"
                  ? ">  강의별 출결 현황(강사)"
                  : "강의별 출결 현황(강사)"
              }
              labelStyle={{
                color: labels === "TeacherAttendClass" ? "black" : colors,
                fontWeight: labels === "TeacherAttendClass" ? "bold" : weight,
              }}
              onPress={() => {
                props.navigation.navigate("TeacherAttendClass");
                setLabel("TeacherAttendClass");
                setColors("#565966");
                setWeight("300");
              }}
            />
          </View>
        ) : (
          <></>
        )}
      </DrawerContentScrollView>
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
                    routes: [{ name: "AdminLoginPage" }],
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
            fontSize: Platform.OS === "android" ? 23 : 20,
            textAlign: "center",
            marginBottom: Platform.OS === "android" ? 10 : 10,
          }}
        >
          로그아웃
        </Text>
      </TouchableOpacity>
      <Text
        style={{
          fontSize: 16,
          textAlign: "center",
          color: "grey",
          marginBottom: Platform.OS === "android" ? 40 : 50,
        }}
      >
        더존HERE
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: 90,
    height: 78,
    alignSelf: "center",
    marginTop: Platform.OS === "android" ? 80 : 50,
  },
  title: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 15,
    color: "#505050",
  },
});

export default CustomSidebarMenu;
