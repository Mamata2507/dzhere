import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import AttendClassModal from "./AttendClassModal";
import styles from "./Styles";

const FooterAndroid = (props) => {
  return (
    <>
      <View style={stylesBase.container}>
        <View style={stylesBase.footer}>
          <TouchableOpacity
            style={[
              styles.btn,
              { margin: 5, alignSelf: "flex-end", marginRight: 20 },
            ]}
            onPress={props.handleVisibleUpdateBtn}
          >
            <Text style={styles.btnText}>수정</Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

const stylesBase = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
  },
  footer: {
    alignItems: "center",
    alignContent: "center",
  },
  rows: {
    flexDirection: "row",
  },
});

export default FooterAndroid;
