import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  picker: {
    height: 35,
    flexDirection: "row",
    alignItems: "center",
    margin: 4,
  },
  pickerText: {
    flex: 6,
    fontSize: 16,
    alignItems: "center",
    color: "#000000",
  },
  miniPicker: {
    alignContent: "flex-end",
    alignSelf: "flex-end",
    width: "30%",
    height: 30,
    color: "#004cff",
  },
  text: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#000000",
  },
  btnContainer2: {
    flexDirection: "row",
    margin: 5,
    alignSelf: "flex-end",
  },
  btn: {
    backgroundColor: "#5AA0C8",
    borderRadius: 6,    
    width: "15%",
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
    margin: 8,
    borderColor: "#999999",
  },
  modal: {
    backgroundColor: "#CEEDFF",
    padding: "5%",
    margin: "10%",
    height: 470,
    width: 350,
    alignSelf: "center",
    position: "absolute",
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
});
export default styles;
