// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

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
import TeacherAttendClassContainerWeb from "../../containers/teacher/TeacherAttendClassContainerWeb";
import { getStatusBarHeight } from "react-native-status-bar-height";

const ClassList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* {Platform.OS === "android" ? (
        <TeacherAttendClassContainerAndroid />
      ) : (
        <TeacherAttendClassContainerWeb />
      )} */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    marginTop: getStatusBarHeight(),
  },
});

export default ClassList;
