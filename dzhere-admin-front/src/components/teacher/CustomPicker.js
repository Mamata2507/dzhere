import React from 'react';
import { Picker } from "@react-native-picker/picker";

const CustomPicker = ({name, selectedValue, onChange, style, agencyList, classList }) => {
    return (
      <Picker
        onValueChange={(value) => {
          onChange({ value, name })
            console.log(value);
          }
        }
        style={style}
      >
        <Picker.Item label='선택' value='' key=''/>
        {(name==='agencyList')
        && agencyList.map((item, index) => {
          return (
            <Picker.Item
              label={item.ag_name}
              value={item.ag_idx}
              key={item.ag_idx}
            />
          );
        })
        }
        {(name==='classList')
        && classList.map((item, index) => {
          return (
            <Picker.Item
              label={item.c_name}
              value={item.c_idx}
              key={item.c_idx}
            />
          );
        })
        }
      </Picker>
    );
};

export default CustomPicker;