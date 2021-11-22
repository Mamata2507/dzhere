import * as React from "react";
import { View, Text, StyleSheet, SafeAreaView } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

const auth_index = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.safearea}>
        <View style={styles.container}>
          <TouchableOpacity
            style={styles.loginBtn}
            // onPress={() => navigation.navigate("ClientDrawer")}
          >
            <Text style={styles.text}>로그인</Text>
          </TouchableOpacity>
        </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safearea: { flex: 1, backgroundColor: "white" },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  loginBtn: {
    backgroundColor: "#FFC279",
    borderRadius: 20,
    marginBottom: 20,
    paddingHorizontal: 43,
    padding: 15,
  },
  text: {
    color: "white",
    fontSize: 25,
    fontWeight: "bold",
  },
});

export default auth_index;
