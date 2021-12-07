import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { images } from './MyInfoImages';
import IconButton from './MyInfoIconButton';
import { useNavigation } from '@react-navigation/native'
import { Platform } from 'react-native';

export const Contents = ({ loadingEmail, email, onPress, newEmail, onChangeNewEmail, error }) => {

    const navigation = useNavigation();

    return (
      <View style={[styles.container, {height: 300, backgroundColor: '#CEEDFF', marginTop: 50}]}>
        <View style={styles.myInfo}>
          <IconButton type={images.email}/>
          <Text style={styles.myInfoText}>
          {loadingEmail && '로딩 중..'}
          {!loadingEmail && email && `${email.u_email}`}
        </Text>
        </View>
        <View style={styles.myInfo}>
          <IconButton type={images.email}/>
          <TextInput
          style={styles.myInfoText}
          onChangeText={onChangeNewEmail}
          value={newEmail}
          placeholder="이메일 변경"
          keyboardType="default"
          />
        </View>
        <View style={{ flexDirection: "row" }}>
            <Text style={styles.error}>
              {error}
            </Text>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={onPress}
            >
            <Text style={[{ fontSize: 18 }, styles.text]}>변경</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      width: Platform.OS === "android" ? "95%" : "60%",
      justifyContent: 'center',
      padding: Platform.OS === "android" ? "2%" : "1.5%",
      borderRadius: 20,
    },
    myInfo: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 10,
      padding: 5,
      margin: 3,
    },
    myInfoText: {
      flex: 1,
      fontSize: 22,
    },
    footer: {
      height: 80,
    },
    btnContainer: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10,
      alignItems: "center",
    },
    btn: {
      backgroundColor: "#5AA0C8",
      borderRadius: 10,
      width: Platform.OS === "android" ? "95%" : "30%",
      margin: 10,
      alignItems: "center",
      paddingVertical: 8,
      padding: 10,
    },
    text: {
      color: "white",
      fontWeight: "bold",
      margin: 10,
    },
    error: {
      color: "red",
      marginLeft: '5%',
    },
  });