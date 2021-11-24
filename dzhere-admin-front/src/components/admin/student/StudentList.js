import React from 'react';
import { Platform } from 'react-native';
import { StudentListAndroid } from './StudentListAndroid'
import { StudentListWeb } from './StudentListWeb'

export const Contents = ( {test} ) => {
  return (Platform.OS === "android") ? 
  <StudentListAndroid test={test}/> : <StudentListWeb test={test}/>
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
