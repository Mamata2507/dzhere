import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import menubar from '../../../assets/menubar.png'
import ClassManage from '../../pages/class/ClassManage'
import ClassList from '../../pages/class/ClassList'
import ClassLocation from '../../pages/class/ClassLocation'
import ClassExternal from '../../pages/class/ClassExternal'
import StudentList from '../../pages/student/StudentList'
import StudentAttend from '../../pages/student/StudentAttend'
import StudentAttendClass from '../../pages/student/StudentAttendClass'
import TeacherList from '../../pages/teacher/TeacherListPage'
import TeacherAttendClass from '../../pages/teacher/TeacherAttendClass'

// Import Custom Sidebar
// import CustomSidebarMenu from './CustomSidebarMenu';

export const Stack = createStackNavigator();
export const Drawer = createDrawerNavigator();

export const NavigationDrawerStructure = (props) => {
  //Structure for the navigatin Drawer
  const toggleDrawer = () => {
    //Props to open/close the drawer
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: 'row' }}>
      <TouchableOpacity onPress={toggleDrawer}>
        {/*Donute Button Image */}
        <Image
          source={menubar}
          style={{ width: 30, height: 30, marginLeft: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

// 강의 목록
export const ClassListScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="ClassList"
    >
      <Stack.Screen
        name="ClassList"
        component={ClassList}
        options={{
          title: "",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTransparent: true,
          
        }}
      />
    </Stack.Navigator>
  );
}

// 강의 관리
export const ClassManageScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="ClassManage"
    >
      <Stack.Screen
        name="ClassManage"
        component={ClassManage}
        options={{
          title: "",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

// 강의 장소 관리
export const ClassLocationScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="ClassLocation"
    >
      <Stack.Screen
        name="ClassLocation"
        component={ClassLocation}
        options={{
          title: "",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

// 외부 장소 관리
export const ClassExternalScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="ClassExternal"
    >
      <Stack.Screen
        name="ClassExternal"
        component={ClassExternal}
        options={{
          title: "",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

// 수강생 관리
export const StudentListScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="StudentList"
    >
      <Stack.Screen
        name="StudentList"
        component={StudentList}
        options={{
          title: "",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

// 수강생별 출결 현황
export const StudentAttendScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="StudentAttend"
    >
      <Stack.Screen
        name="StudentAttend"
        component={StudentAttend}
        options={{
          title: "",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

// 수강생 강의별 출결 현황
export const StudentAttendClassScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="StudentAttendClass"
    >
      <Stack.Screen
        name="StudentAttendClass"
        component={StudentAttendClass}
        options={{
          title: "",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

// 강사 정보 관리
export const TeacherListScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="TeacherListClass"
    >
      <Stack.Screen
        name="TeacherList"
        component={TeacherList}
        options={{
          title: "",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}

// 강사 강의별 출결 현황
export const TeacherAttendClassScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="TeacherAttendClass"
    >
      <Stack.Screen
        name="TeacherAttendClass"
        component={TeacherAttendClass}
        options={{
          title: "",
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
}




