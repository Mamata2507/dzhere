import * as React from "react";
import { Platform, View } from "react-native";
import ListContentContainer from "../../containers/list/ListContentContainer";
import ListFooterContainer from "../../containers/list/ListFooterContainer";
import ListHeaderContainer from "../../containers/list/ListHeaderContainer";

const ListIndex = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 15 ,width:'100%'}}>
      <ListHeaderContainer />
      <ListContentContainer />
      <ListFooterContainer />
    </View>
  );
};

export default ListIndex;
