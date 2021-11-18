import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Header, Footer } from "../../../components/common/layout";
import { useNavigation } from "@react-navigation/core";
import ExternalAdd from "../../../components/client/external/ExternalAdd";
import ExternalAddContainer from "../../../containers/client/external/ExternalAddContainer";
// // ExternalContainer 에서 받아온다.
const ExternalForm = () => {
  return (
    <ExternalAddContainer/>
  );
};

export default ExternalForm;
