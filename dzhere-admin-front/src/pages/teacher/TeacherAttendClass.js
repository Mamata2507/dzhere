// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { Platform } from 'react-native';
import TeacherAttendClassWebContainer from '../../containers/teacher/TeacherAttendClassWebContainer';

const TeacherAttendClass = ({ navigation }) => {
  console.log('TeacherListPage : Platform 구분 ===> Container 리턴');
  return Platform.OS === "web" ? (
    <TeacherAttendClassWebContainer
    />
  ) : (
    <TeacherAttendClassContainerAndroid/>
  );
};

export default TeacherAttendClass;
