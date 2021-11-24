import * as React from 'react';
import { Button, View, Text, SafeAreaView, Image } from 'react-native';
import { Header, Contents, Footer } from '../../../components/client/check/CheckLayout';
import CheckContainer from '../../../containers/client/check/CheckContainer';
const check_index = ({ navigation }) => {
  return (
    <View style={{ flex: 1,  backgroundColor: 'white' }}>
      <Header/>
      <CheckContainer/>
      {/* <Footer/> */}
    </View>
  );
};

export default check_index;
