// Custom Navigation Drawer / Sidebar with Image and Icon in Menu Options
// https://aboutreact.com/custom-navigation-drawer-sidebar-with-image-and-icon-in-menu-options/

import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Header, Footer } from '../../../components/client/myinfo/index';
import { Contents } from '../../../components/client/myinfo/email_update';

const email_update = ({ navigation }) => {
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

export default email_update;
