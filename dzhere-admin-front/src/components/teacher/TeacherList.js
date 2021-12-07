import React from 'react';
import { Platform } from 'react-native';
import { TeacherListAndroid } from './android/TeacherListAndroid'
import { TeacherListWeb } from './web/TeacherListWeb'

export const Contents = ({
  // 처음 렌더링될 때 가져오기
  agName,
  loadingAgName,
  classList,
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
  teacherList,
  loadingTeacherList,
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
  <TeacherListAndroid 
    // 처음 렌더링될 때 가져오기
    agName={agName}
    loadingAgName={loadingAgName}
    classList={classList}
    
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
    teacherList={teacherList}
    loadingTeacherList={loadingTeacherList}
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
  <TeacherListWeb 
    // 처음 렌더링될 때 가져오기
    agName={agName}
    loadingAgName={loadingAgName}
    classList={classList}
    
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
    teacherList={teacherList}
    loadingTeacherList={loadingTeacherList}
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
