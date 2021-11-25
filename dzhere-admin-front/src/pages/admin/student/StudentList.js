import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Header } from '../../../components/common/Header' 
import { Footer } from '../../../components/common/Footer' 
import StudentContainer from '../../../containers/admin/student/StudentListContainer'

const StudentManage = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
                <Header/>
                <StudentContainer navigation={navigation}/>
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

export default StudentManage;
