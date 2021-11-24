import React from 'react';
import { Button, Text, View } from 'react-native';
import { DataTable } from 'react-native-paper';
import { StyledSelect } from './ListStyledLayout';
import { styles } from './Styles';

export default function ListLayoutContentAndroid({classTime,tableHead,tableData,days}) {
    
    return (
        <>
        <View style={styles.contents}>
            <View style={styles.contentContainer}>
                {(days)&&<StyledSelect items={days} />}
                <Button title={'검색'}/>
            </View>
            {
            classTime[0]?
            <>
            <Text style={styles.test2}>강의 시간: {classTime[0].ct_start_time} ~ {classTime[0].ct_end_time}</Text>
            <Text style={styles.test2}>점심 시간: {classTime[0].ct_break_start} ~ {classTime[0].ct_break_end}</Text>
            <Text style={styles.test2}>출석 인정 시간: {classTime[0].ct_attend_starttime} ~ {classTime[0].ct_attend_endtime}</Text>
            <Text style={styles.test2}>퇴실 인정 시간: {classTime[0].ct_end_time} ~ {'23:50:00'}</Text>
            </>
            :
            <Text>loading...</Text>
            }
            <View style={styles.tableContainer}>
                <DataTable>
                    <DataTable.Header>
                    {
                        tableHead.map((v,i)=>(
                            <DataTable.Title numeric>{v}</DataTable.Title>
                        ))
                    }                        
                    </DataTable.Header>
                    <DataTable.Row>
                        {
                            tableData.map((v,i)=>(
                                <DataTable.Cell numeric>{v}</DataTable.Cell>
                            ))
                        }
                    </DataTable.Row>
                </DataTable>
            </View>
            <View style={styles.noticeContainer}>
                <Text style={{fontSize:15}}>출석일 : 실시일수 - 결석일 - 미퇴실(지각, 조퇴에 따른 결석일 포함)</Text>
                <Text style={{fontSize:15}}>결석률 : 출석일 / 총 훈련일수</Text>
            </View>
        </View>
        </>
    )
}
