import React, { useState } from 'react';
import { TextInput } from 'react-native';

const CustomTextInput = ({ name, autoCompleteType, value, onChangeText, placeholder, placeholderTextColor, keyboardType, maxLength, style}) => {
    
    return (
      <TextInput
        autoCompleteType={autoCompleteType}
        value={value}
        onChangeText={value => onChangeText({value, name})}
        placeholder={placeholder}
        placeholderTextColor={placeholderTextColor}
        maxLength={maxLength}
        keyboardType={keyboardType}
        style={style}
      ></TextInput>
    );
};

export default CustomTextInput;