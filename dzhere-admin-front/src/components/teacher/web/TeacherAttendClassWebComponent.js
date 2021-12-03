import React from 'react';
import { Text, View, StyleSheet, Dimensions } from 'react-native';
import CustomPicker from '../CustomPicker'
import DatePicker from "react-datepicker";
import { ko } from "date-fns/esm/locale";
import { DataTable, Provider, Portal } from "react-native-paper";
import styled from 'styled-components';

const optionsPerPage = [2, 3, 4];

const TeacherAttendClassWebComponent = ({
  agIdxTmp,
  cIdxTmp,
  agencyList,
  classList,
  teacherList,
  checkedList,
  rowIndexList,
  checkHandler,
  onChange,
  handleAddModalShow,
  handleAddModalClose,
  handleEditModalShow,
  handleEditModalClose,
  addModalShow,
  editModalShow,
  addModalButtonControl,
  editModalButtonControl,
  removeModalButtonControl,
  removeBtnHandler,
  editBtnHandler,
  addBtnHandler,
  editTextInputName,
  editTextInputPhone,
  editTextInputEmail,
  insertTextInputName,
  insertTextInputPhone,
  insertTextInputEmail,
  startDate,
  endDate,
  onChangeStartDate,
  onChangeEndDate,
  teacherIdxName,
  teacherAttendList,
}) => {

    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);
    console.log('컴포넌트에서 teacherIdxName', teacherIdxName);
    return (
      <Provider>
        <View style={styles.container}>
          <Portal>
            {/* <View>
            <Text>강의별 출결 현황(강사)</Text>
          </View> */}
            <View style={[styles.header, { backgroundColor: "#CEEDFF" }]}>
              <View style={[styles.picker]}>
                <Text style={[styles.text, { marginLeft: '3%' }]}>기관</Text>
                <CustomPicker
                  name="agencyList"
                  onChange={onChange}
                  agencyList={agencyList}
                  style={[styles.pickerText, { marginLeft: 25 }]}
                />
                <Text style={[styles.text, { marginLeft: '6%' }]}>강의명</Text>
                <CustomPicker
                  name="classList"
                  onChange={onChange}
                  classList={classList}
                  style={[styles.pickerText, { marginLeft: '2.5%' }]}
                />
              </View>

              <View style={[styles.picker]}>
                <Text style={[styles.text, { marginLeft: '3%' }]}>강사</Text>
                <Text style={{ marginLeft: 25 }}>{teacherIdxName[1]}</Text>
                <Text style={{ display: "none" }}>{teacherIdxName[0]}</Text>
              </View>

              <View style={[styles.picker]}>
                <View style={{ marginLeft: '27%' , borderWidth:2, borderColor: "#a9cee2", borderRadius: 15}}>
                  <CustomDatePicker
                    locale={ko}
                    dateFormat="yyyy-MM-dd"
                    placeholderText="조회 시작일"
                    showPopperArrow={false}
                    selected={startDate}
                    onChange={onChangeStartDate}
                    minDate={new Date()}
                    showMonthDropdown={true}
                    disabledKeyboardNavigation
                    withPortal
                    portalId="start-date"
                  />
                </View>
              
                <Text style={{marginHorizontal: '5%', fontSize: 30, fontWeight: 'bold', color: '#8b9296',}}> ~ </Text>
              
                <View>
                  <View style={{ borderWidth:2, borderColor: "#a9cee2", borderRadius: 15}}>
                    <CustomDatePicker
                      locale={ko}
                      dateFormat="yyyy-MM-dd"
                      placeholderText="조회 종료일"
                      showPopperArrow={false}
                      selected={endDate}
                      onChange={onChangeEndDate}
                      endDate={endDate}
                      minDate={startDate}
                      showMonthDropdown={true}
                      disabledKeyboardNavigation
                      withPortal
                      portalId="end-date"
                    />
                  </View>
                  
                </View>
                
              </View>
            </View>

            <View>
              <DataTable
                style={{
                  width: Dimensions.get("window").width - 200,
                }}
              >
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
                  {/* <DataTable.Title>강의명</DataTable.Title>
              <DataTable.Title>강사명</DataTable.Title> */}
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

                {/* <DataTable.Row>
              <DataTable.Cell>
                <input type="checkbox" />
              </DataTable.Cell> */}
                {/* <DataTable.Cell>1</DataTable.Cell>
                <DataTable.Cell>2019-07-10</DataTable.Cell>
                <DataTable.Cell>열린 강의-1</DataTable.Cell>
                <DataTable.Cell>구본욱</DataTable.Cell>
                <DataTable.Cell>오후 03:12</DataTable.Cell>
                <DataTable.Cell>오후 03:15</DataTable.Cell>
                <DataTable.Cell>O</DataTable.Cell>
                <DataTable.Cell>X</DataTable.Cell>
                <DataTable.Cell>-</DataTable.Cell>
                <DataTable.Cell>-</DataTable.Cell>
                <DataTable.Cell>총 0시간 0분</DataTable.Cell> */}
                {teacherAttendList.map((item, index) => {
                  let attend_time = new Date(item.a_attend_time);
                  let exit_time = new Date(item.a_exit_time);
                  let result_hour =
                    new Date(exit_time - attend_time).getHours() < 10
                      ? "0" +
                        String(new Date(exit_time - attend_time).getHours())
                      : String(new Date(exit_time - attend_time).getHours());
                  let result_minute =
                    new Date(exit_time - attend_time).getMinutes() < 10
                      ? "0" +
                        String(new Date(exit_time - attend_time).getMinutes())
                      : String(new Date(exit_time - attend_time).getMinutes());
                  let result_time =
                    "총 " + result_hour + "시간 " + result_minute + "분";
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
                      {/* <DataTable.Cell>{item.c_name}</DataTable.Cell>
                    <DataTable.Cell>{item.u_name}</DataTable.Cell> */}
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
                        {item.a_attend_time !== null &&
                        item.a_exit_time !== null &&
                        item.a_absent !== 1 &&
                        item.a_not_exit !== 1
                          ? result_time
                          : "-"}
                      </DataTable.Cell>
                    </DataTable.Row>
                  );
                })}
                {/* </DataTable.Row> */}

                <DataTable.Pagination
                  page={page}
                  numberOfPages={3}
                  onPageChange={(page) => setPage(page)}
                  label="1-2 of 6"
                  optionsPerPage={optionsPerPage}
                  itemsPerPage={itemsPerPage}
                  setItemsPerPage={setItemsPerPage}
                  showFastPagination
                  optionsLabel={"Rows per page"}
                />
              </DataTable>
            </View>
          </Portal>
        </View>
      </Provider>
    );
};

export default TeacherAttendClassWebComponent;

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
    flex: 1,
  },
  content: {
    marginTop: 5,
    textAlign: "center",
    marginLeft: 0,
    height: "55%",
  },
  header: {
    padding: "3%",
    marginTop: "5%",
    marginHorizontal: '20%',
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
    margin: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  pickerText: {
    fontSize: 15,
    width: "35%",
    alignItems: "center",
    textAlign: 'center',
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
    marginRight: "5%",
    margin: 5,
    width: 18,
    height: 18,
    borderColor: "#004cff",
  },
  modal: {
    backgroundColor: "#CEEDFF",
    padding: "5%",
    margin: "10%",
    height: "70%",
    width: "60%",
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
  calendar: {
    borderRadius: 20,
  },
});