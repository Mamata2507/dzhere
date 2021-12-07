import * as React from "react";
import {
  SafeAreaView,
  StyleSheet,
  Platform,
} from "react-native";
import TeacherAttendClassContainerAndroid from "../../containers/teacher/TeacherAttendClassContainerAndroid";
import TeacherAttendClassContainerWeb from '../../containers/teacher/TeacherAttendClassContainerWeb';
import { getStatusBarHeight } from "react-native-status-bar-height";


const ClassList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === "android" ? (
        <TeacherAttendClassContainerAndroid />
      ) : (
        <TeacherAttendClassContainerWeb />
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginTop: getStatusBarHeight(),
  },
});

export default ClassList;