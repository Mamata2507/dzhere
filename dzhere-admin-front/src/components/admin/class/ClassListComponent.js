import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ClassListComponent = ({ today, agency }) => {
  return (
    <>
      <StatusBar />
      <View style={styles.container}>
        <Text style={styles.today}>{"🐥" + today + "🐥"}</Text>
        <View style={styles.box}>
          <Text style={styles.agency}>{agency}</Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  today: {
    fontSize: 25,
    textAlign: "center",
    marginTop: "25%",
    fontWeight: "bold",
  },
  agency: {
    fontSize: 18,
    textAlign: "center",
    padding: 5,
  },
  box: {
    borderColor: "#B8B8B8",
    backgroundColor: "#F0F0F0",
    borderWidth: 1,
    marginTop: "9%",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ClassListComponent;
