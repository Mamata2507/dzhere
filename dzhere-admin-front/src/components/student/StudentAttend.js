import React from "react";
import { Platform, View } from "react-native";
import StudentAttendContent from "./android/StudentAttendContent";
import StudentAttendHeader from "./android/StudentAttendHeader";
import StudentAttendContentWeb from "./web/StudentAttendContent";
import StudentAttendHeaderWeb from "./web/StudentAttendHeader";

const StudentAttend = (props) => {
  return (
    <>
      {Platform.OS === "android" ? (
        <>
          <StudentAttendHeader
            agencyList={props.agencyList}
            lessonList={props.lessonList}
            handleSearchBtn={props.handleSearchBtn}
            handleSelectLesson={props.handleSelectLesson}
          />
          <StudentAttendContent 
            stuCount = {props.stuCount}
          />
        </>
      ) : (
        <>
          <StudentAttendHeaderWeb
            agencyList={props.agencyList}
            lessonList={props.lessonList}
            handleSearchBtn={props.handleSearchBtn}
            handleSelectLesson={props.handleSelectLesson}
          />
          <StudentAttendContentWeb
            stuCount = {props.stuCount}
          />
        </>
      )}
    </>
  );
};

export default StudentAttend;
