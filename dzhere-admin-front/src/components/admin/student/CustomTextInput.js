import React from 'react';
import { TextInput } from 'react-native';

const CustomTextInput = ({ name, value, onChange, keyboardType }) => {
    
    return (
      <TextInput
        value={value}
        onChange={value => onChange({value, name})}
        keyboardType={keyboardType}
      ></TextInput>
    );
};

export default CustomTextInput;