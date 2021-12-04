import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HeaderWeb() {
  return (
    <View style={stylesBase.container}>
      <Text>byebye</Text>
    </View>
  );
}

const stylesBase = StyleSheet.create({
  container: {
    alignContent: "center",
    alignItems: "center",
    flex: 4,
    backgroundColor: "green",
    width: "100%",
  },
});
