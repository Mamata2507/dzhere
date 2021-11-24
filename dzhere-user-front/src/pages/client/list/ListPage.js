import * as React from "react";
import { Platform, View } from "react-native";
import {
  Content,
  Footer,
  Header,
} from "../../../components/client/list/ListLayout";
import ListContentContainer from "../../../containers/client/list/ListContentContainer";
import ListHeaderContainer from "../../../containers/client/list/ListHeaderContainer";

const ListIndex = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 15 }}>
      <ListHeaderContainer />
      <ListContentContainer />
      <Footer />
    </View>
  );
};

export default ListIndex;
