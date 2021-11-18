import React from "react";
import { View, Text, StyleSheet, Platform } from "react-native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Header } from "../../common/layout";
import { useNavigation } from "@react-navigation/core";
// // ExternalContainer 에서 받아온다.
const ExternalAdd = ({
  onPressWifi,
  onChangeLoc,
  onSubmit,
  wifi,
  location,
  LocInput,
}) => {
  const navigation = useNavigation();
  return (
    <>
      {/* // 헤더 */}
      <Header />
      {/* // 본문 */}
      <View style={styles.container}>
        <View style={styles.contents}>
          <Text style={[{ fontSize: 20 }, styles.title]}>
            현재 연결된 WIFI 정보 수집
          </Text>
          <TouchableOpacity style={styles.smallbtn} onPress={onPressWifi}>
            <Text style={[{ fontSize: 20 }, styles.text]}>수집</Text>
          </TouchableOpacity>
          {wifi.ssid && wifi.bssid ? (
            <>
              <Text style={styles.hintText}>
                {wifi.ssid + "(" + wifi.bssid + ")"}
              </Text>
              <Text style={[{ marginTop: 20, fontSize: 20 }, styles.title]}>
                외부 장소의 명칭을 입력하세요.
              </Text>
              <TextInput
                style={[{ borderColor: "#5AA0C8" }, styles.input]}
                onChangeText={onChangeLoc}
                ref={LocInput}
                value={location}
                maxLength={10}
                multiline={true}
                placeholder="Enter Location"
              />
            </>
          ) : (
            <>
              <Text style={styles.hintText}>WIFI 정보를 수집해주세요.</Text>
              <Text style={[{ marginTop: 20, fontSize: 20 }, styles.title]}>
                외부 장소의 명칭을 입력하세요.
              </Text>
              <TextInput
                style={[
                  { borderColor: "#AEAEAE", backgroundColor: "#AEAEAE" },
                  styles.input,
                ]}
                editable={false}
                placeholder="Enter Location"
              />
            </>
          )}
        </View>
        {/* // 푸터 */}
        {wifi.ssid && wifi.bssid ? (
          <View style={styles.flexStyle}>
            <TouchableOpacity style={styles.btn} onPress={onSubmit}>
              <Text style={[{ fontSize: 22 }, styles.text]}>등록</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => navigation.goBack()}
            >
              <Text style={[{ fontSize: 22 }, styles.text]}>나가기</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            style={styles.btn}
            onPress={() => navigation.goBack()}
          >
            <Text style={[{ fontSize: 22 }, styles.text]}>나가기</Text>
          </TouchableOpacity>
        )}
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
    margin: Platform.OS === "android" ? 20 : 50,
    width: Platform.OS === "android" ? "90%" : "80%",
    height: Platform.OS === "android" ? 400 : 500,
    backgroundColor: "#CEEDFF",
    marginTop: 50,
  },
  btn: {
    backgroundColor: "#5AA0C8",
    borderRadius: 10,
    width: Platform.OS === "android" ? 155 : "50%",
    margin: 10,
    alignItems: "center",
    paddingVertical: 8,
  },
  smallbtn: {
    backgroundColor: "#5AA0C8",
    borderRadius: 10,
    width: Platform.OS === "android" ? 80 : "50%",
    margin: 10,
    alignItems: "center",
  },
  flexStyle: {
    display: "flex",
    flexDirection: "row",
  },
  text: {
    color: "white",
    fontWeight: "bold",
    margin: 10,
  },
  hintText: {
    color: "#5AA0C8",
    margin: 10,
    fontSize: 18,
    fontWeight: "400",
  },
  title: {
    color: "black",
    margin: 10,
  },
  input: {
    fontSize: 22,
    borderWidth: 1.5,
    flexDirection: "row",
    borderRadius: 5,
    margin: 5,
    padding: 5,
    textAlignVertical: "top",
  },
});

export default ExternalAdd;
