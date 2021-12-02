import React, { useEffect, useState, useCallback } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Contents } from '../../components/student/StudentList'
import { 
  getAgName, 
  getClassList, 
  getStudentList, 
  setFilterList, 
  deleteUser, 
  insertUser, 
  setValue, 
  setCheck, 
  updateUser, 
} from '../../modules/student/student'
import { countUser, getStudentInfo } from '../../lib/api/student/student';

let selectedAccept = 2;

const StudentListContainer = () => {

  const dispatch = useDispatch();
  const u_phone = '01023454710';
  
  const [selectedClass, setSelectedClass] = useState(0);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [uName, onChangeUname] = useState('');
  const [uPhone, onChangeUphone] = useState('');
  const [selectedClassAdd, setSelectedClassAdd] = useState(0);
  const [selectedClassUpdate, setSelectedClassUpdate] = useState(0);
  const [error, setError] = useState('');
  const [phoneCheck, setPhoneCheck] = useState(true);
  const [uPhoneTemp, setUphoneTemp] = useState('');
  const [pickerStatus, setPickerStatus] = useState(false);

  let searchCheck = false;

  const { agName, classList, studentList, loadingAgName, 
          loadingStudentList, filterList, loadingFilterList, 
          uid, loadingCheck, studentInfo, loadingStudentInfo } = useSelector(({ student, loading }) => ({
    agName: student.agName,
    loadingAgName: loading['student/GET_AG_NAME'],
    classList: student.classList,
    studentList: student.studentList,
    loadingStudentList: loading['student/GET_STUDENT_LIST'],
    filterList: student.filterList,
    loadingFilterList: student.loadingFilterList,
    uid: student.uid, 
    loadingCheck: loading['student/COUNT_USER'],
    studentInfo: student.studentInfo,
    loadingStudentInfo: loading['student/GET_STUDENT_INFO']
  }))

  const agIdx = agName.ag_idx
  const regex = /01[016789][^0][0-9]{2,3}[0-9]{3,4}/;

  // 처음 렌더링 될 때
  useEffect(() => {
    dispatch(getAgName(u_phone));
    dispatch(getClassList(u_phone));
  }, []);

  // 승인 상태 변경 시
  const handleSetAccept = useCallback((e) => {
    selectedAccept = e;
    if(selectedAccept === 2) {
      Alert.alert('승인 상태를 선택하세요')
    } else {
      let tempArr = studentList.filter(item => {return item.u_accept == selectedAccept});
      dispatch(setFilterList(tempArr))      
    }
  });


  // 헤더 - 검색 버튼 클릭 시
  const onSearch = () => {
      searchCheck = true;
      dispatch(getStudentList({agIdx, selectedClass}))
      setPickerStatus(true)
  }

  // 등록 모달 클릭 시
  const showModalAdd = () => {
    setVisibleAdd(true);
    setError('');
  }
  
  // 등록 모달 껐을 때 
  const hideModalAdd = () => {
    Keyboard.dismiss()
    setVisibleAdd(false);
    setSelectedClassAdd(0)
    onChangeUname('')
    onChangeUphone('')
    setPhoneCheck(true)
  }

  // 수정 모달 클릭 시
  async function showModalUpdate () {
    if(uid === 0){
      Alert.alert('수강생을 선택해주세요')
    } else {
      let info = await(getStudentInfo(uid));
      onChangeUphone(info.u_phone);
      onChangeUname(info.u_name);
      setVisibleUpdate(true);
      setError('');
      setUphoneTemp(info.u_phone);
    }
  }
  
  // 수정 모달 껐을 때
  const hideModalUpdate = () => {
    dispatch(getStudentList({agIdx, selectedClass}))
    Keyboard.dismiss()
    setVisibleUpdate(false);
    setSelectedClassUpdate(0)
    onChangeUname('')
    onChangeUphone('')
    setPhoneCheck(true)
    dispatch(setCheck(false))
    dispatch(setValue(0))
  } 

  //동일한 전화번호가 있는지 확인
    async function onCheck () {
      if(uPhone === ''){
        Alert.alert('전화번호를 입력하세요')
      } else if(uPhone === uPhoneTemp) {
        setError('')
        setPhoneCheck(false)        
      } else {
        if(false === regex.test(uPhone)){
          setError('전화번호를 정확히 입력하세요');
        } else {
          let check_ = await(countUser(uPhone));
          if(check_ === true){
            setError('')
            setPhoneCheck(false)
          } else {
            Alert.alert('등록된 전화번호입니다.')
          }
        }          
    } 
  } // 동일한 전화번호 끝

  // 등록 모달 -> 사용자 등록
  const onAdd = () => {
    if(uName === ''|| uPhone === ''){
      Alert.alert('빈 항목이 있습니다.');
    } else if(selectedClassAdd === 0){
      Alert.alert('강의명을 선택하세요');
    } else if(phoneCheck === true) {
      Alert.alert('전화번호 확인 버튼을 클릭하세요');
    } else {
      dispatch(insertUser({agIdx, selectedClassAdd, uName, uPhone}))
      Alert.alert(
        "",
        "추가완료",
        [{},
          { text: "확인", onPress: () => 
            {
              dispatch(getStudentList({agIdx, selectedClass}))
              hideModalAdd()
            }
          }
        ]
      );
    }
  } // 등록 모달(사용자 등록) 끝
  
  // 수정 모달 -> 사용자 수정
  const onUpdate = () => {
    if(uName === ''|| uPhone === ''){
      Alert.alert('빈 항목이 있습니다.');
    } else if(selectedClassUpdate === 0){
      Alert.alert('강의명을 선택하세요');
    } else if(phoneCheck === true) {
      Alert.alert('전화번호 확인 버튼을 클릭하세요');
    } else {
      dispatch(updateUser({selectedClassUpdate, uName, uPhone, uid}))
      Alert.alert(
        "",
        "수정완료",
        [{},
          { text: "확인", onPress: () => 
            {
              dispatch(getStudentList({agIdx, selectedClass}))
              hideModalUpdate()
            }
          }
        ]
      );
    }
  } // 수정 모달 끝

  // 유저 삭제 -> 체크박스 이용
  const onDelete = () => {
    if(uid === 0){
      Alert.alert('수강생을 선택해주세요')
    } else {
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
              Alert.alert('삭제완료')
              dispatch(getStudentList({agIdx, selectedClass}))
              dispatch(setCheck(false))
              dispatch(setValue(0))
            }
          }
        ]
      );
    }
  } // 유저 삭제 끝


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
        //  setSelectedAccept={setSelectedAccept}
         filterList={filterList}
         loadingFilterList={loadingFilterList}
         onDelete={onDelete}
         showModalAdd={showModalAdd}
         visibleAdd={visibleAdd}
         hideModalAdd={hideModalAdd}
         showModalUpdate={showModalUpdate}
         visibleUpdate={visibleUpdate}
         hideModalUpdate={hideModalUpdate}
         uName={uName}
         onChangeUname={onChangeUname}
         uPhone={uPhone}
         onChangeUphone={onChangeUphone}
         onAdd={onAdd}
         showModalUpdate={showModalUpdate}
         selectedClassAdd={selectedClassAdd}
         setSelectedClassAdd={setSelectedClassAdd}
         selectedClassUpdate={selectedClassUpdate}
         setSelectedClassUpdate={setSelectedClassUpdate}
         onCheck={onCheck}
         error={error}
         loadingCheck={loadingCheck}
         studentInfo={studentInfo}
         loadingStudentInfo={loadingStudentInfo}
         onUpdate={onUpdate}
         phoneCheck={phoneCheck}
         handleSetAccept={handleSetAccept}
         pickerStatus={pickerStatus}
      />
  );
};

export default StudentListContainer;