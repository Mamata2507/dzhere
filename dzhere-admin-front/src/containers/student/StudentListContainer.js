import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Contents } from '../../components/student/StudentList'
import { getAgName, getClassList, getStudentList, setFilterList, deleteUser } from '../../modules/student/student'

const StudentListContainer = () => {
  
  const dispatch = useDispatch();

  const u_phone = '01088630406';
  
  const [selectedClass, setSelectedClass] = useState(0);
  const [selectedAccept, setSelectedAccept] = useState(2);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [uName, onChangeUname] = useState('');
  const [uPhone, onChangeUphone] = useState('');

  const { agName, classList, studentList, loadingAgName, 
          loadingStudentList, filterList, loadingFilterList,
          uid, } = useSelector(({ student, loading }) => ({
    agName: student.agName,
    loadingAgName: loading['student/GET_AG_NAME'],
    classList: student.classList,
    studentList: student.studentList,
    loadingStudentList: loading['student/GET_STUDENT_LIST'],
    filterList: student.filterList,
    loadingFilterList: student.loadingFilterList,
    uid: student.uid, 
  }))

  useEffect(() => {
    dispatch(getAgName(u_phone));
    dispatch(getClassList(u_phone));
  }, []);

  useEffect(() => {
    if(!loadingStudentList && selectedAccept!==2){
        const tempArr = studentList.filter(item => {return item.u_accept == selectedAccept});
        dispatch(setFilterList(tempArr))
      }
    },[selectedAccept])

  const onSearch = () => {
      // Alert.alert(`${agName.ag_idx}`);      
      let agIdx = agName.ag_idx
      // console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>'+agIdx);
      dispatch(getStudentList({agIdx, selectedClass}))
  }

  const showModalAdd = () => setVisibleAdd(true);
  const hideModalAdd = () => setVisibleAdd(false);
  
  const onAdd = () => {
    Alert.alert('추가')
  }

  const showModalUpdate = () => setVisibleUpdate(true);
  
  const onUpdate = () => {
      Alert.alert('수정')
  }


  const onDelete = () => {
    Alert.alert(
      "",
      "수강생을 삭제 하시겠습니까?",
      [
        {
          text: "취소",
          onPress: () => console.log("취소"),
          style: "cancel"
        },
        { text: "확인", onPress: () => 
          {
            dispatch(deleteUser(uid))
            alert('삭제완료!')
            let agIdx = agName.ag_idx
            dispatch(getStudentList({agIdx, selectedClass}))
          }
        }
      ]
    );
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
         filterList={filterList}
         loadingFilterList={loadingFilterList}
         onDelete={onDelete}
         showModalAdd={showModalAdd}
         visibleAdd={visibleAdd}
         hideModalAdd={hideModalAdd}
         uName={uName}
         onChangeUname={onChangeUname}
         uPhone={uPhone}
         onChangeUphone={onChangeUphone}
         onAdd={onAdd}
         showModalUpdate={showModalUpdate}
      />
  );
};

export default StudentListContainer;