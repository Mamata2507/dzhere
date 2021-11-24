import React from 'react';
import { Platform, StyleSheet, Text } from 'react-native';

export const StudentListWeb = ({test}) => {
  return (
    <Text>{test}</Text>
  );
};

const styles = StyleSheet.create({
    container: {
        width: Platform.OS === "android" ? "95%" : "60%",
        height: Platform.OS === "android" ? '60%' : "70%",
        justifyContent: 'center',
        padding: Platform.OS === "android" ? "3%" : "1.5%",
    },
});