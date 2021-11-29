import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "expo-checkbox";
import { setCheck, setValue } from '../../modules/student/student';

const CheckBoxIcon = ({ item, style }) => {
  const dispatch = useDispatch();
  const [isSelected, setSelection] = useState(false);
  const checkId = useSelector(({ student }) => student.checkid);

  const onValueChange = useCallback(() => {
    // 어떤 버튼도 선택하지 않았을 때
    if(!checkId){
      setSelection(true);
      dispatch(setCheck(true));
      console.log('//////////////////////////////////////////////////////////////////////');
      console.log(item);
      console.log('//////////////////////////////////////////////////////////////////////');
      dispatch(setValue(item));
    }
    // 버튼이 선택되어 있을 때
    else{
      setSelection(false);
      dispatch(setCheck(false));
      dispatch(setValue(0));
    }
    // checkId && valueId === item.c_idx && dispatch(setCheck(false));
    // dispatch(setCheck(true));
    // isSelected && dispatch(setValue(item.c_idx));
    // console.log("후: ", isSelected, checkId, item.c_idx, valueId);
  },[isSelected]);

  return (
    <Checkbox
      style={style}
      value={isSelected}
      onValueChange={onValueChange}
      disabled={checkId ? (!isSelected ? true : false) : false}
      color={isSelected ? "#004cff" : "#666666"}
    />
  );
};

export default CheckBoxIcon;