import React from 'react';
import {StyleSheet, Button, TouchableOpacity, Image} from 'react-native';
import styled ,{ css } from 'styled-components/native';
import { Table } from 'react-native-table-component';

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
  flex: 1;
  background-color: #C4C4C4;
  border-radius: 15px;
  margin: 20px 40px;
  justify-content: center;
`;

const ImageStyled = `
  width: 100;
  height: 100;
`;

export const StyledButtons = props => {
  
  return(
    <ButtonContainer onPress={props.onPress}>
      <Image style={ImageStyled} source={props.source}/>
      <Title>{props.title}</Title>
    </ButtonContainer>
  )
}

const StyledPicker = styled.Picker`
  ${centerAlign}
  width: 50%;
  height: 50px;
`;

export const StyledSelect = props => {
  let temp = props.items;
  return(
    <Table striped bordered hover>
  <thead>
    <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>1</td>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
    </tr>
    <tr>
      <td>2</td>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
    </tr>
    <tr>
      <td>3</td>
      <td colSpan="2">Larry the Bird</td>
      <td>@twitter</td>
    </tr>
  </tbody>
</Table>
  );
}