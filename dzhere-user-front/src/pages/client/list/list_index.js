import * as React from "react";
import { View } from "react-native";
import {
  Content,
  Footer,
  Header,
} from "../../../components/client/list/list_layout";

const list_index = ({ navigation }) => {
  return (
    <View style={{ flex: 1, padding: 15 }}>
      <Header />
      <Content />
      <Footer />
    </View>
  );
};

export default list_index;
