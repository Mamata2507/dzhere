import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { CSVLink } from 'react-csv';
import { useSelector } from "react-redux";
import styles from "./Styles";

const FooterWeb = ({
  searchList,
  handleVisibleUpdateBtn,
  lessonList,
  searchObject
}) => {
  const headers = [
    { label: "순번", key: "index" },
    { label: "수강생명", key: "name" },
    { label: "수강명", key: "class" },
    { label: "출석일", key: "today" },
    { label: "출석시간", key: "attend_time" },
    { label: "퇴실시간", key: "exit_time" },
    { label: "결석 유무", key: "leave" },
  ];
  const data = searchList.map((item, idx) => ({
    index: idx,
    name: item.u_name,
    class: searchObject,
    today: item.a_today_date,
    attend_time: item.a_attend_time,
    exit_time: item.a_exit_time,
    leave: item.a_leave ? "유" : "무",
  }));

  const classname = searchObject;
  const name = searchList[0]?.u_name;
  return (
    <>
      <View style={stylesBase.container}>
        <View style={stylesBase.footer}>
          <TouchableOpacity
            style={{
              backgroundColor: "#5AA0C8",
              borderRadius: 6,
              width: "30%",
              height: 30,
              alignItems: "center",
              padding: 5,
              marginRight: 10,
            }}
            onPress={handleVisibleUpdateBtn}
          >
            <Text style={styles.btnText}>수정</Text>
          </TouchableOpacity>

          <CSVLink
            headers={headers}
            data={data}
            filename={"수강생_" + name + "_" + classname + "_출석부" + ".csv"}
            target="_blank"
            style={{ textDecoration: "none", }}
          >
            <TouchableOpacity onPress={() => alert('출석부를 다운로드 하시겠습니까?')}>
              <Text style={{ color: "#5AA0C8", width: 100 }}>
                Excel 다운로드
              </Text>
            </TouchableOpacity>
          </CSVLink>

        </View>
      </View>
    </>
  );
};

const stylesBase = StyleSheet.create({
  container: {
    // flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  footer: {
    // alignItems: "center",
    // alignContent: "center",
    display: "flex",
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  rows: {
    flexDirection: "row",
  },
});

export default FooterWeb;
