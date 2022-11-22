import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Login from "./pages/login";
import Kingdom from "./pages/kingdom";
import Military from "./pages/military";
import Log from "./pages/log"

const Stack = createStackNavigator();

function MyStack() {
  return (
    
      <Stack.Navigator>
        <Stack.Screen name="Login" component={Login} options={{ headerShown: false}} />
        <Stack.Screen name="Kingdom" component={Kingdom} options={{ headerShown: false}} />
        <Stack.Screen name="Military" component={Military} options={{ headerShown: false}} />
        <Stack.Screen name="Log" component={Log} options={{ headerShown: false}} />
      </Stack.Navigator>
    
  );
}

export default function Routes() {
    return (
        <NavigationContainer>
            <MyStack />
        </NavigationContainer>
    );
  }