import React from 'react';
import { Platform } from 'react-native';
import { StudentListAndroid } from './StudentListAndroid'
import { StudentListWeb } from './StudentListWeb'

export const Contents = ({agName, classList, selectedClass, setSelectedClass, 
                          onSearch, studentList, loadingAgName, loadingStudentList,
                          selectedAccept, setSelectedAccept, pickerActivity}) => {
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
