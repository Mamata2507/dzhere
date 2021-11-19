import React, { useState } from "react";
// import styled from "styled-components/native";
import { View, Text, StyleSheet, Platform } from "react-native";
import PropTypes from "prop-types";
import DeleteButton from "../../../containers/client/external/ExternalDeleteContainer";
import { images } from "../../common/images";

const ExternalItem = ({ id, item }) => {
  return (
    <View style={styles.container}>
      {/* <IconButton
        type={item.accept == 1 ? images.completed : images.uncompleted}
        id={item.id}
      /> */}
      <Text style={styles.contents}>{item.e_name}</Text>
      <Text style={styles.contents}>{item.e_ssid}</Text>
      <Text style={styles.contents}>
        {item.e_accept == 1 ? "승인완료" : "승인대기"}
      </Text>
      <Text style={styles.contents}>
      <DeleteButton type={images.delete} id={id} /></Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginLeft: Platform.OS === 'android' ? 10 : "5%",
    flexDirection: "row",
    display: "flex",
  },
  contents: {
    margin: Platform.OS === 'android' ? 6 : "2%",
    fontSize: 17,
    flex: 1,
  },
});
ExternalItem.propTypes = {
  item: PropTypes.object.isRequired,
};

export default ExternalItem;
