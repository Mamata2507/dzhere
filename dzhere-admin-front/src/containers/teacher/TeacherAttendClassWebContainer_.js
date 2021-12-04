import React from "react";
import TeacherAttendClassWebComponent from "../../components/teacher/web/TeacherAttendClassWebComponent";
import { useDispatch, useSelector, } from "react-redux";
import { useState, useEffect} from "react";
import { apiTeacherAttendList, apiTeacherAttendListAll, apiAgencyList, apiClassList, apiTeacherList, apiRemoveTeacher, apiEditTeacher, apiAddTeacher } from '../../lib/api/user/teacherWeb';
import { resetField, getAgencyList, getClassList, getAgencyListError, getClassListError, getTeacherList, getTeacherListError, changeField} from '../../modules/user/teacherWeb';

export default function TeacherAttendClassContainerWeb() {
  const dispatch = useDispatch();

  const { u_idx, agencyList, classList, teacherList, editTextInputName, editTextInputPhone, editTextInputEmail, insertTextInputName, insertTextInputPhone, insertTextInputEmail } = useSelector(({ teacherWeb }) => ({
    u_idx : teacherWeb.u_idx,
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
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

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
            dispatch(
              changeField({
                key: 'u_idx',
                value: res.TeacherList[0].u_idx,
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

        // if(rowIndexList.length > 0)
        //   setAddModalButtonControl(true)
        // else setAddModalButtonControl(false)
        console.log('addModalButtonControl : ', addModalButtonControl);
        console.log('클래스 idx : ', cIdxTmp);
        console.log('기관 idx : ', agIdxTmp);
    }

    
  };
  
  const onChangeStartDate = (date) => {
    setStartDate(date);
  };

  const onChangeEndDate = (date) => {
    setEndDate(date);
  };
  return (
    <TeacherAttendClassWebComponent
      agIdxTmp={agIdxTmp}
      cIdxTmp={cIdxTmp}
      agencyList={agencyList}
      classList={classList}
      teacherList={teacherList}
      checkedList={checkedList}
      rowIndexList={rowIndexList}
      onChange={onChange}
      // checkHandler={checkHandler}
      addModalShow={addModalShow}
      editModalShow={editModalShow}
      handleAddModalClose={handleAddModalClose}
      handleAddModalShow={handleAddModalShow}
      handleEditModalClose={handleEditModalClose}
      handleEditModalShow={handleEditModalShow}
      addModalButtonControl={addModalButtonControl}
      editModalButtonControl={editModalButtonControl}
      removeModalButtonControl={removeModalButtonControl}
      // removeBtnHandler={removeBtnHandler}
      // editBtnHandler={editBtnHandler}
      // addBtnHandler={addBtnHandler}
      editTextInputName={editTextInputName}
      editTextInputPhone={editTextInputPhone}
      editTextInputEmail={editTextInputEmail}
      insertTextInputName={insertTextInputName}
      insertTextInputPhone={insertTextInputPhone}
      insertTextInputEmail={insertTextInputEmail}
      startDate={startDate}
      endDate={endDate}
      onChangeStartDate={onChangeStartDate}
      onChangeEndDate={onChangeEndDate}
      u_idx={u_idx}
    />
  );
}
