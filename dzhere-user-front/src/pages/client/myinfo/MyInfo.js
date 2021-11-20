// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Header, Footer } from '../../../components/client/myinfo/MyInfo';
import MyInfoContainer from '../../../containers/client/myinfo/MyInfoContainer';

const MyInfo = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
                <Header />
                <MyInfoContainer />
                <Footer />
        </SafeAreaView>
    );
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
