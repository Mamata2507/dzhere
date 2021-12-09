import React, { useState, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import Checkbox from "expo-checkbox";
import { setCheck, setValue } from '../../modules/user/list';

const CheckBoxIcon = ({ item, style }) => {
  const dispatch = useDispatch();
  const [isSelected, setSelection] = useState(false);
  const checkId = useSelector(({ list }) => list.checkid);

  const onValueChange = useCallback(() => {
    // 어떤 버튼도 선택하지 않았을 때
    if(!checkId){
      setSelection(!isSelected);
      dispatch(setCheck(!isSelected));   
      dispatch(setValue(item));
    }
    // 버튼이 선택되어 있을 때
    else{
      setSelection(!isSelected);
      dispatch(setCheck(!isSelected));
      dispatch(setValue(0));
    }
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