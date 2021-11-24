import * as React from 'react';
import { View, Image } from 'react-native';
import image from '../../../assets/splash.png';

const Splash = () => {
    console.log('splash...');
    return (
      <View style={{alignContent: 'center', justifyContent: 'center'}}>
        <Image source={image}/>
      </View>
    );
};

export default Splash;