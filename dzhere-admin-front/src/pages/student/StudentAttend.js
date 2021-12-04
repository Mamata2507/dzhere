// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from "react";
import { SafeAreaView, Platform, StyleSheet } from "react-native";
import { getStatusBarHeight } from "react-native-status-bar-height";
import StudentAttendContainerAndroid from "../../containers/student/StudentAttendContainerAndroid";

const ClassList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {Platform.OS === "android" ? (
        <>
          <StudentAttendContainerAndroid />
        </>
      ) : (
        <></>
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
