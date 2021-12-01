import React from 'react';
import { StatusBar, View, StyleSheet, Text, Pressable } from 'react-native';
import { DataTable, Provider } from 'react-native-paper';
import CustomCheckbox from './CustomCheckbox';
import CustomPicker from './CustomPicker';

const optionsPerPage = [2, 3, 4];

const TeacherListWebComponent = ({
    agencyList,
    classList,
    teacherList,
    checkedList,
    rowIndexList,
    checkHandler,
    onChange,
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
            >
            </CustomPicker>
          </View>
          <View>
            <Text>강의명</Text>
            <CustomPicker
              name="classList"
              onChange={onChange}
              classList={classList}
            >
            </CustomPicker>
          </View>
        </View>
        <View>
          <DataTable>
            <DataTable.Header>
              <DataTable.Title>
                <input type="checkbox"
                  id={'-999'}
                  onClick={checkHandler}
                  checked={checkedList.length == rowIndexList.length && checkedList.length !== 0 && rowIndexList.length !== 0 ? true : false}
                />
              </DataTable.Title>
              <DataTable.Title>순번</DataTable.Title>
              <DataTable.Title>기관명</DataTable.Title>
              <DataTable.Title>강의명</DataTable.Title>
              <DataTable.Title>강사명</DataTable.Title>
              <DataTable.Title>전화번호</DataTable.Title>
              <DataTable.Title>가입상태</DataTable.Title>
            </DataTable.Header>
            {/* <DataTable.Row>
              <DataTable.Cell><CustomCheckbox /></DataTable.Cell>
              <DataTable.Cell >1</DataTable.Cell>
              <DataTable.Cell>엘핀테스트</DataTable.Cell>
              <DataTable.Cell>스마트팩토리-서울반</DataTable.Cell>
              <DataTable.Cell>홍길동</DataTable.Cell>
              <DataTable.Cell>01012345678</DataTable.Cell>
              <DataTable.Cell>가입완료</DataTable.Cell>
            </DataTable.Row> */}
            {teacherList.map((item, index) => {
              return (
                <DataTable.Row key={index}>
                  <DataTable.Cell>
                    <input 
                      type="checkbox"
                      id={String(index)}
                      onClick={checkHandler}
                      checked={checkedList.includes(String(index)) ? true : false}                      
                    />
                  </DataTable.Cell>
                  <DataTable.Cell >{index}</DataTable.Cell>
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
          <View>
            <Pressable onPress={() => {}}>
              <Text>등록</Text>
            </Pressable>
            <Pressable onPress={() => {}}>
              <Text>수정</Text>
            </Pressable>
            <Pressable onPress={() => {}}>
              <Text>삭제</Text>
            </Pressable>
          </View>
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
      alignContent: 'center',
      alignSelf: 'center',
      paddingHorizontal: 30,
    }
})