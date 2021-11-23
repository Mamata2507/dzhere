import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Platform } from 'react-native';

export const Footer = () => {
    return (
      <View style={[styles.container, styles.footer]}>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      width: Platform.OS === "android" ? "95%" : "60%",
      justifyContent: 'center',
      padding: Platform.OS === "android" ? "1%" : "1.5%",
    },
    footer: {
      height: "15%",
    },
  });