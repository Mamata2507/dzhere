import React from "react";
import {StyleSheet, Picker, View, Text, Image, Button, ScrollView} from "react-native";
import { StyledSelect } from "./list_styled_layout";
import { Table, Row, Rows, Cols, Cell, TableWrapper } from 'react-native-table-component';

import {data, footer_tableHeader} from './list_TableTestData';

const classes = [
    { value: '1', label: 'Java Fullstack 과정' },
    { value: '2', label: 'C# 스마트 팩토리' },
    { value: '3', label: 'Javascript' },
];

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

export const Header = () => {
    return (
    <View style={styles.container}>
        <StyledSelect items={classes} />
    </View>
    );
}

export const Content = () => {
    let [tableHead, setTableHead] = React.useState(['Head', 'Head2', 'Head3', 'Head4', 'Head5', 'Head6', 'Head7']);
    let [tableData, setTableData] = React.useState([[
        '1', '2', '3', '4', '5', '6', '7'
    ]]);

    return (
        <View style={styles.contents}>
            <View style={styles.contentContainer}>
                <StyledSelect items={days} />
                <Button title={'검색'}/>
            </View>
            <Text style={{fontSize:20}}>강의 시간: 시작시간 ~ 종료시간</Text>
            <Text style={{fontSize:20}}>점심 시간: 시작시간 ~ 종료시간</Text>
            <Text style={{fontSize:20}}>출석 인정 시간: 시작시간 ~ 종료시간</Text>
            <Text style={{fontSize:20}}>퇴실 인정 시간: 시작시간 ~ 종료시간</Text>
            <View style={styles.tableContainer}>
                <Table borderStyle={{ borderWidth: 2, borderColor: '#c8e1ff' }}>
                    <Row data={tableHead} style={styles.head} textStyle={styles.text}/>
                    <Rows data={tableData} style={{height:70}} textStyle={styles.text}/>
                </Table>
            </View>
            <View style={styles.noticeContainer}>
                <Text style={{fontSize:15}}>출석일 : 실시일수 - 결석일 - 미퇴실(지각, 조퇴에 따른 결석일 포함)</Text>
                <Text style={{fontSize:15}}>결석률 : 출석일 / 총 훈련일수</Text>
            </View>
        </View>
    );
}

export const Footer = () => {
    let widthArr = [40, 60, 80, 100, 120];
    let tempData = [...data];
    let itemToRender = 10;
    // console.log(tempData);
    return (
        <View style={ styles.footer }>
            <View style={styles.tableContainer}>
                <ScrollView horizontal={true}>
                    <View>
                        <Table borderStyle={{ bottom:2, borderWidth: 2, borderColor: '#c8e1ff' }}>
                            <Row data={footer_tableHeader} style={styles.head} widthArr={widthArr} textStyle={styles.text}/>                            
                        </Table>
                        <ScrollView style={{marginTop: -1 }}>
                            <Table borderStyle={{ bottom:2, borderWidth: 2, borderColor: '#c8e1ff' }}>
                                <Rows data={tempData} widthArr={widthArr}/>
                            </Table>
                        </ScrollView>
                    </View>
                </ScrollView>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 10,
        marginBottom:10,
        backgroundColor: '#CEEDFF',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50
    },
    tableContainer: {
        paddingTop:30,
        width:'100%',
    },
    contentContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#CEEDFF',
    },
    noticeContainer:{
        marginTop: 5,
        marginBottom: 5,
        backgroundColor: '#CEEDFF',
        width: '100%',
    },
    headerImage: {
        width: 100,
        height: 100
    },
    contents: {
        flex: 5,
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 5,
        top: 5,
        backgroundColor: '#CEEDFF',
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: {
        fontSize: 26
    },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
});