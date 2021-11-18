import React from "react";
import { TouchableOpacity, Image, StyleSheet, Platform } from "react-native";
// import styled from "styled-components/native";
import PropTypes from "prop-types";
import { images } from "../common/images";

const IconButton = ({ type, onPressOut, id }) => {
  const _onPressOut = () => {
    onPressOut(id);
  };

  return (
    <TouchableOpacity onPressOut={_onPressOut}>
      <Image style={styles.icon} source={type} />
    </TouchableOpacity>
  );
};

IconButton.defaultProps = {
  onPressOut: () => {},
};

const styles = StyleSheet.create({
  icon: {
    width: Platform.OS === "android" ? 20 : 30,
    height: Platform.OS === "android" ? 20 : 30,
  },
});
IconButton.propTypes = {
  type: PropTypes.oneOf(Object.values(images)).isRequired,
  // onPressOut: PropTypes.func,
  id: PropTypes.string,
  // completed: PropTypes.bool,
};

export default IconButton;
