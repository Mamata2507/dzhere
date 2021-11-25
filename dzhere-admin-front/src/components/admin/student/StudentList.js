import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { Platform } from "react-native";

export const Contents = ({ studentlist, classId, navigation }) => {
  // console.log("리스트 정상", studentlist.classes.stlist);
  return (
    <View style={styles.container}>
      <Text>{classId.c_name}</Text>
      {studentlist ? (
        studentlist.map((item, index) => {
          return (
            <View key={item.u_idx}>
              <Text>{item.u_name} | {item.u_phone} | {item.u_accept}</Text>
            </View>
          );
        })
      ) : (
        <Text>리스트를 불러오는 중입니다.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Platform.OS === "android" ? "95%" : "60%",
    height: Platform.OS === "android" ? "60%" : "70%",
    justifyContent: "center",
    padding: Platform.OS === "android" ? "1%" : "1.5%",
  },
});
