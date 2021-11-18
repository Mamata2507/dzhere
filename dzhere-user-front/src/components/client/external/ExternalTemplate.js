// import * as React from "react";
// import { View, Text, StyleSheet } from "react-native";
// import styled from "styled-components/native";
// import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
// import { useNavigation } from "@react-navigation/native";
// const ExternalTemplate = () => {
//   const navigation = useNavigation();
//   return (
//     <View style={{ flex: 1, padding: 16 }}>
//       <View style={styles.container}>
//         {/* <List width={width}>
//         {Object.values(tasks)
//           .reverse()
//           .map((item) => (
//             <External
//               key={item.id}
//               item={item}
//               deleteLocation={_deleteLocation}
//               updateLocation={_updateLocation}
//             />
//           ))}
//       </List> */}
//         <TouchableOpacity
//           style={styles.addBtn}
//           onPress={() => navigation.navigate("ExternalAddPage")}
//         >
//           <Text style={styles.text}>추가</Text>
//         </TouchableOpacity>
//         <TextInput />
//         <TouchableOpacity
//           style={styles.deleteBtn}
//           // onPress={() => navigation.navigate("AdminLoginPage")}
//         >
//           <Text style={styles.text}>삭제</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// };

// const List = styled.ScrollView`
//   flex: 1;
//   width: ${({ width }) => width - 40}px;
// `;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   addBtn: {
//     backgroundColor: "#FFC279",
//     borderRadius: 20,
//     marginBottom: 20,
//     paddingHorizontal: 30,
//     padding: 15,
//   },
//   deleteBtn: {
//     backgroundColor: "#8DC1FF",
//     borderRadius: 20,
//     marginBottom: 20,
//     paddingHorizontal: 30,
//     padding: 15,
//   },
//   text: {
//     color: "white",
//     fontSize: 25,
//     fontWeight: "bold",
//   },
// });

// export default ExternalTemplate;
