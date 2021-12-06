import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import DeleteButton from "../../containers/external/ExternalDeleteContainer";
import { images } from "../common/images";

const ExternalItem = ({ list, item }) => {
  console.log("item", item);
  return (
    <View style={styles.container}>
      <Text style={styles.contents}>{item.e_name}</Text>
      <Text style={styles.contents}>{item.e_ssid}</Text>
      <Text style={styles.contents}>
        {item.e_accept == 1 ? "승인완료" : "승인대기"}
      </Text>
      <Text style={styles.contents}>
        <DeleteButton list={list} type={images.delete} item={item} />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: Platform.OS === "android" ? 10 : "5%",
    flexDirection: "row",
    display: "flex",
  },
  contents: {
    margin: Platform.OS === "android" ? 6 : "2%",
    fontSize: 17,
    flex: 1,
  },
});

export default ExternalItem;
