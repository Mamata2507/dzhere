import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Picker,
  ScrollView,
  TextInput,
} from "react-native";
import { Modal, Portal, Provider, DataTable } from "react-native-paper";
import CheckBoxIcon from '../../../containers/student/CheckBoxContainer_list';

export const TeacherListWeb = ({
  // 처음 렌더링될 때 가져오기
  agName,
  loadingAgName,
  classList,
  // picker
  pickerStatus={pickerStatus}, 
  selectedClass={selectedClass},
  setSelectedClass={setSelectedClass},
  selectedClassAdd={selectedClassAdd},
  setSelectedClassAdd={setSelectedClassAdd},
  selectedClassUpdate={selectedClassUpdate},
  setSelectedClassUpdate={setSelectedClassUpdate},
  selectedAccept={selectedAccept}, 
  handleSetAccept={handleSetAccept}, 
  // onPress event
  onSearch,
  onDelete,
  onAdd,
  onCheck,
  onUpdate,
  // List
  teacherList,
  loadingTeacherList,
  filterList,
  // Modal
  visibleAdd,
  hideModalAdd,
  showModalAdd, 
  visibleUpdate,
  hideModalUpdate,
  showModalUpdate,
  phoneCheck,
  error,
  // useState
  uName,
  onChangeUname,
  uPhone,
  onChangeUphone,
}) => {

  return (
    <View style={styles.container}>
      <Provider>
        {/* <<<<<<<<<<<<<<<<<< 등록 모달 시작 >>>>>>>>>>>>>>>>>>>>*/}
        <Portal>
          <Modal
            visible={visibleAdd}
            onDismiss={hideModalAdd}
            contentContainerStyle={styles.modal}
          >
            <Text style={styles.modalText}>강사 정보 추가</Text>
            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>

            <View style={styles.picker}>
              <Text style={styles.text, {fontSize: 15, fontWeight: 'bold', margin: '2%', marginRight: '4%'}}>전화번호</Text>
              <TextInput
                style={styles.pickerText}
                onChangeText={onChangeUphone}
                value={uPhone}
                placeholder="전화번호를 입력하세요"
                keyboardType="default"
                editable={phoneCheck}
                keyboardShouldPersistTaps='handled'
              />
               <TouchableOpacity
                style={[styles.btn, {marginTop: 3, alignSelf: 'center', width: '10%'}]}
                onPress={onCheck}
                >
                <Text style={styles.btnText}>확인</Text>
              </TouchableOpacity>
            </View>
              <View style={{ flexDirection: "row" }}>
                 <Text style={styles.error}>{error}</Text>
              </View>

            <View style={styles.picker}>
              <Text style={[styles.text, {fontSize: 15, fontWeight: 'bold', margin: '2%', marginRight: '6%'}]}>강사명</Text>
              <TextInput
                style={styles.pickerText}
                onChangeText={onChangeUname}
                value={uName}
                placeholder="강사명을 입력하세요"
                keyboardType="default"
              />
            </View>
            <View style={{ flexDirection: "row" }}>
                 <Text></Text>
            </View>

            <View style={styles.picker}>
              <Text style={styles.text, {fontSize: 15, fontWeight: 'bold', margin: '2%', marginRight: '6%'}}>강의명</Text>
              <Picker
                selectedValue={selectedClassAdd}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedClassAdd(itemValue)
                }
                style={[styles.pickerText]}
              >
                <Picker.Item label="강의명을 선택하세요" value="0" key='selectAdd' />
                {classList.map((c, i) => (
                  <Picker.Item label={c.c_name} value={c.c_idx} key={i}/>
                ))}
              </Picker>
            </View>
            <View style={{ flexDirection: "row" }}>
                 <Text></Text>
            </View>
            <TouchableOpacity
              style={[
                styles.btn,
                { marginTop: 15, alignSelf: "center", width: "10%" },
              ]}
              onPress={onAdd}
            >
              <Text style={styles.btnText}>등록</Text>
            </TouchableOpacity>
          </Modal>
        </Portal>
        {/* <<<<<<<<<<<<<<<<<< 등록 모달 끝 >>>>>>>>>>>>>>>>>>>>*/}

        {/* <<<<<<<<<<<<<<<<<< 수정 모달 시작 >>>>>>>>>>>>>>>>>>>>*/}
        <Portal>
          <Modal
            visible={visibleUpdate}
            onDismiss={hideModalUpdate}
            contentContainerStyle={styles.modal}
          >
            <Text style={styles.modalText}>강사 정보 수정</Text>
            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>

            <View style={styles.picker}>
              <Text style={styles.text, {fontWeight: 'bold', margin: '2%', marginRight: '3%'}}>전화번호</Text>
              <TextInput
                style={[styles.pickerText, { flex: 2, marginRight: '3%' }]}
                onChangeText={onChangeUphone}
                value={uPhone}
                placeholder="전화번호를 입력하세요"
                keyboardType="default"
                editable={phoneCheck}
                keyboardShouldPersistTaps='handled'
              />
               <TouchableOpacity
                style={[styles.btn, {marginTop: 3, alignSelf: 'center', width: '10%'}]}
                onPress={onCheck}
                >
                <Text style={styles.btnText}>확인</Text>
              </TouchableOpacity>
            </View>
              <View style={{ flexDirection: "row" }}>
                 <Text style={styles.error}>{error}</Text>
              </View>

            <View style={styles.picker}>
              <Text style={styles.text, {fontWeight: 'bold', margin: '2%', marginRight: '3%'}}>강사명</Text>
              <TextInput
                style={[styles.pickerText, { flex: 3 }]}
                onChangeText={onChangeUname}
                value={uName}
                placeholder="강사명을 입력하세요"
                keyboardType="default"
              />
            </View>
            <View style={{ flexDirection: "row" }}>
                 <Text></Text>
            </View>

            <View style={styles.picker}>
              <Text style={styles.text, {fontWeight: 'bold', margin: '2%', marginRight: '4%'}}>강의명</Text>
              <Picker
                selectedValue={selectedClassUpdate}
                onValueChange={(itemValue, itemIndex) =>
                  setSelectedClassUpdate(itemValue)
                }
                style={styles.pickerText}
              >
                <Picker.Item label="강의명을 선택하세요" value="0" key='selectUpdate'/>
                {classList.map((c, i) => (
                  <Picker.Item label={c.c_name} value={c.c_idx} key={i}/>
                ))}
              </Picker>
            </View>
            <View style={{ flexDirection: "row" }}>
                 <Text></Text>
            </View>
            <TouchableOpacity
              style={[
                styles.btn,
                { marginTop: 15, alignSelf: "center", width: "10%" },
              ]}
              onPress={onUpdate}
            >
              <Text style={styles.btnText}>등록</Text>
            </TouchableOpacity>
          </Modal>
        </Portal>
        {/* <<<<<<<<<<<<<<<<<< 수정 모달 끝 >>>>>>>>>>>>>>>>>>>>*/}

        {/* <<<<<<<<<<<<<<<<<< 헤더 시작 >>>>>>>>>>>>>>>>>>>>>>*/}
        <View style={[styles.header, { backgroundColor: "#CEEDFF" }]}>
          <View>
            <View style={styles.picker}>
              <Text style={[styles.text, { marginLeft: '2%', marginRight: '7%' }]}>기관</Text>
              <Text
                style={[styles.pickerText, { fontSize: 16, marginLeft: 8, fontWeight: 'bold' }]}
              >
                {loadingAgName && "로딩중..."}
                {!loadingAgName && agName.ag_name}
              </Text>
            </View>
          </View>
          <View style={styles.picker}>
            <Text style={[styles.text, { marginLeft: '2%', marginRight: '7%' }]}>강의</Text>
            <Picker
              selectedValue={selectedClass}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedClass(itemValue)
              }
              style={styles.pickerText}
            >
              <Picker.Item label="전체선택" value="0" key='selectHeader'/>
              {classList.map((c, i) => (
                <Picker.Item label={c.c_name} value={c.c_idx} key={i}/>
              ))}
            </Picker>
          </View>

          <View style={styles.picker}>
            <Text style={{ marginLeft: '2%', fontSize: 16, fontWeight: 'bold', flexDirection: 'row', marginRight: '3%'}}>승인여부</Text>
            <Picker
              onValueChange={handleSetAccept}
              enabled={pickerStatus}
              style={[styles.pickerText, {marginRight: '5%'}]}
              >
              <Picker.Item label='승인여부' value='2' key='accpet2'/>
              <Picker.Item label='승인' value='1' key='accpet1'/>
              <Picker.Item label='미승인' value='0' key='accpet0'/>
            </Picker>
          </View>
        </View>
        {/* <<<<<<<<<<<<<<<<<< 헤더 끝 >>>>>>>>>>>>>>>>>>>>*/}
        <View>
        <TouchableOpacity style={[styles.btn, {alignSelf: "flex-end", margin: '1%'}]} onPress={onSearch}>
          <Text style={styles.btnText}>검색</Text>
        </TouchableOpacity>
        </View>
        
        {/* <<<<<<<<<<<<<<<<<<  content 시작 >>>>>>>>>>>>>>>>>>>>*/}
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
                {filterList.map((s, i) => (
                    <DataTable.Row key={i}>
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
                <Text>{loadingTeacherList && "로딩중..."}</Text>
                {!loadingTeacherList &&
                  teacherList.map((s, i) => (
                    <DataTable.Row key={i}>
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
          </DataTable>
           {/* <<<<<<<<<<<<<<<<<<  content 끝 >>>>>>>>>>>>>>>>>>>>*/}
          
           {/* <<<<<<<<<<<<<<<<<<  푸터 시작 >>>>>>>>>>>>>>>>>>>>*/}
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
          {/* <<<<<<<<<<<<<<<<<<  푸터 끝 >>>>>>>>>>>>>>>>>>>>*/}
        </View>
      </Provider>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "20%",
    justifyContent: "center",
    width: '100%',
    flex: 1,
  },
  content: {
    marginTop: 5,
    textAlign: "center",
    marginLeft: 0,
    height: "55%",
  },
  header: {
    marginTop: '5%',
    padding: "3%",
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
    marginRight: 10,
    fontSize:  16,
    fontWeight: "bold",
    color: "#000000",
  },
  pickerText: {
    fontSize: 15,
    width: "30%",
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
    margin: 10,
    alignSelf: "flex-end",
    height: 200,
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
    margin: "10%",
    height: 400,
    width: "50%",
    alignSelf: "center",
    borderRadius: 35,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: '5%',
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
    marginTop: "5%",
    marginBottom: "5%",
  },
  error: {
    color: "red",
    marginLeft: '0.5%',
  },
});
