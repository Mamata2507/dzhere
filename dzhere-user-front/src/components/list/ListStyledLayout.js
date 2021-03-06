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
  text-align: center;
  color: black;
  font-size: 30;
`;

const StyledPicker = styled.Picker`
  ${centerAlign}  
  width: 30%;
  height: 50px;
`;

export const StyledSelect = props => {
    let temp = props.items;
    return (
        <StyledPicker onValueChange={props.onMonthChange}>
            {
                Object
                    .values(temp)
                    .map((items,i) => (<StyledPicker.Item label={items.label} value={items.value} key={items.id}/>))
            }
        </StyledPicker>
    );
}

