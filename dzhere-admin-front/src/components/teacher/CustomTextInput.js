import React, { useState } from 'react';
import { TextInput } from 'react-native';

const CustomTextInput = ({ name, autoCompleteType, value, onChange, placeholder, placeholderTextColor, keyboardType, maxLength, secureTextEntry, style}) => {
    
    return (
      <TextInput
        autoCompleteType={autoCompleteType}
        value={value}
        onChangeText={value => onChange({value, name})}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        keyboardType={keyboardType}
        secureTextEntry={secureTextEntry}
        style={style}
      ></TextInput>
    );
};

export default CustomTextInput;