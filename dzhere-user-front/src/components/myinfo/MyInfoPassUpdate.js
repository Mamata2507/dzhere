import React from 'react';
import { StyleSheet, TouchableOpacity, View, Text, TextInput } from 'react-native';
import { images } from './MyInfoImages';
import IconButton from './MyInfoIconButton';
import { useNavigation } from '@react-navigation/native'
import { Platform } from 'react-native';

export const Contents = ({ currentPassword, setCurrentPassword, newPassword, 
                           setNewPassword, passwordConfirm, setPasswordConfirm,
                           newPasswordError, passwordConfirmError,
                           onPress, emptyError, checkError1, onCheck, loadingCheck,
                           checkError2, edit}) => {

    const navigation = useNavigation();

    return (
      <View style={[styles.container, {height: 380, backgroundColor: '#CEEDFF', marginTop: 50}]}>
        <Text>{newPasswordError}</Text>
        <View style={styles.myInfo}>
          <IconButton type={images.email}/>
          <TextInput
            value={currentPassword}
            onChangeText={setCurrentPassword}
            placeholder="기존 비밀번호"
            maxLength={16}
            keyboardType="default"
            secureTextEntry={true}
            style={styles.myInfoText}
            editable={edit}
          />
                <TouchableOpacity
                style={[styles.btn, {marginTop: 15, alignSelf: 'center', width: '20%'}]}
                onPress={onCheck}
                >
                <Text style={styles.btnText}>확인</Text>
              </TouchableOpacity>
        </View>

        <View style={{ flexDirection: "row" }}>
            <Text style={styles.error}>
              {loadingCheck && ''}
              {!loadingCheck && ''}
            </Text>
            <Text style={styles.error}>
              {edit && checkError2}
              {!edit && checkError1}
            </Text>
        </View>

        <View style={styles.myInfo}>
          <IconButton type={images.email}/>
          <TextInput
            value={newPassword}
            onChangeText={setNewPassword}
            placeholder="새 비밀번호"
            maxLength={16}
            keyboardType="default"
            secureTextEntry={true}
            style={styles.myInfoText}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
            <Text style={styles.error}>{newPasswordError}</Text>
        </View>
        <View style={styles.myInfo}>
          <IconButton type={images.email}/>
          <TextInput
            value={passwordConfirm}
            onChangeText={setPasswordConfirm}
            placeholder="비밀번호 확인"
            maxLength={16}
            keyboardType="default"
            secureTextEntry={true}
            style={styles.myInfoText}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
            <Text style={styles.error}>{passwordConfirmError}</Text>
            <Text style={styles.error}>{emptyError}</Text>
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
    btnText: {
      fontSize: 14,
      fontWeight: 'bold',
      color: 'white',
      textAlignVertical: "center",
    },
  });