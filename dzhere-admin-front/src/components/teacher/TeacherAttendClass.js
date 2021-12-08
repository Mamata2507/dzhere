import React from "react";
import { Platform, View } from "react-native";

import HeaderAndroid from "./android/TeacherAttendClassHeader";
import ContentAndroid from "./android/TeacherAttendClassContent";
import FooterAndroid from "./android/TeacherAttendClassFooter";
import { Provider } from "react-native-paper";
import AttendClassModal from "./android/AttendClassModal";
import {TeacherAttendClassWeb} from './web/TeacherAttendClassWeb';

export default function TeacherAttendClass({
  editTodayDate,
  editAttendTime,
  editExitTime,
  editLateStatus,
  editLeave,
  editAbsent,
  editNotExit,

  // module state
  teacherIdxName,
  searchType,
  startDate,
  endDate,

  // date picker 상태
  onChangeStartDate,
  onChangeEndDate,

  // 처음 렌더링될 때 가져오기
  agName,
  loadingAgName,
  classList,

  // picker
  selectedClass,
  setSelectedClass,

  // onPress event
  onChangeEditAttendTime,
  onChangeEditExitTime,
  onChangeEditLateStatus,
  onChangeEditLeave,
  onChangeEditAbsent,
  onChangeEditNotExit,
  onChangeSelectedClass,
  onChangeSearchType,
  checkHandler,
  onSearch,
  onUpdate,

  // List
  rowIndexList,
  checkedList,
  teacherAttendList,

  // Modal
  hideModalUpdate,
  showModalUpdate,
  error,
  visibleUpdate,

  /////////////////////////////////////////////////////////////////////////////
  handleSetSelectLesson,
  btnFlag,
  startSearchDate,
  endSearchDate,
  showDatePickerSbtn,
  showDatePickerEbtn,
  isDatePickerVisible,
  hideDatePicker,
  searchHandler,
  handleSetAttend,
  handleSetDate,
  lessonList,
  agencyList,
  searchList,
  handleSetTeacherName,
  btnDisable,
  handleVisibleUpdateBtn,
  handleVisibleBtn,
  handleUpdateBtn,
  // modal
  isModalDatePickerVisible,
  showModalDatePickerBtn,
  hideModalDatePickerBtn,
  modalSetDate,
  modalDate,
  isModalTimePickerVisible,
  showModalTimePickerBtn1,
  showModalTimePickerBtn2,
  hideModalTimePickerBtn,
  setStartTime,
  setEndTime,
  modalStartTime,
  modalEndTime,
  modalTimePickerFlag,
  updateBtn,
  btn1,
  btn2,
  btn3,
  btn4,
  handleEventBtn01,
  handleEventBtn02,
  handleEventBtn03,
  handleEventBtn04,
  teacherName,
}) {
  return (
    <>
      {Platform.OS === "android" ? (
        <>
          <View>
            <Provider>
            <AttendClassModal
                isModalDatePickerVisible={isModalDatePickerVisible}
                showModalDatePickerBtn={showModalDatePickerBtn}
                hideModalDatePickerBtn={hideModalDatePickerBtn}
                modalSetDate={modalSetDate}
                modalDate={modalDate}
                handleUpdateBtn={handleUpdateBtn}
                // modal time picker
                isModalTimePickerVisible={isModalTimePickerVisible}
                showModalTimePickerBtn1={showModalTimePickerBtn1}
                showModalTimePickerBtn2={showModalTimePickerBtn2}
                hideModalTimePickerBtn={hideModalTimePickerBtn}
                setStartTime={setStartTime}
                setEndTime={setEndTime}
                modalStartTime={modalStartTime}
                modalEndTime={modalEndTime}
                modalTimePickerFlag={modalTimePickerFlag}
                updateBtn={updateBtn}
                handleVisibleBtn={handleVisibleBtn}
                btn1={btn1}
                btn2={btn2}
                btn3={btn3}
                btn4={btn4}
                handleEventBtn01={handleEventBtn01}
                handleEventBtn02={handleEventBtn02}
                handleEventBtn03={handleEventBtn03}
                handleEventBtn04={handleEventBtn04}
                teacherName={teacherName}
              />
              <HeaderAndroid
                btnFlag={btnFlag}
                startSearchDate={startSearchDate}
                endSearchDate={endSearchDate}
                showDatePickerSbtn={showDatePickerSbtn}
                showDatePickerEbtn={showDatePickerEbtn}
                isDatePickerVisible={isDatePickerVisible}
                startDate={startDate}
                endDate={endDate}
                hideDatePicker={hideDatePicker}
                searchHandler={searchHandler}
                handleSetAttend={handleSetAttend}
                handleSetDate={handleSetDate}
                lessonList={lessonList}
                agencyList={agencyList}
                handleSetTeacherName={handleSetTeacherName}
                btnDisable={btnDisable}
                handleSetSelectLesson={handleSetSelectLesson}
              />
              <ContentAndroid searchList={searchList} />
              <FooterAndroid
                handleVisibleUpdateBtn={handleVisibleUpdateBtn}
              />
            </Provider>
          </View>
        </>
      ) : (
        <TeacherAttendClassWeb
          editTodayDate={editTodayDate}
          editAttendTime={editAttendTime}
          editExitTime={editExitTime}
          editLateStatus={editLateStatus}
          editLeave={editLeave}
          editAbsent={editAbsent}
          editNotExit={editNotExit}
    
          // module state
          teacherIdxName={teacherIdxName}
          searchType={searchType}
          startDate={startDate}
          endDate={endDate}
    
          // date picker 상태
          onChangeStartDate={onChangeStartDate}
          onChangeEndDate={onChangeEndDate}
    
          // 처음 렌더링될 때 가져오기
          agName={agName}
          loadingAgName={loadingAgName}
          classList={classList}
    
          // picker
          selectedClass={selectedClass}
          setSelectedClass={setSelectedClass}
    
          // onPress event
          onChangeEditAttendTime={onChangeEditAttendTime}
          onChangeEditExitTime={onChangeEditExitTime}
          onChangeEditLateStatus={onChangeEditLateStatus}
          onChangeEditLeave={onChangeEditLeave}
          onChangeEditAbsent={onChangeEditAbsent}
          onChangeEditNotExit={onChangeEditNotExit}
          onChangeSelectedClass={onChangeSelectedClass}
          onChangeSearchType={onChangeSearchType}
          checkHandler={checkHandler}
          onSearch={onSearch}
          
          onUpdate={onUpdate}
    
          // List
          rowIndexList={rowIndexList}
          checkedList={checkedList}
          teacherAttendList={teacherAttendList}
    
          // Modal
          hideModalUpdate={hideModalUpdate}
          showModalUpdate={showModalUpdate}
          error={error}
          visibleUpdate={visibleUpdate}
        />
      )}
    </>
  );
}
