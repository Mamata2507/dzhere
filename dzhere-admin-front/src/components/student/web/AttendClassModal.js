import React, { useEffect, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Modal, Portal, Provider, DataTable, Button } from "react-native-paper";
import styles from "./Styles";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import Checkbox from "expo-checkbox";
import { useDispatch, useSelector } from "react-redux";
import { setLateStatus } from "../../../modules/user/studentClassAttend";
import DatePicker from "react-datepicker";
import "./react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";

const AttendClassModalWeb = (props) => {
  const headers = ["지각", "조퇴", "결석", "미퇴실"];
  return (
    <>
      <Portal>
        <Modal
          visible={props.updateBtn}
          contentContainerStyle={styles.modal}
          onDismiss={props.handleVisibleBtn}
        >
          <Text
            style={([styles.modalText], { fontSize: 30, textAlign: "center" })}
          >
            출결 정보 수정
          </Text>
          <View style={styles.lineContainer}>
            <View style={styles.line} />
          </View>
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Text style={[styles.text, { fontSize: 20, width: "28%" }]}>
                날짜 :{" "}
              </Text>
              <CustomDatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                placeholderText={props.modalDate}
                showPopperArrow={false}
                selected={props.isModalDatePickerVisible}
                onChange={props.modalSetDate}
                showMonthDropdown={true}
                disabledKeyboardNavigation
                withPortal
                portalId="modal-date"
              />
              {/* <TouchableOpacity
                style={[styles.btn, { margin: 5, width: "50%" }]}
                onPress={props.showModalDatePickerBtn}
              >
                <Text style={styles.btnText}>
                  {props.modalDate && props.modalDate.slice(2, 10)}
                </Text>
              </TouchableOpacity> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Text style={[styles.text, { fontSize: 20 }]}>수강생명 : </Text>
              <Text
                style={[styles.text, { fontSize: 25, alignItems: "center" }]}
              >
                {props.teacherName}
              </Text>
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Text style={[styles.text, { fontSize: 20 }]}>출석 시간 : </Text>
              <CustomDatePicker
                locale={ko}
                dateFormat="HH:mm:ss"
                placeholderText={props.modalStartTime}
                showPopperArrow={false}
                selected={props.isModalTimePickerVisible}
                onChange={props.setStartTime}
                showPopperArrow={false}
                showTimeSelect
                showTimeSelectOnly
                disabledKeyboardNavigation
                timeCaption="time"
                withPortal
                portalId="start-time"
              />
              {/* <TouchableOpacity
                style={[styles.btn, { margin: 5, width: "50%" }]}
                onPress={props.showModalTimePickerBtn1}
              >
                <Text style={styles.btnText}>
                  {props.modalStartTime && props.modalStartTime}
                </Text>
              </TouchableOpacity> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "50%",
              }}
            >
              <Text style={[styles.text, { fontSize: 20 }]}>퇴실 시간 : </Text>
              <CustomDatePicker
                locale={ko}
                dateFormat="HH:mm:ss"
                placeholderText={props.modalEndTime}
                showPopperArrow={false}
                selected={props.isModalTimePickerVisible}
                onChange={props.setEndTime}
                showPopperArrow={false}
                showTimeSelect
                showTimeSelectOnly
                disabledKeyboardNavigation
                timeCaption="time"
                withPortal
                portalId="start-time"
              />
              {/* <TouchableOpacity
                style={[styles.btn, { margin: 5, width: "50%" }]}
                onPress={props.showModalTimePickerBtn2}
              >
                <Text style={[styles.btnText]}>
                  {props.modalEndTime && props.modalEndTime}
                </Text>
              </TouchableOpacity> */}
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                width: "50%",
              }}
            >
              <DataTable>
                <DataTable.Header>
                  {headers.map((v) => (
                    <DataTable.Title>{v}</DataTable.Title>
                  ))}
                </DataTable.Header>

                <DataTable.Row>
                  <DataTable.Cell>
                    <Checkbox
                      value={props.btn1}
                      onValueChange={props.handleEventBtn01}
                      style={styles.checkbox}
                    />
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Checkbox
                      value={props.btn2}
                      onValueChange={props.handleEventBtn02}
                      style={styles.checkbox}
                    />
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Checkbox
                      value={props.btn3}
                      onValueChange={props.handleEventBtn03}
                      style={styles.checkbox}
                    />
                  </DataTable.Cell>
                  <DataTable.Cell>
                    <Checkbox
                      value={props.btn4}
                      onValueChange={props.handleEventBtn04}
                      style={styles.checkbox}
                    />
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
            <TouchableOpacity
              style={[styles.btn, { margin: 15, backgroundColor: "#5AA0C8" }]}
              onPress={props.handleUpdateBtn}
            >
              <Text style={styles.btnText}>{"수정"}</Text>
            </TouchableOpacity>

            {/* <DateTimePickerModal
              title="modal Date Picker"
              mode="date"
              isVisible={props.isModalDatePickerVisible}
              onConfirm={props.modalSetDate}
              onCancel={props.hideModalDatePickerBtn}
            />
            <DateTimePickerModal
              title="modal Time Picker"
              mode="time"
              isVisible={props.isModalTimePickerVisible}
              onConfirm={
                props.modalTimePickerFlag
                  ? props.setStartTime
                  : props.setEndTime
              }
              onCancel={props.hideModalTimePickerBtn}
            /> */}
          </View>
        </Modal>
      </Portal>
    </>
  );
};

const CustomDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  height: 20px;
  width: 100%;
  border-style: none;
  font-size: 20px;
  /* background-color: #5aa0c8; */
  border-color: white;
  color: tomato;
  align-items: center;
`;

export default AttendClassModalWeb;
