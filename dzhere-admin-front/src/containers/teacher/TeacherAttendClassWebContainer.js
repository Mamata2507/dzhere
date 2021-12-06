import React, { useEffect, useState, useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Alert, Platform } from 'react-native';
import TeacherAttendClass from '../../components/teacher/TeacherAttendClass'
import { 
  updateStartDate,
  updateEndDate,
  updateSearchType,
  updateTeacherAttend,
  getTeacherAttendListAll,
  getTeacherAttendList,
  getTeacherAttendListError, 
  getTeacherIdxName,
  getAgName, 
  getClassList, 
  setFilterList, 
  deleteUser, 
  insertUser, 
  setValue, 
  setCheck, 
  updateUser, 
} from '../../modules/user/yj_attend'
import { apiTeacherAttendList, countUser, getStudentInfo, } from '../../lib/api/user/yj_attend'
import { alternatives } from 'joi';

let selectedAccept = 2;

const TeacherListContainer = () => {

  const dispatch = useDispatch();
  
  const [editNotExit, setEditNotExit] = useState(-1);
  const [editAbsent, setEditAbsent] = useState(-1);
  const [editLeave, setEditLeave] = useState(-1);
  const [editLateStatus, setEditLateStatus] = useState(-1);
  const [editExitTime, setEditExitTime] = useState('');
  const [editAttendTime, setEditAttendTime] = useState('');
  const [editTodayDate, setEditTodayDate] = useState('');
  // const [searchType, setSearchType] = useState('all');
  const [checkedList, setCheckedList] = useState([]);
  const [rowIndexList, setRowIndexList] = useState([]);
  // const [startDate, setStartDate] = useState('');
  // const [endDate, setEndDate] = useState('');
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

  const { startDate, endDate, searchType, teacherAttendList, teacherIdxName, agName, classList, loadingAgName, 
    /*loadingTeacherAttendList, */filterList, uid, resultError, userInfo }
         = useSelector(({ yj_attend, loading, auth }) => ({
    startDate: yj_attend.startDate,
    endDate: yj_attend.endDate,
    searchType: yj_attend.searchType,       
    teacherAttendList: yj_attend.teacherAttendList,
    teacherIdxName: yj_attend.teacherIdxName,
    agName: yj_attend.agName,
    loadingAgName: loading['yj_attend/GET_AG_NAME'],
    classList: yj_attend.classList,
    // loadingTeacherAttendList: loading['yj_attend/GET_TEACHER_ATTEND_LIST'],
    filterList: yj_attend.filterList,
    uid: yj_attend.uid, 
    userInfo: auth.userInfo,
    resultError: yj_attend.resultError,
  }))

  const agIdx = agName.ag_idx
  const regex = /01[016789][^0][0-9]{2,3}[0-9]{3,4}/;
  const uAuth = 2;

  async function asyncGetTeacherAttendListAll() {
    console.log("리스트 불러오기");
    const data = await getClasstimeList({ ag_idx: agency.ag_idx });
    setClasstimeList(data);
    dispatch(getClasstime(classtimeList));
  }

  // 처음 렌더링 될 때
  useEffect(() => {
    if (resultError) {
      console.log('기관명, 수업리스트 가져오기 오류');
      console.log(resultError)
    } 
    if (!resultError) {
      dispatch(getAgName(userInfo.userPhone));
      dispatch(getClassList(userInfo.userPhone));
    }
    if(teacherIdxName['u_idx'] !== -1){
      if(searchType == 'all'){
        dispatch(getTeacherAttendListAll(teacherIdxName['u_idx']))
      }
      if(searchType == 'filter' && startDate !== '' && endDate !== ''){
        console.log('search type - filter : ', u_idx, start_date, typeof(start_date));
        apiTeacherAttendList({u_idx: u_idx, start_date: start_date, end_date: end_date})
        .then(res => {
          if(res.result){
            console.log(
              "==================res.result==================",
              res.teacherAttendList
            );
            dispatch(getTeacherAttendList(res.teacherAttendList));
            // let rowIndexList_ = new Array(res.teacherAttendList.length);
            // for (let i = 0; i < res.teacherAttendList.length; i++) {
            //   rowIndexList_[i] = String(
            //     res.teacherAttendList[i]["a_idx"]
            //   );
            // }
            // setRowIndexList(rowIndexList_);
          }
          else{
            console.log(res.error);
            dispatch(getTeacherAttendListError(res.error));
          }
        })
        .catch((e) => {
          console.log("apiTeacherAttendList.catch - e:", e);
        });
      }
    }
    
  }, []);

  useEffect(() => {
    if(teacherIdxName['u_idx'] !== -1){
      if(searchType == 'all'){
        dispatch(getTeacherAttendListAll(teacherIdxName['u_idx']))
      }
      if(searchType == 'filter' && startDate !== '' && endDate !== ''){
        console.log('search type - filter : ', teacherIdxName['u_idx'], startDate, typeof(startDate));
        apiTeacherAttendList({u_idx: teacherIdxName['u_idx'], start_date: startDate, end_date: endDate})
        .then(res => {
          if(res.result){
            console.log(
              "==================res.result==================",
              res.teacherAttendList
            );
            dispatch(getTeacherAttendList(res.teacherAttendList));
            // let rowIndexList_ = new Array(res.teacherAttendList.length);
            // for (let i = 0; i < res.teacherAttendList.length; i++) {
            //   rowIndexList_[i] = String(
            //     res.teacherAttendList[i]["a_idx"]
            //   );
            // }
            // setRowIndexList(rowIndexList_);
          }
          else{
            console.log(res.error);
            dispatch(getTeacherAttendListError(res.error));
          }
        })
        .catch((e) => {
          console.log("apiTeacherAttendList.catch - e:", e);
        });
      }
    }
  }, [teacherIdxName, searchType])

  // 강의 선택 시
  const onChangeSelectedClass = (c_idx) => {
    console.log('c_idx : ', c_idx);
    dispatch(getTeacherIdxName(c_idx));
  }

  // 승인 상태 변경 시
  // const handleSetAccept = useCallback((e) => {
  //   dispatch(setCheck(false))
  //   dispatch(setValue(0))
  //   selectedAccept = e;
  //   let teacherList_ = teacherList;
  //   let tempArr = teacherList_.filter(item => {return item.u_accept == selectedAccept});
  //   dispatch(setFilterList(tempArr))      
  // });

  // DataTable Row list 업데이트 될 때
  useEffect(() => {
    let rowIndexList_ = new Array(teacherAttendList.length);
    for (let i = 0; i < teacherAttendList.length; i++) {
      rowIndexList_[i] = String(teacherAttendList[i]["a_idx"]);
    }
    setRowIndexList(rowIndexList_);
  }, [teacherAttendList])

  // 헤더 - 검색 버튼 클릭 시
  const onSearch = ({u_idx, type, start_date, end_date}) => {
      console.log('onSearch - u_idx : ', u_idx, ', searchType : ', type);

      if(searchType === 'all'){
        dispatch(getTeacherAttendListAll(u_idx))
      }
      else if(searchType === 'filter'){
        console.log('search type - filter : ', u_idx, start_date, typeof(start_date));
        apiTeacherAttendList({u_idx: u_idx, start_date: start_date, end_date: end_date})
        .then(res => {
          if(res.result){
            console.log(
              "==================res.result==================",
              res.teacherAttendList
            );
            dispatch(getTeacherAttendList(res.teacherAttendList));
            // let rowIndexList_ = new Array(res.teacherAttendList.length);
            // for (let i = 0; i < res.teacherAttendList.length; i++) {
            //   rowIndexList_[i] = String(
            //     res.teacherAttendList[i]["a_idx"]
            //   );
            // }
            // setRowIndexList(rowIndexList_);
          }
          else{
            console.log(res.error);
            dispatch(getTeacherAttendListError(res.error));
          }
        })
        .catch((e) => {
          console.log("apiTeacherAttendList.catch - e:", e);
        });
      }
  }

  // 등록 모달 클릭 시
  const showModalAdd = () => {
    setVisibleAdd(true);
    setError('');
  }
  
  // 등록 모달 껐을 때 
  const hideModalAdd = () => {
    // dispatch(getTeacherList({agIdx, selectedClass}))
    setVisibleAdd(false);
    setSelectedClassAdd(0)
    onChangeUname('')
    onChangeUphone('')
    setPhoneCheck(true)
  }

  const onChangeEditAttendTime = (e) => {
    setEditAttendTime(e);
  }
  const onChangeEditExitTime = (e) => {
    setEditExitTime(e);
  }
  const onChangeEditLateStatus = (e) => {
    setEditLateStatus(e.target.checked ? 1 : 0)
  }
  const onChangeEditLeave = (e) => {
    setEditLeave(e.target.checked ? 1 : 0)
  }
  const onChangeEditAbsent = (e) => {
    setEditAbsent(e.target.checked ? 1 : 0)
  }
  const onChangeEditNotExit = (e) => {
    setEditNotExit(e.target.checked ? 1 : 0)
  }
  const onChangeSearchType = (e) => {
    dispatch(updateSearchType(e));
  }
  const onChangeStartDate = (e) => {
    dispatch(updateStartDate(e))
  }
  const onChangeEndDate = (e) => {
    dispatch(updateEndDate(e))
  }

  // 수정 모달 클릭 시
  async function showModalUpdate (a_idx) {
    console.log(a_idx);
    setVisibleUpdate(true);
    setError('');

    // 기존 데이터 값들
    setEditTodayDate(teacherAttendList[a_idx]['a_today_date']); 
    setEditAttendTime(teacherAttendList[a_idx]['a_attend_time'] !== '' || teacherAttendList[a_idx]['a_attend_time'] !== '0000-00-00 00:00:00' || teacherAttendList[a_idx]['a_attend_time'] !== '00:00:00' ? teacherAttendList[a_idx]['a_attend_time'].slice(-8) : '')
    setEditExitTime(teacherAttendList[a_idx]['a_exit_time'] !== '' || teacherAttendList[a_idx]['a_exit_time'] !== '0000-00-00 00:00:00' || teacherAttendList[a_idx]['a_exit_time'] !== '00:00:00' ? teacherAttendList[a_idx]['a_exit_time'].slice(-8) : '')
    setEditLateStatus(teacherAttendList[a_idx]['a_late_status'])
    setEditLeave(teacherAttendList[a_idx]['a_leave'])
    setEditAbsent(teacherAttendList[a_idx]['a_absent'])
    setEditNotExit(teacherAttendList[a_idx]['a_not_exit'])

    // setEditAttendTime()
    // let currentInfo = await(getStudentInfo(uid));
    // onChangeUphone(info.u_phone);
    // onChangeUname(info.u_name);
    
    
    // setUphoneTemp(info.u_phone);
  }
  
  // 수정 모달 껐을 때
  const hideModalUpdate = () => {
    setVisibleUpdate(false);
    setSelectedClassUpdate(0)
    setEditTodayDate(''); 
    setEditAttendTime('')
    setEditExitTime('')
    setEditLateStatus(0)
    setEditLeave(-1)
    setEditAbsent(-1)
    setEditNotExit(-1)
    // setPhoneCheck(true)
  } 

  // 등록 모달 -> 사용자 등록
  const onAdd = () => {
    if(uName === ''|| uPhone === ''){
      if(Platform.OS === 'web'){
        alert('빈 항목이 있습니다.');
      } else {
        Alert.alert('빈 항목이 있습니다.');
      }
    } else if(selectedClassAdd === 0){
      if(Platform.OS === 'web'){
        alert('강의명을 선택하세요');
      } else {
        Alert.alert('강의명을 선택하세요');
      }
    } else if(phoneCheck === true) {
      if(Platform.OS === 'web'){
        alert('전화번호 확인 버튼을 클릭하세요');
      } else {
        Alert.alert('전화번호 확인 버튼을 클릭하세요');
      }
    } else {
      dispatch(insertUser({agIdx, selectedClassAdd, uName, uPhone, uAuth}))
      if(resultError){
        console.log(resultError);
        if(Platform.OS === 'web'){
          alert('등록 실패');
        } else {
          Alert.alert('등록 실패');
        }
      }
      if(!resultError){
        if(Platform.OS === 'web'){
          alert('등록 완료');
        } else {
          Alert.alert('등록 완료');
        }
        hideModalAdd()
      }
    }
  } // 등록 모달(사용자 등록) 끝
  
  // 수정 모달 -> 사용자 수정
  const onUpdate = (e) => {
    console.log(e);
    console.log('editTodayDate : ', e.editTodayDate);
    dispatch(updateTeacherAttend(e));
    if(!resultError){
      hideModalUpdate();
      onSearch(teacherIdxName.u_idx, searchType, e.startDate, e.endDate);
    }
  } // 수정 모달 끝


  // 유저 삭제 -> 체크박스 이용
  // const onDelete = () => {
  //   if(uid === 0){
  //     if(Platform.OS === 'web'){
  //       alert('수강생을 선택해주세요');
  //     } else {
  //       Alert.alert('수강생을 선택해주세요');
  //     }
  //   } else {
  //     dispatch(deleteUser(uid))
  //     if(resultError){
  //       console.log(resultError);
  //       if(Platform.OS === 'web'){
  //         alert('삭제 실패');
  //       } else {
  //         Alert.alert('삭제 실패');
  //       }
  //     }
  //     if(!resultError){
  //       if(Platform.OS === 'web'){
  //         alert('삭제 완료');
  //       } else {
  //         Alert.alert('삭제 완료');
  //       }
  //       dispatch(setCheck(false))
  //       dispatch(setValue(0))
  //       dispatch(getTeacherList({agIdx, selectedClass}))
  //       if(selectedAccept < 2){
  //         let teacherList_ = teacherList;
  //         let tempArr = teacherList_.filter(item => {return item.u_accept == selectedAccept});
  //         dispatch(setFilterList(tempArr))            
  //       }
  //     }
  //   }
  //} // 유저 삭제 끝

  // const onChangeStartDate = (date) => {
  //   console.log(date);
  //   setStartDate(date);
  // }

  // const onChangeEndDate = (date) => {
  //   console.log(date);
  //   setEndDate(date);
  // };

  const checkHandler = e => {
    console.log('checkHandler : ', e.target.checked, ', ', e.target.id);
    if(e.target.id == '-999' && e.target.checked){
      let checkedList_ = [...rowIndexList];
      setCheckedList(checkedList_);
      console.log(checkedList);
    }
    if(e.target.id == '-999' && !e.target.checked){
      let checkedList_ = [];
      setCheckedList(checkedList_);
      console.log(checkedList);
    }
    if(e.target.id !== '-999' && !checkedList.includes(e.target.id) && e.target.checked){
      let checkedList_ = [...checkedList, e.target.id];
      setCheckedList(checkedList_);
      console.log(checkedList);
    }
    if(e.target.id !== '-999' && checkedList.includes(e.target.id) && e.target.checked == false){
      let checkedList_ = [...checkedList];
      let checkedList__ = checkedList_.filter(item => item !==e.target.id)
      setCheckedList(checkedList__);
      console.log(checkedList);
    }
  }

  console.log('startDate : ', startDate);
  console.log('endDate : ', endDate);
  console.log('teacherIdxName: ', teacherIdxName);
  console.log('teacherAttendList : ', teacherAttendList);
  console.log('rowIndexList : ', rowIndexList);
  return (
    <TeacherAttendClass
      // 수정 필드
      editTodayDate={editTodayDate}
      editAttendTime={editAttendTime}
      editExitTime={editExitTime}
      editLateStatus={editLateStatus}
      editLeave={editLeave}
      editAbsent={editAbsent}
      editNotExit={editNotExit}

      // module state
      teacherIdxName={teacherIdxName}
      searchType={searchType}
      startDate={startDate}
      endDate={endDate}

      // date picker 상태
      onChangeStartDate={onChangeStartDate}
      onChangeEndDate={onChangeEndDate}
      startDate={startDate}
      endDate={endDate}
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
      // handleSetAccept={handleSetAccept} // 승인여부 이벤트

      // onPress event
      onChangeEndDate={onChangeEndDate}
      onChangeStartDate={onChangeStartDate}
      onChangeEditAttendTime={onChangeEditAttendTime}
      onChangeEditExitTime={onChangeEditExitTime}
      onChangeEditLateStatus={onChangeEditLateStatus}
      onChangeEditLeave={onChangeEditLeave}
      onChangeEditAbsent={onChangeEditAbsent}
      onChangeEditNotExit={onChangeEditNotExit}
      onChangeSelectedClass={onChangeSelectedClass}
      onChangeSearchType={onChangeSearchType}
      checkHandler={checkHandler}
      onSearch={onSearch}
      
      // setSearchType={setSearchType}
      // onDelete={onDelete}
      onAdd={onAdd}
      onUpdate={onUpdate}

      // List
      rowIndexList={rowIndexList}
      checkedList={checkedList}
      teacherAttendList={teacherAttendList}
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

export default TeacherListContainer;