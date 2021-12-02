import React from "react";
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  ScrollView,
  Image,
} from "react-native";
import CheckBoxIcon from "../../../containers/class/class_manage/CheckBoxContainer";
import { DataTable, Modal, Portal, Provider } from "react-native-paper";
import { TextInput } from "react-native-gesture-handler";
import DatePicker from "react-datepicker";
import PickerBox from "../../../containers/class/class_manage/PickerBoxContainer";
import "./react-datepicker.css";
import { ko } from "date-fns/esm/locale";
import styled from "styled-components";
import mon from "../../../../assets/class/mon_none.png";
import Colormon from "../../../../assets/class/mon_selected.png";
import tus from "../../../../assets/class/tus_none.png";
import Colortus from "../../../../assets/class/tus_selected.png";
import wed from "../../../../assets/class/wed_none.png";
import Colorwed from "../../../../assets/class/wed_selected.png";
import thr from "../../../../assets/class/thr_none.png";
import Colorthr from "../../../../assets/class/thr_selected.png";
import fri from "../../../../assets/class/fri_none.png";
import Colorfri from "../../../../assets/class/fri_selected.png";
import sat from "../../../../assets/class/sat_none.png";
import Colorsat from "../../../../assets/class/sat_selected.png";
import sun from "../../../../assets/class/sun_none.png";
import Colorsun from "../../../../assets/class/sun_selected.png";

const ClassManageWeb = ({
  onModalShow,
  visible,
  onSubmit,
  onSearch,
  classSelect,
  pickerItem,
  search,
  click,
  classId,
  hideModalShow,
  agency,
  classList,
  onChangeText,
  classname,
  oldClassname,
  onChangeStartDate,
  onChangeEndDate,
  onChangeStartTime,
  onChangeEndTime,
  onChangeStartCheckTime,
  onChangeEndCheckTime,
  onChangeBreakStartTime,
  onChangeBreakEndTime,
  startDate,
  endDate,
  startTime,
  endTime,
  checkstartTime,
  checkendTime,
  breakStartTime,
  breakEndTime,
  oldStartDate,
  oldEndDate,
  oldStartTime,
  oldEndTime,
  oldCheckStartTime,
  oldCheckEndTime,
  oldBreakStartTime,
  oldBreakEndTime,
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
  onChangeOldStartDate,
  onChangeOldEndDate,
  onChangeOldStartTime,
  onChangeOldEndTime,
  onChangeOldStartCheckTime,
  onChangeOldEndCheckTime,
  onChangeOldBreakStartTime,
  onChangeOldBreakEndTime,
  onUpdateSubmit,
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
                style={[styles.pickerText, { width: "40%" }]}
                value={classname}
                onChangeText={onChangeText}
                maxLength={20}
              />
            </View>

            <View style={styles.picker}>
              <Text style={({ width: "10%" }, styles.text)}>수강기간</Text>
              <CustomDatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                placeholderText="교육시작일"
                showPopperArrow={false}
                selected={startDate}
                onChange={onChangeStartDate}
                minDate={new Date()}
                showMonthDropdown={true}
                disabledKeyboardNavigation
                withPortal
                portalId="start-date"
              />
              <Text> ~ </Text>
              <CustomDatePicker
                locale={ko}
                dateFormat="yyyy-MM-dd"
                placeholderText="교육종료일"
                showPopperArrow={false}
                selected={endDate}
                onChange={onChangeEndDate}
                endDate={endDate}
                minDate={startDate}
                showMonthDropdown={true}
                disabledKeyboardNavigation
                withPortal
                portalId="end-date"
              />

              <Text style={styles.text}>수강요일</Text>
              <TouchableOpacity onPress={onSelectMonDay}>
                <Image
                  style={{ width: 25, height: 25, margin: 5 }}
                  source={!monday ? mon : Colormon}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectTusDay}>
                <Image
                  style={{ width: 25, height: 25, margin: 3 }}
                  source={!tuesday ? tus : Colortus}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectWedDay}>
                <Image
                  style={{ width: 25, height: 25, margin: 3 }}
                  source={!wednesday ? wed : Colorwed}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectThrDay}>
                <Image
                  style={{ width: 25, height: 25, margin: 3 }}
                  source={!thursday ? thr : Colorthr}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectFriDay}>
                <Image
                  style={{ width: 25, height: 25, margin: 3 }}
                  source={!friday ? fri : Colorfri}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectSatDay}>
                <Image
                  style={{ width: 25, height: 25, margin: 3 }}
                  source={!saturday ? sat : Colorsat}
                />
              </TouchableOpacity>
              <TouchableOpacity onPress={onSelectSunDay}>
                <Image
                  style={{ width: 25, height: 25, margin: 3 }}
                  source={!sunday ? sun : Colorsun}
                />
              </TouchableOpacity>
            </View>

            <View style={({ width: "10%" }, styles.picker)}>
              <Text style={styles.text}>교육시간</Text>
              <CustomDatePicker
                selected={startTime}
                placeholderText="시작시간"
                onChange={onChangeStartTime}
                showPopperArrow={false}
                showTimeSelect
                showTimeSelectOnly
                disabledKeyboardNavigation
                timeIntervals={15}
                timeFormat="HH:mm"
                dateFormat="h:mm aa"
                timeCaption="time"
                withPortal
                portalId="start-time"
              />
              <Text> ~ </Text>
              <CustomDatePicker
                selected={endTime}
                onChange={onChangeEndTime}
                placeholderText="종료시간"
                showPopperArrow={false}
                showTimeSelect
                showTimeSelectOnly
                disabledKeyboardNavigation
                timeIntervals={15}
                timeFormat="HH:mm"
                dateFormat="h:mm aa"
                timeCaption="time"
                withPortal
                portalId="end-time"
              />
              <Text style={styles.text}>휴게(점심)시간</Text>
              <CustomDatePicker
                selected={breakStartTime}
                placeholderText="시작시간"
                onChange={onChangeBreakStartTime}
                showPopperArrow={false}
                showTimeSelect
                showTimeSelectOnly
                disabledKeyboardNavigation
                timeIntervals={15}
                timeFormat="HH:mm"
                dateFormat="h:mm aa"
                timeCaption="time"
                withPortal
                portalId="start-break-time"
              />
              <Text> ~ </Text>
              <CustomDatePicker
                selected={breakEndTime}
                onChange={onChangeBreakEndTime}
                placeholderText="종료시간"
                showPopperArrow={false}
                showTimeSelect
                showTimeSelectOnly
                disabledKeyboardNavigation
                timeIntervals={15}
                timeFormat="HH:mm"
                dateFormat="h:mm aa"
                timeCaption="time"
                withPortal
                portalId="end-break-time"
              />
            </View>
            <View style={({ width: "10%" }, styles.picker)}>
              <Text style={({ width: "15%" }, styles.text)}>
                출석 인정 시간
              </Text>
              <CustomDatePicker
                selected={checkstartTime}
                onChange={onChangeStartCheckTime}
                placeholderText="시작시간"
                showTimeSelect
                showTimeSelectOnly
                disabledKeyboardNavigation
                timeIntervals={15}
                timeFormat="HH:mm"
                dateFormat="h:mm aa"
                timeCaption="time"
                withPortal
                portalId="check-start-time"
              />
              <Text> ~ </Text>
              <CustomDatePicker
                selected={checkendTime}
                onChange={onChangeEndCheckTime}
                placeholderText="종료시간"
                showTimeSelect
                showTimeSelectOnly
                disabledKeyboardNavigation
                timeIntervals={15}
                timeFormat="HH:mm"
                dateFormat="h:mm aa"
                timeCaption="time"
                withPortal
                portalId="check-end-time"
              />
            </View>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                marginTop: 50,
              }}
            >
              <TouchableOpacity
                style={{
                  backgroundColor: "#5AA0C8",
                  borderRadius: 10,
                  width: "20%",
                  height: 40,
                  marginRight: 20,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 5,
                }}
                onPress={hideModalShow}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "white",
                    textAlignVertical: "center",
                  }}
                >
                  취소
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#5AA0C8",
                  borderRadius: 10,
                  width: "20%",
                  height: 40,
                  alignItems: "center",
                  justifyContent: "center",
                  padding: 5,
                }}
                onPress={onSubmit}
              >
                <Text
                  style={{
                    fontSize: 15,
                    fontWeight: "bold",
                    color: "white",
                    textAlignVertical: "center",
                  }}
                >
                  등록
                </Text>
              </TouchableOpacity>
            </View>
          </Modal>
        </Portal>

        {update && (
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
                <Text style={({ width: "15%" }, styles.text)}>강의명</Text>
                <Text
                  style={{
                    fontSize: 15,
                    alignItems: "center",
                    color: "black",
                    padding: 5,
                  }}
                >
                  {oldClassname}
                </Text>
              </View>

              <View style={styles.picker}>
                <Text style={[{ width: "10%" }, styles.text]}>수강기간</Text>
                <CustomDatePicker
                  locale={ko}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="교육시작일"
                  showPopperArrow={false}
                  selected={oldStartDate}
                  onChange={onChangeOldStartDate}
                  minDate={new Date()}
                  showMonthDropdown={true}
                  disabledKeyboardNavigation
                  withPortal
                  portalId="start-date"
                />
                <Text> ~ </Text>
                <CustomDatePicker
                  locale={ko}
                  dateFormat="yyyy-MM-dd"
                  placeholderText="교육종료일"
                  showPopperArrow={false}
                  selected={oldEndDate}
                  onChange={onChangeOldEndDate}
                  endDate={oldEndDate}
                  minDate={oldStartDate}
                  showMonthDropdown={true}
                  disabledKeyboardNavigation
                  withPortal
                  portalId="end-date"
                />

                <Text style={styles.text}>수강요일</Text>
                <TouchableOpacity onPress={onSelectOldMonDay}>
                  <Image
                    style={{ width: 25, height: 25, margin: 5 }}
                    source={!oldmonday ? mon : Colormon}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={onSelectOldTusDay}>
                  <Image
                    style={{ width: 25, height: 25, margin: 3 }}
                    source={!oldtuesday ? tus : Colortus}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={onSelectOldWedDay}>
                  <Image
                    style={{ width: 25, height: 25, margin: 3 }}
                    source={!oldwednesday ? wed : Colorwed}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={onSelectOldThrDay}>
                  <Image
                    style={{ width: 25, height: 25, margin: 3 }}
                    source={!oldthursday ? thr : Colorthr}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={onSelectOldFriDay}>
                  <Image
                    style={{ width: 25, height: 25, margin: 3 }}
                    source={!oldfriday ? fri : Colorfri}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={onSelectOldSatDay}>
                  <Image
                    style={{ width: 25, height: 25, margin: 3 }}
                    source={!oldsaturday ? sat : Colorsat}
                  />
                </TouchableOpacity>
                <TouchableOpacity onPress={onSelectOldSunDay}>
                  <Image
                    style={{ width: 25, height: 25, margin: 3 }}
                    source={!oldsunday ? sun : Colorsun}
                  />
                </TouchableOpacity>
              </View>

              <View style={({ width: "10%" }, styles.picker)}>
                <Text style={styles.text}>교육시간</Text>
                <CustomDatePicker
                  selected={oldStartTime}
                  placeholderText="시작시간"
                  onChange={onChangeOldStartTime}
                  showPopperArrow={false}
                  showTimeSelect
                  showTimeSelectOnly
                  disabledKeyboardNavigation
                  timeIntervals={15}
                  timeFormat="HH:mm"
                  dateFormat="h:mm aa"
                  timeCaption="time"
                  withPortal
                  portalId="start-time"
                />
                <Text> ~ </Text>
                <CustomDatePicker
                  selected={oldEndTime}
                  onChange={onChangeOldEndTime}
                  placeholderText="종료시간"
                  showPopperArrow={false}
                  showTimeSelect
                  showTimeSelectOnly
                  disabledKeyboardNavigation
                  timeIntervals={15}
                  timeFormat="HH:mm"
                  dateFormat="h:mm aa"
                  timeCaption="time"
                  withPortal
                  portalId="end-time"
                />
                <Text style={styles.text}>휴게(점심)시간</Text>
                <CustomDatePicker
                  selected={oldBreakStartTime}
                  placeholderText="시작시간"
                  onChange={onChangeOldBreakStartTime}
                  showPopperArrow={false}
                  showTimeSelect
                  showTimeSelectOnly
                  disabledKeyboardNavigation
                  timeIntervals={15}
                  timeFormat="HH:mm"
                  dateFormat="h:mm aa"
                  timeCaption="time"
                  withPortal
                  portalId="start-break-time"
                />
                <Text> ~ </Text>
                <CustomDatePicker
                  selected={oldBreakEndTime}
                  onChange={onChangeOldBreakEndTime}
                  placeholderText="종료시간"
                  showPopperArrow={false}
                  showTimeSelect
                  showTimeSelectOnly
                  disabledKeyboardNavigation
                  timeIntervals={15}
                  timeFormat="HH:mm"
                  dateFormat="h:mm aa"
                  timeCaption="time"
                  withPortal
                  portalId="end-break-time"
                />
              </View>
              <View style={({ width: "10%" }, styles.picker)}>
                <Text style={({ width: "15%" }, styles.text)}>
                  출석 인정 시간
                </Text>
                <CustomDatePicker
                  selected={oldCheckStartTime}
                  onChange={onChangeOldStartCheckTime}
                  placeholderText="시작시간"
                  showTimeSelect
                  showTimeSelectOnly
                  disabledKeyboardNavigation
                  timeIntervals={15}
                  timeFormat="HH:mm"
                  dateFormat="h:mm aa"
                  timeCaption="time"
                  withPortal
                  portalId="check-start-time"
                />
                <Text> ~ </Text>
                <CustomDatePicker
                  selected={oldCheckEndTime}
                  onChange={onChangeOldEndCheckTime}
                  placeholderText="종료시간"
                  showTimeSelect
                  showTimeSelectOnly
                  disabledKeyboardNavigation
                  timeIntervals={15}
                  timeFormat="HH:mm"
                  dateFormat="h:mm aa"
                  timeCaption="time"
                  withPortal
                  portalId="check-end-time"
                />
              </View>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "center",
                  marginTop: 50,
                }}
              >
                <TouchableOpacity
                  style={{
                    backgroundColor: "#5AA0C8",
                    borderRadius: 10,
                    width: "20%",
                    height: 40,
                    marginRight: 20,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 5,
                  }}
                  onPress={hideModalShow}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "white",
                      textAlignVertical: "center",
                    }}
                  >
                    취소
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={{
                    backgroundColor: "#5AA0C8",
                    borderRadius: 10,
                    width: "20%",
                    height: 40,
                    alignItems: "center",
                    justifyContent: "center",
                    padding: 5,
                  }}
                  onPress={onUpdateSubmit}
                >
                  <Text
                    style={{
                      fontSize: 15,
                      fontWeight: "bold",
                      color: "white",
                      textAlignVertical: "center",
                    }}
                  >
                    등록
                  </Text>
                </TouchableOpacity>
              </View>
            </Modal>
          </Portal>
        )}
        <View style={[styles.header, { backgroundColor: "#CEEDFF" }]}>
          <View style={[styles.picker]}>
            <Text style={[styles.text, { marginLeft: 15 }]}>기관</Text>
            <Text
              style={[styles.pickerText, { fontSize: 16 }, { marginLeft: 8 }]}
            >
              {agency}
            </Text>
          </View>
          <View style={styles.picker}>
            <Text style={[styles.text, { marginLeft: 15 }]}>강의명</Text>
            <PickerBox style={styles} />
          </View>
        </View>
        <View style={styles.btnContainer2}>
            <TouchableOpacity style={styles.btn} onPress={onSearch}>
              <Text style={styles.btnText}>검색</Text>
            </TouchableOpacity>
          </View>

        <View style={styles.content}>
          <ScrollView>
            <DataTable>
              <DataTable.Header>
                <DataTable.Title style={{ marginLeft: "10%" }}>
                  강의명
                </DataTable.Title>
                <DataTable.Title style={{ marginLeft: "10%" }}>
                  수강기간
                </DataTable.Title>
                <DataTable.Title style={{ marginLeft: "10%" }}>
                  수강요일 및 시간
                </DataTable.Title>
              </DataTable.Header>

              {!search &&
                click === null &&
                classList &&
                classList.map((item) => (
                  <DataTable.Row key={item.c_idx}>
                    <CheckBoxIcon item={item} style={styles.checkbox} />
                    <DataTable.Cell>{item.c_name}</DataTable.Cell>
                    <DataTable.Cell>
                      {item.ct_start_date} ~ {item.ct_end_date}
                    </DataTable.Cell>
                    <DataTable.Cell>
                      {item.ct_day} / {item.ct_start_time} ~ {item.ct_end_time}
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              {search &&
                click === null &&
                classSelect &&
                classSelect.map((item) => (
                  <DataTable.Row key={item.c_idx}>
                    <CheckBoxIcon item={item} style={styles.checkbox} />
                    <DataTable.Cell>{item.c_name}</DataTable.Cell>
                    <DataTable.Cell>
                      {item.ct_start_date} ~ {item.ct_end_date}
                    </DataTable.Cell>
                    <DataTable.Cell>
                      {item.ct_day} / {item.ct_start_time} ~ {item.ct_end_time}
                    </DataTable.Cell>
                  </DataTable.Row>
                ))}
              {search && click === null && classSelect == null && (
                <Text>리스트를 가져오는 중입니다.</Text>
              )}
              {!search && click === null && classList == null && (
                <Text>리스트를 가져오는 중입니다.</Text>
              )}
            </DataTable>
            {click !== null && <Text style={{ fontSize: 20 }}>{click}</Text>}
          </ScrollView>

          <View style={styles.btnContainer2}>
            {/* {classId == null ||
              classId == 0 && (
                <TouchableOpacity
                  style={[styles.btn, { margin: 5 }]}
                  onPress={onModalShow}
                >
                  <Text style={styles.btnText}>등록</Text>
                </TouchableOpacity>
              )} */}
            {search && pickerItem == 0 && (classId == null || classId == 0) && (
              <TouchableOpacity
                style={[styles.btn, { margin: 5 }]}
                onPress={onModalShow}
              >
                <Text style={styles.btnText}>등록</Text>
              </TouchableOpacity>
            )}
            
            {(classId == null || classId == 0) && !search && <TouchableOpacity
                style={[styles.btn, { margin: 5 }]}
                onPress={onModalShow}
              >
                <Text style={styles.btnText}>등록</Text>
              </TouchableOpacity> }
            {(classId > 0 || pickerItem >= 0) && (
              <>
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
              </>
            )}
          </View>
        </View>
      </View>
    </Provider>
  );
};

const CustomDatePicker = styled(DatePicker)`
  box-sizing: border-box;
  height: 20px;
  width: 80px;
  border-style: none;
  font-size: 15px;
  color: black;
  background-color: transparent;
  border-color: white;
`;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: "20%",
    justifyContent: "center",
    flex: 1,
  },
  content: {
    marginTop: 5,
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
    margin: 10,
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  pickerText: {
    fontSize: 15,
    width: "30%",
    alignItems: "center",
    borderRadius: 20,
    borderColor: "#99c0d6",
    backgroundColor: "#00000000",
    color: "black",
  },
  btnContainer: {
    flex: 1,
    flexDirection: "row",
  },
  btnContainer2: {
    flexDirection: "row",
    margin: 10,
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
    margin: 5,
    width: 18,
    height: 18,
    borderColor: "#004cff",
  },
  modal: {
    backgroundColor: "#CEEDFF",
    padding: "5%",
    margin: "10%",
    height: "70%",
    width: "60%",
    alignSelf: "center",
    borderRadius: 35,
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
    color: "#000000",
    height: 50,
    width: 300,
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 12,
    padding: 10,
  },
  calendar: {
    borderRadius: 20,
  },
});

export default ClassManageWeb;
