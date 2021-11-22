import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, FlatList, AsyncStorage, ScrollView } from 'react-native';
import { ButtonView, StyledButtons, StyledSelect, StyledText } from './check_styled_layout';
import moment from 'moment';
import 'moment/locale/ko';  // 자동으로 한국시간을 가져온다. 하지만 명확히 하기 위해 import

import logo from '../../../../assets/logo.png'
import check_icon from '../../../../assets/check/check_black_36pt_1x.png';
import exit_icon from '../../../../assets/check/exit.png';
import watch_icon from '../../../../assets/check/watch.png';

const items = [
  { value: '1', label: 'Java Fullstack 과정' },
  { value: '2', label: 'C# 스마트 팩토리' },
  { value: '3', label: 'Javascript' },
];

export const Header = () => {
  return (
    <View style={styles.container}>
      <Image
        style={styles.headerImage}
        source={logo}
      />
    </View>
  );
};

const Item = ( {label} ) => (
  <View style={styles.footer}>
    <View style={[{flexDirection:'row',} ,styles.centerAlign]}>
      <Image source={check_icon}/>
      <Text style={styles.footerText}>{label}</Text>
      <Image source={watch_icon}/>    
    </View>
    <View style={[{flexDirection:'row'}]}>
      <Text>출석</Text>
    </View>
  </View>
);

export const Contents = ({onPressStartTime}) => {
  
  const renderItem = ({item}) => (
    <Item label={item.label}/>
  );
  
  const test = () => {
    alert('test');
    console.log(1111);
  }

  return (
    <View style={styles.contents}>
      <StyledText >출석 체크</StyledText>
      {/* <StyledSelect items={items}/> */}
      <Text style={{fontSize:30}}>{moment().format('YYYY-MM-DD')}</Text>
      <Text style={{fontSize:20}}>강의 시간: </Text>
      <Text style={{fontSize:20}}>점심 시간: </Text>
      <Text style={{fontSize:20}}>출석 인정 시간: </Text>
      <Text style={{fontSize:20}}>퇴실 인정 시간: </Text>

      <ButtonView>
        <StyledButtons title={'출석'} source={check_icon} onPress={onPressStartTime}/>
        <StyledButtons title={'조퇴'} source={check_icon}/>
        <StyledButtons title={'퇴실'} source={check_icon}/>
      </ButtonView>
      <ScrollView style={{backgroundColor:'pink',width:'100%'}}>          
        <FlatList data={items} keyExtractor={v=>v.value} renderItem={renderItem}/>
      </ScrollView>
    </View>
  );
};


export const Footer = () => {
  return (
    <View style={[styles.container, styles.footer]}>
      <Text style={styles.text}>Footer</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  centerAlign:{
    justifyContent: 'space-between',

  },
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    height: 190,
  },
  headerImage: {
    width: 100,
    height: 100,
  },
  contents: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    height: 530,
  },
  footer: {    
    flex:1,
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: '#CEEDFF',
    marginBottom: 2,
    marginTop: 10,
    marginLeft: 10,
    marginRight: 10,
  },
  footerText:{
    fontSize: 10,
  },
  text: {
    fontSize: 26,
  },
});