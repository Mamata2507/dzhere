import React from 'react';
import {StyleSheet, Button, TouchableOpacity, Picker, Image} from 'react-native';
import styled, {css} from 'styled-components/native';

const centerAlign = css `  
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const StyledText = styled.Text`
  ${centerAlign}
  padding: 10px;
  width: 60%;
  text-align: center;
  color: black;
  font-size: 40;
`;

const StyledPicker = styled.Picker`
  ${centerAlign}  
  width: 70%;
  height: 50px;
`;

export const StyledSelect = props => {
    let temp = props.items;
    return (
        <StyledPicker onValueChange={props.onMonthChange}>
            {
                Object
                    .values(temp)
                    .map((items,i) => (<StyledPicker.Item label={items.label} value={items.value} key={i}/>))
            }
        </StyledPicker>
    );
}

