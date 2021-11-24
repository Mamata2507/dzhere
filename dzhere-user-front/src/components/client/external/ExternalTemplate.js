import { useNavigation } from "@react-navigation/core";
import * as React from "react";
import {
  View,
  Text,
  StyleSheet,
  Platform,
  Dimensions,
  ScrollView,
} from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Header, Footer } from "../../common/layout";
import External from "./ExternalList";

const ExternalTemplate = () => {
  const width = Dimensions.get("window").width;
  // const externalList = useSelector(({external})=>({
  //   externalList: external.externalList,
  // }));
  const navigation = useNavigation();
  const newTaskObject = {
    // [idx]: { id: idx, name: name, ssid: ssid, bssid: bssid, accept: accept },
    [1]: {
      id: 1,
      name: "wifi",
      ssid: "IPTIME30",
      bssid: "70:5d:cc:a9:b7:25",
      accept: 0,
    },
    [2]: {
      id: 2,
      name: "wifi23",
      ssid: "IPTIME31",
      bssid: "30:4d:cc:a2:b6:22",
      accept: 0,
    },
  };
  return (
    <>
      {/* // 헤더 */}
      <Header />
      {/* // 본문 */}
      <View style={styles.container}>
        <View style={styles.contents}>
          <Text style={[{ fontSize: 20 }, styles.title]}>추가된 외부 장소</Text>
          {/* <Text>{newTaskObject}</Text> */}
          <ScrollView width={width}>
            {Object.values(newTaskObject).map((item) => (
              <External key={item.id} item={item} />
            ))}
          </ScrollView>

          {/* // 푸터 */}
          {/* <View style={styles.flexStyle}> */}
          <View style={styles.container}>
            {Platform.OS === "android" || Platform.OS === "ios" ? (
              <>
                <TouchableOpacity
                  style={styles.btn}
                  onPress={() => navigation.navigate("ExternalForm")}
                >
                  <Text style={[{ fontSize: 22 }, styles.text]}>추가</Text>
                </TouchableOpacity>
                <TextInput />
              </>
            ) : (
              <></>
            )}
          </View>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  contents: {
    margin: 10,
    width: Platform.OS === "android" ? "90%" : "70%",
    height: Platform.OS === "android" ? "70%" : 400,
    backgroundColor: "#CEEDFF",
    marginTop: Platform.OS === "android" ? 0 : 40,
  },
  btn: {
    backgroundColor: "#5AA0C8",
    borderRadius: 10,
    width: Platform.OS === "android" ? 155 : 200,
    marginTop: Platform.OS === "android" ? 20 : 10,
    margin: 10,
    alignItems: "center",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    margin: 10,
  },
  flexStyle: {
    display: "flex",
    flexDirection: "row",
  },
  title: {
    color: "black",
    margin: Platform.OS === "android" ? 10 : 20,
  },
});

export default ExternalTemplate;
