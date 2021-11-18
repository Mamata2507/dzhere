import React from 'react';
import {StyleSheet, Button, TouchableOpacity, Picker, Image} from 'react-native';
import styled, {css} from 'styled-components/native';

const centerAlign = css `  
  justify-content: center;
  align-items: center;
  align-content: center;
`;

const StyledPicker = styled.Picker`
  ${centerAlign}  
  width: 70%;
  height: 50px;
`;

export const StyledSelect = props => {
    let temp = props.items;
    return (
        <StyledPicker >
            {
                Object
                    .values(temp)
                    .map((items) => (<StyledPicker.Item label={items.label} value={items.value}/>))
            }
        </StyledPicker>
    );
}

