import React from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
} from "react-native";
import CheckBoxIcon from "../../../../containers/admin/class/class_manage/CheckBoxContainer";
import { DataTable } from "react-native-paper";

const ClassLocationComponent = ({ agency, classList }) => {
  return (
    <View style={styles.container}>
      <View style={[styles.header, { backgroundColor: "#CEEDFF" }]}>
        <View style={[styles.picker]}>
          <Text style={[styles.text, { marginLeft: 15 }]}>기관</Text>
          <Text
            style={[styles.pickerText, { fontSize: 16 }, { marginLeft: 8 }]}
          >
            {agency}
          </Text>
        </View>
      </View>

      <View style={styles.content}>
        <DataTable>
          <DataTable.Header>
            {Platform.OS === "android" ? (
              <>
                <DataTable.Title style={{marginLeft: "10%"}}>강의명</DataTable.Title>
                <DataTable.Title style={{marginLeft: "10%"}}>장소명</DataTable.Title>
              </>
            ) : (
              <>
                <DataTable.Title style={{marginLeft: "10%"}}>강의명</DataTable.Title>
                <DataTable.Title style={{marginLeft: "10%"}}>장소명</DataTable.Title>
              </>
            )}
          </DataTable.Header>

          <ScrollView>
            {classList ? (
              classList.map((item) => (
                <DataTable.Row key={item.c_idx}>
                  {Platform.OS === "android" ? (
                    <>
                     <CheckBoxIcon item={item} style={styles.checkbox} />
                      <DataTable.Cell>{item.c_name}</DataTable.Cell>
                      <DataTable.Cell>
                        {item.cl_name}
                      </DataTable.Cell> 
                    </>
                  ) : (
                    <>
                      <CheckBoxIcon item={item} style={styles.checkbox} />
                      <DataTable.Cell>{item.c_name}</DataTable.Cell>
                      <DataTable.Cell>
                        {item.cl_name}
                      </DataTable.Cell>
                    </>
                  )}
                </DataTable.Row>
              ))
            ) : (
              <Text>리스트를 가져오는 중입니다.</Text>
            )}
          </ScrollView>
          {/* <DataTable.Pagination
            page={page}
            numberOfPages={3}
            onPageChange={(page) => setPage(page)}
            label="1-2 of 6"
            optionsPerPage={optionsPerPage}
            itemsPerPage={itemsPerPage}
            setItemsPerPage={setItemsPerPage}
            showFastPagination
            optionsLabel={"Rows per page"}
          /> */}
        </DataTable>

        <View style={styles.btnContainer2}>
          <TouchableOpacity
            style={[styles.btn, { margin: 5 }]}
            onPress={() => {}}
          >
            <Text style={styles.btnText}>등록</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { margin: 5 }]}
            onPress={() => {}}
          >
            <Text style={styles.btnText}>수정</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.btn, { margin: 5 }]}
            onPress={() => {}}
          >
            <Text style={styles.btnText}>삭제</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: Platform.OS === "android" ? 15 : "20%",
    justifyContent: "center",
    flex: 1,
  },
  content: {
    marginTop : 20,
    textAlign: "center",
    marginLeft: 0,
    height: "55%",
  },
  header: {
    padding: "3%",
    margin: 5,
    borderRadius: 15,
  },
  picker: {
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    margin: 4,
    borderWidth: 1,
    borderRadius: 8,
    borderColor: "#99c0d6",
  },
  text: {
    marginRight : 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  pickerText: {
    fontSize: 25,
    alignItems: "center",
    color: "#000000",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
  },
  btnContainer2: {
    flexDirection: "row",
    margin: Platform.OS === "android" ? 5 : 10,
    alignSelf: "flex-end",
  },
  btn: {
    backgroundColor: "#5AA0C8",
    borderRadius: 6,
    width: 50,
    height: 30,
    alignItems: "center",
    padding: 5,
  },
  btnText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "white",
    textAlignVertical: "center",
  },
  checkbox: {
    alignSelf: "center",
    marginRight: Platform.OS === 'android' ? "5%" : "5%",
    margin: Platform.OS === 'android' ? 3 : 5,
    width:  Platform.OS === 'android' ? 15: 18,
    height: Platform.OS === 'android' ? 15: 18,
    borderColor: "#004cff",
  }
});

export default ClassLocationComponent;
