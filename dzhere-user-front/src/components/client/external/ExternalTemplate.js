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
// import refresh from "../../../../assets/check/refresh.png";
import { Header } from "../../common/layout";
import External from "./ExternalList";
import { StatusBar } from "expo-status-bar";

const ExternalTemplate = ({ wifiList, navigation }) => {
  const width = Dimensions.get("window").width;
  // console.log("temp",temp.lastIndex);
  // console.log("아이템 있는지 없는지 확인", wifiList);
  // console.log("컴포넌트:", wifiList);
  return (
    <>
      <StatusBar />
      {/* // 헤더 */}
      <Header />
      {/* // 본문 */}
      <View style={styles.container}>
        <View style={styles.contents}>
          <Text style={[{ fontSize: 20 }, styles.title]}>추가된 외부 장소</Text>
          <ScrollView width={width}>
            {wifiList ?
              Object.values(wifiList).map((item) => (
                <External list={wifiList} key={item.e_idx} item={item} />
              ))
            : <>
            <View width={width} />
            <Text style={styles.refresh}>리스트를 불러오는 중입니다..</Text>
          </>
            }
            {/* <>
                <View width={width} />
                <Text style={styles.refresh}>리스트를 불러오는 중입니다..</Text>
              </> */}
             {/* {temp.length === 0 && (
              <Text style={styles.refresh}>등록된 외부 장소가 없습니다.</Text>
            )} */}
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
    width: Platform.OS === "android" ? "90%" : "60%",
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
  refresh: {
    color: "#5AA0C8",
    fontWeight: "500",
    fontSize: 25,
    margin: Platform.OS === "android" ? 10 : 20,
  },
  stretch: {
    width: 200,
    height: 200,
  },
});


export default ExternalTemplate;
