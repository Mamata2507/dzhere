import "react-native-gesture-handler";
import * as React from "react";
import { View, TouchableOpacity, Image } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import menubar from "../../../assets/menubar.png";
import CheckPage from "../../pages/client/check/check_index";
import ListPage from "../../pages/client/list/list_index";
import ExternalPage from "../../pages/client/external/ExternalPage";
import MyPage from "../../pages/client/myinfo/myinfo_index";
import ExternalForm from "../../pages/client/external/ExternalForm";
// import ExternalAdd from "../client/external/ExternalAdd";
// import ExternalAddContainer from "../../containers/client/external/ExternalAddContainer";
export const Stack = createStackNavigator();
export const Drawer = createDrawerNavigator();

export const NavigationDrawerStructure = (props) => {
  console.log("토글");
  //Structure for the navigatin Drawer
  function toggleDrawer() {
    //Props to open/close the drawer
    console.log("함수 실행");
    props.navigationProps.toggleDrawer();
  };

  return (
    <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={toggleDrawer}>
        <Image
          source={menubar}
          style={{ width: 30, height: 30, marginLeft: 20 }}
        />
      </TouchableOpacity>
    </View>
  );
};

export const firstScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="CheckPage">
      <Stack.Screen
        name="CheckPage"
        component={CheckPage}
        options={{
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          title: "",
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export const secondScreenStack = ({ navigation }) => {
  return (
    // Link to
    <Stack.Navigator
      initialRouteName="ListPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="ListPage"
        component={ListPage}
        options={{
          title: "", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};

export const thirdScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="ExternalPage"
    >
      <Stack.Screen
        name="ExternalPage"
        component={ExternalPage}
        options={{
          title: "", //Set Header Title
          headerLeft: () => (
            <NavigationDrawerStructure navigationProps={navigation} />
          ),
          headerTransparent: true,
        }}
      />
      <Stack.Screen
        name="ExternalForm"
        component={ExternalForm}
        options={{
          title: "", //Set Header Title
          headerShown: true,
          headerTransparent: true,
        }}
      />
    </Stack.Navigator>
  );
};

export const fourthScreenStack = ({ navigation }) => {
  return (
    <Stack.Navigator
    initialRouteName="MyPage"
      screenOptions={{
        headerLeft: () => (
          <NavigationDrawerStructure navigationProps={navigation} />
        ),
        headerTransparent: true,
      }}
    >
      <Stack.Screen
        name="MyPage"
        component={MyPage}
        options={{
          title: "", //Set Header Title
        }}
      />
    </Stack.Navigator>
  );
};