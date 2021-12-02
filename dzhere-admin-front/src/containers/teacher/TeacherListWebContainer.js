import { number } from 'joi';
import React, { useEffect, useState } from 'react';
import { Text, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TeacherListWebComponent from '../../components/teacher/TeacherListWebComponent';
import { apiAgencyList, apiClassList, apiTeacherList, apiRemoveTeacher, apiEditTeacher, apiAddTeacher } from '../../lib/api/teacher/teacher';
import { getAgencyList, getClassList, getAgencyListError, getClassListError, getTeacherList, getTeacherListError, changeField} from '../../modules/teacher/teacher';

const TeacherListWebContainer = () => {
    console.log("TeacherListWebContainer ====> Component 리턴");

    const dispatch = useDispatch();

    const { agencyList, classList, teacherList, editTextInputName, editTextInputPhone, editTextInputEmail, insertTextInputName, insertTextInputPhone, insertTextInputEmail } = useSelector(({ teacher }) => ({
      agencyList: teacher.agencyList,
      classList: teacher.classList,
      teacherList: teacher.teacherList,
      editTextInputName: teacher.editTextInputName,
      editTextInputPhone: teacher.editTextInputPhone,
      editTextInputEmail: teacher.editTextInputEmail,
      insertTextInputName: teacher.insertTextInputName,
      insertTextInputPhone: teacher.insertTextInputPhone,
      insertTextInputEmail: teacher.insertTextInputEmail,
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
        
        apiTeacherList(value, agIdxTmp)
          .then(async (res) => {
            if (res.result) {
              console.log(
                "==================res.result==================",
                res.TeacherList
              );
              dispatch(getTeacherList(res.teacherList));
              let rowIndexList_ = new Array(res.teacherList.length);
              for(let i=0; i<res.teacherList.length; i++){
                rowIndexList_[i] = String(res.teacherList[i]['u_idx']);
              }
              setRowIndexList(rowIndexList_);
            } else {
              console.log(res.error);
              dispatch(getTeacherListError(res.error));
            }
          })
          .catch((e) => {
            console.log("apiTeacherList.catch - e:", e);
          });

          // if(rowIndexList.length > 0)
          //   setAddModalButtonControl(true)
          // else setAddModalButtonControl(false)
          console.log('addModalButtonControl : ', addModalButtonControl);
          console.log('클래스 idx : ', cIdxTmp);
          console.log('기관 idx : ', agIdxTmp);
      }

      if(name === 'editTextInputName'){
        dispatch(
          changeField({
            key: name,
            value: value,
          })
        );
      }

      if(name === 'editTextInputPhone'){
        dispatch(
          changeField({
            key: name,
            value: value,
          })
        );
      }

      if(name === 'insertTextInputName'){
        dispatch(
          changeField({
            key: name,
            value: value,
          })
        );
      }
      if(name === 'insertTextInputPhone'){
        dispatch(
          changeField({
            key: name,
            value: value,
          })
        );
      }
      if(name === 'insertTextInputEmail'){
        dispatch(
          changeField({
            key: name,
            value: value,
          })
        );
      }
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
            dispatch(
              changeField({
                key: 'editTextInputName',
                value: null,
              })
            );
            dispatch(
              changeField({
                key: 'editTextInputPhone',
                value: null,
              })
            );
            dispatch(
              changeField({
                key: 'editTextInputEmail',
                value: null,
              })
            );
            dispatch(
              changeField({
                key: 'insertTextInputName',
                value: null,
              })
            );
            dispatch(
              changeField({
                key: 'insertTextInputPhone',
                value: null,
              })
            );
            dispatch(
              changeField({
                key: 'insertTextInputEmail',
                value: null,
              })
            );
          } else {
            console.log(res.error);
            dispatch(getTeacherListError(res.error));
          }
        })
        .catch((e) => {
          console.log("apiTeacherList.catch - e:", e);
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
            dispatch(
              changeField({
                key: 'insertTextInputName',
                value: null,
              })
            );
            dispatch(
              changeField({
                key: 'insertTextInputPhone',
                value: null,
              })
            );
            dispatch(
              changeField({
                key: 'insertTextInputEmail',
                value: null,
              })
            );
          } else {
            console.log(res.error);
            dispatch(getTeacherListError(res.error));
          }
        })
        .catch((e) => {
          console.log("apiAddTeacher.catch - e:", e);
        });
    }
    
    console.log('agencyList : ', agencyList);
    console.log('classList : ', classList);
    console.log('teacherList : ', teacherList);
    console.log('rowIndexList : ', rowIndexList);
    console.log('checkedList : ', checkedList);
    return  <TeacherListWebComponent 
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
            />;
};

export default TeacherListWebContainer;