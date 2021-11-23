// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const ClassPage = ({ navigation }) => {
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
            강의 관리
          </Text>
        </View>
        <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
          Custom React Navigate Drawer
        </Text>
      </View>
    </SafeAreaView>
  );
};

export default ClassPage;
