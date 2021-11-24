import React from "react";
import { StyleSheet, Picker, View, Text, Image, Button, ScrollView, Platform } from "react-native";
import { StyledSelect, StyledText } from "./ListStyledLayout";
import { DataTable } from 'react-native-paper';
import { styles } from "./Styles";

import {data, footer_tableHeader} from './ListTableTestData';
import ListLayoutContentAndroid from "./ListLayoutContentAndroid";
import ListLayoutContentWeb from "./ListLayoutContentWeb";

const days = [
    { value:'1', label:'1월'},
    { value:'2', label:'2월'},
    { value:'3', label:'3월'},
    { value:'4', label:'4월'},
    { value:'5', label:'5월'},
    { value:'6', label:'6월'},
    { value:'7', label:'7월'},
    { value:'8', label:'8월'},
    { value:'9', label:'9월'},
    { value:'10', label:'10월'},
    { value:'11', label:'11월'},
    { value:'12', label:'12월'},
]

export const Header = ({classList}) => {    
    return (
    <>
    <View style={styles.container}>
        <StyledText>지난 출석 현황</StyledText>        
        <Text>{(classList)&&classList.c_name}</Text>        
    </View>
    </>
    );
}

const optionsPerPage = [2, 3, 4];

export const Content = ({classTime, onPressSearch, onMonthChange, attendList}) => {
    let [tableHead, setTableHead] = React.useState(['총훈련일수', '출석일', '결석', '지각', '조퇴', '미퇴실', '출석률(일수)']);
    let [tableData, setTableData] = React.useState([
        '1', '2', '3', '4', '5', '6', '7'
    ]);

    return (Platform.OS === "android") ? 
        <ListLayoutContentAndroid 
                        classTime={classTime} 
                        tableHead={tableHead} 
                        tableData={tableData} 
                        days={days}
                        onPressSearch={onPressSearch}/>
    : 
        (classTime) ? <ListLayoutContentWeb
                        classTime={classTime} 
                        tableHead={tableHead} 
                        tableData={tableData} 
                        days={days}
                        onPressSearch={onPressSearch}
                        onMonthChange={onMonthChange}
                        attendList={attendList}/>

                    : <Text>empty</Text>

}

export const Footer = () => {    
    let tempData = [...data];    
    const [page, setPage] = React.useState(0);
    const [itemsPerPage, setItemsPerPage] = React.useState(optionsPerPage[0]);

    React.useEffect(() => {
        setPage(0);
    }, [itemsPerPage]);

    return (
        <View style={ styles.footer }>
            <View style={styles.tableContainer}>
                <ScrollView horizontal={true}>
                    <>
                        <DataTable>
                            <DataTable.Header>
                                {
                                    footer_tableHeader.map((v,i)=>(
                                        <DataTable.Title numeric>{v}</DataTable.Title>
                                    ))
                                }
                            </DataTable.Header>
                            <ScrollView>                                
                                {
                                    tempData.map((v,i)=>(
                                        <DataTable.Row>{v.map((v,i)=>(
                                            <DataTable.Cell numeric>{v}</DataTable.Cell>                                    
                                        ))}
                                        </DataTable.Row>
                                    ))
                                }                                
                            </ScrollView>
                            <DataTable.Pagination
                                page={page}
                                numberOfPages={7}
                                onPageChange={(page) => setPage(page)}
                                label="1-2 of 6"
                                optionsPerPage={optionsPerPage}
                                itemsPerPage={itemsPerPage}
                                setItemsPerPage={setItemsPerPage}
                                showFastPagination
                                optionsLabel={'Rows per page'}
                            />
                        </DataTable>                        
                    </>
                </ScrollView>
            </View>
        </View>
    );
}
