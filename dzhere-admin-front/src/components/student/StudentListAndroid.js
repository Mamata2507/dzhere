import React, { useState } from "react";
import {
  Alert,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Picker,
  ScrollView,
  TextInput,
} from "react-native";
import { Modal, Portal, Provider, DataTable } from "react-native-paper";
import CheckBoxIcon from "../../containers/student/CheckBoxContainer";

export const StudentListAndroid = ({
  agName,
  classList,
  selectedClass,
  setSelectedClass,
  onSearch,
  studentList,
  loadingAgName,
  loadingStudentList,
  selectedAccept,
  setSelectedAccept,
  filterList,
  loadingFilterList,
  showModalAdd,
  visibleAdd,
  hideModalAdd,
  onAdd,
  uName,
  onChangeUname,
  uPhone,
  onChangeUphone,
  showModalUpdate,
  onDelete,
  selectedClassAdd,
  setSelectedClassAdd,
  onCheck,
  checkuid,
}) => {
  // 버튼 이벤트
  const onPress = () => {
    Alert.alert(`${agName.ag_idx}`);
    Alert.alert(`${agName.ag_name}`);
  };

  // Picker
  const [selectedValue, setSelectedValue] = useState(0);

  // DataTable - Pagination
  const optionsPerPage = [2, 3, 4];

  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);

  // CheckBox
  const [isChecked, setChecked] = useState(false);
  // const [agree, setAgree] = useState(false);
  // <Button
  // title="Sign Up"
  // disabled={!agree}
  // onPress={() => {
  //   /* Do something */
  // }}
  // />

  return (
    <View style={styles.container}>
      <Provider>
        <Portal>
          <Modal
            visible={visibleAdd}
            onDismiss={hideModalAdd}
            contentContainerStyle={styles.modal}
          >
            <Text style={styles.modalText}>수강생 정보 추가</Text>
            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>
            <View style={styles.picker}>
              <Text style={styles.text}>강의명</Text>
              <Picker
                selectedValue={selectedClassAdd}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedClassAdd(itemValue)
                }
                style={[styles.pickerText, { flex: 4, marginLeft: 12 }]}
              >
                <Picker.Item label="강의명을 선택하세요" value="0" />
                {classList.map((c) => (
                  <Picker.Item label={c.c_name} value={c.c_idx} />
                ))}
              </Picker>
            </View>
            <View style={styles.picker}>
              <Text style={styles.text}>수강생명</Text>
              <TextInput
                style={[styles.pickerText, { flex: 3 }]}
                onChangeText={onChangeUname}
                value={uName}
                placeholder="수강생명을 입력하세요"
                keyboardType="default"
              />
            </View>
            <View style={styles.picker}>
              <Text style={styles.text}>전화번호</Text>
              <TextInput
                style={[styles.pickerText, { flex: 2, marginRight: '5%' }]}
                onChangeText={onChangeUphone}
                value={uPhone}
                placeholder="전화번호를 입력하세요"
                keyboardType="default"
                editable={checkuid}
              />
               <TouchableOpacity
                style={[styles.btn, {marginTop: 3, alignSelf: 'center', width: '20%'}]}
                onPress={onCheck}
                >
                <Text style={styles.btnText}>확인</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[
                styles.btn,
                { marginTop: 15, alignSelf: "center", width: "20%" },
              ]}
              onPress={onAdd}
            >
              <Text style={styles.btnText}>등록</Text>
            </TouchableOpacity>
          </Modal>
        </Portal>

        <View style={[styles.header, { backgroundColor: "#CEEDFF" }]}>
          <View>
            <View style={styles.picker}>
              <Text style={[styles.text, { marginLeft: 15 }]}>기관</Text>
              <Text
                style={[styles.pickerText, { fontSize: 16 }, { marginLeft: 8 }]}
              >
                {loadingAgName && "로딩중..."}
                {!loadingAgName && agName.ag_name}
              </Text>
            </View>
          </View>
          <View style={styles.picker}>
            <Text style={[styles.text, { marginLeft: 15 }]}>강의</Text>
            <Picker
              selectedValue={selectedClass}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedClass(itemValue)
              }
              style={styles.pickerText}
            >
              <Picker.Item label="전체선택" value="0" />
              {classList.map((c) => (
                <Picker.Item label={c.c_name} value={c.c_idx} />
              ))}
            </Picker>
          </View>
          <View style={styles.btnContainer}>
            <Picker
              selectedValue={selectedAccept}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedAccept(itemValue)
              }
              style={styles.miniPicker}
            >
              <Picker.Item label="전체선택[승인]" value="2" />
              <Picker.Item label="승인" value="1" />
              <Picker.Item label="미승인" value="0" />
            </Picker>
            <TouchableOpacity style={styles.btn} onPress={onSearch}>
              <Text style={styles.btnText}>검색</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={styles.content}>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>선택</DataTable.Title>
              <DataTable.Title>성명</DataTable.Title>
              <DataTable.Title>전화번호</DataTable.Title>
              <DataTable.Title numeric>가입상태</DataTable.Title>
            </DataTable.Header>

            {selectedAccept < 2 ? (
              <ScrollView>
                <Text>{loadingFilterList == true && "로딩중..."}</Text>
                {loadingFilterList == false &&
                  filterList.map((s) => (
                    <DataTable.Row>
                      <DataTable.Cell>
                        <CheckBoxIcon item={s.u_idx} style={styles.checkbox} />
                      </DataTable.Cell>
                      <DataTable.Cell>{s.u_name}</DataTable.Cell>
                      <DataTable.Cell>{s.u_phone}</DataTable.Cell>
                      <DataTable.Cell numeric>
                        {s.u_accept === 0 && "미승인"}
                        {s.u_accept === 1 && "승인"}
                      </DataTable.Cell>
                    </DataTable.Row>
                  ))}
              </ScrollView>
            ) : (
              <ScrollView>
                <Text>{loadingStudentList && "로딩중..."}</Text>
                {!loadingStudentList &&
                  studentList.map((s) => (
                    <DataTable.Row>
                      <DataTable.Cell>
                        <CheckBoxIcon item={s.u_idx} style={styles.checkbox} />
                      </DataTable.Cell>
                      <DataTable.Cell>{s.u_name}</DataTable.Cell>
                      <DataTable.Cell>{s.u_phone}</DataTable.Cell>
                      <DataTable.Cell numeric>
                        {s.u_accept === 0 && "미승인"}
                        {s.u_accept === 1 && "승인"}
                      </DataTable.Cell>
                    </DataTable.Row>
                  ))}
              </ScrollView>
            )}

            <DataTable.Pagination
              page={page}
              numberOfPages={3}
              highlightOnHover
              pagination
              paginationPerPage={5}
              paginationRowsPerPageOptions={[5, 15, 25, 50]}
              onPageChange={(page) => setPage(page)}
              label="1-2 of 6"
              optionsPerPage={optionsPerPage}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
              showFastPagination
              optionsLabel={"Rows per page"}
            />
          </DataTable>

          <View style={styles.btnContainer2}>
            <TouchableOpacity
              style={[styles.btn, { margin: 5 }]}
              onPress={showModalAdd}
            >
              <Text style={styles.btnText}>등록</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { margin: 5 }]}
              onPress={showModalUpdate}
            >
              <Text style={styles.btnText}>수정</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { margin: 5 }]}
              onPress={onDelete}
            >
              <Text style={styles.btnText}>삭제</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    justifyContent: "center",
    flex: 1,
  },
  content: {
    marginTop: 60,
    justifyContent: "center",
    height: "50%",
    margin: 10,
  },
  header: {
    height: "20%",
    padding: "3%",
    margin: 10,
    marginTop: 70,
    borderRadius: 15,
  },
  picker: {
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    margin: 4,
  },
  text: {
    flex: 1,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  pickerText: {
    flex: 6,
    fontSize: 16,
    alignItems: "center",
    color: "#000000",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
    alignSelf: "flex-end",
  },
  btnContainer2: {
    flexDirection: "row",
    margin: 5,
    alignSelf: "flex-end",
  },
  btn: {
    backgroundColor: "#5AA0C8",
    borderRadius: 6,
    width: "15%",
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
  miniPicker: {
    width: "46%",
    height: 30,
    color: "#004cff",
  },
  checkbox: {
    alignSelf: "center",
    margin: 8,
    borderColor: "#999999",
  },
  tableContainer: {
    paddingTop: 100,
    paddingHorizontal: 30,
  },
  modal: {
    backgroundColor: "#CEEDFF",
    padding: "5%",
    height: "65%",
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
