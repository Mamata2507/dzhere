import React from 'react';
import { StyleSheet, Text } from 'react-native';

const ErrorMessage = ({children}) => {
    return (
        <Text
            style={style.errorMessage}
        >{children}</Text>
    );
};

export default ErrorMessage;

const style = StyleSheet.create({
    errorMessage:{
        color: 'red',
        textAlign: 'center',
        fontSize: 17,
        marginBottom: 10,
    }
})