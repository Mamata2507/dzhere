import React from 'react';
import { Platform } from 'react-native';
import { StudentListAndroid } from './android/StudentListAndroid'
import { StudentListWeb } from './web/StudentListWeb'

export const Contents = ({
  // 처음 렌더링될 때 가져오기
  agName,
  // loadingAgName,
  clist,
  // picker
  pickerStatus={pickerStatus}, // true, false
  selectedClass={selectedClass},
  setSelectedClass={setSelectedClass},
  selectedClassAdd={selectedClassAdd},
  setSelectedClassAdd={setSelectedClassAdd},
  selectedClassUpdate={selectedClassUpdate},
  setSelectedClassUpdate={setSelectedClassUpdate},
  selectedAccept={selectedAccept}, // 승인여부
  handleSetAccept={handleSetAccept}, // 승인여부 이벤트
  // onPress event
  onSearch,
  onDelete,
  onAdd,
  onCheck,
  onUpdate,
  // List
  studentList,
  loadingStudentList,
  filterList,
  // Modal
  visibleAdd,
  hideModalAdd,
  showModalAdd, // onPress
  visibleUpdate,
  hideModalUpdate,
  showModalUpdate,
  phoneCheck,
  error,
  // useState
  uName,
  onChangeUname,
  uPhone,
  onChangeUphone,
}) => {

  return (Platform.OS === "android") ? 
  <StudentListAndroid 
    // 처음 렌더링될 때 가져오기
    agName={agName}
    // loadingAgName={loadingAgName}
    clist={clist}
    
    // picker
    pickerStatus={pickerStatus} // true, false
    selectedClass={selectedClass}
    setSelectedClass={setSelectedClass}
    selectedClassAdd={selectedClassAdd}
    setSelectedClassAdd={setSelectedClassAdd}
    selectedClassUpdate={selectedClassUpdate}
    setSelectedClassUpdate={setSelectedClassUpdate}
    selectedAccept={selectedAccept} // 승인여부
    handleSetAccept={handleSetAccept} // 승인여부 이벤트

    // onPress event
    onSearch={onSearch}
    onDelete={onDelete}
    onAdd={onAdd}
    onCheck={onCheck}
    onUpdate={onUpdate}
  
    // List
    studentList={studentList}
    loadingStudentList={loadingStudentList}
    filterList={filterList}

    // Modal
    visibleAdd={visibleAdd}
    hideModalAdd={hideModalAdd}
    showModalAdd={showModalAdd} // onPress
    visibleUpdate={visibleUpdate}
    hideModalUpdate={hideModalUpdate}
    showModalUpdate={showModalUpdate}
    phoneCheck={phoneCheck}
    error={error}
    
    // useState
    uName={uName}
    onChangeUname={onChangeUname}
    uPhone={uPhone}
    onChangeUphone={onChangeUphone}
    
  /> 
  : 
  <StudentListWeb 
    // 처음 렌더링될 때 가져오기
    agName={agName}
    // loadingAgName={loadingAgName}
    clist={clist}
    
    // picker
    selectedClass={selectedClass}
    setSelectedClass={setSelectedClass}
    selectedClassAdd={selectedClassAdd}
    setSelectedClassAdd={setSelectedClassAdd}
    selectedClassUpdate={selectedClassUpdate}
    setSelectedClassUpdate={setSelectedClassUpdate}
    selectedAccept={selectedAccept} // 승인여부
    handleSetAccept={handleSetAccept} // 승인여부 이벤트

    // onPress event
    onSearch={onSearch}
    onDelete={onDelete}
    onAdd={onAdd}
    onCheck={onCheck}
    onUpdate={onUpdate}
  
    // List
    studentList={studentList}
    loadingStudentList={loadingStudentList}
    filterList={filterList}

    // Modal
    visibleAdd={visibleAdd}
    hideModalAdd={hideModalAdd}
    showModalAdd={showModalAdd} // onPress
    visibleUpdate={visibleUpdate}
    hideModalUpdate={hideModalUpdate}
    showModalUpdate={showModalUpdate}
    phoneCheck={phoneCheck}
    error={error}
    
    // useState
    uName={uName}
    onChangeUname={onChangeUname}
    uPhone={uPhone}
    onChangeUphone={onChangeUphone}
  />
};
