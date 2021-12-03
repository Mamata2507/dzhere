import * as React from 'react';
import {View, Text, SafeAreaView } from 'react-native';
import ListContentContainer from "../../containers/list/ListContentContainer";
import ListFooterContainer from "../../containers/list/ListFooterContainer";
import ListHeaderContainer from "../../containers/list/ListHeaderContainer";

const list_index = () => {
  return (
    // <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
    //   <View style={{ flex: 1, padding: 16 }}>
    //     <View
    //       style={{
    //         flex: 1,
    //         alignItems: 'center',
    //         justifyContent: 'center',
    //       }}>
    //       <Text
    //         style={{
    //           fontSize: 25,
    //           textAlign: 'center',
    //           marginBottom: 16,
    //         }}>
    //         지난 출석 보기
    //       </Text>
    //     </View>
    //     <Text style={{ fontSize: 18, textAlign: 'center', color: 'grey' }}>
    //       Custom React Navigate Drawer
    //     </Text>
    //   </View>
    // </SafeAreaView>
    <View style={{flex: 1, padding: 15 ,width:'100%'}}>
      <ListHeaderContainer />
      <ListContentContainer />
      <ListFooterContainer />
    </View>
  );
};

export default list_index;
