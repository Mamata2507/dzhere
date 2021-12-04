import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Picker,
  TouchableOpacity,
  Button,
} from "react-native";
import styles from "./Styles";

const StudentAttendHeader = (props) => {
  const agList = props.agencyList;
  const lessonList = props.lessonList;

  return (
    <>
      <View style={stylesBase.container}>
        <View style={stylesBase.header}>
          <View style={styles.picker}>
            <Text style={[styles.text, { marginLeft: 15 }]}>기관</Text>
            <Picker style={[styles.pickerText]}>
              {agList.map((v) => (
                <Picker.Item label={v.ag_name} value={v.ag_idx} />
              ))}
            </Picker>
          </View>
          <View style={styles.picker}>
            <Text style={[styles.text, { marginLeft: 15 }]}>강의</Text>
            <Picker style={[styles.pickerText]}>
              {lessonList.map((v) => (
                <Picker.Item label={v.c_name} value={v.c_idx} />
              ))}
            </Picker>
          </View>
          <View style={{ alignSelf: "flex-end" }}>
            <Button title={"검색"} color={"#5AA0C8"} />
          </View>
        </View>
      </View>
    </>
  );
};

const stylesBase = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    flex: 3,
  },
  header: {
    padding: "3%",
    margin: 10,
    marginTop: 30,
    borderRadius: 15,
    backgroundColor: "#CEEDFF",
  },
});

export default StudentAttendHeader;
