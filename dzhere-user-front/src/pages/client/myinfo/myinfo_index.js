// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { Button, View, Text, SafeAreaView } from 'react-native';

const myinfo_index = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <View style={{ flex: 1, padding: 16 }}>
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
                        내 정보
                    </Text>
                    {/* <Button
            title="오늘의 출석"
            onPress={() => navigation.navigate('CheckPage')}
          />
          <Button
            title="Go to Third Page"
            onPress={() => navigation.navigate('ThirdPage')}
          /> */}
                </View>
                <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
                    Custom React Navigate Drawer
                </Text>
            </View>
        </SafeAreaView>
    );
};

export default myinfo_index;
