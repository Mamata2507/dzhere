import { number } from 'joi';
import React, { useEffect, useState } from 'react';
import { Text, StatusBar } from 'react-native';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import TeacherListWebComponent from '../../components/teacher/TeacherListWebComponent';
import { apiAgencyList, apiClassList, apiTeacherList } from '../../lib/api/teacher/teacher';
import { getAgencyList, getClassList, getAgencyListError, getClassListError, getTeacherList, getTeacherListError, ch} from '../../modules/teacher/teacher';

const TeacherListWebContainer = () => {
    console.log("TeacherListWebContainer ====> Component 리턴");

    const dispatch = useDispatch();

    const { agencyList, classList, teacherList, } = useSelector(({ teacher }) => ({
      agencyList: teacher.agencyList,
      classList: teacher.classList,
      teacherList: teacher.teacherList,
    }));

    const [agIdxTmp, setAgIdxTmp] = useState(-1);
    const [checkedList, setCheckedList] = useState([]);
    const [rowIndexList, setRowIndexList] = useState([]);

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
        console.log('클래스 idx : ', value);
        console.log('기관 idx : ', agIdxTmp);
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
                rowIndexList_[i] = String(i);
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

    console.log('agencyList : ', agencyList);
    console.log('classList : ', classList);
    console.log('teacherList : ', teacherList);
    console.log('rowIndexList : ', rowIndexList);
    console.log('checkedList : ', checkedList);
    return  <TeacherListWebComponent 
                agencyList={agencyList}
                classList={classList}
                teacherList={teacherList}
                checkedList={checkedList}
                rowIndexList={rowIndexList}
                onChange={onChange}
                checkHandler={checkHandler}
            />;
};

export default TeacherListWebContainer;