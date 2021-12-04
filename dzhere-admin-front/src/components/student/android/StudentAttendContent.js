import React from "react";
import { View, StyleSheet } from "react-native";
import { DataTable } from "react-native-paper";

const dataHeader = ["순번", "날짜", "기관명", "강의명", "수강인원"];

const StudentAttendContent = () => {
  return (
    <>
      <View style={stylesBase.container}>
        <View style={stylesBase.contents}>
          <DataTable>
            <DataTable.Header>
              {dataHeader.map((v, i) => (
                <DataTable.Title>{v}</DataTable.Title>
              ))}
            </DataTable.Header>
          </DataTable>
        </View>
      </View>
    </>
  );
};

const stylesBase = StyleSheet.create({
  container: {
    flex: 6,
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

export default StudentAttendContent;
