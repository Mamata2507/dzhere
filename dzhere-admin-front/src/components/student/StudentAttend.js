import React from "react";
import { Platform, View } from "react-native";
import StudentAttendContent from "./android/StudentAttendContent";
import StudentAttendHeader from "./android/StudentAttendHeader";

const StudentAttend = (props) => {
  return (
    <>
      {Platform.OS === "android" ? (
        <>
          <StudentAttendHeader
            agencyList={props.agencyList}
            lessonList={props.lessonList}
            handleSearchBtn={props.handleSearchBtn}
          />
          <StudentAttendContent />
        </>
      ) : (
        <>
          <View></View>
        </>
      )}
    </>
  );
};

export default StudentAttend;
