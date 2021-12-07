// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Header, Footer } from '../../components/myinfo/MyInfo';
import MyInfoContainerAndroid from '../../containers/myinfo/MyInfoContainerAndroid'
import MyInfoContainerWeb from '../../containers/myinfo/MyInfoContainerWeb'
import { Platform, View } from 'react-native';

const MyInfo = ({ navigation }) => {
    return (Platform.OS === "android") ? 
    // <SafeAreaView style={styles.container}>
    <View style={{ backgroundColor: '#fff', height: "100%"}}>
        <Header />
            <MyInfoContainerAndroid />
        <Footer />
    </View>
    // </SafeAreaView>
    :
    <SafeAreaView style={styles.container}>
        <Header />
            <MyInfoContainerWeb />
        <Footer />
    </SafeAreaView>
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export default MyInfo;
