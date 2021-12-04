import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function ContentWeb() {
  return (
    <View style={stylesBase.container}>
      <Text>hihi</Text>
    </View>
  );
}

const stylesBase = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    flex: 6,
    backgroundColor: "yellow",
    width: "100%",
  },
});
