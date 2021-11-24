import React, { useState } from "react";
// import styled from "styled-components/native";
import { View, Text, StyleSheet, Platform } from "react-native";
import PropTypes from "prop-types";
import IconButton from "../../common/IconButton";
import { images } from "../../common/images";

// const Container = styled.View`
//   margin-left: 10px;
//   flex-direction: row;
//   display: flex;
// `;
// const Contents = styled.Text`
//   margin: 6px;
//   font-size: 17px;
//   flex: 1;
// `;

const ExternalItem = ({ item }) => {
  return (
    <View style={styles.container}>
      {/* <IconButton
        type={item.accept == 1 ? images.completed : images.uncompleted}
        id={item.id}
      /> */}
      <Text style={styles.contents}>{item.id}</Text>
      <Text style={styles.contents}>{item.name}</Text>
      <Text style={styles.contents}>{item.ssid}</Text>
      <Text style={styles.contents}>
        {item.accept == 1 ? "승인완료" : "승인대기"}
      </Text>
      <Text style={styles.contents}>
      <IconButton type={images.delete} id={item.id} /></Text>
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
  //   deleteTask: PropTypes.func.isRequired,
};

export default ExternalItem;
