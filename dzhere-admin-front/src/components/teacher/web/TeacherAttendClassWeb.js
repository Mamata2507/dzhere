import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Picker,
  TextInput,
} from "react-native";
import {
  Modal,
  Portal,
  Provider,
  DataTable,
  RadioButton,
} from "react-native-paper";
import DatePicker from "react-datepicker";
import styled from "styled-components";
import { ko } from "date-fns/esm/locale";
import "./react-datepicker.css";

export const TeacherAttendClassWeb = ({
  editTodayDate,
  editAttendTime,
  editExitTime,
  editLateStatus,
  editLeave,
  editAbsent,
  editNotExit,

  // module state
  teacherIdxName,
  searchType,
  startDate,
  endDate,

  // date picker 상태
  onChangeStartDate,
  onChangeEndDate,

  // 처음 렌더링될 때 가져오기
  agName,
  loadingAgName,
  classList,

  // picker
  selectedClass,
  setSelectedClass,

  // onPress event
  onChangeEditAttendTime,
  onChangeEditExitTime,
  onChangeEditLateStatus,
  onChangeEditLeave,
  onChangeEditAbsent,
  onChangeEditNotExit,
  onChangeSelectedClass,
  onChangeSearchType,
  checkHandler,
  onSearch,

  onUpdate,

  // List
  rowIndexList,
  checkedList,
  teacherAttendList,

  // Modal
  hideModalUpdate,
  showModalUpdate,
  error,
  visibleUpdate,
}) => {
  return (
    <View style={styles.container}>
      <Provider>
        {/* <<<<<<<<<<<<<<<<<< 수정 모달 시작 >>>>>>>>>>>>>>>>>>>>*/}
        <Portal>
          <Modal
            visible={visibleUpdate}
            onDismiss={hideModalUpdate}
            contentContainerStyle={styles.modal}
          >
            <Text style={styles.modalText}>강사 출결 정보 수정</Text>
            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>

            <View style={styles.picker}>
              <Text
                style={
                  (styles.text,
                  { fontWeight: "bold", margin: "2%", marginRight: "12%" })
                }
              >
                날짜
              </Text>
              <Text
                style={[
                  styles.pickerText,
                  { flex: 2, marginRight: "3%", paddingHorizontal: 10 },
                ]}
              >
                {editTodayDate}
              </Text>
            </View>

            <View style={styles.picker}>
              <Text
                style={
                  (styles.text,
                  { fontWeight: "bold", margin: "2%", marginRight: "4%" })
                }
              >
                출석 시간
              </Text>
              <TextInput
                style={[styles.pickerText, { flex: 3, paddingHorizontal: 10 }]}
                onChangeText={onChangeEditAttendTime}
                value={editAttendTime}
                placeholder="HH:mm:ss"
                keyboardType="default"
              />
            </View>

            <View style={styles.picker}>
              <Text
                style={
                  (styles.text,
                  { fontWeight: "bold", margin: "2%", marginRight: "4%" })
                }
              >
                퇴실 시간
              </Text>
              <TextInput
                style={[styles.pickerText, { flex: 3, paddingHorizontal: 10 }]}
                onChangeText={onChangeEditExitTime}
                value={editExitTime}
                placeholder="HH:mm:ss"
                keyboardType="default"
              />
            </View>

            <View style={styles.picker}>
              <Text
                style={
                  (styles.text,
                  { fontWeight: "bold", margin: "2%", marginRight: 50 })
                }
              >
                지각
              </Text>
              <input
                type="checkbox"
                id="lateStatus"
                onClick={(e) => onChangeEditLateStatus(e)}
                checked={editLateStatus === 0 ? false : true}
              />
            </View>

            <View style={styles.picker}>
              <Text
                style={
                  (styles.text,
                  { fontWeight: "bold", margin: "2%", marginRight: 50 })
                }
              >
                조퇴
              </Text>
              <input
                type="checkbox"
                id="leave"
                onClick={onChangeEditLeave}
                checked={editLeave === 0 ? false : true}
              />
            </View>

            <View style={styles.picker}>
              <Text
                style={
                  (styles.text,
                  { fontWeight: "bold", margin: "2%", marginRight: 50 })
                }
              >
                결석
              </Text>
              <input
                type="checkbox"
                id="absent"
                onClick={onChangeEditAbsent}
                checked={editAbsent === 0 ? false : true}
              />
            </View>

            <View style={styles.picker}>
              <Text
                style={
                  (styles.text,
                  { fontWeight: "bold", margin: "2%", marginRight: 36 })
                }
              >
                미퇴실
              </Text>
              <input
                type="checkbox"
                id="notExit"
                onClick={onChangeEditNotExit}
                checked={editNotExit === 0 ? false : true}
              />
            </View>

            <TouchableOpacity
              style={[
                styles.btn,
                { marginTop: 15, alignSelf: "center", width: "10%" },
              ]}
              onPress={() =>
                onUpdate({
                  a_idx: checkedList[0],
                  u_idx: teacherIdxName["u_idx"],
                  editTodayDate: editTodayDate,
                  editAttendTime: editTodayDate + " " + editAttendTime,
                  editExitTime: editTodayDate + " " + editExitTime,
                  editLateStatus: editLateStatus,
                  editLeave: editLeave,
                  editAbsent: editAbsent,
                  editNotExit: editNotExit,
                  startDate: startDate,
                  endDate: endDate,
                })
              }
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
              <Text
                style={[styles.text, { marginLeft: "2%", marginRight: "7%" }]}
              >
                기관
              </Text>
              <Text
                style={[
                  styles.pickerText,
                  { fontSize: 16, marginLeft: 8, fontWeight: "bold" },
                ]}
              >
                {loadingAgName && "로딩중..."}
                {!loadingAgName && agName.ag_name}
              </Text>
            </View>
          </View>
          <View style={styles.picker}>
            <Text
              style={[styles.text, { marginLeft: "2%", marginRight: "7%" }]}
            >
              강의
            </Text>
            <Picker
              onValueChange={(itemValue, itemIndex) => {
                setSelectedClass(itemValue);
                onChangeSelectedClass(itemValue);
              }}
              style={[styles.pickerText, { textAlign: "center" }]}
            >
              <Picker.Item label="선택" value="0" key="selectHeader" />
              {classList.map((c, i) => (
                <Picker.Item label={c.c_name} value={c.c_idx} key={i} />
              ))}
            </Picker>
          </View>

          <View style={styles.picker}>
            <Text
              style={{
                marginLeft: "2%",
                fontSize: 16,
                fontWeight: "bold",
                flexDirection: "row",
                marginRight: "7%",
              }}
            >
              강사
            </Text>
            <Text
              style={[
                styles.pickerText,
                { fontSize: 16, marginLeft: 8, fontWeight: "bold" },
              ]}
            >
              {teacherIdxName !== null && teacherIdxName !== undefined
                ? teacherIdxName["u_name"]
                : ""}
            </Text>
          </View>
          <View style={[styles.picker, { justifyContent: "center" }]}>
            <View style={{ marginLeft: "4%" }}>
              <RadioButton
                value="all"
                status={searchType === "all" ? "checked" : "unchecked"}
                onPress={() => {
                  onChangeSearchType("all");
                  onChangeStartDate(null);
                  onChangeEndDate(null);
                }}
              />
            </View>
            <Text style={{ marginRight: "4%" }}>전체</Text>

            <View style={{ marginLeft: "4%" }}>
              <RadioButton
                value="filter"
                status={searchType === "filter" ? "checked" : "unchecked"}
                onPress={() => {
                  onChangeSearchType("filter");
                }}
              />
            </View>
            <Text style={{ marginRight: "4%" }}>기간 선택</Text>

            <View
              style={{
                borderWidth: 2,
                borderColor: "#a9cee2",
                borderRadius: 15,
              }}
            >
              <CustomDatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                placeholderText={searchType === "filter" ? "조회 시작일" : ""}
                showPopperArrow={false}
                selected={startDate}
                value={startDate}
                onChange={onChangeStartDate}
                showMonthDropdown={true}
                disabledKeyboardNavigation
                withPortal
                portalId="start-date"
                name="start-date"
                readOnly={searchType === "filter" ? false : true}
              />
            </View>

            <Text
              style={{
                marginHorizontal: "1%",
                fontSize: 22,
                fontWeight: "bold",
                color: "#8b9296",
              }}
            >
              {" "}
              ~{" "}
            </Text>

            <View
              style={{
                borderWidth: 2,
                borderColor: "#a9cee2",
                borderRadius: 15,
              }}
            >
              <CustomDatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                placeholderText={
                  searchType === "filter" && startDate !== null
                    ? "조회 종료일"
                    : ""
                }
                showPopperArrow={false}
                selected={endDate}
                value={endDate}
                onChange={onChangeEndDate}
                minDate={startDate}
                showMonthDropdown={true}
                disabledKeyboardNavigation
                withPortal
                portalId="end-date"
                name="end-date"
                readOnly={
                  searchType === "filter" && startDate !== null ? false : true
                }
              />
            </View>
          </View>
        </View>
        {/* <<<<<<<<<<<<<<<<<< 헤더 끝 >>>>>>>>>>>>>>>>>>>>*/}
        <View>
          <TouchableOpacity
            style={[styles.btn, { alignSelf: "flex-end", margin: "1%" }]}
            onPress={() => {
              if (selectedClass === 0) {
                return alert("강의를 먼저 선택 해주세요!");
              }
              if (
                searchType === "filter" &&
                (startDate == null ||
                  endDate == null ||
                  startDate == "" ||
                  endDate == "")
              ) {
                return alert("조회 기간을 지정해주세요.");
              } else
                onSearch({
                  u_idx: teacherIdxName["u_idx"],
                  type: searchType,
                  start_date: startDate,
                  end_date: endDate,
                });
            }}
          >
            <Text style={styles.btnText}>검색</Text>
          </TouchableOpacity>
        </View>

        {/* <<<<<<<<<<<<<<<<<<  content 시작 >>>>>>>>>>>>>>>>>>>>*/}
        {teacherAttendList.length == 0 || rowIndexList == 0 ? (
          <></>
        ) : (
          <View style={styles.content}>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title
                  style={{
                    borderRightWidth: 0.5,
                    justifyContent: "center",
                    borderColor: "#d5d5d5",
                  }}
                >
                  <input
                    type="checkbox"
                    id={"-999"}
                    onClick={checkHandler}
                    checked={
                      checkedList.length == rowIndexList.length &&
                      checkedList.length !== 0 &&
                      rowIndexList.length !== 0
                        ? true
                        : false
                    }
                  />
                </DataTable.Title>
                <DataTable.Title
                  style={{
                    borderLeftWidth: 0.5,
                    borderRightWidth: 0.5,
                    justifyContent: "center",
                    borderColor: "#d5d5d5",
                  }}
                >
                  순번
                </DataTable.Title>
                <DataTable.Title
                  style={{
                    borderLeftWidth: 0.5,
                    borderRightWidth: 0.5,
                    justifyContent: "center",
                    borderColor: "#d5d5d5",
                  }}
                >
                  날짜
                </DataTable.Title>
                <DataTable.Title
                  style={{
                    borderLeftWidth: 0.5,
                    borderRightWidth: 0.5,
                    justifyContent: "center",
                    borderColor: "#d5d5d5",
                  }}
                >
                  출석
                </DataTable.Title>
                <DataTable.Title
                  style={{
                    borderLeftWidth: 0.5,
                    borderRightWidth: 0.5,
                    justifyContent: "center",
                    borderColor: "#d5d5d5",
                  }}
                >
                  퇴실
                </DataTable.Title>
                <DataTable.Title
                  style={{
                    borderLeftWidth: 0.5,
                    borderRightWidth: 0.5,
                    justifyContent: "center",
                    borderColor: "#d5d5d5",
                  }}
                >
                  지각
                </DataTable.Title>
                <DataTable.Title
                  style={{
                    borderLeftWidth: 0.5,
                    borderRightWidth: 0.5,
                    justifyContent: "center",
                    borderColor: "#d5d5d5",
                  }}
                >
                  조퇴
                </DataTable.Title>
                <DataTable.Title
                  style={{
                    borderLeftWidth: 0.5,
                    borderRightWidth: 0.5,
                    justifyContent: "center",
                    borderColor: "#d5d5d5",
                  }}
                >
                  결석
                </DataTable.Title>
                <DataTable.Title
                  style={{
                    borderLeftWidth: 0.5,
                    borderRightWidth: 0.5,
                    justifyContent: "center",
                    borderColor: "#d5d5d5",
                  }}
                >
                  미퇴실
                </DataTable.Title>
                <DataTable.Title
                  style={{
                    borderLeftWidth: 0.5,
                    justifyContent: "center",
                    borderColor: "#d5d5d5",
                  }}
                >
                  총 시간
                </DataTable.Title>
              </DataTable.Header>

              {teacherAttendList.map((item, index) => {
                  return (
                    <DataTable.Row key={index}>
                      <DataTable.Cell
                        style={{
                          borderRightWidth: 0.5,
                          justifyContent: "center",
                          borderColor: "#d5d5d5",
                        }}
                      >
                        <input
                          type="checkbox"
                          id={String(item.a_idx)}
                          onClick={checkHandler}
                          checked={
                            checkedList.includes(String(item.a_idx))
                              ? true
                              : false
                          }
                        />
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{
                          borderLeftWidth: 0.5,
                          borderRightWidth: 0.5,
                          justifyContent: "center",
                          borderColor: "#d5d5d5",
                        }}
                      >
                        {index}
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{
                          borderLeftWidth: 0.5,
                          borderRightWidth: 0.5,
                          justifyContent: "center",
                          borderColor: "#d5d5d5",
                        }}
                      >
                        {item.a_today_date}
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{
                          borderLeftWidth: 0.5,
                          borderRightWidth: 0.5,
                          justifyContent: "center",
                          borderColor: "#d5d5d5",
                        }}
                      >
                        {String(item.a_attend_time).split(" ")[1]}
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{
                          borderLeftWidth: 0.5,
                          borderRightWidth: 0.5,
                          justifyContent: "center",
                          borderColor: "#d5d5d5",
                        }}
                      >
                        {String(item.a_exit_time).split(" ")[1]}
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{
                          borderLeftWidth: 0.5,
                          borderRightWidth: 0.5,
                          justifyContent: "center",
                          borderColor: "#d5d5d5",
                        }}
                      >
                        {[null, undefined, 0, "null"].includes(
                          item.a_late_status
                        )
                          ? ""
                          : item.a_late_status == 1
                          ? "O"
                          : "error"}
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{
                          borderLeftWidth: 0.5,
                          borderRightWidth: 0.5,
                          justifyContent: "center",
                          borderColor: "#d5d5d5",
                        }}
                      >
                        {[null, undefined, 0, "null"].includes(item.a_leave)
                          ? ""
                          : item.a_leave == 1
                          ? "O"
                          : "error"}
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{
                          borderLeftWidth: 0.5,
                          borderRightWidth: 0.5,
                          justifyContent: "center",
                          borderColor: "#d5d5d5",
                        }}
                      >
                        {[null, undefined, 0, "null"].includes(item.a_absent)
                          ? ""
                          : item.a_absent == 1
                          ? "O"
                          : "error"}
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{
                          borderLeftWidth: 0.5,
                          borderRightWidth: 0.5,
                          justifyContent: "center",
                          borderColor: "#d5d5d5",
                        }}
                      >
                        {[null, undefined, 0, "null"].includes(item.a_not_exit)
                          ? ""
                          : item.a_not_exit == 1
                          ? "O"
                          : "error"}
                      </DataTable.Cell>
                      <DataTable.Cell
                        style={{
                          borderLeftWidth: 0.5,
                          justifyContent: "center",
                          borderColor: "#d5d5d5",
                        }}
                      >
                        {item.a_result_time}
                      </DataTable.Cell>
                    </DataTable.Row>
                  );
                })}
            </DataTable>
            {/* <<<<<<<<<<<<<<<<<<  content 끝 >>>>>>>>>>>>>>>>>>>>*/}

            {/* <<<<<<<<<<<<<<<<<<  푸터 시작 >>>>>>>>>>>>>>>>>>>>*/}
            <View style={styles.btnContainer2}>
              {checkedList.length === 1 ? (
                <TouchableOpacity
                  style={[styles.btn, { margin: 5 }]}
                  onPress={() =>
                    showModalUpdate(rowIndexList.indexOf(checkedList[0]))
                  }
                >
                  <Text style={styles.btnText}>수정</Text>
                </TouchableOpacity>
              ) : (
                <></>
              )}
            </View>
            {/* <<<<<<<<<<<<<<<<<<  푸터 끝 >>>>>>>>>>>>>>>>>>>>*/}
          </View>
        )}
      </Provider>
    </View>
  );
};
const CustomDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  height: 22px;
  width: 120px;
  border-style: none;
  font-size: 15px;
  color: black;
  background-color: transparent;
  border-color: white;
  text-align: center;
`;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "20%",
    justifyContent: "center",
    width: "100%",
    flex: 1,
  },
  content: {
    marginTop: 5,
    textAlign: "center",
    marginLeft: 0,
    height: "55%",
  },
  header: {
    marginTop: "5%",
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
    paddingHorizontal: "2%",
  },
  text: {
    marginRight: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  pickerText: {
    fontSize: 15,
    width: "40%",
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
    height: 600,
    width: "35%",
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
    marginBottom: "5%",
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
    marginLeft: "0.5%",
  },
});
