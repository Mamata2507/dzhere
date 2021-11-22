import Checkbox from 'expo-checkbox';
import React from 'react';

const CustomCheckbox = ({name, value, onChangeText, color, style}) => {
    return (
        <Checkbox
            value={value}
            onValueChange={value => onChangeText({value, name})}
            color={color}
            style={style}
        />
    );
};

export default CustomCheckbox;