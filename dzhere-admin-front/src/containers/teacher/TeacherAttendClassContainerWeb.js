import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
} from '../../modules/user/teacherClassAttendWeb'
import { apiTeacherAttendList,  } from '../../lib/api/user/teacherClassAttendWeb'
import TeacherAttendClass from '../../components/teacher/TeacherAttendClass'

const TeacherAttendClassContainerWeb = () => {
  console.log("TeacherListWebContainer ====> Component 리턴");

  const dispatch = useDispatch();

  const [editNotExit, setEditNotExit] = useState(-1);
  const [editAbsent, setEditAbsent] = useState(-1);
  const [editLeave, setEditLeave] = useState(-1);
  const [editLateStatus, setEditLateStatus] = useState(-1);
  const [editExitTime, setEditExitTime] = useState('');
  const [editAttendTime, setEditAttendTime] = useState('');
  const [editTodayDate, setEditTodayDate] = useState('');
  const [checkedList, setCheckedList] = useState([]);
  const [rowIndexList, setRowIndexList] = useState([]);
  const [selectedClass, setSelectedClass] = useState(0); // 헤더 - 강의 선택
  const [visibleUpdate, setVisibleUpdate] = useState(false);
  const [error, setError] = useState('');

  const { startDate, endDate, searchType, teacherAttendList, teacherIdxName, agName, classList, loadingAgName, 
          resultError, userInfo, clist }
         = useSelector(({ teacherClassAttendWeb, loading, auth, classes }) => ({
    startDate: teacherClassAttendWeb.startDate,
    endDate: teacherClassAttendWeb.endDate,
    searchType: teacherClassAttendWeb.searchType,       
    teacherAttendList: teacherClassAttendWeb.teacherAttendList,
    teacherIdxName: teacherClassAttendWeb.teacherIdxName,
    agName: teacherClassAttendWeb.agName,
    loadingAgName: loading['teacherClassAttendWeb/GET_AG_NAME'],
    classList: teacherClassAttendWeb.classList,
    userInfo: auth.userInfo,
    resultError: teacherClassAttendWeb.resultError,
    clist: classes.clist,
  }))

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
        console.log('search type - filter : ', teacherIdxName['u_idx'], startDate, typeof(startDate));
        apiTeacherAttendList({u_idx: teacherIdxName['u_idx'], start_date: startDate, end_date: endDate})
        .then(res => {
          if(res.result){
            console.log(
              "==================res.result==================",
              res.teacherAttendList
            );
            dispatch(getTeacherAttendList(res.teacherAttendList));

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
    setError("");

    // 기존 데이터 값들
    setEditTodayDate(teacherAttendList[a_idx]["a_today_date"]);
    setEditAttendTime(
      teacherAttendList[a_idx]["a_attend_time"] !== "" ||
        teacherAttendList[a_idx]["a_attend_time"] !== "0000-00-00 00:00:00" ||
        teacherAttendList[a_idx]["a_attend_time"] !== "00:00:00"
        ? teacherAttendList[a_idx]["a_attend_time"].slice(-8)
        : ""
    );
    setEditExitTime(
      teacherAttendList[a_idx]["a_exit_time"] !== "" ||
        teacherAttendList[a_idx]["a_exit_time"] !== "0000-00-00 00:00:00" ||
        teacherAttendList[a_idx]["a_exit_time"] !== "00:00:00"
        ? teacherAttendList[a_idx]["a_exit_time"].slice(-8)
        : ""
    );
    setEditLateStatus(teacherAttendList[a_idx]["a_late_status"]);
    setEditLeave(teacherAttendList[a_idx]["a_leave"]);
    setEditAbsent(teacherAttendList[a_idx]["a_absent"]);
    setEditNotExit(teacherAttendList[a_idx]["a_not_exit"]);
  }

  // 수정 모달 껐을 때
  const hideModalUpdate = () => {
    setVisibleUpdate(false);
    setEditTodayDate(''); 
    setEditAttendTime('')
    setEditExitTime('')
    setEditLateStatus(0)
    setEditLeave(-1)
    setEditAbsent(-1)
    setEditNotExit(-1)
  } 

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
      clist={clist}
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
      selectedClass={selectedClass}
      setSelectedClass={setSelectedClass}

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
      
      onUpdate={onUpdate}

      // List
      rowIndexList={rowIndexList}
      checkedList={checkedList}
      teacherAttendList={teacherAttendList}

      // Modal
      hideModalUpdate={hideModalUpdate}
      showModalUpdate={showModalUpdate}
      error={error}
      visibleUpdate={visibleUpdate}
      
    />
  );
};

export default TeacherAttendClassContainerWeb;