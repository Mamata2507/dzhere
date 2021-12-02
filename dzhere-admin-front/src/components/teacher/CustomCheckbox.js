import Checkbox from 'expo-checkbox';
import React from 'react';

const CustomCheckbox = ({checkHandler}) => {
    return (
        <Checkbox
            // value={value}
            onValueChange={e => checkHandler(e.target.checked, e.target.id)}
            // color={color}
            // style={style}
        />
    );
};

export default CustomCheckbox;