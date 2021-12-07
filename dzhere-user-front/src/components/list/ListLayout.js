import React from "react";
import { StyleSheet, Picker, View, Text, Image, Button, ScrollView, Platform } from "react-native";
import { StyledSelect, StyledText } from "./ListStyledLayout";
import { DataTable } from 'react-native-paper';
import { styles } from "./Styles";

import {data, footer_tableHeader} from './ListTableTestData';
import ListLayoutContentAndroid from "./ListLayoutContentAndroid";
import ListLayoutContentWeb from "./ListLayoutContentWeb";
import { StatusBar } from "expo-status-bar";

const days = [
    { id:0, value:'0', label:'전체'},
    { id:1, value:'1', label:'1월'},
    { id:2, value:'2', label:'2월'},
    { id:3, value:'3', label:'3월'},
    { id:4, value:'4', label:'4월'},
    { id:5, value:'5', label:'5월'},
    { id:6, value:'6', label:'6월'},
    { id:7, value:'7', label:'7월'},
    { id:8, value:'8', label:'8월'},
    { id:9, value:'9', label:'9월'},
    { id:10, value:'10', label:'10월'},
    { id:11, value:'11', label:'11월'},
    { id:12, value:'12', label:'12월'},
]

export const Header = ({classList}) => {    
    return (
    <View style={{alignSelf:'center',width:'100%', marginTop: Platform.OS === 'android' ? "15%" : 0 }}>
        <StyledText>지난 출결 현황</StyledText>
        <View style={styles.container}>
            <Text style={{color: "black"}}>{(classList)&&classList.c_name}</Text>        
        </View>
    </View>
    );
}

const optionsPerPage = [2, 3, 4];

export const Content = ({classTime, onPressSearch, onMonthChange, attendCnt}) => {
    let [tableHead, setTableHead] = React.useState(['총훈련일수', '출석일', '결석', '지각', '조퇴', '미퇴실', '출석률']);

    return (Platform.OS === "android") ? 
        <ListLayoutContentAndroid 
                        classTime={classTime} 
                        tableHead={tableHead} 
                        days={days}
                        onPressSearch={onPressSearch}
                        onMonthChange={onMonthChange}
                        attendCnt={attendCnt}/>
    : 
        (classTime) ? <ListLayoutContentWeb
                        classTime={classTime} 
                        tableHead={tableHead} 
                        days={days}
                        onPressSearch={onPressSearch}
                        onMonthChange={onMonthChange}
                        attendCnt={attendCnt}/>

                    : <Text>empty</Text>

}

export const Footer = ({attendList}) => {    
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <View style={ styles.footer }>
            <ScrollView>
            <View style={{width:'100%'}}>                           
                <DataTable>
                    <DataTable.Header>
                        {
                            footer_tableHeader.map((v,i)=>(
                                <DataTable.Title numeric>{v}</DataTable.Title>
                            ))
                        }
                    </DataTable.Header>            
                        {(attendList)&&
                            attendList.map((v,i)=>(
                                <DataTable.Row>
                                    <DataTable.Cell numeric>{(v.a_today_date).slice(2,10)}</DataTable.Cell>
                                    <DataTable.Cell numeric>{v.a_attend_time}</DataTable.Cell>
                                    <DataTable.Cell numeric>{v.a_exit_time}</DataTable.Cell>
                                    <DataTable.Cell numeric>{v.a_result_time}</DataTable.Cell>
                                    <DataTable.Cell numeric><Text style={(v.a_attend_state==="결석")&&{color:'red'}}>{v.a_attend_state}</Text></DataTable.Cell>
                                </DataTable.Row>
                            ))
                        }                                
                    {/* <DataTable.Pagination
                        page={page}
                        numberOfPages={7}
                        onPageChange={(page) => setPage(page)}
                        label="1-2 of 6"
                        optionsPerPage={optionsPerPage}
                        itemsPerPage={itemsPerPage}
                        setItemsPerPage={setItemsPerPage}
                        showFastPagination
                        optionsLabel={'Rows per page'}
                    /> */}
                </DataTable>                                        
            </View>
            </ScrollView>
        </View>
    );
}
