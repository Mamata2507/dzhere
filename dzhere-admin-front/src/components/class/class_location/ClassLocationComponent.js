import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import { TextInput } from "react-native-gesture-handler";
import CheckBoxIcon from "../../../containers/class/class_location/CheckBoxContainer";
import { DataTable } from "react-native-paper";
import { Provider, Portal, Modal } from "react-native-paper";

const ClassLocationComponent = ({
  agency,
  classname,
  classList,
  onModalShow,
  onSubmit,
  onChangeSubmit,
  hideModalShow,
  visible,
  // onChangeType,
  onChangeSsid,
  onChangeBssid,
  onChangeLocation,
  // onChangeOldType,
  onChangeOldSsid,
  onChangeOldBssid,
  onChangeOldLocation,
  onUpdate,
  // type,
  ssid,
  bssid,
  location,
  updates,
  oldbssid,
  oldlocation,
  oldssid,
  // oldtype,
}) => {
  return (
    <Provider>
      <View style={styles.container}>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModalShow}
            contentContainerStyle={styles.modal}
          >
            <Text style={styles.modalText}>강의장소 등록</Text>
            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>
            <View style={styles.picker}>
              <Text style={({ width: "10%" }, styles.text)}>강의명</Text>
              <Text
                style={{
                  fontSize: Platform.OS === "android" ? 14 : 16,
                  alignItems: "center",
                  color: "#000000",
                  width: Platform.OS === "android" ? "100%" : "40%",
                  padding: 5,
                }}
              >
                {classname}
              </Text>
            </View>
            <View style={styles.picker}>
              <Text style={({ width: "10%" }, styles.text)}>장소명</Text>

              <TextInput
                style={{
                  fontSize: Platform.OS === "android" ? 14 : 16,
                  alignItems: "center",
                  color: "#000000",
                  width: Platform.OS === "android" ? "100%" : "40%",
                  padding: 5,
                }}
                onChangeText={onChangeLocation}
                value={location}
                placeholder="장소명을 입력하세요"
              />
            </View>

            <View style={styles.picker}>
              {Platform.OS === "android" ? (
                <></>
              ) : (
                <Text
                  style={{
                    // height: 35,
                    margin: "11%",
                    fontWeight: "bold",
                    // width: "20%",
                  }}
                >
                  기기종류
                </Text>
              )}
              <Text
                style={{
                  height: Platform.OS === "android" ? 15 : 35,
                  margin: Platform.OS === "android" ? "20%" : "15%",
                  fontWeight: "bold",
                }}
              >
                SSID
              </Text>
              <Text
                style={{
                  height: Platform.OS === "android" ? 15 : 35,
                  margin: Platform.OS === "android" ? "20%" : "15%",
                  fontWeight: "bold",
                }}
              >
                BSSID
              </Text>
            </View>
            <View style={styles.table}>
              {Platform.OS === "android" ? (
                <></>
              ) : (
                <TextInput
                style={{
                  fontSize: 16,
                  alignItems: "center",
                  backgroundColor: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  width: "15%",
                  margin: "8%",
                  padding: 5,
                  borderRadius: 20,
                }}
                editable={false}
                value="wifi"
              />
              )}
              <TextInput
                style={{
                  fontSize: Platform.OS === "android" ? 12 : 16,
                  alignItems: "center",
                  backgroundColor: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  width: Platform.OS === "android" ? "50%" : "25%",
                  margin: Platform.OS === "android" ? "1%" : "5%",
                  padding: Platform.OS === "android" ? 0 : 5,
                  borderRadius: 20,
                }}
                onChangeText={onChangeSsid}
                value={ssid}
              />
              <TextInput
                style={{
                  fontSize: Platform.OS === "android" ? 12 : 16,
                  alignItems: "center",
                  backgroundColor: "white",
                  textAlign: "center",
                  justifyContent: "center",
                  width: Platform.OS === "android" ? "50%" : "25%",
                  margin: Platform.OS === "android" ? "1%" : "5%",
                  padding: Platform.OS === "android" ? 0 : 5,
                  borderRadius: 20,
                }}
                onChangeText={onChangeBssid}
                value={bssid}
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: Platform.OS === "android" ? 30 : 50,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#5AA0C8",
                  borderRadius: 10,
                  width: Platform.OS === "android" ? "25%" : "20%",
                  height: 40,
                  marginRight: 25,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 5,
                }}
                onPress={hideModalShow}
              >
                <Text
                  style={{
                    fontSize: Platform.OS === "android" ? 18 : 15,
                    fontWeight: "bold",
                    color: "white",
                    textAlignVertical: "center",
                  }}
                >
                  취소
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#5AA0C8",
                  borderRadius: 10,
                  width: Platform.OS === "android" ? "25%" : "20%",
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 5,
                }}
                onPress={onSubmit}
              >
                <Text
                  style={{
                    fontSize: Platform.OS === "android" ? 18 : 15,
                    fontWeight: "bold",
                    color: "white",
                    textAlignVertical: "center",
                  }}
                >
                  등록
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </Portal>
        {updates && (
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModalShow}
              contentContainerStyle={styles.modal}
            >
              <Text style={styles.modalText}>강의장소 등록</Text>
              <View style={styles.lineContainer}>
                <View style={styles.line} />
              </View>
              <View style={styles.picker}>
                <Text style={({ width: "10%" }, styles.text)}>강의명</Text>
                <Text
                  style={{
                    fontSize: Platform.OS === "android" ? 14 : 16,
                    color: "#000000",
                    width: Platform.OS === "android" ? "100%" : "50%",
                    padding: 5,
                  }}
                >
                  {classname}
                </Text>
              </View>
              <View style={styles.picker}>
                <Text style={({ width: "10%" }, styles.text)}>장소명</Text>

                <TextInput
                  style={{
                    fontSize: Platform.OS === "android" ? 14 : 16,
                    alignItems: "center",
                    color: "#000000",
                    width: Platform.OS === "android" ? "100%" : "20%",
                    padding: 5,
                  }}
                  onChangeText={onChangeOldLocation}
                  value={oldlocation}
                  placeholder="장소명을 입력하세요"
                />
              </View>

              <View style={styles.picker}>
                {Platform.OS === "android" ? (
                  <></>
                ) : (
                  <Text
                    style={{
                      height: 35,
                      margin: "13%",
                      fontWeight: "bold",
                    }}
                  >
                    기기종류
                  </Text>
                )}
                <Text
                  style={{
                    height: Platform.OS === "android" ? 15 : 35,
                    margin: Platform.OS === "android" ? "20%" : "15%",
                    fontWeight: "bold",
                  }}
                >
                  SSID
                </Text>
                <Text
                  style={{
                    height: Platform.OS === "android" ? 15 : 35,
                    margin: Platform.OS === "android" ? "10%" : "15%",
                    fontWeight: "bold",
                  }}
                >
                  BSSID
                </Text>
              </View>
              <View style={styles.table}>
                {Platform.OS === "android" ? (
                  <></>
                ) : (
                  <TextInput
                    style={{
                      fontSize: 16,
                      alignItems: "center",
                      backgroundColor: "white",
                      textAlign: "center",
                      justifyContent: "center",
                      width: "15%",
                      margin: "8%",
                      padding: 5,
                      borderRadius: 20,
                    }}
                    editable={false}
                    value="wifi"
                  />
                )}
                <TextInput
                  style={{
                    fontSize: Platform.OS === "android" ? 12 : 16,
                    alignItems: "center",
                    backgroundColor: "white",
                    textAlign: "center",
                    justifyContent: "center",
                    width: Platform.OS === "android" ? "45%" : "25%",
                    margin: Platform.OS === "android" ? "1%" : "5%",
                    padding: Platform.OS === "android" ? 0 : 5,
                    borderRadius: 20,
                  }}
                  onChangeText={onChangeOldSsid}
                  value={oldssid}
                />
                <TextInput
                  style={{
                    fontSize: Platform.OS === "android" ? 12 : 16,
                    alignItems: "center",
                    backgroundColor: "white",
                    textAlign: "center",
                    justifyContent: "center",
                    width: Platform.OS === "android" ? "50%" : "25%",
                    margin: Platform.OS === "android" ? "1%" : "5%",
                    padding: Platform.OS === "android" ? 0 : 5,
                    borderRadius: 20,
                  }}
                  onChangeText={onChangeOldBssid}
                  value={oldbssid}
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: Platform.OS === "android" ? 30 : 50,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#5AA0C8",
                    borderRadius: 10,
                    width: Platform.OS === "android" ? "25%" : "20%",
                    height: 40,
                    marginRight: 25,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 5,
                  }}
                  onPress={hideModalShow}
                >
                  <Text
                    style={{
                      fontSize: Platform.OS === "android" ? 18 : 15,
                      fontWeight: "bold",
                      color: "white",
                      textAlignVertical: "center",
                    }}
                  >
                    취소
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#5AA0C8",
                    borderRadius: 10,
                    width: Platform.OS === "android" ? "25%" : "20%",
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 5,
                  }}
                  onPress={onChangeSubmit}
                >
                  <Text
                    style={{
                      fontSize: Platform.OS === "android" ? 18 : 15,
                      fontWeight: "bold",
                      color: "white",
                      textAlignVertical: "center",
                    }}
                  >
                    등록
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </Portal>
        )}
        <View style={[styles.header, { backgroundColor: "#CEEDFF" }]}>
          <View style={[styles.picker]}>
            <Text style={[styles.text, { marginLeft: 15 }]}>기관</Text>
            <Text
              style={[styles.pickerText, { fontSize: 16 }, { marginLeft: 8 }]}
            >
              {agency}
            </Text>
          </View>
        </View>

        <View style={styles.content}>
          <ScrollView>
            <DataTable>
              <DataTable.Header>
                {Platform.OS === "android" ? (
                  <>
                    <DataTable.Title style={{ marginLeft: "10%" }}>
                      강의명
                    </DataTable.Title>
                    <DataTable.Title style={{ marginLeft: "10%" }}>
                      장소명
                    </DataTable.Title>
                  </>
                ) : (
                  <>
                    <DataTable.Title style={{ marginLeft: "10%" }}>
                      강의명
                    </DataTable.Title>
                    <DataTable.Title style={{ marginLeft: "5%" }}>
                      장소명
                    </DataTable.Title>
                    <DataTable.Title>등록된 WIFI 명</DataTable.Title>
                    <DataTable.Title>등록된 WIFI BSSID</DataTable.Title>
                  </>
                )}
              </DataTable.Header>

              {classList ? (
                classList.map((item) => (
                  <DataTable.Row key={item.i_idx}>
                    {Platform.OS === "android" ? (
                      <>
                        <CheckBoxIcon item={item} style={styles.checkbox} />
                        <DataTable.Cell>{item.c_name}</DataTable.Cell>
                        <DataTable.Cell>{item.i_name}</DataTable.Cell>
                      </>
                    ) : (
                      <>
                        <CheckBoxIcon item={item} style={styles.checkbox} />
                        <DataTable.Cell>{item.c_name}</DataTable.Cell>
                        <DataTable.Cell>{item.i_name}</DataTable.Cell>
                        <DataTable.Cell>{item.i_ssid}</DataTable.Cell>
                        <DataTable.Cell>{item.i_bssid}</DataTable.Cell>
                      </>
                    )}
                  </DataTable.Row>
                ))
              ) : (
                <Text>리스트를 가져오는 중입니다.</Text>
              )}
            </DataTable>
          </ScrollView>
          <View style={styles.btnContainer2}>
            <TouchableOpacity
              style={[styles.btn, { margin: 5 }]}
              onPress={onModalShow}
            >
              <Text style={styles.btnText}>등록</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { margin: 5 }]}
              onPress={onUpdate}
            >
              <Text style={styles.btnText}>수정</Text>
            </TouchableOpacity>
            {/* <TouchableOpacity
            style={[styles.btn, { margin: 5 }]}
            onPress={() => {}}
          >
            <Text style={styles.btnText}>삭제</Text>
          </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Platform.OS === "android" ? 15 : "20%",
    justifyContent: "center",
    backgroundColor: 'white',
    flex: 1,
  },
  content: {
    marginTop: 5,
    textAlign: "center",
    marginLeft: 0,
    height: "55%",
  },
  header: {
    // height: "10%",
    padding: "3%",
    margin: 5,
    borderRadius: 15,
  },
  picker: {
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    margin: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#99c0d6",
  },
  text: {
    marginRight: Platform.OS === "android" ? 5 : 10,
    marginLeft: Platform.OS === "android" ? 10 : 0,
    fontSize: Platform.OS === "android" ? 15 : 16,
    fontWeight: "bold",
    color: "#000000",
  },
  inputText: {
    fontSize: 15,
    width: Platform.OS === "android" ? "90%" : "30%",
    alignItems: "center",
    borderRadius: 50,
    color: "black",
    padding: 6,
  },
  pickerText: {
    fontSize: 15,
    width: Platform.OS === "android" ? "90%" : "30%",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "#99c0d6",
    backgroundColor: "#00000000",
    color: "black",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
  },
  btnContainer2: {
    flexDirection: "row",
    margin: Platform.OS === "android" ? 5 : 10,
    alignSelf: "flex-end",
  },
  btn: {
    backgroundColor: "#5AA0C8",
    borderRadius: 6,
    width: 50,
    height: 30,
    alignItems: "center",
    padding: 5,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textAlignVertical: "center",
  },
  checkbox: {
    alignSelf: "center",
    marginRight: Platform.OS === "android" ? "5%" : "5%",
    margin: Platform.OS === "android" ? 3 : 5,
    width: Platform.OS === "android" ? 16 : 18,
    height: Platform.OS === "android" ? 16 : 18,
    borderColor: "#004cff",
  },
  modal: {
    backgroundColor: "#CEEDFF",
    padding: "5%",
    margin: "10%",
    height: Platform.OS === "android" ? 380 : "80%",
    width: Platform.OS === "android" ? 350 : "70%",
    alignSelf: "center",
    position: "absolute",
    borderRadius: 25,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
    marginTop: "5%",
    marginBottom: "5%",
  },
  textInput: {
    fontSize: 16,
    color: "#000000",
    height: 50,
    width: 300,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
  table: {
    height: 50,
    flexDirection: "row",
    alignItems: "center",
    margin: 4,
    padding: 5,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#99c0d6",
  },
});

export default ClassLocationComponent;
