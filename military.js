import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from "react-native";
import { military } from "../../assets";

export default function Military() {
  const navigate = useNavigation();

  
  

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
        <ImageBackground source={military} resizeMode="stretch" style={{ flex:1, position: 'relative'}}>
            
        </ImageBackground>   
    </View>
  );
}

const specificStyle = StyleSheet.create({
    specificContainer: {
      backgroundColor: "#ccc"
    },
    login: {
      width: "56%",
      marginTop: 563,
      left: 86,
      right: 75,
      backgroundColor: 'white'
    }
    
  })

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: "center",
    borderColor: "#000",
    borderWidth: 3,
    borderStyle: "Solid"
  },
});
