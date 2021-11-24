// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/
import image from "../../../assets/logo.png";
import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  StyleSheet,
  Image,
  Text,
  Linking,
} from "react-native";

import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { TouchableOpacity } from "react-native-gesture-handler";

const CustomSidebarMenu = (props) => {
  const [pressClass, setPressClass] = useState(false);
  const onPressClass = () => {
    if (pressStudent || pressTeacher) {
      setPressClass(!pressClass);
      setPressTeacher(false);
      setPressStudent(false);
    } else {
      setPressClass(!pressClass);
    }
  };
  const [pressStudent, setPressStudent] = useState(false);
  const onPressStudent = () => {
    if (pressClass || pressTeacher) {
      setPressStudent(!pressStudent);
      setPressTeacher(false);
      setPressClass(false);
    } else {
      setPressStudent(!pressStudent);
    }
  };
  const [pressTeacher, setPressTeacher] = useState(false);
  const onPressTeacher = () => {
    if (pressStudent || pressClass) {
      setPressTeacher(!pressTeacher);
      setPressClass(false);
      setPressStudent(false);
    } else {
      setPressTeacher(!pressTeacher);
    }
  };

  const [labels, setLabel] = useState("");
  const [colors, setColors] = useState("#505050");
  // const changeColor = useCallback(
  //   () => {
  //    setColors('labe);
  //   },
  //   [colors],
  // )
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#40cae9" }}>
      {/*Top Large Image */}
      <Image source={image} style={styles.headerImage} />
      <DrawerContentScrollView {...props}>
        {/* <DrawerItemList {...props} /> */}
        <View>
          <TouchableOpacity onPress={onPressClass}>
            <Text style={styles.title}>강의 및 장소</Text>
          </TouchableOpacity>
        </View>
        {pressClass === true ? (
          <>
            <DrawerItem
              label="▪️ 강의 목록"
              labelStyle={{ color: labels === "ClassList" ? "white" : colors }}
              onPress={() => {
                props.navigation.navigate("ClassList");
                setLabel("ClassList");
                setColors("#505050");
              }}
            />
            <DrawerItem
              label="▪️ 강의 관리"
              labelStyle={{
                color: labels === "ClassManage" ? "white" : colors,
              }}
              onPress={() => {
                props.navigation.navigate("ClassManage");
                setLabel("ClassManage");
                setColors("#505050");
              }}
            />
            <DrawerItem
              label="▪️ 강의 장소 관리"
              labelStyle={{
                color: labels === "ClassLocation" ? "white" : colors,
              }}
              onPress={() => {
                props.navigation.navigate("ClassLocation");
                setLabel("ClassLocation");
                setColors("#505050");
              }}
            />
            <DrawerItem
              label="▪️ 외부 장소 관리"
              labelStyle={{
                color: labels === "ClassExternal" ? "white" : colors,
              }}
              onPress={() => {
                props.navigation.navigate("ClassExternal");
                setLabel("ClassExternal");
                setColors("#505050");
              }}
            />
          </>
        ) : (
          <></>
        )}
        <View>
          <TouchableOpacity onPress={onPressStudent}>
            <Text style={styles.title}>수강생</Text>
          </TouchableOpacity>
        </View>
        {pressStudent === true ? (
          <>
            <DrawerItem
              label="▪️ 수강생 정보 관리"
              labelStyle={{
                color: labels === "StudentList" ? "white" : colors,
              }}
              onPress={() => {
                props.navigation.navigate("StudentList");
                setLabel("StudentList");
                setColors("#505050");
              }}
            />
            <DrawerItem
              label="▪️ 수강생별 출결 현황"
              labelStyle={{
                color: labels === "StudentAttend" ? "white" : colors,
              }}
              onPress={() => {
                props.navigation.navigate("StudentAttend");
                setLabel("StudentAttend");
                setColors("#505050");
              }}
            />
            <DrawerItem
              label="▪️ 강의별 출결 현황(수강생)"
              labelStyle={{
                color: labels === "StudentAttendClass" ? "white" : colors,
              }}
              onPress={() => {
                props.navigation.navigate("StudentAttendClass");
                setLabel("StudentAttendClass");
                setColors("#505050");
              }}
            />
          </>
        ) : (
          <></>
        )}
        <View>
          <TouchableOpacity onPress={onPressTeacher}>
            <Text style={styles.title}>강사</Text>
          </TouchableOpacity>
        </View>
        {pressTeacher === true ? (
          <>
            <DrawerItem
              label="▪️ 강사 정보 관리"
              labelStyle={{
                color: labels === "TeacherList" ? "white" : colors,
              }}
              onPress={() => {
                props.navigation.navigate("TeacherList");
                setLabel("TeacherList");
                setColors("#505050");
              }}
            />
            <DrawerItem
              label="▪️ 강의별 출결 현황(강사)"
              labelStyle={{
                color: labels === "TeacherAttendClass" ? "white" : colors,
              }}
              onPress={() => {
                props.navigation.navigate("TeacherAttendClass");
                setLabel("TeacherAttendClass");
                setColors("#505050");
              }}
            />
          </>
        ) : (
          <></>
        )}
      </DrawerContentScrollView>
      <Text style={{ fontSize: 16, textAlign: "center", color: "grey" }}>
        더존HERE
      </Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  headerImage: {
    width: 70,
    height: 70,
    alignSelf: "center",
    marginTop: 30,
  },
  title: {
    padding: 16,
    flexDirection: "row",
    alignItems: "center",
    fontWeight: "bold",
    color: "#505050",
  },
});

export default CustomSidebarMenu;
