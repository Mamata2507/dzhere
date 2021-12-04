import * as React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
} from "react-native";
import TeacherAttendClassContainerAndroid from "../../containers/teacher/TeacherAttendClassContainerAndroid";
import TeacherAttendClassContainerWeb from "../../containers/teacher/TeacherAttendClassWebContainer";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Provider } from "react-native-paper";

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
