import React from 'react'
import { Button, Text, View } from 'react-native'
import { DataTable } from 'react-native-paper'
import { StyledSelect } from './ListStyledLayout'
import { styles } from './Styles'

const ListLayoutContentWeb = ({classTime,tableHead,days,onPressSearch,onMonthChange,attendCnt}) => {
    return (
        <View style={styles.contents}>            
            <View style={styles.contentContainer}>
                {(days)&&<StyledSelect items={days} onMonthChange={onMonthChange}/>}
                <Button title={'검색'} onPress={onPressSearch}/>
            </View>
            <View>
                <Text style={styles.text_android}>강의 시간: {(classTime[0].ct_start_time).slice(0,5)} ~ {(classTime[0].ct_end_time).slice(0,5)}</Text>
                <Text style={styles.text_android}>점심 시간: {(classTime[0].ct_break_start).slice(0,5)} ~ {(classTime[0].ct_break_end).slice(0,5)}</Text>
                <Text style={styles.text_android}>출석 인정 시간: {(classTime[0].ct_attend_starttime).slice(0,5)} ~ {(classTime[0].ct_attend_endtime).slice(0,5)}</Text>
                <Text style={styles.text_android}>퇴실 인정 시간: {(classTime[0].ct_end_time).slice(0,5)} ~ {'23:50'}</Text>
            </View>
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
                            <DataTable.Cell numeric>{attendCnt.a_total_cnt}일</DataTable.Cell>
                            <DataTable.Cell numeric>{attendCnt.a_real_date_cnt}일</DataTable.Cell>
                            <DataTable.Cell numeric>{attendCnt.a_absent_cnt}일</DataTable.Cell>
                            <DataTable.Cell numeric>{attendCnt.a_leave_cnt}일</DataTable.Cell>
                            <DataTable.Cell numeric>{attendCnt.a_late_status_cnt}일</DataTable.Cell>
                            <DataTable.Cell numeric>{attendCnt.a_not_exit_cnt}일</DataTable.Cell>
                            <DataTable.Cell numeric>{'100%(sample)'}일</DataTable.Cell>
                        </DataTable.Row>                        
                        </>                        
                    }
                </DataTable>
            </View>
            <View style={styles.noticeContainer}>
                <Text style={{fontSize:15}}>출석일 : 실시일수 - 결석일 - 미퇴실(지각, 조퇴에 따른 결석일 포함)</Text>
                <Text style={{fontSize:15}}>결석률 : 출석일 / 총 훈련일수</Text>
            </View>
        </View>
    )
}
export default ListLayoutContentWeb;