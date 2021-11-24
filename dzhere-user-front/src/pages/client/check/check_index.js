import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image } from 'react-native';
import { Header, Contents, Footer } from '../../../components/client/check/check_layout';
const check_index = ({ navigation, onPressStartTime }) => {
  return (
    <View style={{ flex: 1,  backgroundColor: 'white' }}>
      <Header/>
      {/* <Contents onPressStartTime={onPressStartTime}/> */}
      {/* <Footer/> */}
    </View>
  );
};

export default check_index;
