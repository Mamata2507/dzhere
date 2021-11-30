import * as React from 'react';
import { Button, View, Text, SafeAreaView, StyleSheet } from 'react-native';

const ClassList = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>{'TeacherAttendClass'}</Text>
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

export default ClassList;
