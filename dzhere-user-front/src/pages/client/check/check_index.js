// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { AuthContext } from '../../../App';
import JWT from 'expo-jwt';
import jwt_decode from "jwt-decode";

const check_index = ({ navigation, route }) => {
  console.log(navigation);
  console.log(route);
  const token = route.params.userToken;
  const decoded = jwt_decode(token);
  const loginedPhone = decoded['sub'].split(',')[0];
  const roleAuth = decoded['sub'].split(',')[1];
  console.log(typeof(decoded['sub']), decoded['sub']);

  const {signOut} = React.useContext(AuthContext);
  return (
    <SafeAreaView style={{ flex: 1,  backgroundColor: 'white' }}>
      <View style={{ flex: 1, padding: 16}}>
        <View
          style={{
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text
            style={{
              fontSize: 25,
              textAlign: 'center',
              marginBottom: 16,
            }}>
            오늘의 출석
          </Text>
          <Text>{loginedPhone}</Text>
          <Text>{roleAuth}</Text>
          <TouchableOpacity
            onPress={() => {
              signOut();
              // navigation.navigate("UserLoginPage");
              }
            }
          ><Text>로그아웃</Text></TouchableOpacity>
          {/* <Button
            onPress={() => navigation.navigate('SecondPage')}
            title="Go to Second Page"
          />
          <Button
            onPress={() => navigation.navigate('ThirdPage')}
            title="Go to Third Page"
          /> */}
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          Custom React Navigate Drawer
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default check_index;
