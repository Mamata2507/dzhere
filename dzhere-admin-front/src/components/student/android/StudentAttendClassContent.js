import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import { DataTable } from "react-native-paper";
import CheckBoxIcon from "../../../containers/student/CheckBoxContainer";
import styles from "./Styles";
import AttendClassModal from "./AttendClassModal";

const dataHeader = ["선택", "날짜", "수강생명", "출석", "퇴실", "결석"];

export default function ContentAndroid(props) {
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
                      {v.a_today_date && v.a_today_date.slice(5, 10)}
                    </DataTable.Cell>
                    <DataTable.Cell>{v.u_name}</DataTable.Cell>
                    <DataTable.Cell>
                      {v.a_attend_time && v.a_attend_time.slice(11, 16)}
                    </DataTable.Cell>
                    <DataTable.Cell>
                      {v.a_exit_time && v.a_exit_time.slice(11, 16)}
                    </DataTable.Cell>
                    <DataTable.Cell>{v.a_leave ? "결석" : ""}</DataTable.Cell>
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
    flex: 5.5,
    width: "100%",
    marginBottom: 10,
  },
  contents: {
    height: "95%",
    borderRadius: 15,
    padding: 5,
  },
  rows: {
    flexDirection: "row",
  },
});
