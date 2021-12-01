// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { Button, View, Text, SafeAreaView, Platform } from 'react-native';
import TeacherListWebContainer from '../../containers/teacher/TeacherListWebContainer';

const TeacherListPage = ({ navigation }) => {
  console.log('TeacherListPage : Platform 구분 ===> Container 리턴');
  return Platform.OS === "web" ? (
    <TeacherListWebContainer
    />
  ) : (
    <TeacherListAndroidContainer/>
  );
};

export default TeacherListPage;
