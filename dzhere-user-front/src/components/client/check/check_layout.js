import React, {useState} from 'react';
import { StyleSheet, View, Text, Image, Button, FlatList } from 'react-native';
import { ButtonView, Picker, StyledButtons, StyledSelect, StyledText } from './check_styled_layout';

import logo from '../../../../assets/logo.png'
import check_icon from '../../../../assets/check/check_black_36pt_1x.png';
import exit_icon from '../../../../assets/check/exit.png';

const items = [
  { value: 'chocolate', label: 'Java Fullstack 과정' },
  { value: 'strawberry', label: 'C# 스마트 팩토리' },
  { value: 'vanilla', label: 'Javascript' },
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

export const Contents = () => {
  const [checkTime, setCheckTime] = useState('');
  const [test, setTests] = useState({});

  const onCheckPressed = () => {    
    const ID = Date.now().toString();
    const nowTime = Date();
    const newTestObject = {
      [ID]: {id: ID, time: nowTime},
    };
    setTests({...test,...newTestObject});
    console.log('id :',ID);
  //  alert(newTestObject[ID].time);    
  }

  return (
    <View style={styles.contents}>
      <StyledText length={checkTime.length}>출석 체크</StyledText>
      <StyledSelect items={items}/>
      <Text style={{fontSize:20}}>{Date()}</Text>
      <Text style={{fontSize:20}}>강의 시간: </Text>
      <Text style={{fontSize:20}}>점심 시간: </Text>
      <Text style={{fontSize:20}}>출석 인정 시간: </Text>
      <Text style={{fontSize:20}}>퇴실 인정 시간: </Text>

      <ButtonView>
        <StyledButtons title={'출석'} source={check_icon} onPress={onCheckPressed}/>
        <StyledButtons title={'조퇴'} source={check_icon}/>
        <StyledButtons title={'퇴실'} source={check_icon}/>
      </ButtonView>
      <FlatList>        
        { Object.values(test)
          .map((v)=>{      
            <StyledText>{v.time}</StyledText>
          })
        }
      </FlatList>
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
    backgroundColor: '#CEEDFF',
    
  },
  text: {
    fontSize: 26,
  },
});