import React, { useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View, Text, Picker, Image  } from 'react-native';
import { DataTable } from 'react-native-paper';
import Checkbox from 'expo-checkbox';

export const StudentListAndroid = ({ agName, classList }) => {

  // 버튼 이벤트
  const onPress = () => {
    Alert.alert(`${agName.ag_idx}`);
    Alert.alert(`${agName.ag_name}`);
  }

  // Picker
  const [selectedValue, setSelectedValue] = useState("");
  
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
      <View style={[styles.header, {backgroundColor: '#CEEDFF'}]}>
        <View>
          <View style={[styles.picker]}>
            <Text style={[styles.text, {marginLeft: 15}]}>기관</Text>
            <Text style={[styles.pickerText, {fontSize: 16}, {marginLeft: 8}]}>
              {agName.ag_name}
            </Text>
          </View>
        </View>
        <View style={styles.picker}>
            <Text style={[styles.text, {marginLeft: 15}]}>강의</Text>
            <Picker
              selectedValue={selectedValue}
              style={styles.pickerText}
              onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            >
              {classList.map(c => (
                <Picker.Item key={c.c_id} label={c.c_name} value={c.c_name}/>
              ))}
            </Picker> 
        </View>
        <View style={styles.btnContainer}>
            <Picker
            selectedValue={selectedValue}
            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
            style={styles.miniPicker}
            >
            <Picker.Item label="가입승인상태" value="all"/>
            <Picker.Item label="승인" value="accept" />
            <Picker.Item label="미승인" value="hold" />
            </Picker>
          <TouchableOpacity
            style={styles.btn}
            onPress={onSearch}
            >
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

            <DataTable.Row>
              <DataTable.Title>
                <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
              </DataTable.Title>
              <DataTable.Cell>김령은</DataTable.Cell>
              <DataTable.Cell>01023454710</DataTable.Cell>
              <DataTable.Cell numeric>승인(1)</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Row>
              <DataTable.Cell>
              <Checkbox
                style={styles.checkbox}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? '#4630EB' : undefined}
              />
              </DataTable.Cell>
              <DataTable.Cell>홍길동</DataTable.Cell>
              <DataTable.Cell>01000000000</DataTable.Cell>
              <DataTable.Cell numeric>미승인(0)</DataTable.Cell>
            </DataTable.Row>

            <DataTable.Pagination
              page={page}
              numberOfPages={3}
              onPageChange={(page) => setPage(page)}
              label="1-2 of 6"
              optionsPerPage={optionsPerPage}
              itemsPerPage={itemsPerPage}
              setItemsPerPage={setItemsPerPage}
              showFastPagination
              optionsLabel={'Rows per page'}
            />
          </DataTable>

        <View style={styles.btnContainer2}> 
            <TouchableOpacity
                style={[styles.btn, {margin: 5}]}
                onPress={onPress}
                >
                <Text style={styles.btnText}>등록</Text>
              </TouchableOpacity>
              <TouchableOpacity
              style={[styles.btn, {margin: 5}]}
              onPress={onPress}
              >
              <Text style={styles.btnText}>수정</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, {margin: 5}]}
              onPress={onPress}
              >
              <Text style={styles.btnText}>삭제</Text>
            </TouchableOpacity>
            </View>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
container: {
  width: '100%', 
  justifyContent: "center", 
  flex: 1,
},
content: {
  justifyContent: "center", 
  height: '60%',
  margin: 10,
},
header: {
  height: "20%",
  padding: "3%",
  margin: 10,
  borderRadius: 15,
},
picker: {
    height: 35,
    flexDirection: 'row',
    alignItems: 'center',
    margin: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: '#99c0d6',
},
text: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000000',
},
pickerText: {
    flex: 6,
    fontSize: 25,
    alignItems: 'center',
    color: '#000000',
},
btnContainer: {
    flex: 1,
    flexDirection: 'row',
    alignSelf: 'flex-end',
},
btnContainer2: {
  flexDirection: 'row', 
  margin: 5, 
  alignSelf: 'flex-end'
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
    fontWeight: 'bold',
    color: 'white',
    textAlignVertical: "center",
},
miniPicker: {
    width:'50%',
    height: 30,
    color: '#004cff',
    
},
checkbox: {
  alignSelf: "center",
  margin: 8,
  borderColor: '#999999',
},
tableContainer: {
  paddingTop: 100,
  paddingHorizontal: 30,
}
});