/* 사용자 :  로그인 완료하고 나서부터의 stack */
import React from 'react';
import { View, Text } from "react-native";
import { Drawer, ClassListScreenStack, ClassManageScreenStack, 
    ClassLocationScreenStack, ClassExternalScreenStack, 
    StudentListScreenStack, StudentAttendScreenStack, 
    StudentAttendClassScreenStack, TeacherListScreenStack, TeacherAttendClassScreenStack } 
    from '../components/common/SideBar';
import CustomSidebarMenu from '../components/common/CustomSidebarMenu';
import { DrawerItem } from '@react-navigation/drawer';

const AdminDrawer = () => {
    return (
      <Drawer.Navigator
        drawerContent={(props) => <CustomSidebarMenu {...props} />}>
        <Drawer.Screen
          name="ClassList"
          options={{ drawerLabel: '강의 목록' }}
          component={ClassListScreenStack}
        />
        <Drawer.Screen
          name="ClassManage"
          options={{ drawerLabel: '강의 관리' }}
          component={ClassManageScreenStack}
        />
        <Drawer.Screen
          name="ClassLocation"
          options={{ drawerLabel: '강의 장소 관리' }}
          component={ClassLocationScreenStack}
        />
        <Drawer.Screen
          name="ClassExternal"
          options={{ drawerLabel: '외부 장소 관리' }}
          component={ClassExternalScreenStack}
        />
        <Drawer.Screen
          name="StudentList"
          options={{ drawerLabel: '수강생 정보 관리' }}
          component={StudentListScreenStack}
        />
        <Drawer.Screen
          name="StudentAttend"
          options={{ drawerLabel: '수강생별 출결 현황' }}
          component={StudentAttendScreenStack}
        />
        <Drawer.Screen
          name="StudentAttendClass"
          options={{ drawerLabel: '강의별 출결 현황(수강생)' }}
          component={StudentAttendClassScreenStack}
        />
        <Drawer.Screen
          name="TeacherList"
          options={{ drawerLabel: '강사 정보 관리' }}
          component={TeacherListScreenStack}
        />
        <Drawer.Screen
          name="TeacherAttendClass"
          options={{ drawerLabel: '강의별 출결 현황(강사)' }}
          component={TeacherAttendClassScreenStack}
        />
      </Drawer.Navigator>
    );  
  };
export default AdminDrawer;
