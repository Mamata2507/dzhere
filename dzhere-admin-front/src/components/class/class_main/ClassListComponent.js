import { StatusBar } from "expo-status-bar";
import * as React from "react";
import { View, Text, StyleSheet, Platform, TouchableOpacity} from "react-native";
import ClassCardComponent from "./ClassCardComponent";

const ClassListComponent = ({ today, agency, classname, navigation }) => {
  return (
    <>
      <StatusBar />
      {/* <Text style={styles.headName}>πΈ{agency?.ag_name} λ νμν©λλ€πΈ</Text> */}
      <View style={styles.container}>
        <Text style={styles.today}>{"π₯" + today + "π₯"}</Text>
        <View style={styles.box}>
          <Text style={styles.agency}>{agency?.ag_name}</Text>
        </View>
        {classname ? <ClassCardComponent classname={classname} navigation={navigation} />
        : <Text style={styles.loading}>λ¦¬μ€νΈλ₯Ό λΆλ¬μ€λ μ€μλλ€.</Text>}
      </View>
    </>
  );
};

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: Platform.OS === "android" ? 15 : "20%",
  },
  today: {
    fontSize: Platform.OS === "android" ? 20 : 25,
    textAlign: "center",
    marginTop: Platform.OS === "android" ? "15%" : "5%",
    fontWeight: "bold",
  },
  agency: {
    fontSize: 18,
    padding: 5,
  },
  box: {
    borderColor: "#B8B8B8",
    backgroundColor: "#F0F0F0",
    borderWidth: 1,
    marginTop: Platform.OS === "android" ? "10%" : "5%",
    marginBottom: Platform.OS === "android" ? "5%" : "5%",
    justifyContent: "center",
    alignItems: "center",
  },
  loading:{
    fontSize: Platform.OS === "android" ? 12 : 20,
    justifyContent: "center",
    alignItems: "center",
  },
  headName: {
    alignSelf: Platform.OS ==='android' ? "center" : "flex-end",
    marginTop: Platform.OS ==='android' ? "20%" : 40, 
    marginRight: Platform.OS ==='android' ? 0 : "5%", 
    fontSize: 16,
  }
});

export default ClassListComponent;
