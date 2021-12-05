import React from "react";
import { Platform, View } from "react-native";

import HeaderWeb from "./web/TeacherAttendClassHeader";
import ContentWeb from "./web/TeacherAttendClassContent";
import HeaderAndroid from "./android/TeacherAttendClassHeader";
import ContentAndroid from "./android/TeacherAttendClassContent";
import FooterAndroid from "./android/TeacherAttendClassFooter";
import { Portal, Provider } from "react-native-paper";
import AttendClassModal from "./android/AttendClassModal";

export default function TeacherAttendClass(props) {
  return (
    <>
      {Platform.OS === "android" ? (
        <>
          <View>
            <Provider>
              <AttendClassModal
                isModalDatePickerVisible={props.isModalDatePickerVisible}
                showModalDatePickerBtn={props.showModalDatePickerBtn}
                hideModalDatePickerBtn={props.hideModalDatePickerBtn}
                modalSetDate={props.modalSetDate}
                modalDate={props.modalDate}
                handleUpdateBtn={props.handleUpdateBtn}
                // modal time picker
                isModalTimePickerVisible={props.isModalTimePickerVisible}
                showModalTimePickerBtn1={props.showModalTimePickerBtn1}
                showModalTimePickerBtn2={props.showModalTimePickerBtn2}
                hideModalTimePickerBtn={props.hideModalTimePickerBtn}
                setStartTime={props.setStartTime}
                setEndTime={props.setEndTime}
                modalStartTime={props.modalStartTime}
                modalEndTime={props.modalEndTime}
                modalTimePickerFlag={props.modalTimePickerFlag}
                updateBtn={props.updateBtn}
                handleVisibleBtn={props.handleVisibleBtn}
                btn1={props.btn1}
                btn2={props.btn2}
                btn3={props.btn3}
                btn4={props.btn4}
                handleEventBtn01={props.handleEventBtn01}
                handleEventBtn02={props.handleEventBtn02}
                handleEventBtn03={props.handleEventBtn03}
                handleEventBtn04={props.handleEventBtn04}
                teacherName={props.teacherName}
              />
              <HeaderAndroid
                btnFlag={props.btnFlag}
                startSearchDate={props.startSearchDate}
                endSearchDate={props.endSearchDate}
                showDatePickerSbtn={props.showDatePickerSbtn}
                showDatePickerEbtn={props.showDatePickerEbtn}
                isDatePickerVisible={props.isDatePickerVisible}
                startDate={props.startDate}
                endDate={props.endDate}
                hideDatePicker={props.hideDatePicker}
                searchHandler={props.searchHandler}
                handleSetAttend={props.handleSetAttend}
                handleSetDate={props.handleSetDate}
                lessonList={props.lessonList}
                agencyList={props.agencyList}
                handleSetTeacherName={props.handleSetTeacherName}
                btnDisable={props.btnDisable}
              />
              <ContentAndroid searchList={props.searchList} />
              <FooterAndroid
                handleVisibleUpdateBtn={props.handleVisibleUpdateBtn}
              />
            </Provider>
          </View>
        </>
      ) : (
        <>
          <HeaderWeb />
          <ContentWeb />
        </>
      )}
    </>
  );
}
