import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, ImageBackground, Text, TouchableOpacity } from "react-native";
import { kingdom } from "../../assets";

export default function Kingdom() {
  const navigation = useNavigation();
    function army() {
      navigation.navigate("Military")
    }
    function log() {
      navigation.navigate("Log")
    }
  
  

  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
        <ImageBackground source={kingdom} resizeMode="stretch" style={{ flex:1, position: 'relative'}}>
          <View>
          <TouchableOpacity 
              onPress={army}>
                <Text style={{ 
                  width: "17%",
                  height: "10%",
                  marginTop: 700,
                  left: 6,
                  right: 75, 
                  backgroundColor: "transparent" }}>
                </Text>
                
          </TouchableOpacity>
          </View>
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
