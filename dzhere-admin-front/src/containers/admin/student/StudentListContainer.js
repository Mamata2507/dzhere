import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Contents } from '../../../components/admin/student/StudentList'
import { getAgName, getClassList, getStudentList } from '../../../modules/admin/student/student'
 
const StudentListContainer = () => {

  const dispatch = useDispatch();

  const u_phone = '01023454710'

  const [selectedClass, setSelectedClass] = useState(0);
  const [selectedAccept, setSelectedAccept] = useState(2);
  const [filterStudentList, setFilterStudentList] = useState([]);

  const { agName, classList, studentList, loadingAgName, loadingStudentList } = useSelector(({ student, loading }) => ({
    agName: student.agName,
    loadingAgName: loading['student/GET_AG_NAME'],
    classList: student.classList,
    studentList: student.studentList,
    loadingStudentList: loading['student/GET_STUDENT_LIST']
  }))

  useEffect(() => {
    dispatch(getAgName(u_phone));
    dispatch(getClassList(u_phone));
  }, []);

  useEffect(() => {
    if(!loadingStudentList && selectedAccept!==2){
        // alert(selectedAccept)
        const tempArr = studentList;
        const tempArr2 = tempArr.filter(item => {return item.u_accept == selectedAccept});
        console.log(tempArr2[0]);
      }
    },[selectedAccept])

  const onSearch = () => {
      // Alert.alert(`${agName.ag_idx}`);
      let agIdx = agName.ag_idx
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'+agIdx);
      dispatch(getStudentList({agIdx, selectedClass}))
  }

  return (
      <Contents
         agName={agName}
         classList={classList}
         selectedClass={selectedClass}
         setSelectedClass={setSelectedClass}
         onSearch={onSearch}
         studentList={studentList}
         loadingAgName={loadingAgName}
         loadingStudentList={loadingStudentList}
         selectedAccept={selectedAccept}
         setSelectedAccept={setSelectedAccept}
        //  pickerActivity={pickerActivity}
      />
  );
};

export default StudentListContainer;