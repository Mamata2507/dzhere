import React from 'react';
import { StyleSheet, View, Text, Image, Button } from 'react-native';
import logo from '../../../../assets/logo.png'
import { ButtonView, Picker, StyledButtons, StyledSelect, StyledText } from './styled_test';
import check_icon from '../../../../assets/check/check_black_36pt_1x.png'
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
  const [text,OnChangeText] = React.useState('');
  return (
    <View style={styles.contents}>
      <StyledText length={text.length}>출석 체크</StyledText>
      {/* <Select options={items} value={text} placeholder={'Select class'} /> */}
      <Text style={{fontSize:20}}>{Date()}</Text>
      <Text style={{fontSize:20}}>강의 시간: </Text>
      <Text style={{fontSize:20}}>점심 시간: </Text>
      <Text style={{fontSize:20}}>출석 인정 시간: </Text>
      <Text style={{fontSize:20}}>퇴실 인정 시간: </Text>

      <ButtonView>
        <StyledButtons title={'출석'} source={check_icon}/>
        <StyledButtons title={'조퇴'} source={exit_icon}/>
        <StyledButtons title={'퇴실'} source={check_icon}/>
      </ButtonView>
      {/* <StyledButton type="primary"> test Button </StyledButton> */}
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
    backgroundColor: '#3498db',
    height: 180,
  },
  text: {
    fontSize: 26,
  },
});