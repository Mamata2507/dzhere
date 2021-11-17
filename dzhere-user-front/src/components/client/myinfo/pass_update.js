import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Text, Image, Alert } from 'react-native';
import { images } from './Images';
import IconButton from './IconButton';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native'

export const Contents = () => {

    const navigation = useNavigation();
  
    AsyncStorage.setItem('u_phone', '01023454710');
    const [data, setData] = useState([]);
  
    useEffect(() => {
      async function getStorage() {
        if (await AsyncStorage.getItem("u_phone")) {
          let LocalData = await AsyncStorage.getItem("u_phone");
          //console.log(LocalData);
          setData(LocalData);
        }
      }
      getStorage();
    }, []);
  
    function onPress(){
      Alert.alert('변경');
    }
  
    return (
      <View style={[styles.container, {height: 500, backgroundColor: '#CEEDFF', marginTop: 50}]}>
        <View style={styles.myInfo}>
          <IconButton type={images.phone}/>
          <Text style={{flex:1, fontSize: 22}}>{data}</Text>
        </View>
        <View style={styles.myInfo}>
          <IconButton type={images.email}/>
          <Text style={styles.myInfoText}>이메일 변경</Text>
          <TouchableOpacity onPress={()=>navigation.navigate('MyPageEmailUpdate')}>
            <Image style={[{width: 20, heigth: 20}]} source={require('../../../../assets/myinfo/right.png')} />
          </TouchableOpacity>
        </View>
        <View style={styles.btnContainer}>
          <TouchableOpacity
            style={styles.btn}
            onPress={onPress}
            >
            <Text style={[{ fontSize: 22 }, styles.text]}>변경</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      width: '95%',
      justifyContent: 'center',
      height: 190,
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
      fontSize: 22
    },
    footer: {
      height: 80,
    },
    btnContainer: {
      flex: 1,
      justifyContent: "center",
      paddingHorizontal: 10
    },
    btn: {
      backgroundColor: "#5AA0C8",
      borderRadius: 10,
      //width: Platform.OS === "android" ? 155 : "50%",
      margin: 10,
      alignItems: "center",
      paddingVertical: 8,
      padding: 10,
      width: '90%',
    },
    text: {
      color: "white",
      fontWeight: "bold",
      margin: 10,
    },
  });