import React, { useCallback, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import StudentAttend from "../../components/student/StudentAttend";
import {
  getAgencyList,
  getLessonList,
} from "../../modules/user/studentClassAttend";
import { getStudentCount } from "../../modules/user/studentCount";

const StudentAttendContainerAndroid = () => {
  const phone = "01088630406";
  const dispatch = useDispatch();
  const { agencyList, lessonList, stuCount } = useSelector(
    ({ studentAttend, studentCount }) => ({
      agencyList: studentAttend.agencyList,
      lessonList: studentAttend.lessonList,
      stuCount: studentCount.stuCount,
    })
  );
  const [selectLesson, setSelectLesson] = useState();
  const [selectAgency, setSelectAgency] = useState();

  // load
  useEffect(() => {
    setSelectLesson(() => lessonList[0]);
    setSelectAgency(() => agencyList[0]);
  }, [lessonList, agencyList]);

  useEffect(() => {
    dispatch(getAgencyList(phone));
    dispatch(getLessonList(phone));
  }, []);
  
  const handleSetAttend = useCallback((e) => {
    console.log(e);
    setSelectAttendState(() => e);
  });
  // 전체,기간
  const handleSetDate = useCallback((e) => {
    console.log(e);    
    setSelectDateState(() => e);
  });

  const handleSearchBtn = () => {
    dispatch(getStudentCount());
  };

  return (
    <>
      <StudentAttend agencyList={agencyList} lessonList={lessonList}
      handleSearchBtn={handleSearchBtn} />
    </>
  );
};

export default StudentAttendContainerAndroid;
