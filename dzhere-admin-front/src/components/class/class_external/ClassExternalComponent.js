import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import CheckBoxIcon from "../../../containers/class/class_external/CheckBoxContainer";
import { DataTable, Provider, Portal, Modal } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";
import PickerBox from "../../../containers/class/class_external/PickerBoxContainer";

const ClassExternalComponent = ({
  agency,
  externalist,
  onSearch,
  onChangeText,
  onDelete,
  name,
  click,
  NameRef,
  hideModalShow,
  onModalShow,
  visible,
  onSubmit,
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
              <Text style={styles.modalText}>외부장소 등록을 승인하시겠습니까?</Text>
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
                    완료
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </Portal>
        <View style={[styles.header, { backgroundColor: "#CEEDFF" }]}>
          <View style={[styles.picker]}>
            <Text style={[styles.text, { marginLeft: 15, width: '14%' }]}>기관</Text>
            <Text
              style={[styles.pickerText, { fontSize: 16 }, { marginLeft: 8 }]}
            >
              {agency}
            </Text>
          </View>
          <View style={styles.picker}>
            <Text style={[styles.text, { marginLeft: 15, width: '14%' }]}>강의명</Text>
            <PickerBox style={styles} />
          </View>
          <View style={[styles.picker]}>
            <Text style={[styles.text, { marginLeft: 15, width: '14%' }]}>수강생/강사명</Text>
            <TextInput
              style={styles.inputText}
              onChangeText={onChangeText}
              value={name == null ? "" : name}
              ref={NameRef}
              placeholder="수강생/강사명을 입력해주세요."
            />
          </View>
        </View>
        <View style={styles.btnContainer2}>
          <TouchableOpacity
            style={[styles.btn, { margin: 5 }]}
            onPress={onSearch}
          >
            <Text style={[styles.btnText, { color: "white" }]}>검색</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.content}>
          <DataTable>
            <DataTable.Header>
              {Platform.OS === "android" ? (
                <>
                  <DataTable.Title style={{ marginLeft: "8%" }}>
                    외부 장소 명
                  </DataTable.Title>
                  <DataTable.Title style={{ marginLeft: "4%" }}>
                    등록된 WIFI 명
                  </DataTable.Title>
                  <DataTable.Title style={{ marginLeft: "3%" }}>
                    등록 상태
                  </DataTable.Title>
                </>
              ) : (
                <>
                  <DataTable.Title style={{ marginLeft: "7%" }}>
                    외부 장소 명
                  </DataTable.Title>
                  <DataTable.Title style={{ marginLeft: "6%" }}>
                    등록된 WIFI 명
                  </DataTable.Title>
                  <DataTable.Title style={{ marginLeft: "6%" }}>
                    등록된 WIFI ID
                  </DataTable.Title>
                  <DataTable.Title style={{ marginLeft: "6%" }}>
                    등록 상태
                  </DataTable.Title>
                </>
              )}
            </DataTable.Header>

            <ScrollView>
              {click === null &&
                externalist &&
                externalist.map((item) => (
                  <DataTable.Row key={item.e_idx}>
                    {Platform.OS === "android" ? (
                      <>
                        <CheckBoxIcon item={item} style={styles.checkbox} />
                        <DataTable.Cell style={{ marginLeft: "3%" }}>
                          {item.e_name}
                        </DataTable.Cell>
                        <DataTable.Cell style={{ marginLeft: "3%" }}>
                          {item.e_ssid}
                        </DataTable.Cell>
                        <DataTable.Cell style={{ marginLeft: "3%" }}>
                          {item.e_accept === 0 ? (
                            <Text style={[{ color: "red" }, styles.btnText]}>
                              승인 대기
                            </Text>
                          ) : (
                            <Text style={[{ color: "black" }, styles.btnText]}>
                              승인완료
                            </Text>
                          )}
                        </DataTable.Cell>
                      </>
                    ) : (
                      <>
                        <CheckBoxIcon item={item} style={styles.checkbox} />
                        <DataTable.Cell style={{ marginLeft: "5%" }}>
                          {item.e_name}
                        </DataTable.Cell>
                        <DataTable.Cell style={{ marginLeft: "5%" }}>
                          {item.e_ssid}
                        </DataTable.Cell>
                        <DataTable.Cell style={{ marginLeft: "3%" }}>
                          {item.e_bssid}
                        </DataTable.Cell>
                        <DataTable.Cell style={{ marginLeft: "5%" }}>
                          {item.e_accept === 0 ? (
                            <Text
                              style={[
                                { color: "red", margin: 5 },
                                styles.btnText,
                              ]}
                            >
                              승인 대기
                            </Text>
                          ) : (
                            <Text style={[{ color: "black" }, styles.btnText]}>
                              승인완료
                            </Text>
                          )}
                        </DataTable.Cell>
                      </>
                    )}
                  </DataTable.Row>
                ))}
              {click !== null && name !== null && (
                <Text style={{ fontSize: Platform.OS === "android" ? 15 : 20 }}>
                  {click}
                </Text>
              )}
            </ScrollView>
          </DataTable>
          <View style={styles.btnContainer2}>
            <TouchableOpacity
              style={[styles.btn, { margin: 5 }]}
              onPress={onModalShow}
            >
              <Text style={[styles.btnText, { color: "white" }]}>승인</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.btn, { margin: 5 }]}
              onPress={onDelete}
            >
              <Text style={[styles.btnText, { color: "white" }]}>삭제</Text>
            </TouchableOpacity>
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
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    marginTop: 20,
    textAlign: "center",
    height: "40%",
  },
  header: {
    padding: "3%",
    margin: 5,
    marginTop: Platform.OS === "android" ? "15%" : 0,
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
    width: Platform.OS === "android" ? "15%" : "8%",
    marginRight: 10,
    fontSize: Platform.OS === "android" ? 16 : 16,
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
    textAlignVertical: "center",
  },
  checkbox: {
    alignSelf: "center",
    marginLeft: Platform.OS === "android" ? 0 : "2%",
    margin: Platform.OS === "android" ? "2%" : 0,
    width: Platform.OS === "android" ? 16 : 18,
    height: Platform.OS === "android" ? 16 : 18,
    borderColor: "#004cff",
  },
  modal: {
    backgroundColor: "#CEEDFF",
    padding: "5%",
    margin: "10%",
    height: Platform.OS === "android" ? 380 : "30%",
    width: Platform.OS === "android" ? 350 : "30%",
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
});

export default ClassExternalComponent;
