import React, {useState, useEffect} from 'react';
import { StyleSheet, View, Text, Image, FlatList, AsyncStorage, ScrollView } from 'react-native';
import { ButtonView, StyledButtons, StyledSelect, StyledText, StyledClassList } from './CheckStyledLayout';
import moment from 'moment';
import 'moment/locale/ko';  // 자동으로 한국시간을 가져온다. 하지만 명확히 하기 위해 import

import logo from '../../../../assets/logo.png'
import check_icon from '../../../../assets/check/calendar.png';
import check_disable_icon from '../../../../assets/check/calendar_gray.png';
import check_35px_icon from '../../../../assets/check/calendar_35px.png';
import exit_icon from '../../../../assets/check/exit.png';
import exit_disable_icon from '../../../../assets/check/exit_gray.png';
import clock_icon from '../../../../assets/check/clock.png';
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
      <Image source={check_icon}/>
      <Image source={clock_icon} style={{width:15,height:15}}/>    
      <Text style={styles.footerText}>{label}</Text>
    </View>
    <View style={{flexDirection:'row'}}>
      <Text style={{fontSize:30}}>{attendState}</Text>
    </View>
  </View>
);

export const Contents = ({onPressStartTime, onPressExitTime, classList, classTime, endtime, attendList, btnDisable, onPressLeaveTime, exitBtnDisable}) => {
  
  const renderItem = ({item}) => (
    <Item label={item.time} attendState={item.attendState}/>
  );
  
  var week = new Array('일요일', '월요일', '화요일', '수요일', '목요일', '금요일', '토요일');

  return (
    <View style={styles.contents}>
      <StyledText >출석 체크</StyledText>
      <StyledClassList>{(classList)?classList.c_name:'수강중인 수업이 없습니다.'}</StyledClassList>
      <Text style={{fontSize:30}}>{moment().format('YYYY-MM-DD')} {week[new Date().getDay()]}</Text>
      {classTime[0]&&(endtime)?
      <>
      <Text style={styles.test2}>강의 시간: {(classTime[0].ct_start_time).slice(0,5)} ~ {(classTime[0].ct_end_time).slice(0,5)}</Text>
      <Text style={styles.test2}>점심 시간: {(classTime[0].ct_break_start.slice(0,5))} ~ {(classTime[0].ct_break_end.slice(0,5))}</Text>
      <Text style={styles.test2}>출석 인정 시간: {(classTime[0].ct_attend_starttime.slice(0,5))} ~ {(classTime[0].ct_attend_endtime.slice(0,5))}</Text>
      <Text style={styles.test2}>퇴실 인정 시간: {(classTime[0].ct_end_time.slice(0,5))} ~ {(endtime).slice(0,5)}</Text>
      </>:<Text>loading...</Text>
      }
      <ButtonView>
        <StyledButtons title={'출석'} source={(!btnDisable)?check_icon:check_disable_icon} disabled={btnDisable} onPress={onPressStartTime}/>
        <StyledButtons title={'조퇴'} source={(!exitBtnDisable)?exit_icon:exit_disable_icon} disabled={exitBtnDisable} onPress={onPressLeaveTime}/>
        <StyledButtons title={'퇴실'} source={(!exitBtnDisable)?check_icon:check_disable_icon} disabled={exitBtnDisable} onPress={onPressExitTime}/>
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