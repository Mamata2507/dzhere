import * as React from "react";
import { StyleSheet, Platform } from "react-native";
import SortableGridview from "react-native-sortable-gridview";
import MoveStudentListContainer from "../../../containers/class/class_manage/MoveStudentListContainer";

const ClassCardComponent = ({ classname, navigation }) => {
  return (
    <>
      {Platform.OS === "android" ? (
        <SortableGridview
          data={classname}
          numPerRow={3}
          onDragStart={() => {
            console.log("CustomLayout onDragStart");
          }}
          onDragRelease={(data) => {
            console.log("CustomLayout onDragRelease", data);
          }}
          renderItem={(item, index) => {
            return (
              <MoveStudentListContainer
                uniqueKey={item.c_idx}
                item={item}
                styles={styles}
              />
            );
          }}
        />
      ) : (
        <SortableGridview
          data={classname}
          sensitivity={500} // default 150(miliseconds)
          numPerRow={4} 
          onDragStart={() => {
            console.log("CustomSensitivity onDragStart");
          }}
          onDragRelease={(data) => {
            console.log("CustomSensitivity onDragRelease", data);
          }}
          renderItem={(item, index) => {
            return (
              <MoveStudentListContainer
                uniqueKey={item.c_idx}
                item={item}
                styles={styles}
              />
            );
          }}
        />
      )}
    </>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#CEEDFF",
    width: Platform.OS === "android" ? "100%" : "100%",
    height: Platform.OS === "android" ? "90%" : "80%",
    borderRadius: Platform.OS === "android" ? 20 : 25,
    paddingVertical: Platform.OS === "android" ? 0 : 30,
    justifyContent: "center",
    alignItems: "center",
  },
  classname: {
    fontSize: Platform.OS === "android" ? 15 : 17,
    fontWeight: "500",
    margin: Platform.OS === "android" ? 10 : 15,
    textAlign: "center",
  },
  divider: {
    height: 1,
    backgroundColor: "#A3A3A3",
    alignSelf: "stretch",
    marginTop: Platform.OS === "android" ? 5 : 10,
    marginBottom: Platform.OS === "android" ? 5 : 10,
  },
  hintText: {
    textAlign: "center",
    color: "#666666",
    fontSize: Platform.OS === "android" ? 11 : 15,
  },
});

export default ClassCardComponent;
