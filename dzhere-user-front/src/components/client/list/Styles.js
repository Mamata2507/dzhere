import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
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
    test2:{
        fontSize: 40
    },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
});