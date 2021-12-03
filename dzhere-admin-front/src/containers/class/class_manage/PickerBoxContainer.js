import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Picker } from "react-native";
import { setSelectClass } from "../../../modules/class/course";
import { useIsFocused } from "@react-navigation/core";

const PickerBoxContainer = ({ style }) => {
  const dispatch = useDispatch();
  const classList = useSelector(({ classes }) => classes.clist);
  // const externalist = useSelector(({ classes }) => classes.externalist);
  const selectClass = useSelector(({ classes }) => classes.selectClass);
  // const username = useSelector(({ classes }) => classes.name);
  const ctlist = useSelector(({ classes }) => classes.ctlist);
  // console.log(classList);
  const [selectedValue, setSelectedValue] = useState(0);
  const isFocused = useIsFocused();

  const onValueChange = (itemValue, itemIndex) => {
    setSelectedValue(parseInt(itemValue));
    dispatch(setSelectClass(parseInt(itemValue)));
  };

  useEffect(() => {
    return () => {
      setSelectedValue(0);
    };
  }, [isFocused]);

  // useEffect(() => {
  //   if (externalist == null && username == null) {
  //     setSelectedValue(0);
  //   }
  // }, [ctlist]);

  useEffect(() => {
    setSelectedValue(0);
  }, [ctlist]);

  return (
    <Picker
      selectedValue={selectedValue}
      onValueChange={onValueChange}
      style={style.pickerText}
    >
      <Picker.Item label="강의선택" value={0} />
      {classList.map((item) => (
        <Picker.Item key={item.c_idx} label={item.c_name} value={item.c_idx} />
      ))}
    </Picker>
  );
};

export default PickerBoxContainer;
