import * as React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import TeacherListContainer from '../../containers/teacher/TeacherListContainer'

const StudentList = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <TeacherListContainer />
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
