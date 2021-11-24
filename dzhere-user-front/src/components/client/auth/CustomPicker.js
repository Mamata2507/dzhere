import React from 'react';
import { Picker } from "@react-native-picker/picker";

const CustomPicker = ({name, selectedValue, onChangeText, style}) => {
    return (
      <Picker
        selectedValue={selectedValue}
        onValueChange={value => onChangeText({value, name})}
        style={style}
      >
        <Picker.Item label="KT" value="KT" />
        <Picker.Item label="LG" value="LG" />
        <Picker.Item label="SKT" value="SKT" />
        <Picker.Item label="알뜰폰" value="알뜰폰" />
      </Picker>
    );
};

export default CustomPicker;