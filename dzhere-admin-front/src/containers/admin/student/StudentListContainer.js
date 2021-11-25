import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Contents } from '../../../components/admin/student/StudentList'
import { getAgName, getClassList, getStudentList } from '../../../modules/admin/student/student'
 
const StudentListContainer = () => {

  const dispatch = useDispatch();

  const u_phone = '01023454710'

  const [selectedClass, setSelectedClass] = useState(0);

  const { agName, classList, studentList } = useSelector(({ student }) => ({
    agName: student.agName,
    classList: student.classList,
    studentList: student.studentList,
  }))


  useEffect(() => {
    dispatch(getAgName(u_phone));
    dispatch(getClassList(u_phone));
  }, []);

  const onSearch = () => {
    //Alert.alert(`${selectedClass}`);
    // Alert.alert(`${agName.ag_idx}`);
    let agIdx = agName.ag_idx
    // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'+agIdx);
    dispatch(getStudentList({agIdx, selectedClass}))
    Alert.alert('검색완료');
  }

  return (
      <Contents
         agName={agName}
         classList={classList}
         selectedClass={selectedClass}
         setSelectedClass={setSelectedClass}
         onSearch={onSearch}
         studentList={studentList}
      />
  );
};

export default StudentListContainer;