import React from 'react';
import {StyleSheet, Button, TouchableOpacity, Picker, Image} from 'react-native';
import styled ,{ css } from 'styled-components/native';

const centerAlign = css`
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const balckText = css`
  ${centerAlign}
  color: black;
  font-size: 40px;
  
`;

export const StyledText = styled.Text`
  ${balckText}
  padding: 10px;
  width: 60%;
  text-align: center;
`;

export const StyledButton = styled(Button)`
  margin: 30px;
  background-color: blue;
  border-radius: 50;
  padding: 100%;
`;

export const ButtonView = styled.View`
  ${centerAlign}
  background-color: #ffffff;
  flex-direction: row;
  margin-top: 20;
`;

const Title = styled.Text`
  ${centerAlign}
  font-size: 20px;
  color: black;
`;
const ButtonContainer = styled.TouchableOpacity`
  ${centerAlign}
  background-color: #C4C4C4;
  border-radius: 15px;
  margin: 20px 40px;
  justify-content: center;
`;

const ImageStyled = {
  width: 100,
  height: 100,
}

export const StyledButtons = props => {
  return(
    <ButtonContainer>
      <Image style={ImageStyled} source={props.source}/>
      <Title>{props.title}</Title>
    </ButtonContainer>
  )
}

 