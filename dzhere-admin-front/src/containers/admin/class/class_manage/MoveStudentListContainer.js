import { useNavigation } from "@react-navigation/core";
import React from "react";
import { View, Text, Pressable } from "react-native";
import { getStudentList } from "../../../../lib/api/class/course";
import { getStudent, setClassId } from "../../../../modules/admin/class/course";
import { useDispatch } from "react-redux";

const MoveStudentListContainer = ({ uniqueKey, item, styles }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  async function studentListApi() {
    console.log("수강생 리스트 불러오기");
    const data = await getStudentList(item);
    dispatch(setClassId(item));
    dispatch(getStudent(data));
    navigation.navigate("StudentList");
  }

  const onPress = () => {
    studentListApi();
  };

  return (
    <View style={styles.card} uniqueKey={uniqueKey}>
      <Pressable onPress={onPress}>
        <Text style={styles.classname}>{item.c_name}</Text>
        <View style={styles.divider} />
        </Pressable>
        <Text style={styles.hintText}>수강생 관리</Text>
    </View>
  );
};

export default MoveStudentListContainer;
