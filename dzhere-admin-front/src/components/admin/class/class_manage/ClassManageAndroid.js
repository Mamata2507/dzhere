import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Alert,
} from "react-native";
import CheckBoxIcon from "../../../../containers/admin/class/class_manage/CheckBoxContainer";
import { DataTable, Modal, Portal, Provider } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";
import DateTimePicker from "@react-native-community/datetimepicker";

const ClassManageAndroid = ({
  onModalShow,
  visible,
  onSubmit,
  agency,
  classList,
  onChangeText,
  value,
}) => {
  const [date, setDate] = useState(new Date(1598051730000));
  const [mode, setMode] = useState(false);
  // const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    // setShow(Platform.OS === 'web');
    setDate(currentDate);
  };

  const showMode = (currentMode) => {
    // setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };
  return (
    <Provider>
      <View style={styles.container}>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={onSubmit}
            contentContainerStyle={styles.modal}
          >
            <Text style={styles.modalText}>강의 등록</Text>
            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>
            <View style={styles.picker}>
              <Text style={styles.text}>강의명</Text>
              <TextInput
                style={[styles.pickerText, { flex: 3 }]}
                onChangeText={onChangeText}
                value={value}
                placeholder="강의명을 입력하세요"
                keyboardType="default"
              />
            </View>
            <View style={styles.picker}>
              <Text style={styles.text}>수강기간</Text>
              <TouchableOpacity onPress={showDatepicker}>
                <Text>날짜를 입력하세요</Text>
                <DateTimePicker
                  testID="dateTimePicker"
                  value={date}
                  mode={mode}
                  is24Hour={true}
                  onChange={onChange}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.picker}>
              <Text style={styles.text}>수강요일 및 시간</Text>
              <TextInput
                style={[styles.pickerText, { flex: 3 }]}
                // onChangeText={onChangeUname}
                // value={uName}
                placeholder="수강생명을 입력하세요"
                keyboardType="default"
              />
            </View>
            <TouchableOpacity
              style={[
                styles.btn,
                { marginTop: 15, alignSelf: "center", width: "20%" },
              ]}
              onPress={onSubmit}
            >
              <Text style={styles.btnText}>등록</Text>
            </TouchableOpacity>
          </Modal>
        </Portal>
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
          <DataTable>
            <DataTable.Header>
              {Platform.OS === "android" ? (
                <>
                  {/* <DataTable.Title></DataTable.Title> */}
                  <DataTable.Title style={{ marginLeft: "10%" }}>
                    강의명
                  </DataTable.Title>
                  <DataTable.Title style={{ marginLeft: "10%" }}>
                    수강기간
                  </DataTable.Title>
                </>
              ) : (
                <>
                  {/* <DataTable.Title></DataTable.Title> */}
                  <DataTable.Title style={{ marginLeft: "10%" }}>
                    강의명
                  </DataTable.Title>
                  <DataTable.Title style={{ marginLeft: "10%" }}>
                    수강기간
                  </DataTable.Title>
                  <DataTable.Title style={{ marginLeft: "10%" }}>
                    수강요일 및 시간
                  </DataTable.Title>
                </>
              )}
            </DataTable.Header>

            <ScrollView>
              {classList ? (
                classList.map((item) => (
                  <DataTable.Row key={item.c_idx}>
                    {Platform.OS === "android" ? (
                      <>
                        <CheckBoxIcon item={item} style={styles.checkbox} />
                        <DataTable.Cell>{item.c_name}</DataTable.Cell>
                        <DataTable.Cell>
                          {item.ct_start_date}
                          {item.ct_end_date}
                        </DataTable.Cell>
                      </>
                    ) : (
                      <>
                        <CheckBoxIcon item={item} style={styles.checkbox} />
                        <DataTable.Cell>{item.c_name}</DataTable.Cell>
                        <DataTable.Cell>
                          {item.ct_start_date} ~ {item.ct_end_date}
                        </DataTable.Cell>
                        <DataTable.Cell>
                          {item.ct_day} / {item.ct_start_time} ~{" "}
                          {item.ct_end_time}
                        </DataTable.Cell>
                      </>
                    )}
                  </DataTable.Row>
                ))
              ) : (
                <Text>리스트를 가져오는 중입니다.</Text>
              )}
            </ScrollView>
            {/* <DataTable.Pagination
            page={page}
            numberOfPages={3}
            onPageChange={(page) => setPage(page)}
            label="1-2 of 6"
            optionsPerPage={optionsPerPage}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            showFastPagination
            optionsLabel={"Rows per page"}
          /> */}
          </DataTable>

          <View style={styles.btnContainer2}>
            <TouchableOpacity
              style={[styles.btn, { margin: 5 }]}
              onPress={onModalShow}
            >
              <Text style={styles.btnText}>등록</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { margin: 5 }]}
              onPress={() => {}}
            >
              <Text style={styles.btnText}>수정</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { margin: 5 }]}
              onPress={() => {}}
            >
              <Text style={styles.btnText}>삭제</Text>
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
  },
  content: {
    marginTop: 20,
    // alignItems: "center",
    // alignItems: "flex-end",
    textAlign: "center",
    marginLeft: 0,
    // justifyContent: "center",
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
    // flex: 2,
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  pickerText: {
    fontSize: 25,
    alignItems: "center",
    color: "#000000",
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
  miniPicker: {
    width: "50%",
    height: 30,
    color: "#004cff",
  },
  checkbox: {
    alignSelf: "center",
    marginRight: Platform.OS === "android" ? "5%" : "5%",
    margin: Platform.OS === "android" ? 3 : 5,
    width: Platform.OS === "android" ? 15 : 18,
    height: Platform.OS === "android" ? 15 : 18,
    borderColor: "#004cff",
  },
  modal: {
    backgroundColor: "#CEEDFF",
    padding: "5%",
    margin: "10%",
    height: Platform.OS === "android" ? "65%" : "80%",
    width: Platform.OS === "android" ? auto : "70%",
    alignSelf: "center",
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
});

Date.prototype.format = function (f) {
  if (!this.valueOf()) return " ";

  var weekName = [
    "일요일",
    "월요일",
    "화요일",
    "수요일",
    "목요일",
    "금요일",
    "토요일",
  ];
  var d = this;

  return f.replace(/(yyyy|yy|MM|dd|E|hh|mm|ss|a\/p)/gi, function ($1) {
    switch ($1) {
      case "yyyy":
        return d.getFullYear();
      case "yy":
        return (d.getFullYear() % 1000).zf(2);
      case "MM":
        return (d.getMonth() + 1).zf(2);
      case "dd":
        return d.getDate().zf(2);
      case "E":
        return weekName[d.getDay()];
      case "HH":
        return d.getHours().zf(2);
      case "hh":
        return ((h = d.getHours() % 12) ? h : 12).zf(2);
      case "mm":
        return d.getMinutes().zf(2);
      case "ss":
        return d.getSeconds().zf(2);
      case "a/p":
        return d.getHours() < 12 ? "오전" : "오후";
      default:
        return $1;
    }
  });
};

String.prototype.string = function (len) {
  var s = "",
    i = 0;
  while (i++ < len) {
    s += this;
  }
  return s;
};
String.prototype.zf = function (len) {
  return "0".string(len - this.length) + this;
};
Number.prototype.zf = function (len) {
  return this.toString().zf(len);
};

export default ClassManageAndroid;
