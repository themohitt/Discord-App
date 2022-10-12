import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import Home from "../screens/Home";
import Preview from "../screens/Preview";
import Tab1Bottom from "./tab/Tab1Bottom";
const Stack = createNativeStackNavigator();
const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} 
         options={{
          // headerStyle:{ backgroundColor:"#dfa8e4" },
          headerShown:false
        }}
        />
        <Stack.Screen name="Tab1Bottom" component={Tab1Bottom} 
        options={{
          headerStyle:{ backgroundColor:"#dfa8e4" },
          headerShown:false
        }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default AppNavigator;
