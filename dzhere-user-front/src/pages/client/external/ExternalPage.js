import * as React from "react";
import { View, Text, StyleSheet, Platform, Dimensions } from "react-native";
import styled from "styled-components/native";
import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
import { Header, Footer } from "../../../components/common/layout";
import External from '../../../components/client/external/ExternalList';

const ExternalPage = ({ navigation }) => {
  const width = Dimensions.get('window').width;
  // const externalList = useSelector(({external})=>({
  //   externalList: external.externalList,
  // }));
  return (
    <>
    {/* // 헤더 */}
      <Header />
      {/* // 본문 */}
      <View style={styles.container}>
        <View style={styles.contents}>
          <Text style={[{ fontSize: 20 }, styles.title]}>추가된 외부 장소</Text>
          {/* <Text>{this.state.externalList}</Text> */}
          {/* <List width={width}>
        {Object.values(locs)
          .reverse()
          .map((item) => (
            <External
              key={item.id}
              item={item}
              deleteLocation={_deleteLocation}
              toggleTask={_toggleLocation}
            />
          ))}
      </List> */}

          {/* // 푸터 */}
          <View style={styles.flexStyle}>
            {Platform.OS === "android" || Platform.OS === "ios" ? (
              <TouchableOpacity
                style={styles.btn}
                onPress={() => navigation.navigate("ExternalAddContainer")}
              >
                <Text style={[{ fontSize: 22 }, styles.text]}>추가</Text>
              </TouchableOpacity>
            ) : (
              ""
            )}
            <TextInput />
            <TouchableOpacity
              style={styles.btn}
              // onPress={onDelete}
            >
              <Text style={[{ fontSize: 22 }, styles.text]}>삭제</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </>
  );
};

const List = styled.ScrollView`
  flex: 1;
  width: ${({ width }) => width - 40}px;
`;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    alignContent: "center",
  },
  contents: {
    margin: 10,
    width: Platform.OS === "android" ? "90%" : "70%",
    height: 500,
    backgroundColor: "#CEEDFF",
    marginTop: 50,
  },
  btn: {
    backgroundColor: "#5AA0C8",
    borderRadius: 10,
    width: Platform.OS === "android" ? 155 : "50%",
    marginTop: 20,
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
    margin: 10,
  },
});

export default ExternalPage;
