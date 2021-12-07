import React from "react";
import { View, StyleSheet, Text } from "react-native";
import { DataTable } from "react-native-paper";

const dataHeader = ["시작날짜",'종료날짜', "기관명", "강의명", "수강인원"];

const StudentAttendContentWeb = (props) => {
  const items = props.stuCount;
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
            {(items.ct_start_date)?
            <>
            <DataTable.Row>
              <DataTable.Cell>{items.ct_start_date}</DataTable.Cell>
              <DataTable.Cell>{items.ct_end_date}</DataTable.Cell>
              <DataTable.Cell>{items.ag_name}</DataTable.Cell>
              <DataTable.Cell>{items.c_name}</DataTable.Cell>
              <DataTable.Cell>{items.total_count}</DataTable.Cell>
            </DataTable.Row>         
            </>
            :<></>}
            
          </DataTable>
        </View>
      </View>
    </>
  );
};

const stylesBase = StyleSheet.create({
  container: {
    flex: 6,
    width: "59%",
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

export default StudentAttendContentWeb;
