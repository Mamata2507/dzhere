import React from 'react';
import {StyleSheet, Button, TouchableOpacity, Image, Text, Picker} from 'react-native';
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

export const StyledClassList = styled.Text`
  ${centerAlign}
  background-color: #CEEDFF;
  text-align: center;
  font-size: 20;
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
  flex: 1;
  background-color: #E4E2E1;   
  border-radius: 15px;
  margin: 10px 20px;
  justify-content: center;
`;
//E4E2E1

const ImageStyled = `
  width: 100;
  height: 100;
`;

const styles = StyleSheet.create({
  imageStyled: {
    width: 60,
    height: 60,
  }
});

export const StyledButtons = props => {
  
  return(
    <>
    {
    props.disabled===true ?
    <ButtonContainer onPress={props.onPress} disabled>
      <Image style={styles.imageStyled} source={props.source}/>
      <Title>{props.title}</Title>
    </ButtonContainer> : 
    <ButtonContainer onPress={props.onPress}>
      <Image style={styles.imageStyled} source={props.source}/>
      <Title>{props.title}</Title>  
    </ButtonContainer>
    }    
    </>
  )
}

const StyledPicker = styled.Picker`
  ${centerAlign}
  width: 70%;
  height: 50px;  
`;

export const StyledSelect = props => {
  let temp = props.items;
  return(
    <StyledPicker>
      {Object.values(temp)
        .map((items,index)=>(
          <StyledPicker.Item label={items.c_name} value={items.c_idx} key={index} />          
      ))}
    </StyledPicker>
  );
}