import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { Platform } from 'react-native';

export const Contents = ({ test }) => {

    return (
      <View style={styles.container}>
        <Text>{test}</Text>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      width: Platform.OS === "android" ? "95%" : "60%",
      height: Platform.OS === "android" ? '60%' : "70%",
      justifyContent: 'center',
      padding: Platform.OS === "android" ? "1%" : "1.5%",
    },
  });