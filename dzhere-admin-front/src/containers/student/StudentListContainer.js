import React, { useEffect, useState } from 'react';
import { Alert } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Contents } from '../../components/student/StudentList'
import student, { getAgName, getClassList, getStudentList, setFilterList, deleteUser, countUser, insertUser } from '../../modules/student/student'

const StudentListContainer = () => {
  
  const dispatch = useDispatch();

  const u_phone = '01023454710';
  
  const [selectedClass, setSelectedClass] = useState(0);
  const [selectedAccept, setSelectedAccept] = useState(2);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [uName, onChangeUname] = useState('');
  const [uPhone, onChangeUphone] = useState('');
  const [selectedClassAdd, setSelectedClassAdd] = useState(0);

  const { agName, classList, studentList, loadingAgName, 
          loadingStudentList, filterList, loadingFilterList, 
          uid, checkuid, loadingCheck } = useSelector(({ student, loading }) => ({
    agName: student.agName,
    loadingAgName: loading['student/GET_AG_NAME'],
    classList: student.classList,
    studentList: student.studentList,
    loadingStudentList: loading['student/GET_STUDENT_LIST'],
    filterList: student.filterList,
    loadingFilterList: student.loadingFilterList,
    uid: student.uid, 
    checkuid: student.checkuid,
    loadingCheck: loading['student/COUNT_USER'],
  }))

  const agIdx = agName.ag_idx

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

  useEffect(() => {
    dispatch(countUser(uPhone));
  }, [uPhone])

  const onSearch = () => {
      dispatch(getStudentList({agIdx, selectedClass}))
  }

  const showModalAdd = () => setVisibleAdd(true);
  const hideModalAdd = () => setVisibleAdd(false);

  const onCheck = () => {
    if(loadingCheck){console.log('로딩 중');} 
    if(!loadingCheck && uPhone !== ''){
      if(checkuid === false){
        alert('없다')
      } else {
        alert('있다')
      }
    } else {
      Alert.alert('전화번호를 입력하세요.');
    }
  }
  
  const onAdd = () => {
    console.log('기관명'+agIdx);
    console.log('강의명'+selectedClassAdd);
    console.log('수강생명'+uName);
    console.log('전화번호'+uPhone);
    if(selectedClassAdd === 0){
      Alert.alert('강의명을 선택하세요');
    } else if(uName === ''|| uPhone === ''){
      Alert.alert('빈 항목이 있습니다.');
    } else {
      dispatch(insertUser({agIdx, selectedClassAdd, uName, uPhone}))
    }
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
         selectedClassAdd={selectedClassAdd}
         setSelectedClassAdd={setSelectedClassAdd}
         onCheck={onCheck}
         checkuid={checkuid}
      />
  );
};

export default StudentListContainer;