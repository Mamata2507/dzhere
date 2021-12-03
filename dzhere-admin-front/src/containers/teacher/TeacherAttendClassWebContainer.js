import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TeacherAttendClassWebComponent from "../../components/teacher/web/TeacherAttendClassWebComponent";
import { apiTeacherAttendList, apiTeacherAttendListAll, apiTeacherIdxName, apiAgencyList, apiClassList, apiTeacherList, apiRemoveTeacher, apiEditTeacher, apiAddTeacher } from '../../lib/api/user/teacherWeb';
import { getTeacherAttendListError, getTeacherAttendList, getTeacherIdxNameError, getTeacherIdxName, resetField, getAgencyList, getClassList, getAgencyListError, getClassListError, getTeacherList, getTeacherListError, changeField} from '../../modules/user/teacherWeb';

const TeacherAttendClassWebContainer = () => {
    console.log("TeacherListWebContainer ====> Component 리턴");

    const dispatch = useDispatch();

    const { teacherAttendList, teacherIdxName, agencyList, classList, teacherList, editTextInputName, editTextInputPhone, editTextInputEmail, insertTextInputName, insertTextInputPhone, insertTextInputEmail } = useSelector(({ teacherWeb }) => ({
      teacherAttendList: teacherWeb.teacherAttendList,
      teacherIdxName: teacherWeb.teacherIdxName,
      agencyList: teacherWeb.agencyList,
      classList: teacherWeb.classList,
      teacherList: teacherWeb.teacherList,
      editTextInputName: teacherWeb.editTextInputName,
      editTextInputPhone: teacherWeb.editTextInputPhone,
      editTextInputEmail: teacherWeb.editTextInputEmail,
      insertTextInputName: teacherWeb.insertTextInputName,
      insertTextInputPhone: teacherWeb.insertTextInputPhone,
      insertTextInputEmail: teacherWeb.insertTextInputEmail,
    }));

    const [agIdxTmp, setAgIdxTmp] = useState(-1);
    const [cIdxTmp, setCIdxTmp] = useState(-1);
    const [checkedList, setCheckedList] = useState([]);
    const [rowIndexList, setRowIndexList] = useState([]);
    const [addModalShow, setAddModalShow] = useState(false);
    const [editModalShow, setEditModalShow] = useState(false);
    const [addModalButtonControl, setAddModalButtonControl] = useState(true);
    const [editModalButtonControl, setEditModalButtonControl] = useState(true);
    const [removeModalButtonControl, setRemoveModalButtonControl] = useState(true);

    const handleAddModalClose = () => setAddModalShow(false);
    const handleAddModalShow = () => setAddModalShow(true);
    const handleEditModalClose = () => setEditModalShow(false);
    const handleEditModalShow = () => setEditModalShow(true);

    useEffect(() => {
      apiAgencyList()
        .then(async (res) => {
          if (res.result) {
            console.log(
              "==================res.result==================",
              res.agencyList
            );
            dispatch(getAgencyList(res.agencyList));
          } else {
            console.log(res.error);
            dispatch(getAgencyListError(res.error));
          }
        })
        .catch((e) => {
          console.log("apiAgencyList.catch - e:", e);
        });
    }, []);

    const onChange = (e) => {
      console.log("onChange");
      console.log(e);
      const { value, name } = e;
      
      //   dispatch(
      //     changeField({
      //       key: name,
      //       value: value,
      //     })
      //   );

      if (name === "agencyList") {
        setAgIdxTmp(value);
        console.log('기관 idx : ', agIdxTmp);
        apiClassList(value)
          .then(async (res) => {
            if (res.result) {
              console.log(
                "==================res.result==================",
                res.classList
              );
              dispatch(getClassList(res.classList));
            } else {
              console.log(res.error);
              dispatch(getClassListError(res.error));
            }
          })
          .catch((e) => {
            console.log("apiAgencyList.catch - e:", e);
          });
      }

      if (name === "classList") {
        setCIdxTmp(value)
        
        apiTeacherIdxName(value)
          .then(async (res) => {
            if (res.result) {
              console.log(
                "==================res.result==================",
                res.teacherIdxName,
                res.teacherIdxName['u_idx'],
                res.teacherIdxName['u_name'],
              );
              dispatch(getTeacherIdxName([res.teacherIdxName['u_idx'], res.teacherIdxName['u_name']]));
              
              apiTeacherAttendListAll(res.teacherIdxName['u_idx'])
                .then(async (res) => {
                  if (res.result) {
                    console.log(
                      "==================res.result==================",
                      res.teacherAttendList
                    );
                    dispatch(getTeacherAttendList(res.teacherAttendList));
                    let rowIndexList_ = new Array(res.teacherAttendList.length);
                    for(let i=0; i<res.teacherAttendList.length; i++){
                      rowIndexList_[i] = String(res.teacherAttendList[i]['a_idx']);
                    }
                    setRowIndexList(rowIndexList_);
                  } else {
                    console.log(res.error);
                    dispatch(getTeacherAttendListError(res.error));
                  }
                })
                .catch((e) => {
                  console.log("apiTeacherAttendListAll.catch - e:", e);
                });
               
            } else {
              console.log(res.error);
              dispatch(getTeacherIdxError(res.error));
            }
          })
          .catch((e) => {
            console.log("apiAgencyList.catch - e:", e);
          });
        
      }

      if(['editTextInputName', 'editTextInputPhone', 'editTextInputEmail', 'insertTextInputName', 'insertTextInputPhone', 'insertTextInputEmail'].includes(name)){
        dispatch(
          changeField({
            key: name,
            value: value,
          })
        );
      }

      console.log('onchange 후 editInput');
      console.log(editTextInputName);
      console.log(editTextInputPhone);
      console.log(editTextInputEmail);
      console.log('onchange 후 insertInput');
      console.log(insertTextInputName);
      console.log(insertTextInputPhone);
      console.log(insertTextInputEmail);
    };

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

    // 삭제 아벤트 핸들러
    const removeBtnHandler = (checkedList, cIdxTmp, agIdxTmp) => {
      console.log('remove row 핸들러', checkedList);

      apiRemoveTeacher(checkedList, cIdxTmp, agIdxTmp)
        .then(async (res) => {
          if (res.result) {
            console.log(
              "==================res.result==================",
              res.teacherList
            );
            dispatch(getTeacherList(res.teacherList));
            let rowIndexList_ = new Array(res.teacherList.length);
            for (let i = 0; i < res.teacherList.length; i++) {
              rowIndexList_[i] = String(res.teacherList[i]["u_idx"]);
            }
            setRowIndexList(rowIndexList_);
            setCheckedList([]);
          } else {
            console.log(res.error);
            dispatch(getTeacherListError(res.error));
          }
        })
        .catch((e) => {
          console.log("apiTeacherList.catch - e:", e);
        });
    }

    // 수정 이벤트 핸들러
    const editBtnHandler = (u_idx, editTextInputName, editTextInputPhone, editTextInputEmail, cIdxTmp, agIdxTmp) => {
      console.log('edit btn 핸들러', u_idx, editTextInputName, editTextInputPhone, editTextInputEmail, cIdxTmp, agIdxTmp);

      apiEditTeacher(u_idx, editTextInputName, editTextInputPhone, editTextInputEmail, cIdxTmp, agIdxTmp)
        .then(async (res) => {
          if (res.result) {
            console.log(
              "==================res.result==================",
              res.teacherList
            );
            dispatch(getTeacherList(res.teacherList));
            let rowIndexList_ = new Array(res.teacherList.length);
            for (let i = 0; i < res.teacherList.length; i++) {
              rowIndexList_[i] = String(res.teacherList[i]["u_idx"]);
            }
            setRowIndexList(rowIndexList_);
            setCheckedList([]);
          } else {
            console.log(res.error);
            dispatch(getTeacherListError(res.error));
          }
          dispatch(resetField());
        })
        .catch((e) => {
          console.log("apiTeacherList.catch - e:", e);
          dispatch(resetField());
        });

        
    }

    // 등록 이벤트 핸들러
    const addBtnHandler = (insertTextInputName, insertTextInputPhone, insertTextInputEmail, c_idx, ag_idx) => {
      console.log('add btn 핸들러', insertTextInputName, insertTextInputPhone, insertTextInputEmail, c_idx, ag_idx);

      apiAddTeacher(insertTextInputName, insertTextInputPhone, insertTextInputEmail, c_idx, ag_idx)
        .then(async (res) => {
          if (res.result) {
            console.log(
              "==================res.result==================",
              res.teacherList
            );
            dispatch(getTeacherList(res.teacherList));
            let rowIndexList_ = new Array(res.teacherList.length);
            for (let i = 0; i < res.teacherList.length; i++) {
              rowIndexList_[i] = String(res.teacherList[i]["u_idx"]);
            }
            setRowIndexList(rowIndexList_);
            setCheckedList([]);
            
          } else {
            console.log(res.error);
            dispatch(getTeacherListError(res.error));
          }
          dispatch(resetField());
        })
        .catch((e) => {
          console.log("apiAddTeacher.catch - e:", e);
          dispatch(resetField());
        });
    }
    
    console.log('agencyList : ', agencyList);
    console.log('classList : ', classList);
    console.log('teacherList : ', teacherList);
    console.log('rowIndexList : ', rowIndexList);
    console.log('checkedList : ', checkedList);
    console.log('teacherIdxName : ', teacherIdxName);
    console.log('teacherAttendList: ', teacherAttendList);

    return  <TeacherAttendClassWebComponent 
                agIdxTmp={agIdxTmp}
                cIdxTmp={cIdxTmp}
                agencyList={agencyList}
                classList={classList}
                teacherList={teacherList}
                checkedList={checkedList}
                rowIndexList={rowIndexList}
                onChange={onChange}
                checkHandler={checkHandler}
                addModalShow={addModalShow}
                editModalShow={editModalShow}
                handleAddModalClose={handleAddModalClose}
                handleAddModalShow={handleAddModalShow}
                handleEditModalClose={handleEditModalClose}
                handleEditModalShow={handleEditModalShow}
                addModalButtonControl={addModalButtonControl}
                editModalButtonControl={editModalButtonControl}
                removeModalButtonControl={removeModalButtonControl}
                removeBtnHandler={removeBtnHandler}
                editBtnHandler={editBtnHandler}
                addBtnHandler={addBtnHandler}
                editTextInputName={editTextInputName}
                editTextInputPhone={editTextInputPhone}
                editTextInputEmail={editTextInputEmail}
                insertTextInputName={insertTextInputName}
                insertTextInputPhone={insertTextInputPhone}
                insertTextInputEmail={insertTextInputEmail}
                teacherIdxName={teacherIdxName}
                teacherAttendList={teacherAttendList}
            />;
};

export default TeacherAttendClassWebContainer;