import React, { useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, View, Text, Picker, ScrollView } from 'react-native';
import { DataTable, TextInput } from 'react-native-paper';
import Checkbox from 'expo-checkbox';
import { onChange } from 'react-native-reanimated';
import CustomTextInput from './CustomTextInput';

export const StudentListAndroid = ({ agName, classList, selectedClass, setSelectedClass, onSearch, studentList }) => {

  // 버튼 이벤트
  const onPress = () => {
    Alert.alert(`${agName.ag_idx}`);
    Alert.alert(`${agName.ag_name}`);
  }

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
          {/* <CustomTextInput
            name="ag_idx"
            onChangeNumber={onChangeNumber}
            value={String(agName.ag_idx)}
            keyboardType="numeric"
          />
          <TouchableOpacity
            onPress={onSearch}
            >
            <Text>변경</Text>
          </TouchableOpacity> */}
          
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
              selectedValue={selectedClass}
              onValueChange={(itemValue, itemIndex) => setSelectedClass(itemValue)}
              style={styles.pickerText}
            >
               <Picker.Item label="선택하세요" value="0"/>
                {classList.map(c => (
                <Picker.Item label={c.c_name} value={c.c_idx}/>
                ))}
                <Picker.Item label='테스트' value='2'/>
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

      <ScrollView>
        <View style={styles.content}>
          <DataTable>
            <ScrollView>
            <DataTable.Header>
              <DataTable.Title>선택</DataTable.Title>
              <DataTable.Title>성명</DataTable.Title>
              <DataTable.Title>전화번호</DataTable.Title>
              <DataTable.Title numeric>가입상태</DataTable.Title>
            </DataTable.Header>
            </ScrollView>
            <ScrollView>
          
            {
             studentList.map(s => (              
            <DataTable.Row>
              <DataTable.Title>
                <Checkbox
                  style={styles.checkbox}
                  value={s.u_idx}
                  onValueChange={setChecked}
                  color={isChecked ? '#4630EB' : undefined}
                />
              </DataTable.Title>
              <DataTable.Cell>{s.u_name}</DataTable.Cell>
              <DataTable.Cell>{s.u_phone}</DataTable.Cell>
              <DataTable.Cell numeric>{s.u_accept}</DataTable.Cell>
            </DataTable.Row>
             ))
            }
            </ScrollView>
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
          </ScrollView>
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
  marginTop: 60,
  justifyContent: "center", 
  height: '50%',
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