// import * as React from "react";
// import { View, Text, StyleSheet, SafeAreaView } from "react-native";
// import { TouchableOpacity } from "react-native-gesture-handler";

// const SelectAuthPage = ({ navigation }) => {
//   return (
//     <SafeAreaView style={styles.safearea}>
//       <View style={{ flex: 1, padding: 16 }}>
//         <View style={styles.container}>
//           <TouchableOpacity
//             style={styles.userBtn}
//             onPress={() => navigation.navigate("UserLoginPage")}
//           >
//             <Text style={styles.text}>사용자 로그인</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.adminBtn}
//             onPress={() => navigation.navigate("AdminLoginPage")}
//           >
//             <Text style={styles.text}>관리자 로그인</Text>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </SafeAreaView>
//   );
// };

// const styles = StyleSheet.create({
//   safearea: { flex: 1, backgroundColor: "white" },
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   userBtn: {
//     backgroundColor: "#FFC279",
//     borderRadius: 20,
//     marginBottom: 20,
//     paddingHorizontal: 30,
//     padding: 15,
//   },
//   adminBtn: {
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

// export default SelectAuthPage;
