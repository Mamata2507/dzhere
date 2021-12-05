// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/


// import TeacherAttendClassContainerAndroid from '../../containers/teacher/TeacherAttendClassContainerAndroid';
// import TeacherAttendClassWebContainer from '../../containers/teacher/TeacherAttendClassWebContainer';

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
import TeacherAttendClassWebContainer from '../../containers/teacher/TeacherAttendClassWebContainer';
import { getStatusBarHeight } from "react-native-status-bar-height";
import { Provider } from "react-native-paper";

const ClassList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === "android" ? (
        <TeacherAttendClassContainerAndroid />
      ) : (
        <TeacherAttendClassWebContainer />
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