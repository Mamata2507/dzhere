import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  Text,
  Image,
  FlatList,
  AsyncStorage,
  ScrollView,
  Button,
  TouchableOpacity,
  Alert,
  Platform,
} from "react-native";
import {
  ButtonView,
  StyledButtons,
  StyledSelect,
  StyledText,
  StyledClassList,
  StyledRefreshButtons,
} from "./CheckStyledLayout";
import moment from "moment";
import "moment/locale/ko"; // 자동으로 한국시간을 가져온다. 하지만 명확히 하기 위해 import

import logo from "../../../assets/logo.png";
import check_icon from "../../../assets/check/calendar.png";
import check_disable_icon from "../../../assets/check/calendar_gray.png";
import check_35px_icon from "../../../assets/check/calendar_35px.png";
import exit_icon from "../../../assets/check/exit.png";
import exit_disable_icon from "../../../assets/check/exit_gray.png";

import outgo_icon from "../../../assets/check/outgo.png";
import outgo2_icon from "../../../assets/check/outgo2.png";
import outgo_gray_icon from "../../../assets/check/outgo_gray.png";
import outgo_gray2_icon from "../../../assets/check/outgo_gray2.png";

import clock_icon from "../../../assets/check/clock.png";
import { SafeAreaView } from "react-native-safe-area-context";
import refresh_icon from "../../../assets/check/refresh.png";
import { StatusBar } from "expo-status-bar";

const Item = ({ label, attendState, source }) => (
  <View style={styles.footer}>
    <ScrollView>
      <View
        style={
          Platform.OS === "android"
            ? [{ flexDirection: "row", height: 50 }, styles.centerAlign]
            : [{ flexDirection: "row", height: 60 }, styles.centerAlign]
        }
      >
        {Platform.OS === "web" && (
          <Text style={{ fontSize: 30 }}>{attendState}</Text>
        )}
        <Image
          source={
            attendState == "외출"
              ? outgo_icon
              : attendState == "외출종료"
              ? outgo2_icon
              : check_icon
          }
        />
        <Image
          source={clock_icon}
          style={{ width: 15, height: 15, alignSelf: "baseline" }}
        />
        <Text style={styles.footerText}>{label}</Text>
      </View>
      <View style={{ flexDirection: "row" }}>
        {Platform.OS === "android" && (
          <Text style={{ fontSize: Platform.OS === "android" ? 23 : 30 }}>
            {attendState}
          </Text>
        )}
      </View>
    </ScrollView>
  </View>
);

export const Header = ({ onRefresh }) => {
  return (
    <>
      {/* <StatusBar/> */}
      <View style={[styles.container, { alignItems: "center", marginTop: 20 }]}>
        <View style={styles.header}></View>
        <View style={{ alignSelf: "flex-end", marginRight: 15 }}>
          <TouchableOpacity onPress={onRefresh}>
            <Image source={refresh_icon} />
          </TouchableOpacity>
        </View>
        <Image style={styles.headerImage} source={logo} />
      </View>
    </>
  );
};

export const Contents = ({
  onPressStartTime,
  onPressExitTime,
  classList,
  classTime,
  endtime,
  attendList,
  btnDisable,
  onPressLeaveTime,
  exitBtnDisable,
  outgoBtnDisable,
  outgoBtnDisable2,
  onPressOutgo,
  onPressOutgo2,
}) => {
  const renderItem = ({ item }) => (
    <Item
      label={item.time}
      attendState={item.attendState}
      source={item.source}
    />
  );

  var week = new Array(
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일"
  );

  return (
    <View style={styles.contents}>
      <View style={{ flexDirection: "row", paddingBottom: 15 }}>
        <Text
          style={{
            width: Platform.OS === "android" ? "25%" : "60%",
            textAlign: "center",
            fontSize: 25,
            fontWeight: "bold",
          }}
        >
          출석 체크
        </Text>
        <Text style={{ fontSize: 25 }}>
          {"<" + moment().format("YYYY-MM-DD")}{" "}
          {week[new Date().getDay()] + ">"}
        </Text>
      </View>
      <StyledClassList>
        {classList ? classList.c_name : "수강중인 수업이 없습니다."}
      </StyledClassList>
      {classTime[0] && endtime ? (
        <>
          <Text style={styles.test2}>
            강의 시간:{" "}
            {classTime[0].ct_start_time
              ? classTime[0].ct_start_time.slice(0, 5)
              : ""}{" "}
            ~ {classTime[0].ct_end_time.slice(0, 5)}
          </Text>
          <Text style={styles.test2}>
            점심 시간:{" "}
            {classTime[0].ct_break_start && classTime[0].ct_break_start
              ? classTime[0].ct_break_start.slice(0, 5)
              : ""}{" "}
            ~{" "}
            {classTime[0].ct_break_end && classTime[0].ct_break_end.slice(0, 5)}
          </Text>
          <Text style={styles.test2}>
            출석 인정 시간:{" "}
            {classTime[0].ct_attend_starttime &&
              classTime[0].ct_attend_starttime.slice(0, 5)}{" "}
            ~ {classTime[0].ct_attend_endtime.slice(0, 5)}
          </Text>
          <Text style={styles.test2}>
            퇴실 인정 시간: {classTime[0].ct_end_time.slice(0, 5)} ~{" "}
            {endtime.slice(0, 5)}
          </Text>
        </>
      ) : (
        <Text>loading...</Text>
      )}
      <ButtonView>
        <StyledButtons
          title={"출석"}
          source={!btnDisable ? check_icon : check_disable_icon}
          disabled={btnDisable}
          onPress={onPressStartTime}
        />
        <StyledButtons
          title={"외출"}
          source={outgoBtnDisable ? outgo_icon : outgo_gray_icon}
          disabled={!outgoBtnDisable}
          onPress={onPressOutgo}
        />
        <StyledButtons
          title={"외출종료"}
          source={outgoBtnDisable2 ? outgo2_icon : outgo_gray2_icon}
          disabled={!outgoBtnDisable2}
          onPress={onPressOutgo2}
        />
        <StyledButtons
          title={"조퇴"}
          source={!exitBtnDisable ? exit_icon : exit_disable_icon}
          disabled={exitBtnDisable}
          onPress={onPressLeaveTime}
        />
        <StyledButtons
          title={"퇴실"}
          source={!exitBtnDisable ? check_icon : check_disable_icon}
          disabled={exitBtnDisable}
          onPress={onPressExitTime}
        />
      </ButtonView>
      <SafeAreaView
        style={
          Platform.OS === "android"
            ? [styles.mySafeArea, styles.myScrollView]
            : { width: "50%" }
        }
      >
        {attendList ? (
          <>
            <FlatList
              scrollEnabled={true}
              style={{
                marginBottom: 50,
                marginTop: Platform.OS === "android" ? 0 : 1,
              }}
              data={attendList}
              keyExtractor={(v) => v.id}
              renderItem={renderItem}
              source={check_disable_icon}
            />
          </>
        ) : (
          <>
            <Text>{"..."}</Text>
          </>
        )}
        {/* <FlatList style={{marginBottom:10}} data={attendList} keyExtractor={v=>v.id} renderItem={renderItem}/> */}
      </SafeAreaView>
    </View>
  );
};

export const Footer = () => {
  return (
    <View style={[styles.container, styles.footer]}>
      <Text style={styles.text}>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centerAlign: {
    justifyContent: "space-between",
  },
  container: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    height: 160,
  },
  headerImage: {
    width: 100,
    height: 98,
  },
  header: {
    height: Platform.OS === "android" ? 40 : 70,
  },
  contents: {
    // flex: 2,
    marginTop: Platform.OS === "android" ? "7%" : "10%",
    justifyContent: "center",
    alignItems: "center",
    height: Platform.OS === "android" ? "80%" : "60%",
    // marginBottom:100,
  },
  footer: {
    // flex: 2,
    justifyContent: "space-between",
    flexDirection: "column",
    backgroundColor: "#CEEDFF",
    marginBottom: 2,
    marginTop: Platform.OS === "android" ? 10 : 10,
    marginLeft: Platform.OS === "android" ? 15 : 10,
    marginRight: Platform.OS === "android" ? 15 : 10,
    borderRadius: Platform.OS === "android" ? 25 : 0,
    padding: Platform.OS === "android" ? 10 : 0,
  },
  footerText: {
    fontSize: 18,
  },
  text: {
    fontSize: 26,
  },
  test2: {
    fontSize: 20,
  },
  mySafeArea: {
    flex: 1,
    marginBottom: 4,
    width: "100%",
  },
  myScrollView: {
    backgroundColor: "white",
    width: "100%",
  },
});
