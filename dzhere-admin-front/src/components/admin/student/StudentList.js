import React from 'react';
import { Platform } from 'react-native';
import { StudentListAndroid } from './StudentListAndroid'
import { StudentListWeb } from './StudentListWeb'

export const Contents = ({agName, classList, selectedClass, setSelectedClass, 
                          onSearch, studentList, loadingAgName, loadingStudentList,
                          selectedAccept, setSelectedAccept, pickerActivity, filterList,
                          loadingFilterList, showModalAdd, showModalUpdate, onDelete,
                          uName, onChangeUname, uPhone, onChangeUphone, onAdd,
                          visibleAdd, hideModalAdd }) => {
  return (Platform.OS === "android") ? 
  <StudentListAndroid 
    agName={agName}
    classList={classList}
    selectedClass={selectedClass}
    setSelectedClass={setSelectedClass}
    onSearch={onSearch}
    studentList={studentList}
    loadingAgName={loadingAgName}
    loadingStudentList={loadingStudentList}
    selectedAccept={selectedAccept}
    setSelectedAccept={setSelectedAccept}
    pickerActivity={pickerActivity}
    filterList={filterList}
    loadingFilterList={loadingFilterList}
    showModalAdd={showModalAdd}
    visibleAdd={visibleAdd}
    hideModalAdd={hideModalAdd}
    uName={uName}
    onChangeUname={onChangeUname}
    uPhone={uPhone}
    onChangeUphone={onChangeUphone}
    onAdd={onAdd}
    showModalUpdate={showModalUpdate}
    onDelete={onDelete}
  /> 
  : 
  <StudentListWeb 
    agName={agName}
    classList={classList}
  />
};

//   return (Platform.OS === "android") ? 
//   <ListLayoutContentAndroid 
//                   classTime={classTime} 
//                   tableHead={tableHead} 
//                   tableData={tableData} 
//                   days={days}
//                   onPressSearch={onPressSearch}/>
// : 
//   (classTime) ? <ListLayoutContentWeb
//                   classTime={classTime} 
//                   tableHead={tableHead} 
//                   tableData={tableData} 
//                   days={days}
//                   onPressSearch={onPressSearch}
//                   onMonthChange={onMonthChange}
//                   attendList={attendList}/>

//               : <Text>empty</Text>
