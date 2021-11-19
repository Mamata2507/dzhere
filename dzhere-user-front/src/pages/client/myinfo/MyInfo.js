// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Header, Contents, Footer } from '../../../components/client/myinfo/MyInfo';

const MyInfo = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
                <Header />
                <Contents />
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
