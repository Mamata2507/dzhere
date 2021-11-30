import React, { useState } from "react";
import {
  Platform,
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Alert,
  Image,
} from "react-native";
import CheckBoxIcon from "../../../../containers/admin/class/class_manage/CheckBoxContainer";
import { DataTable, Modal, Portal, Provider } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";
// import DateTimePicker from "@react-native-community/datetimepicker";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import mon from "../../../../../assets/class/mon_none.png";
import Colormon from "../../../../../assets/class/mon_selected.png";
import tus from "../../../../../assets/class/tus_none.png";
import Colortus from "../../../../../assets/class/tus_selected.png";
import wed from "../../../../../assets/class/wed_none.png";
import Colorwed from "../../../../../assets/class/wed_selected.png";
import thr from "../../../../../assets/class/thr_none.png";
import Colorthr from "../../../../../assets/class/thr_selected.png";
import fri from "../../../../../assets/class/fri_none.png";
import Colorfri from "../../../../../assets/class/fri_selected.png";
import sat from "../../../../../assets/class/sat_none.png";
import Colorsat from "../../../../../assets/class/sat_selected.png";
import sun from "../../../../../assets/class/sun_none.png";
import Colorsun from "../../../../../assets/class/sun_selected.png";
const ClassManageAndroid = ({
  onModalShow,
  visible,
  onSubmit,
  hideModalShow,
  agency,
  classList,
  onChangeText,
  onChangeOldText,
  classname,
  oldClassname,
  onChangeStartDate,
  onChangeEndDate,
  onChangeStartTime,
  onChangeEndTime,
  onChangeStartCheckTime,
  onChangeEndCheckTime,
  onChangeStartBreakTime,
  onChangeEndBreakTime,
  startDate,
  endDate,
  startTime,
  endTime,
  checkstartTime,
  checkendTime,
  endBreakTime,
  startBreakTime,
  oldStartDate,
  oldEndDate,
  oldStartTime,
  oldEndTime,
  oldCheckStartTime,
  oldCheckEndTime,
  oldStartBreakTime,
  oldEndBreakTime,
  onDelete,
  onSelectMonDay,
  onSelectTusDay,
  onSelectWedDay,
  onSelectThrDay,
  onSelectFriDay,
  onSelectSatDay,
  onSelectSunDay,
  onSelectOldMonDay,
  onSelectOldTusDay,
  onSelectOldWedDay,
  onSelectOldThrDay,
  onSelectOldFriDay,
  onSelectOldSatDay,
  onSelectOldSunDay,
  monday,
  tuesday,
  wednesday,
  thursday,
  friday,
  saturday,
  sunday,
  oldmonday,
  oldtuesday,
  oldwednesday,
  oldthursday,
  oldfriday,
  oldsaturday,
  oldsunday,
  onUpdate,
  update,
  updateList,
  onChangeOldStartDate,
  onChangeOldEndDate,
  onChangeOldStartTime,
  onChangeOldEndTime,
  onChangeOldStartCheckTime,
  onChangeOldEndCheckTime,
  onChangeOldStartBreakTime,
  onChangeOldEndBreakTime,
  onUpdateSubmit,
  // onChange,
  showStartDatepicker,
  showEndDatepicker,
  showStartTimepicker,
  showEndTimepicker,
  showStartChcekTimepicker,
  showEndChcekTimepicker,
  showStartBreakTimepicker,
  showEndBreakTimepicker,
  startDateShow,
  endDateShow,
  startTimeShow,
  endTimeShow,
  startCheckTimeShow,
  endCheckTimeShow,
  startBreakTimeShow,
  endBreakTimeShow,
  hideStartDatepicker,
  hideEndDatepicker,
  hideStartTimepicker,
  hideEndTimepicker,
  hideStartCheckTimepicker,
  hideEndCheckTimepicker,
  hideStartBreakTimepicker,
  hideEndBreakTimepicker,
}) => {
  return (
    <Provider>
      <View style={styles.container}>
        <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModalShow}
            contentContainerStyle={styles.modal}
          >
            <Text style={styles.modalText}>강의 등록</Text>
            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>
            <View style={styles.picker}>
              <Text style={({ width: "10%" }, styles.text)}>강의명</Text>
              <TextInput
                style={{
                  fontSize: 14,
                  alignItems: "center",
                  color: "#000000",
                  width: "100%",
                  padding: 5,
                }}
                onChangeText={onChangeText}
                value={classname}
              />
            </View>
            <View style={styles.picker}>
              <Text style={[{ width: "25%" }, styles.text]}>수강기간</Text>
              <TouchableOpacity onPress={showStartDatepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="교육 시작일"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={startDate}
                />
               <DateTimePickerModal
               isVisible={startDateShow}
               mode="date"
               minimumDate={new Date()}
               onConfirm={onChangeStartDate}
               onCancel={hideStartDatepicker}
             />
              </TouchableOpacity>
              <Text> ~ </Text>
              <TouchableOpacity onPress={showEndDatepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="교육 종료일"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={endDate}
                />
               <DateTimePickerModal
               isVisible={endDateShow}
               mode="date"
               minimumDate={new Date()}
               onConfirm={onChangeEndDate}
               onCancel={hideEndDatepicker}
             />
              </TouchableOpacity>
            </View>

            <Text style={[{ marginTop: 10, marginBottom: 8 }, styles.text]}>
              수강요일
            </Text>
            <View
              style={{
                height: 35,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={onSelectMonDay}>
                <Image
                  style={{ width: 35, height: 35 }}
                  source={!monday ? mon : Colormon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectTusDay}>
                <Image
                  style={{ width: 35, height: 35, margin: 1 }}
                  source={!tuesday ? tus : Colortus}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectWedDay}>
                <Image
                  style={{ width: 35, height: 35, margin: 1 }}
                  source={!wednesday ? wed : Colorwed}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectThrDay}>
                <Image
                  style={{ width: 35, height: 35, margin: 1 }}
                  source={!thursday ? thr : Colorthr}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectFriDay}>
                <Image
                  style={{ width: 35, height: 35, margin: 1 }}
                  source={!friday ? fri : Colorfri}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectSatDay}>
                <Image
                  style={{ width: 35, height: 35, margin: 1 }}
                  source={!saturday ? sat : Colorsat}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectSunDay}>
                <Image
                  style={{ width: 35, height: 35, margin: 1 }}
                  source={!sunday ? sun : Colorsun}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.picker}>
              <Text style={[{ width: "35%" }, styles.text]}>교육시간</Text>
              <TouchableOpacity onPress={showStartTimepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="시작시간"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={startTime}
                />
               <DateTimePickerModal
               isVisible={startTimeShow}
               mode="time"
               onConfirm={onChangeStartTime}
               onCancel={hideStartTimepicker}
             />
              </TouchableOpacity>
              <Text> ~ </Text>
              <TouchableOpacity onPress={showEndTimepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="종료시간"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={endTime}
                />
               <DateTimePickerModal
               isVisible={endTimeShow}
               mode="time"
               onConfirm={onChangeEndTime}
               onCancel={hideEndTimepicker}
             />
              </TouchableOpacity>
            </View>
            <View style={styles.picker}>
              <Text style={[{ width: "35%" }, styles.text]}>휴게(점심)시간</Text>
              <TouchableOpacity onPress={showStartBreakTimepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="시작시간"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={startBreakTime}
                />
               <DateTimePickerModal
               isVisible={startBreakTimeShow}
               mode="time"
               onConfirm={onChangeStartBreakTime}
               onCancel={hideStartBreakTimepicker}
             />
              </TouchableOpacity>
              <Text> ~ </Text>
              <TouchableOpacity onPress={showEndBreakTimepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="종료시간"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={endBreakTime}
                />
               <DateTimePickerModal
               isVisible={endBreakTimeShow}
               mode="time"
               onConfirm={onChangeEndBreakTime}
               onCancel={hideEndBreakTimepicker}
             />
              </TouchableOpacity>
            </View>
            <View style={styles.picker}>
              <Text style={[{ width: "35%" }, styles.text]}>출석인정시간</Text>
              <TouchableOpacity onPress={showStartChcekTimepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="시작시간"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={checkstartTime}
                />
               <DateTimePickerModal
               isVisible={startCheckTimeShow}
               mode="time"
               onConfirm={onChangeStartCheckTime}
               onCancel={hideStartCheckTimepicker}
             />
              </TouchableOpacity>
              <Text> ~ </Text>
              <TouchableOpacity onPress={showEndChcekTimepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="종료시간"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={checkendTime}
                />
               <DateTimePickerModal
               isVisible={endCheckTimeShow}
               mode="time"
               onConfirm={onChangeEndCheckTime}
               onCancel={hideEndCheckTimepicker}
             />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[
                styles.btn,
                { marginTop: 15, alignSelf: "center", width: "20%" },
              ]}
              onPress={onSubmit}
            >
              <Text style={styles.btnText}>등록</Text>
            </TouchableOpacity>
          </Modal>
        </Portal>

        {/* 업데이트 부분 */}

        {update && 
          <Portal>
          <Modal
            visible={visible}
            onDismiss={hideModalShow}
            contentContainerStyle={styles.modal}
          >
            <Text style={styles.modalText}>강의 등록</Text>
            <View style={styles.lineContainer}>
              <View style={styles.line} />
            </View>
            <View style={styles.picker}>
              <Text style={[{ width: "25%" }, styles.text]}>강의명</Text>
              <Text
                  style={{
                    fontSize: 15,
                    alignItems: "center",
                    color: "black",
                    width: "100%",
                    padding: 5,
                  }}
                >
                  {oldClassname}
                </Text>
            </View>
            <View style={styles.picker}>
              <Text style={[{ width: "25%" }, styles.text]}>수강기간</Text>
              <TouchableOpacity onPress={showStartDatepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="교육 시작일"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={oldStartDate}
                />
               <DateTimePickerModal
               isVisible={startDateShow}
               mode="date"
               minimumDate={new Date()}
               onConfirm={onChangeOldStartDate}
               onCancel={hideStartDatepicker}
             />
              </TouchableOpacity>
              <Text> ~ </Text>
              <TouchableOpacity onPress={showEndDatepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="교육 종료일"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={oldEndDate}
                />
               <DateTimePickerModal
               isVisible={endDateShow}
               mode="date"
               minimumDate={new Date()}
               onConfirm={onChangeOldEndDate}
               onCancel={hideEndDatepicker}
             />
              </TouchableOpacity>
            </View>

            <Text style={[{ marginTop: 10, marginBottom: 8 }, styles.text]}>
              수강요일
            </Text>
            <View
              style={{
                height: 35,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={onSelectOldMonDay}>
                <Image
                  style={{ width: 35, height: 35 }}
                  source={!oldmonday ? mon : Colormon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectOldTusDay}>
                <Image
                  style={{ width: 35, height: 35, margin: 1 }}
                  source={!oldtuesday ? tus : Colortus}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectOldWedDay}>
                <Image
                  style={{ width: 35, height: 35, margin: 1 }}
                  source={!oldwednesday ? wed : Colorwed}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectOldThrDay}>
                <Image
                  style={{ width: 35, height: 35, margin: 1 }}
                  source={!oldthursday ? thr : Colorthr}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectOldFriDay}>
                <Image
                  style={{ width: 35, height: 35, margin: 1 }}
                  source={!oldfriday ? fri : Colorfri}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectOldSatDay}>
                <Image
                  style={{ width: 35, height: 35, margin: 1 }}
                  source={!oldsaturday ? sat : Colorsat}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectOldSunDay}>
                <Image
                  style={{ width: 35, height: 35, margin: 1 }}
                  source={!oldsunday ? sun : Colorsun}
                />
              </TouchableOpacity>
            </View>
            <View style={styles.picker}>
              <Text style={[{ width: "35%" }, styles.text]}>교육시간</Text>
              <TouchableOpacity onPress={showStartTimepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="시작시간"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={oldStartTime}
                />
               <DateTimePickerModal
               isVisible={startTimeShow}
               mode="time"
               onConfirm={onChangeOldStartTime}
               onCancel={hideStartTimepicker}
             />
              </TouchableOpacity>
              <Text> ~ </Text>
              <TouchableOpacity onPress={showEndTimepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="종료시간"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={oldEndTime}
                />
               <DateTimePickerModal
               isVisible={endTimeShow}
               mode="time"
               onConfirm={onChangeOldEndTime}
               onCancel={hideEndTimepicker}
             />
              </TouchableOpacity>
            </View>
            <View style={styles.picker}>
              <Text style={[{ width: "35%" }, styles.text]}>휴게(점심)시간</Text>
              <TouchableOpacity onPress={showStartBreakTimepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="시작시간"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={oldStartBreakTime}
                />
               <DateTimePickerModal
               isVisible={startBreakTimeShow}
               mode="time"
               onConfirm={onChangeOldStartBreakTime}
               onCancel={hideStartBreakTimepicker}
             />
              </TouchableOpacity>
              <Text> ~ </Text>
              <TouchableOpacity onPress={showEndBreakTimepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="종료시간"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={oldEndBreakTime}
                />
               <DateTimePickerModal
               isVisible={endBreakTimeShow}
               mode="time"
               onConfirm={onChangeOldEndBreakTime}
               onCancel={hideEndBreakTimepicker}
             />
              </TouchableOpacity>
            </View>
            <View style={styles.picker}>
              <Text style={[{ width: "35%" }, styles.text]}>출석인정시간</Text>
              <TouchableOpacity onPress={showStartChcekTimepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="시작시간"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={oldCheckStartTime}
                />
               <DateTimePickerModal
               isVisible={startCheckTimeShow}
               mode="time"
               onConfirm={onChangeOldStartCheckTime}
               onCancel={hideStartCheckTimepicker}
             />
              </TouchableOpacity>
              <Text> ~ </Text>
              <TouchableOpacity onPress={showEndChcekTimepicker}>
              <TextInput
                    pointerEvents="none"
                    style={styles.textInput}
                    placeholder="종료시간"
                    placeholderTextColor='#000000'
                    underlineColorAndroid="transparent"
                    editable={false}
                    value={oldCheckEndTime}
                />
               <DateTimePickerModal
               isVisible={endCheckTimeShow}
               mode="time"
               onConfirm={onChangeOldEndCheckTime}
               onCancel={hideEndCheckTimepicker}
             />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={[
                styles.btn,
                { marginTop: 15, alignSelf: "center", width: "20%" },
              ]}
              onPress={onUpdateSubmit}
            >
              <Text style={styles.btnText}>등록</Text>
            </TouchableOpacity>
          </Modal>
        </Portal>
        }
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
          <ScrollView>
            <DataTable>
              <DataTable.Header>
                {/* <DataTable.Title></DataTable.Title> */}
                <DataTable.Title style={{ marginLeft: "12%" }}>
                  강의명
                </DataTable.Title>
                <DataTable.Title>수강기간</DataTable.Title>
              </DataTable.Header>

              {classList ? (
                classList.map((item) => (
                  <DataTable.Row key={item.c_idx}>
                    <CheckBoxIcon item={item} style={styles.checkbox} />
                    <DataTable.Cell>{item.c_name}</DataTable.Cell>
                    <DataTable.Cell>
                      {item.ct_start_date}~{item.ct_end_date}
                    </DataTable.Cell>
                  </DataTable.Row>
                ))
              ) : (
                <Text>리스트를 가져오는 중입니다.</Text>
              )}
            </DataTable>
          </ScrollView>
          <View style={styles.btnContainer2}>
            <TouchableOpacity
              style={[styles.btn, { margin: 5 }]}
              onPress={onModalShow}
            >
              <Text style={styles.btnText}>등록</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { margin: 5 }]}
              onPress={onUpdate}
            >
              <Text style={styles.btnText}>수정</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.btn, { margin: 5 }]}
              onPress={onDelete}
            >
              <Text style={styles.btnText}>삭제</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    justifyContent: "center",
    flex: 1,
  },
  content: {
    marginTop: 20,
    // alignItems: "center",
    // alignItems: "flex-end",
    textAlign: "center",
    marginLeft: 0,
    // justifyContent: "center",
    height: "60%",
  },
  header: {
    // height: "10%",
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
    marginLeft: 5,
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
    margin: 5,
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
  miniPicker: {
    width: "50%",
    height: 30,
    color: "#004cff",
  },
  checkbox: {
    alignSelf: "center",
    marginRight: "5%",
    margin: 3,
    width: 20,
    height: 20,
    borderColor: "#004cff",
  },
  modal: {
    backgroundColor: "#CEEDFF",
    padding: "5%",
    margin: "10%",
    height: "60%",
    width: "80%",
    alignSelf: "center",
    borderRadius: 25,
  },
  modalText: {
    fontSize: 18,
    fontWeight: "700",
    textAlign: "center",
  },
  lineContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "gray",
    marginTop: "5%",
    marginBottom: "5%",
  },
  textInput: {
    fontSize: 16,
    color: "black",
    height: 35,
    borderRadius: 20,
    padding: 5,
    alignContent: "center",
    textAlign: "center",
  },
});

export default ClassManageAndroid;
