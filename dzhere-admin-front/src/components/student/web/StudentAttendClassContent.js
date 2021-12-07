import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { DataTable } from "react-native-paper";
import CheckBoxIcon from "../../../containers/student/CheckBoxContainer";
import styles from "./Styles";
import AttendClassModal from "./AttendClassModal";

const dataHeader = [
  "선택",
  "날짜",
  "수강생명",
  "출석",
  "퇴실",
  "결석",
  "지각",
  "조퇴",
  "미퇴실",
];

export default function ContentWeb(props) {
  const items = props.searchList;

  return (
    <View style={stylesBase.container}>
      <View style={stylesBase.contents}>
        <View style={stylesBase.rows}>
          <DataTable>
            <DataTable.Header>
              {dataHeader.map((v, i) => (
                <DataTable.Title>{v}</DataTable.Title>
              ))}
            </DataTable.Header>
            <ScrollView>
              {items.map((v, i) => (
                <>
                  <DataTable.Row key={i}>
                    <DataTable.Cell>
                      <CheckBoxIcon item={v} style={styles.checkbox} />
                    </DataTable.Cell>
                    <DataTable.Cell>
                      {v.a_today_date && v.a_today_date}
                    </DataTable.Cell>
                    <DataTable.Cell>{v.u_name}</DataTable.Cell>
                    <DataTable.Cell>
                      {v.a_attend_time && v.a_attend_time}
                    </DataTable.Cell>
                    <DataTable.Cell>
                      {v.a_exit_time && v.a_exit_time}
                    </DataTable.Cell>
                    <DataTable.Cell>
                      {v.a_leave == 1 ? "ㅇ" : ""}
                    </DataTable.Cell>
                    <DataTable.Cell>
                      {v.a_late_status == 1 ? "ㅇ" : ""}
                    </DataTable.Cell>
                    <DataTable.Cell>
                      {v.a_absent == 1 ? "ㅇ" : ""}
                      {/* <Text>{v.a_absent}</Text> */}
                    </DataTable.Cell>
                    <DataTable.Cell>
                      {v.a_not_exit == 1 ? "ㅇ" : ""}
                    </DataTable.Cell>
                  </DataTable.Row>
                </>
              ))}
            </ScrollView>
          </DataTable>
        </View>
      </View>
    </View>
  );
}

const stylesBase = StyleSheet.create({
  container: {
    // flex: 5.5,
    width: "100%",
    marginBottom: 10,
  },
  contents: {
    marginTop: 50,
    borderRadius: 15,
    padding: 5,
  },
  rows: {
    flexDirection: "row",
  },
});
