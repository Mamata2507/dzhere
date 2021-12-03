import React, { useEffect, useState, useCallback } from 'react';
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
} from '../../modules/user/list'
import { countUser, getStudentInfo } from '../../lib/api/user/list';

let selectedAccept = 2;

const StudentListContainer = () => {

  const dispatch = useDispatch();
  
  const [selectedClass, setSelectedClass] = useState(0); // 헤더 - 강의 선택
  const [selectedClassAdd, setSelectedClassAdd] = useState(0); // 등록 모달 - 강의 선택
  const [selectedClassUpdate, setSelectedClassUpdate] = useState(0); // 수정 모달 - 강의 선택
  const [visibleAdd, setVisibleAdd] = useState(false);
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [uName, onChangeUname] = useState('');
  const [uPhone, onChangeUphone] = useState('');
  const [error, setError] = useState('');
  const [phoneCheck, setPhoneCheck] = useState(true);
  const [uPhoneTemp, setUphoneTemp] = useState('');
  const [pickerStatus, setPickerStatus] = useState(false);

  const { agName, classList, studentList, loadingAgName, 
          loadingStudentList, filterList, uid, studentError, userInfo }
         = useSelector(({ list, loading, auth }) => ({
    agName: list.agName,
    loadingAgName: loading['list/GET_AG_NAME'],
    classList: list.classList,
    studentList: list.studentList,
    loadingStudentList: loading['list/GET_STUDENT_LIST'],
    filterList: list.filterList,
    uid: list.uid, 
    userInfo: auth.userInfo,
    studentError: list.resultError,
  }))

  const agIdx = agName.ag_idx
  const regex = /01[016789][^0][0-9]{2,3}[0-9]{3,4}/;
  const uAuth = 1;

  // 처음 렌더링 될 때
  useEffect(() => {
    if (studentError) {
      console.log('기관명, 수업리스트 가져오기 오류');
      console.log(studentError)
    } 
    if (!studentError) {
      dispatch(getAgName(userInfo.userPhone));
      dispatch(getClassList(userInfo.userPhone));
    }
  }, []);

  // 승인 상태 변경 시
  const handleSetAccept = useCallback((e) => {
    selectedAccept = e;
    let studentList_ = studentList;
    let tempArr = studentList_.filter(item => {return item.u_accept == selectedAccept});
    dispatch(setFilterList(tempArr))      
  });

  // 헤더 - 검색 버튼 클릭 시
  const onSearch = () => {
      dispatch(getStudentList({agIdx, selectedClass}))
      setPickerStatus(true)
      if(studentError){
        console.log(studentError);
      }
  }

  // 등록 모달 클릭 시
  const showModalAdd = () => {
    setVisibleAdd(true);
    setError('');
  }
  
  // 등록 모달 껐을 때 
  const hideModalAdd = () => {
    setVisibleAdd(false);
    setSelectedClassAdd(0)
    onChangeUname('')
    onChangeUphone('')
    setPhoneCheck(true)
  }

  // 수정 모달 클릭 시
  async function showModalUpdate () {
    if(uid === 0){
      alert('수강생을 선택해주세요')
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
    setVisibleUpdate(false);
    setSelectedClassUpdate(0)
    onChangeUname('')
    onChangeUphone('')
    setPhoneCheck(true)
  } 

  //동일한 전화번호가 있는지 확인
    async function onCheck () {
      if(uPhone === ''){
        alert('전화번호를 입력하세요')
      } else if(uPhone === uPhoneTemp) {
        setError('')
        setPhoneCheck(false)        
      } else {
        if(false === regex.test(uPhone)){
          setError('전화번호를 정확히 입력하세요');
        } else {
          let check_ = await(countUser(uPhone));
          if(studentError){
            console.log(studentError);
          }
          if(!studentError && check_ === true){
            setError('')
            setPhoneCheck(false)
          } else {
            alert('등록된 전화번호입니다.')
          }
        }          
    } 
  } // 동일한 전화번호 끝

  // 등록 모달 -> 사용자 등록
  const onAdd = () => {
    if(uName === ''|| uPhone === ''){
      alert('빈 항목이 있습니다.');
    } else if(selectedClassAdd === 0){
      alert('강의명을 선택하세요');
    } else if(phoneCheck === true) {
      alert('전화번호 확인 버튼을 클릭하세요');
    } else {
      dispatch(insertUser({agIdx, selectedClassAdd, uName, uPhone, uAuth}))
      if(studentError){
        console.log(studentError);
        alert('등록 실패')
      }
      if(!studentError){
        alert(
          "",
          "등록 완료",
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
    }
  } // 등록 모달(사용자 등록) 끝
  
  // 수정 모달 -> 사용자 수정
  const onUpdate = () => {
    if(uName === ''|| uPhone === ''){
      alert('빈 항목이 있습니다.');
    } else if(selectedClassUpdate === 0){
      alert('강의명을 선택하세요');
    } else if(phoneCheck === true) {
      alert('전화번호 확인 버튼을 클릭하세요');
    } else {
      dispatch(updateUser({selectedClassUpdate, uName, uPhone, uid}))
      if(studentError){
        console.log(studentError);
        alert('수정 실패')
      }
      if(!studentError){
        alert(
          "",
          "수정 완료",
          [{},
            { text: "확인", onPress: () => 
              {
                dispatch(getStudentList({agIdx, selectedClass}))
                hideModalUpdate()
                dispatch(setCheck(false))
                dispatch(setValue(0))
              }
            }
          ]
        );
      }
    }
  } // 수정 모달 끝

  // 유저 삭제 -> 체크박스 이용
  const onDelete = () => {
    if(uid === 0){
      alert('수강생을 선택해주세요')
    } else {
      alert(
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
              dispatch(deleteUser({uid, agIdx, selectedClass}))
              if(studentError){
                console.log(studentError);
                alert('삭제 실패')
              }
              if(!studentError){
                alert('삭제 완료')
                dispatch(setCheck(false))
                dispatch(setValue(0))
              }
            }
          }
        ]
      );
    }
  } // 유저 삭제 끝


  return (
      <Contents
         // 처음 렌더링될 때 가져오기
         agName={agName}
         loadingAgName={loadingAgName}
         classList={classList}
         
         // picker
         pickerStatus={pickerStatus} // true, false
         selectedClass={selectedClass}
         setSelectedClass={setSelectedClass}
         selectedClassAdd={selectedClassAdd}
         setSelectedClassAdd={setSelectedClassAdd}
         selectedClassUpdate={selectedClassUpdate}
         setSelectedClassUpdate={setSelectedClassUpdate}
         selectedAccept={selectedAccept} // 승인여부
         handleSetAccept={handleSetAccept} // 승인여부 이벤트

         // onPress event
         onSearch={onSearch}
         onDelete={onDelete}
         onAdd={onAdd}
         onCheck={onCheck}
         onUpdate={onUpdate}
        
         // List
         studentList={studentList}
         loadingStudentList={loadingStudentList}
         filterList={filterList}

        // Modal
         visibleAdd={visibleAdd}
         hideModalAdd={hideModalAdd}
         showModalAdd={showModalAdd} // onPress
         visibleUpdate={visibleUpdate}
         hideModalUpdate={hideModalUpdate}
         showModalUpdate={showModalUpdate}
         phoneCheck={phoneCheck}
         error={error}
         
        // useState
         uName={uName}
         onChangeUname={onChangeUname}
         uPhone={uPhone}
         onChangeUphone={onChangeUphone}
      />
  );
};

export default StudentListContainer;