import React, { useFocusEffect, useEffect } from "react";
import { Text, View, StyleSheet, BackHandler, Alert } from "react-native";

// const backAction = () => {
//         Alert.alert("Hey Barker!", "¿Quieres salir de la App?", [
//           {
//             text: "CANCERLAR",
//             onPress: () => null,
//             style: "cancel"
//           },
//           { text: "SÍ", onPress: () => BackHandler.exitApp() }
//         ]);
//         return true;
//       };
      
//       backHandler = BackHandler.addEventListener(
//         "hardwareBackPress",
//         backAction
//       );
export default ()=>{

useEffect(() => {
    const backAction = () => {
      Alert.alert("Hold on!", "Are you sure you want to go back?", [
        {
          text: "Cancel",
          onPress: () => null,
          style: "cancel"
        },
        { text: "YES", onPress: () => BackHandler.exitApp() }
      ]);
      return true;
    };

    // const backHandler =
    BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return() => BackHandler.removeEventListener("hardwareBackPress",backAction);
    
  }, []);






// useFocusEffect(
//       React.useCallback(() => {
//         const backAction = () => {
//           Alert.alert("Hey Barker!", "¿Quieres salir de la App?", [
//             {
//               text: "CANCERLAR",
//               onPress: () => null,
//               style: "cancel"
//             },
//             { text: "SÍ", onPress: () => BackHandler.exitApp() }
//           ]);
//           return true;
//         };
        
//         BackHandler.addEventListener("hardwareBackPress", backAction);
        
//         return() => BackHandler.removeEventListener('hardwareBackPress', backAction);
//       },[])
// )

  return (
    <View >
      
    </View>
  );
}





