import React from "react";
import { useNavigation } from "@react-navigation/native";
import { View, StyleSheet, TouchableOpacity, Button, ImageBackground, Text } from "react-native";
import {login} from '../../assets/index'
import { kingdom } from "../../assets/index";
import {Kingdom} from "./kingdom";

export default function Login() {
    const navigation = useNavigation();
    function entrar() {
      navigation.navigate("Kingdom")
    }
  return (
    <View style={[styles.container, specificStyle.specificContainer]}>
        <ImageBackground source={login} resizeMode="stretch" style={{ flex:1, justifyContent: "center", position: 'relative'}}>
            <TouchableOpacity 
              onPress={entrar}>
                <Text style={{ 
                  width: "56%",
                  height: "10%",
                  marginTop: 415,
                  left: 86,
                  right: 75, 
                  backgroundColor: "transparent" }}>
                </Text>
            </TouchableOpacity>
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
