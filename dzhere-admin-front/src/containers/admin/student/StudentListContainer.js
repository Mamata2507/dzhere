import React, { useEffect } from "react";
import { Contents } from "../../../components/admin/student/StudentList";
import { useDispatch, useSelector } from "react-redux";
import { useIsFocused } from "@react-navigation/core";

const StudentContainer = ({ navigation }) => {
  // const test = '하이';
  const dispatch = useDispatch();
  const isFocused = useIsFocused();
  const stlist = useSelector(({ classes }) => classes.stlist);
  const itemId = useSelector(({ classes }) => classes.itemId);
  console.log(itemId);
  // useEffect(() => {
  //   console.log("해당 페이지로 돌아왔을 때 리렌더링");
  //   if (isFocused) {
  //     dispatch(getStudent([]));
  //   }
  // }, [isFocused]);

  return (
    <Contents studentlist={stlist} classId={itemId} navigation={navigation} />
  );
};

export default StudentContainer;
