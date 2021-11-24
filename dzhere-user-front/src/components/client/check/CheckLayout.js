import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, FlatList, AsyncStorage, ScrollView } from 'react-native';
import { ButtonView, StyledButtons, StyledSelect, StyledText, StyledClassList } from './CheckStyledLayout';
import moment from 'moment';
import 'moment/locale/ko';  // 자동으로 한국시간을 가져온다. 하지만 명확히 하기 위해 import

import logo from '../../../../assets/logo.png'
import check_icon from '../../../../assets/check/check_black_36pt_1x.png';
import exit_icon from '../../../../assets/check/exit.png';
import watch_icon from '../../../../assets/check/watch.png';
import { SafeAreaView } from 'react-native-safe-area-context';

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

const Item = ( {label,attendState} ) => (
  <View style={styles.footer}>
    <View style={[{flexDirection:'row',height:70} ,styles.centerAlign]}>
      <Image style={{flex:1}} source={check_icon}/>
      <Image style={{flex:1}} source={watch_icon}/>    
      <Text style={styles.footerText}>{label}</Text>
    </View>
    <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:30}}>{attendState}</Text>
    </View>
  </View>
);

export const Contents = ({onPressStartTime, onPressExitTime, classList, classTime, endtime, attendList, btnDisable, exitBtnDisable}) => {
  
  const renderItem = ({item}) => (
    <Item label={item.time} attendState={item.attendState}/>
  );
  
  var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');

  return (
    <View style={styles.contents}>
      <StyledText >출석 체크</StyledText>
      <StyledClassList>{(classList)?classList.c_name:'수강중인 수업이 없습니다.'}</StyledClassList>
      <Text style={{fontSize:30}}>{moment().format('YYYY-MM-DD')} {week[new Date().getDay()]}</Text>
      {classTime[0]?
      <>
      <Text style={styles.test2}>강의 시간: {classTime[0].ct_start_time} ~ {classTime[0].ct_end_time}</Text>
      <Text style={styles.test2}>점심 시간: {classTime[0].ct_break_start} ~ {classTime[0].ct_break_end}</Text>
      <Text style={styles.test2}>출석 인정 시간: {classTime[0].ct_attend_starttime} ~ {classTime[0].ct_attend_endtime}</Text>
      <Text style={styles.test2}>퇴실 인정 시간: {classTime[0].ct_end_time} ~ {endtime}</Text>
      </>:<Text>loading...</Text>
      }
      <ButtonView>
        <StyledButtons title={'출석'} source={check_icon} disabled={btnDisable} onPress={onPressStartTime}/>
        <StyledButtons title={'조퇴'} source={check_icon} />
        <StyledButtons title={'퇴실'} source={check_icon} disabled={exitBtnDisable} onPress={onPressExitTime}/>
      </ButtonView>
      <SafeAreaView style={styles.mySafeArea}>
        <ScrollView style={styles.myScrollView}>          
          <FlatList data={attendList} keyExtractor={v=>v.id} renderItem={renderItem}/>
        </ScrollView>
      </SafeAreaView>
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
    fontSize: 18,
  },
  text: {
    fontSize: 26,
  },
  test2: {
    fontSize: 20,
  },
  mySafeArea: {
    flex:1,
    marginBottom:3,
    width:'100%'
  },
  myScrollView: {
    backgroundColor:'pink',
    width:'100%'
  }
});