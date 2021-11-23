import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Platform } from 'react-native';

export const Header = () => {
    return (
        <View style={styles.header}></View>
    );
  };

  const styles = StyleSheet.create({
    header: {
      marginTop: Platform.OS === "android" ? '25%' : '30%',
      height: Platform.OS === "android" ? "20%" : "30%",
      width: Platform.OS === "android" ? "95%" : "60%",
      justifyContent: 'center',
      padding: Platform.OS === "android" ? "1%" : "1.5%",
      backgroundColor: '#CEEDFF',
      borderRadius: 15,
    },
  });