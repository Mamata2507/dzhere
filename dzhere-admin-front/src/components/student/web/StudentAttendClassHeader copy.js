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
import DatePicker from "react-datepicker";
import "./react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";

const attendState = ["전체", "지각", "조퇴", "결석", "미퇴실"];
const lookup = ["전체", "기간"];

export default function HeaderWeb(props) {
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
          <Text style={[styles.text, { marginLeft: 30 }]}>기관</Text>
          <Picker style={[styles.pickerText]}>
            {agList.map((v) => (
              <Picker.Item label={v.ag_name} value={v.ag_idx} />
            ))}
          </Picker>
        </View>
        <View style={styles.picker}>
          <Text style={[styles.text, { marginLeft: 30 }]}>강의</Text>
          <Picker style={[styles.pickerText]}>
            {lessonList.map((v) => (
              <Picker.Item label={v.c_name} value={v.c_idx} />
            ))}
          </Picker>
        </View>
        <View style={styles.picker}>
          <Text style={[styles.text, { marginLeft: 30 }]}>수강생명</Text>
          <TextInput
            style={[
              styles.pickerText,
              {
                marginLeft: 30,
                backgroundColor: "white",
                borderStyle: "solid",
                borderRadius: 10,
              },
            ]}
            keyboardType="default"
            value={props.teacherName}
            // value={'김상연'}
            placeholder={"수강생명"}
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
          <Text style={[styles.text, { marginLeft: 30, marginRight: 30 }]}>
            조회일
          </Text>
          {/* <Button
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
          /> */}
          {/* <DateTimePickerModal
            title="Show Date Picker"
            mode="date"
            isVisible={props.isDatePickerVisible}
            onConfirm={props.btnFlag === 0 ? props.startDate : props.endDate}
            onCancel={props.hideDatePicker}
          /> */}
          <CustomDatePicker
            locale={ko}
            dateFormat="yyyy-MM-dd"
            placeholderText={props.startSearchDate}
            showPopperArrow={false}
            selected={props.isDatePickerVisible}
            onChange={props.startDate}
            disabled={props.btnDisable}
            // minDate={new Date()}
            showMonthDropdown={true}
            disabledKeyboardNavigation
            withPortal
            portalId="start-date"
            btnDisable={props.btnDisable}
          />
          <Text style={{ marginRight: 7, marginLeft: 7 }}>~</Text>
          <CustomDatePicker
            locale={ko}
            dateFormat="yyyy-MM-dd"
            placeholderText={props.endSearchDate}
            showPopperArrow={false}
            selected={props.isDatePickerVisible}
            onChange={props.endDate}
            disabled={props.btnDisable}            
            showMonthDropdown={true}
            disabledKeyboardNavigation
            withPortal
            portalId="end-date"
          />
          <Picker
            style={[styles.miniPicker]}            
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
    justifyContent: "center",
    width: 1100,
  },
  header: {
    padding: "3%",
    margin: 10,
    marginTop: 50,
    borderRadius: 15,
    backgroundColor: "#CEEDFF",
  },
});

const CustomDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  height: 30px;
  width: 80px;
  border-style: none;
  font-size: 15px;
  color: black;
  border-color: white;
  ${({ btnDisable }) => {
    return btnDisable ? `backgroundColor:red` : `backgroundColor:yellow`;
  }}
`;
