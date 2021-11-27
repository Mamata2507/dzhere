import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Header, Footer } from '../../components/myinfo/MyInfo';
import MyInfoContainer from '../../containers/myinfo/MyInfoContainer';

const MyInfo = () => {
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
