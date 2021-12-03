import React from "react";
import { StatusBar, View, StyleSheet, Text, Pressable } from "react-native";
import { DataTable, Provider, TextInput } from "react-native-paper";
import CustomPicker from "../CustomPicker";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CustomTextInput from "../CustomTextInput";

const optionsPerPage = [2, 3, 4];

const TeacherListWebComponent = ({
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
}) => {
  const [page, setPage] = React.useState(0);
  const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

  React.useEffect(() => {
    setPage(0);
  }, [itemsPerPage]);
  return (
    <View style={styles.container}>
      <View>
        <Text>강사 정보 관리</Text>
      </View>
      <View>
        <View>
          <Text>기관명</Text>
          <CustomPicker
            name="agencyList"
            onChange={onChange}
            agencyList={agencyList}
          ></CustomPicker>
        </View>
        <View>
          <Text>강의명</Text>
          <CustomPicker
            name="classList"
            onChange={onChange}
            classList={classList}
          ></CustomPicker>
        </View>
      </View>
      <View>
        <DataTable>
          <DataTable.Header>
            <DataTable.Title>
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
            <DataTable.Title>순번</DataTable.Title>
            <DataTable.Title>기관명</DataTable.Title>
            <DataTable.Title>강의명</DataTable.Title>
            <DataTable.Title>강사명</DataTable.Title>
            <DataTable.Title>전화번호</DataTable.Title>
            <DataTable.Title>가입상태</DataTable.Title>
          </DataTable.Header>
          {teacherList.map((item, index) => {
            return (
              <DataTable.Row key={index}>
                <DataTable.Cell>
                  <input
                    type="checkbox"
                    id={String(item.u_idx)}
                    onClick={checkHandler}
                    checked={
                      checkedList.includes(String(item.u_idx)) ? true : false
                    }
                  />
                </DataTable.Cell>
                <DataTable.Cell>{index}</DataTable.Cell>
                <DataTable.Cell>{item.ag_name}</DataTable.Cell>
                <DataTable.Cell>{item.c_name}</DataTable.Cell>
                <DataTable.Cell>{item.u_name}</DataTable.Cell>
                <DataTable.Cell>{item.u_phone}</DataTable.Cell>
                <DataTable.Cell>
                  {item.u_accept === 0 ? "미가입" : "가입 완료"}
                </DataTable.Cell>
              </DataTable.Row>
            );
          })}
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
      <View>
        <Button
          variant="primary"
          onClick={handleAddModalShow}
          disabled={rowIndexList.length > 0 ? false : true}
        >
          등록
        </Button>

        <Modal show={addModalShow} onHide={handleAddModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>강사 정보 등록</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <View>
              <Text>강사명</Text>
              <CustomTextInput
                name="insertTextInputName"
                value={insertTextInputName}
                onChange={onChange}
              />
              <Text>전화번호</Text>
              <CustomTextInput
                name="insertTextInputPhone"
                value={insertTextInputPhone}
                onChange={onChange}
              />
              <Text>이메일</Text>
              <CustomTextInput
                name="insertTextInputEmail"
                value={insertTextInputEmail}
                onChange={onChange}
              />
            </View>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                handleAddModalClose();
              }}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                console.log(
                  "강사 등록 버튼 이벤트 : ",
                  insertTextInputName,
                  ", ",
                  insertTextInputPhone,
                  ", ",
                  insertTextInputEmail,
                  cIdxTmp,
                  agIdxTmp
                );
                addBtnHandler(
                  insertTextInputName,
                  insertTextInputPhone,
                  insertTextInputEmail,
                  cIdxTmp,
                  agIdxTmp
                );
                handleAddModalClose();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Button
          variant="primary"
          onClick={handleEditModalShow}
          disabled={checkedList.length == 1 ? false : true}
        >
          수정
        </Button>

        <Modal show={editModalShow} onHide={handleEditModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>강사 정보 수정</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <View>
              <Text>강사명</Text>
              <CustomTextInput
                name="editTextInputName"
                value={editTextInputName}
                onChange={onChange}
              />
              <Text>전화번호</Text>
              <CustomTextInput
                name="editTextInputPhone"
                value={editTextInputPhone}
                onChange={onChange}
              />
              <Text>이메일</Text>
              <CustomTextInput
                name="editTextInputEmail"
                value={editTextInputEmail}
                onChange={onChange}
              />
            </View>
          </Modal.Body>
          <Modal.Footer>
            <Button
              variant="secondary"
              onClick={() => {
                handleEditModalClose();
              }}
            >
              Close
            </Button>
            <Button
              variant="primary"
              onClick={() => {
                console.log(
                  "강사 수정 버튼 이벤트 : ",
                  checkedList[0],
                  ", ",
                  editTextInputName,
                  ", ",
                  editTextInputPhone,
                  ", ",
                  editTextInputEmail
                );
                editBtnHandler(
                  checkedList[0],
                  editTextInputName,
                  editTextInputPhone,
                  editTextInputEmail,
                  cIdxTmp,
                  agIdxTmp
                );
                handleEditModalClose();
              }}
            >
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>

        <Button
          variant="primary"
          onClick={() => {
            console.log("삭제");
            removeBtnHandler(checkedList, cIdxTmp, agIdxTmp);
          }}
          disabled={checkedList.length >= 1 ? false : true}
        >
          삭제
        </Button>
      </View>
    </View>
  );
};

export default TeacherListWebComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    alignContent: "center",
    alignSelf: "center",
    paddingHorizontal: 30,
  },
});
