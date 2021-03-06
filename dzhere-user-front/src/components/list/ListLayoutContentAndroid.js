import React from 'react'
import { Button, Text, View } from 'react-native'
import { DataTable } from 'react-native-paper'
import { StyledSelect } from './ListStyledLayout'
import { styles } from './Styles'
import { TouchableOpacity } from 'react-native-gesture-handler'
const ListLayoutContentWeb = ({classTime,tableHead,days,onPressSearch,onMonthChange,attendCnt}) => {
    return (
        <View style={styles.contents}>            
            <View style={styles.contentContainer}>
                {(days)&&<StyledSelect items={days} onMonthChange={onMonthChange}/>}
                <TouchableOpacity style={{backgroundColor: '#FFCC71', borderRadius: 15, padding: 10, width: 50, alignItems: "center" }} onPress={onPressSearch}><Text>검색</Text></TouchableOpacity>
            </View>
            {/* <View>
                <Text style={styles.text_android}>강의 시간: {(classTime[0].ct_start_time).slice(0,5)} ~ {(classTime[0].ct_end_time).slice(0,5)}</Text>
                <Text style={styles.text_android}>점심 시간: {(classTime[0].ct_break_start).slice(0,5)} ~ {(classTime[0].ct_break_end).slice(0,5)}</Text>
                <Text style={styles.text_android}>출석 인정 시간: {(classTime[0].ct_attend_starttime).slice(0,5)} ~ {(classTime[0].ct_attend_endtime).slice(0,5)}</Text>
                <Text style={styles.text_android}>퇴실 인정 시간: {(classTime[0].ct_end_time).slice(0,5)} ~ {'23:50'}</Text>
            </View> */}
            <View style={styles.tableContainer}>
                <DataTable>
                    <DataTable.Header>
                    {
                        tableHead.map((v,i)=>(
                            <DataTable.Title numeric>{v}</DataTable.Title>
                        ))
                    }                        
                    </DataTable.Header>
                    {
                        (attendCnt)&&
                        <>
                        <DataTable.Row>
                            <DataTable.Cell numeric>{attendCnt.a_real_date_cnt}일</DataTable.Cell>
                            <DataTable.Cell numeric>{attendCnt.a_real_date_cnt-attendCnt.a_absent_cnt-attendCnt.a_leave_cnt-attendCnt.a_not_exit_cnt}일</DataTable.Cell>
                            <DataTable.Cell numeric>{attendCnt.a_absent_cnt}일</DataTable.Cell>
                            <DataTable.Cell numeric>{attendCnt.a_late_status_cnt}일</DataTable.Cell>
                            <DataTable.Cell numeric>{attendCnt.a_leave_cnt}일</DataTable.Cell>
                            <DataTable.Cell numeric>{attendCnt.a_not_exit_cnt}일</DataTable.Cell>                            
                            <DataTable.Cell numeric>{(((attendCnt.a_real_date_cnt-attendCnt.a_absent_cnt-attendCnt.a_not_exit_cnt-attendCnt.a_leave_cnt)/(attendCnt.a_real_date_cnt))*100).toFixed(1)}%</DataTable.Cell>
                        </DataTable.Row>                       
                        </>                        
                    }
                </DataTable>
            </View>
            <View style={styles.noticeContainer}>
                {/* <Text style={{fontSize:15}}>※ 출석일은 <Text style={{fontWeight: "bold"}}>총 교육일수-결석일-미퇴실(지각, 조퇴에 따른 결석일 포함)</Text> 입니다.</Text> */}
                <Text style={{fontSize:15}}>※ 출석률은 <Text style={{fontWeight: "bold"}}>출석일/총 교육일수</Text> 입니다.</Text>
            </View>
        </View>
    )
}
export default ListLayoutContentWeb;