import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import { Footer } from '../../../components/common/Footer' 
import StudentListContainer from '../../../containers/admin/student/StudentListContainer'

const StudentList = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
                <StudentListContainer />
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

export default StudentList;
