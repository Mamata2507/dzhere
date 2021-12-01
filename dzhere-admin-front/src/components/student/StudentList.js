import React from 'react';
import { Platform } from 'react-native';
import { StudentListAndroid } from './StudentListAndroid'
import { StudentListWeb } from './StudentListWeb'

export const Contents = ({agName, classList, selectedClass, setSelectedClass, 
                          onSearch, studentList, loadingAgName, loadingStudentList,
                          selectedAccept, setSelectedAccept, pickerActivity, filterList,
                          loadingFilterList, 
                          showModalAdd, 
                          visibleAdd, 
                          hideModalAdd, 
                          showModalUpdate, 
                          visibleUpdate, 
                          hideModalUpdate, 
                          onDelete,
                          uName, onChangeUname, uPhone, onChangeUphone, onAdd,
                          selectedClassAdd, 
                          setSelectedClassAdd,
                          selectedClassUpdate, 
                          setSelectedClassUpdate,
                          onCheck, check, error, loadingCheck,
                          studentInfo, loadingStudentInfo, onUpdate }) => {
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
    hideModalAdd={hideModalAdd}
    visibleAdd={visibleAdd}
    showModalUpdate={showModalUpdate}
    visibleUpdate={visibleUpdate}
    hideModalUpdate={hideModalUpdate}
    uName={uName}
    onChangeUname={onChangeUname}
    uPhone={uPhone}
    onChangeUphone={onChangeUphone}
    onAdd={onAdd}
    onDelete={onDelete}
    selectedClassAdd={selectedClassAdd}
    setSelectedClassAdd={setSelectedClassAdd}
    selectedClassUpdate={selectedClassUpdate}
    setSelectedClassUpdate={setSelectedClassUpdate}
    onCheck={onCheck}
    check={check}
    error={error}
    loadingCheck={loadingCheck}
    studentInfo={studentInfo}
    loadingStudentInfo={loadingStudentInfo}
    onUpdate={onUpdate}
  /> 
  : 
  <StudentListWeb 
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
