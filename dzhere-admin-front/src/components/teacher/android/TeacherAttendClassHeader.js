import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Picker,
  View,
  Text,
  TextInput,
  Button,
} from "react-native";
import styles from "./Styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";

const attendState = ["전체", "지각", "조퇴", "결석", "미퇴실"];
const lookup = ["전체", "기간"];

export default function HeaderAndroid(props) {
  const agList = props.agencyList;
  const lessonList = props.lessonList;
  // const [btnDisable, setBtnDisable] = useState(true);

  // useEffect(() => {
  //   console.log(btnDisable);
  // }, [btnDisable]);
  
  return (
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
        <View style={styles.picker}>
          <Text style={[styles.text, { marginLeft: 15 }]}>강사명</Text>
          <TextInput
            style={[
              styles.pickerText,
              {
                marginLeft: 15,
                backgroundColor: "white",
                borderStyle: "solid",
                borderRadius: 10,
              },
            ]}
            keyboardType="default"
            value={props.teacherName}
            // value={"백문기"}
            placeholder={"강사명"}
            onChangeText={props.handleSetTeacherName}
          />
          <Picker
            style={[styles.miniPicker]}
            onValueChange={props.handleSetAttend}
          >
            {attendState.map((v, i) => (
              <Picker.Item label={v} value={i} key={i} />
            ))}
          </Picker>
          <Button
            title={"검색"}
            color={"#5AA0C8"}
            onPress={props.searchHandler}
          />
        </View>
        <View style={[styles.picker, { flexDirection: "row" }]}>
          <Text style={[styles.text, { marginLeft: 15, marginRight: 15 }]}>
            조회일
          </Text>
          <Button
            title={props.startSearchDate}
            color={"#5AA0C8"}
            onPress={props.showDatePickerSbtn}
            disabled={props.btnDisable}
          />
          <Text style={{ marginRight: 7, marginLeft: 7 }}>~</Text>
          <Button
            title={props.endSearchDate}
            color={"#5AA0C8"}
            onPress={props.showDatePickerEbtn}
            disabled={props.btnDisable}
          />
          <DateTimePickerModal
            key={1}
            title="Show Date Picker"
            mode="date"
            isVisible={props.isDatePickerVisible}
            onConfirm={(props.btnFlag===0)?props.startDate:props.endDate}
            onCancel={props.hideDatePicker}
          />
          <Picker
            style={[styles.miniPicker]}
            selectedValue={lookup}
            onValueChange={props.handleSetDate}
          >
            {lookup.map((v, i) => (
              <Picker.Item label={v} value={i} />
            ))}
          </Picker>
        </View>
      </View>
    </View>
  );
}

const stylesBase = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    flex: 3.5,
  },
  header: {
    padding: "3%",
    margin: 10,
    marginTop: 30,
    borderRadius: 15,
    backgroundColor: "#CEEDFF",
  },
});
