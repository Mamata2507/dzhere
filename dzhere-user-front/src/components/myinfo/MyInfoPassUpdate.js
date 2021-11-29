import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { images } from './MyInfoImages';
import IconButton from './MyInfoIconButton';
import { useNavigation } from '@react-navigation/native'
import { Platform } from 'react-native';
import CustomTextInput from '../auth/CustomTextInput'
import ErrorMessage from "../auth/ErrorMessage";

export const Contents = ({ pwCk1, onChangePwCk1, newPw, onChangeNewPw, pwCk2, onChangePwCk2, onPress }) => {

    const navigation = useNavigation();

    return (
      <View style={[styles.container, {height: 340, backgroundColor: '#CEEDFF', marginTop: 50}]}>
        <View style={styles.myInfo}>
          <IconButton type={images.email}/>
          <CustomTextInput
            name="currentPassword"
            value={currentPassword}
            onChangeText={onChangeText}
            placeholder="기존 비밀번호"
            maxLength={16}
            keyboardType="default"
            secureTextEntry={true}
            style={styles.myInfoText}
          />
        </View>

        <View style={{ flexDirection: "row" }}>
            {error1 && <ErrorMessage>{error1}</ErrorMessage>}
        </View>

        <View style={styles.myInfo}>
          <IconButton type={images.email}/>
          <CustomTextInput
            name="newPassword"
            value={newPassword}
            onChangeText={onChangeText}
            placeholder="새 비밀번호"
            maxLength={16}
            keyboardType="default"
            secureTextEntry={true}
            style={styles.myInfoText}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
            {error2 && <ErrorMessage>{error2}</ErrorMessage>}
        </View>
        <View style={styles.myInfo}>
          <IconButton type={images.email}/>
          <CustomTextInput
            name="passwordConfirm"
            value={passwordConfirm}
            onChangeText={onChangeText}
            placeholder="비밀번호 확인"
            maxLength={16}
            keyboardType="default"
            secureTextEntry={true}
            style={styles.myInfoText}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
            {error3 && <ErrorMessage>{error3}</ErrorMessage>}
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
      padding: Platform.OS === "android" ? "1%" : "1.5%",
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
  });