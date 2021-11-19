import 'react-native-gesture-handler';

import * as React from 'react';
import { View, TouchableOpacity, Image } from 'react-native';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import menubar from '../../../assets/menubar.png'
import CheckPage from '../../pages/client/check/check_index';
import ListPage from '../../pages/client/list/list_index';
import ExternalPage from '../../pages/client/external/external_index';

import MyPage from '../../pages/client/myinfo/MyInfo';
import MyPageEmailUpdate from '../../pages/client/myinfo/MyInfoEmailUpdate';
import MyPagePassUpdate from '../../pages/client/myinfo/MyInfoPassUpdate';
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
          style={{ width: 25, height: 25, marginLeft: 5 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export const firstScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="CheckPage">
      <Stack.Screen
        name="오늘의 출석"
        component={CheckPage}
        options={{
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          title: '',
          headerTransparent: true
        }}
      />
    </Stack.Navigator>
  );
}

export const secondScreenStack = ({ navigation }) => {
  return (
    // Link to
    <Stack.Navigator
      initialRouteName="ListPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerTransparent: true
      }}>
      <Stack.Screen
        name="ListPage"
        component={ListPage}
        options={{
          title: '', //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
}

export const thirdScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="ExternalPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerTransparent: true
      }}>
      <Stack.Screen
        name="ExternalPage"
        component={ExternalPage}
        options={{
          title: '', //Set Header Title
        }}
      />
      
      {/* <Stack.Screen
        name="ExternalPage"
        component={ExternalPage}
        options={{
          title: '', //Set Header Title
        }}
      /> */}
    </Stack.Navigator>
  );
}

export const fourthScreenStack = ({ props: params, navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="MyPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerTransparent: true
      }}>
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{
          title: '', //Set Header Title
        }}
      />
       <Stack.Screen
        name="MyPageEmailUpdate"
        component={MyPageEmailUpdate}
        options={{
          title: '',
          headerShown: true,
        }}
        initialParams={params}
      />
       <Stack.Screen
        name="MyPagePassUpdate"
        component={MyPagePassUpdate}
        options={{
          title: '', 
          headerShown: true,
        }}
      />
    </Stack.Navigator>
  );
}

// // 첫 번째로 들어오는 곳, View
// function SideBar() {
//   return (
//     <NavigationContainer>
//       <Drawer.Navigator
//         drawerContentOptions={{
//           activeTintColor: '#e91e63',
//           itemStyle: { marginVertical: 5 },
//         }}
//         drawerContent={(props) => <CustomSidebarMenu {...props} />}>
//         <Drawer.Screen
//           name="CheckPage"
//           options={{ drawerLabel: '오늘의 출석' }}
//           component={firstScreenStack}
//         />
//         <Drawer.Screen
//           name="SecondPage"
//           options={{ drawerLabel: '지난 출석 보기' }}
//           component={secondScreenStack}
//         />
//         <Drawer.Screen
//           name="ThirdPage"
//           options={{ drawerLabel: '외부 장소' }}
//           component={thirdScreenStack}
//         />
//         <Drawer.Screen
//           name="FourthPage"
//           options={{ drawerLabel: '내 장소' }}
//           component={secondScreenStack}
//         />
//       </Drawer.Navigator>
//     </NavigationContainer>
//   );
// }

