import * as React from "react";
import { Platform, View } from "react-native";
import ListContentContainer from "../../../containers/client/list/ListContentContainer";
import ListFooterContainer from "../../../containers/client/list/ListFooterContainer";
import ListHeaderContainer from "../../../containers/client/list/ListHeaderContainer";

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
