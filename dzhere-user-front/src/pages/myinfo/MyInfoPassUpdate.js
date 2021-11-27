import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Header, Footer } from '../../components/myinfo/MyInfo';
import { Contents } from '../../components/myinfo/MyInfoPassUpdate';

const MyInfoPassUpdate = () => {
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

export default MyInfoPassUpdate;
