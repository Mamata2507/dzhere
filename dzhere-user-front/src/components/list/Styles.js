import { Platform, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginBottom:10,
        backgroundColor: '#CEEDFF',
        width: '70%',
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        height: 30,
        borderRadius: 20,
    },
    tableContainer: {
        paddingTop:20,
        width:'100%',
    },
    contentContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    noticeContainer:{
        marginTop: 5,
        marginBottom: 10,
        // backgroundColor: '#CEEDFF',
        width: '100%',
    },
    headerImage: {
        width: 100,
        height: 100
    },
    contents: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    footer: {
        flex: 5,
        top: 10,
        bottom: 10,
        backgroundColor: '#CEEDFF',
        borderRadius: 20,
        // alignContent: "center",
        padding: 10,
        width: Platform.OS==='android' ? '95%':'100%',
        marginBottom: 30,
        alignSelf: "center",
    },
    head: { height: 40, backgroundColor: '#f1f8ff' },
    text: {
        fontSize: 20
    },
    text_android: {
        fontSize: 15
    },
    test2:{
        fontSize: 40
    },
    wrapper: { flexDirection: 'row' },
    title: { flex: 1, backgroundColor: '#f6f8fa' },
    row: {  height: 28  },
});