// import * as React from "react";
// import { View, Text, StyleSheet, SafeAreaView } from "react-native";
// import { TextInput, TouchableOpacity } from "react-native-gesture-handler";
// import NetInfo from "@react-native-community/netinfo";
// import { useNavigation } from "@react-navigation/native";

// const wifiConnect = () => {
//   const { name, ssid, bssid } = useSelector({name, ssid, bssid});
//   // Location.requestPermissionsAsync();
//   NetInfo.fetch().then((state) => {
//     console.log("SSID", state.details.ssid);
//     console.log("ipAddress", state.details.ipAddress);
//     console.log("BSSID", state.details.bssid);
//     console.log("frequency", state.details.frequency);
//     console.log("Is connected?", state.isConnected);
//     setWifiInfo(state.details.ssidme, state.details.bssid);
//   });
// };

// const ExternalAdd = ({ props }) => {
//   const navigation = useNavigation();
//   return (
//         <View style={styles.container}>
//           <TouchableOpacity style={styles.button} onPress={wifiConnect}>
//             <Text style={styles.text}>수집시작</Text>
//           </TouchableOpacity>
//           {/* <TextInput/> */}
//           <TouchableOpacity
//             style={styles.button}
//             // onPress={() => navigation.navigate("AdminLoginPage")}
//           >
//             <Text style={styles.text}>등록</Text>
//           </TouchableOpacity>
//           <TouchableOpacity
//             style={styles.button}
//             onPress={() => props.navigation.goBack()}
//           >
//             <Text style={styles.text}>취소</Text>
//           </TouchableOpacity>
//         </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   button: {
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

// export default ExternalAdd;


// // const btnevent = async () => {
// //   const permission = await Expo.Permissions.getAsync(Expo.Permissions.CONTACTS);
// //   if (permission.status !== "granted") {
// //     return;
// //   }
// //   const { data } = await Contacts.getContactsAsync({
// //     fields: [Contacts.Fields.PhoneNumbers],
// //   });
// //   this.setState({ contacs: data });
// // };
// // const wifiManage = async () => {
// //   WifiManager.connectToProtectedSSID(ssid, password, isWep).then(

// //     () => {
// //       console.log("Connected successfully!");
// //     },
// //     () => {
// //       console.log("Connection failed!");
// //     }
// //   );

// //   WifiManager.getCurrentWifiSSID().then(
// //     (ssid) => {
// //       console.log("Your current connected wifi SSID is " + ssid);
// //     },
// //     () => {
// //       console.log("Cannot get current SSID!");
// //     }
// //   );
// // };

// // const ConnectToNetwork = async() => {
// // WifiManager.setEnabled(true);
// // WifiManager.disconnect();
// //WifiManager.forceWifiUsage(true);

// //   PermissionsAndroid.request(
// //     PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
// //     {
// //       title: "",
// //       message: "",
// //       buttonNegative: "",
// //       buttonPositive: "",
// //     }
// //   ).then((granted) => {
// //     //console.log(granted);
// //     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
// //       //console.log("granted");
// //       RNAndroidLocationEnabler.promptForEnableLocationIfNeeded({
// //         interval: 10000,
// //         fastInterval: 5000,
// //       })
// //         .then((data) => {
// //           // WifiManager.connectToProtectedSSID(
// //           //   "YourSSIDName",
// //           //   "YourPassword",
// //           //   false
// //           // ).then(
// //           //   () => {
// //           //     console.log("connectToProtectedSSID successfully!");
// //           //   },
// //           //   (reason) => {
// //           //     console.log("connectToProtectedSSID failed!");
// //           //     console.log(reason);
// //           //   }
// //           // );
// //           // console.log("location enabled");
// //           WifiManager.connectToProtectedSSID("", "", false)
// //           WifiManager.getCurrentWifiSSID().then(
// //             (ssid) => {
// //               if (ssid == "YourSSIDName") {
// //               } else {
// //               }
// //               console.log("Your current connected wifi SSID is " + ssid);
// //             },
// //             () => {
// //               console.log("Cannot get current SSID!");
// //             }
// //           );
// //         })
// //         .catch((err) => {
// //           console.log("not permitted to enable location");
// //         });
// //     } else {
// //       console.log("not granted");
// //       // Permission denied
// //     }
// //     // expected output: "Success!"
// //   });
// // };
