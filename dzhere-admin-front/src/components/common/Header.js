import React from 'react';
import { StyleSheet, View, Image } from 'react-native';
import logo from '../../../assets/logo.png'

export const Header = () => {
    return (
      <View style={styles.container, {alignItems: 'center', marginTop: 40}}>
        <View style={styles.header}></View>
        <Image
          style={styles.headerImage}
          source={logo}
        />
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      width: Platform.OS === "android" ? "95%" : "60%",
      justifyContent: 'center',
      padding: Platform.OS === "android" ? "1%" : "1.5%",
    },
    header: {
      height: 50
    },
    headerImage: {
      width: 100,
      height: 100,
    },
  });