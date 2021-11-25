import { useNavigation } from "@react-navigation/core";
import React, { useState } from "react";
import { View, Text, Pressable } from "react-native";
import { getStudentList } from "../../../lib/api/class/classlist";
import { getStudent, setClassId } from "../../../modules/admin/class/classlist";
import { useDispatch, useSelector } from "react-redux";

const MoveStudentListContainer = ({ item, styles }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  // const state = useSelector(({classes}) => classes.studentlist)

  async function studentListApi() {
    console.log("수강생 리스트 불러오기");
    const data = await getStudentList(item);
    dispatch(setClassId(item));
    // console.log(data);
    dispatch(getStudent(data));
    // console.log(state);
    navigation.navigate("StudentList");
  }

  const onPress = () => {
    studentListApi();
  };

  return (
    //   <View style={styles.card} uniqueKey={item.c_idx} onTap={(onPress)}>
    //   <Text style={styles.classname}>{item.c_name}</Text>
    // </View>
    <View style={styles.card}>
      <Pressable onPress={onPress}>
        <Text style={styles.classname}>{item.c_name}</Text>
        <View style={styles.divider} />
        <Text style={styles.hintText}>수강생 관리</Text>
      </Pressable>
    </View>
  );
};

export default MoveStudentListContainer;
