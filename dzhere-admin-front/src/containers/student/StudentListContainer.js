import React, { useEffect, useState } from 'react';
import { Alert, Keyboard } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { Contents } from '../../components/student/StudentList'
import { 
  getAgName, 
  getClassList, 
  getStudentList, 
  setFilterList, 
  deleteUser, 
  countUser, 
  insertUser, 
  setCheck, 
  setValue, 
  getStudentInfo, 
  updateUser, 
} from '../../modules/student/student'

const StudentListContainer = () => {
  
  const dispatch = useDispatch();
  const u_phone = '01023454710';
  
  const [selectedClass, setSelectedClass] = useState(0);
  const [selectedAccept, setSelectedAccept] = useState(2);
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [uName, onChangeUname] = useState('');
  const [uPhone, onChangeUphone] = useState('');
  const [selectedClassAdd, setSelectedClassAdd] = useState(0);
  const [selectedClassUpdate, setSelectedClassUpdate] = useState(0);
  const [error, setError] = useState('');
  const [checkuid, setCheckUid] = useState(true);

  const { agName, classList, studentList, loadingAgName, 
          loadingStudentList, filterList, loadingFilterList, 
          uid, result, loadingCheck, studentInfo, loadingStudentInfo } = useSelector(({ student, loading }) => ({
    agName: student.agName,
    loadingAgName: loading['student/GET_AG_NAME'],
    classList: student.classList,
    studentList: student.studentList,
    loadingStudentList: loading['student/GET_STUDENT_LIST'],
    filterList: student.filterList,
    loadingFilterList: student.loadingFilterList,
    uid: student.uid, 
    result: student.result,
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
  useEffect(() => {
    if(!loadingStudentList && selectedAccept!==2){
        const tempArr = studentList.filter(item => {return item.u_accept == selectedAccept});
        dispatch(setFilterList(tempArr))
      }
    },[selectedAccept])
  
  // 등록 모달 - 사용자가 핸드폰 입력 시
  useEffect(() => {
    if(false === regex.test(uPhone)){
      setError('전화번호를 정확히 입력하세요');
    } else {
      setError('')
      dispatch(countUser(uPhone));
    }
  }, [uPhone])

  // 체크 박스 선택 시
  useEffect(() => {
    // 해당 유저 정보 가져오기
    dispatch(getStudentInfo(uid))
  }, [uid])

  // 헤더 - 검색 버튼 클릭 시
  const onSearch = () => {
      dispatch(getStudentList({agIdx, selectedClass}))
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
    setCheckUid(true)
  }


  // 수정 모달 클릭 시
  const showModalUpdate = () => {
    if(uid === 0){
      Alert.alert('수강생을 선택해주세요')
    } else {
      // console.log('////////////////////////////////////////');
      // console.log(studentInfo);
      // onChangeUname(studentInfo.u_name);
      // onChangeUphone(studentInfo.u_phone);
      // setSelectedClassUpdate(studentInfo.c_idx);
      // console.log(uName)
      // console.log(uPhone)
      // console.log(selectedClassUpdate)
      // console.log('////////////////////////////////////////');
      
      setVisibleUpdate(true);
      setError('');
      // console.log(studentInfo);
    }
  }
  
  // 수정 모달 껐을 때
  const hideModalUpdate = () => {
    Keyboard.dismiss()
    setVisibleUpdate(false);
    setSelectedClassUpdate(0)
    onChangeUname('')
    onChangeUphone('')
    setCheckUid(true)
  } 

  // 등록 모달 -> 동일한 전화번호가 있는지 확인
  const onCheck = () => {
    if(uPhone === ''){
      Alert.alert('전화번호를 입력하세요')
    } else {
          if(loadingCheck){console.log('로딩 중');} 
          if(!loadingCheck && uPhone !== ''){
            if(result === true){
              Alert.alert('사용 가능한 전화번호입니다.')
              setCheckUid(false)
            } else {
              Alert.alert('등록된 전화번호입니다.')
            }
          } 
      }
  } // 등록 모달(동일한 전화번호) 끝
  
  // 등록 모달 -> 사용자 등록
  const onAdd = () => {
    if(uName === ''|| uPhone === ''){
      Alert.alert('빈 항목이 있습니다.');
    } else if(selectedClassAdd === 0){
      Alert.alert('강의명을 선택하세요');
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
    console.log('기관명'+agIdx);
    console.log('강의명'+selectedClassUpdate);
    console.log('수강생명'+uName);
    console.log('전화번호'+uPhone);
    if(uName === ''|| uPhone === ''){
      Alert.alert('빈 항목이 있습니다.');
    } else if(selectedClassUpdate === 0){
      Alert.alert('강의명을 선택하세요');
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
              Alert.alert(
                "",
                '삭제완료',
                [
                  {
                    // text: "취소",
                    // onPress: () => console.log("취소"),
                    // style: "cancel"
                  },
                  { text: "확인", onPress: () => 
                    {
                      dispatch(getStudentList({agIdx, selectedClass}))
                      setSelectedAccept(2)
                      dispatch(setCheck(false))
                      dispatch(setValue(0))
                    }
                  }
                ]
              );
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
         setSelectedAccept={setSelectedAccept}
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
         checkuid={checkuid}
         studentInfo={studentInfo}
         loadingStudentInfo={loadingStudentInfo}
         onUpdate={onUpdate}
      />
  );
};

export default StudentListContainer;