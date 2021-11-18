import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";
import styled from "styled-components/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Header, Footer } from "../../../components/common/layout";
import External from "../../../components/client/external/ExternalList";
import ExternalTemplate from "../../../components/client/external/ExternalTemplate";

const ExternalPage = () => {
  return (
    <ExternalTemplate />
  );
};

export default ExternalPage;
