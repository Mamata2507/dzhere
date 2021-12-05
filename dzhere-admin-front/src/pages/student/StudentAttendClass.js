import * as React from "react";
import {
  Button,
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  Platform,
} from "react-native";
import StudentAttendClassContainerAndroid from "../../containers/student/StudentAttendClassContainerAndroid";
import StudentAttendClassContainerWeb from "../../containers/student/StudentAttendClassContainerWeb";
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Provider } from "react-native-paper";

const ClassList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <StudentAttendClassContainerAndroid />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    // justifyContent: "center",
    marginTop: getStatusBarHeight(),
  },
});

export default ClassList;