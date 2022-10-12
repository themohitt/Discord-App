import { View, Text } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StackScreenOne from "../../screens/StackScreenOne";
import StackScreenTwo from "../../screens/StackScreenTwo";
import { pixelNormalize } from "../../constants/Size";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "react-native";

const TabOneStack = () => {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator options={{ height: 104, width: 414 }}>
      <Stack.Screen
        name="Discord"
        component={StackScreenOne}
        options={{
          headerLeft: () => (
            <Ionicons
              name="grid"
              size={pixelNormalize(24)}
              color="white"
              style={{ width: pixelNormalize(24), height: pixelNormalize(24) }}
            />
          ),
          headerLeftContainerStyle: { paddingLeft: pixelNormalize(20) },
          headerTitleAlign: "center",
          headerTitleStyle: {
            width: pixelNormalize(76),
            height: pixelNormalize(28),
          },
          headerTintColor: "white",
          headerStatusBarHeight: pixelNormalize(104),
          headerRight: () => (
            <Image
              source={require("../../../assets/Images/Background/ele.png")}
              style={{ width: pixelNormalize(36), height: pixelNormalize(36) }}
            />
          ),
          headerRightContainerStyle: { marginRight: pixelNormalize(10) },
          headerStyle: {
            backgroundColor: "#0d0d0d",
            height: 104,
          },
        }}
      ></Stack.Screen>

      <Stack.Screen
        name="Discord "
        component={StackScreenTwo}
        options={{
          headerLeft: () => (
            <Ionicons
              name="grid"
              size={pixelNormalize(24)}
              color="white"
              style={{ width: pixelNormalize(24), height: pixelNormalize(24) }}
            />
          ),
          headerLeftContainerStyle: { paddingLeft: pixelNormalize(20) },
          headerTitleAlign: "center",
          headerTitleStyle: {
            width: pixelNormalize(76),
            height: pixelNormalize(28),
          },
          headerTintColor: "white",
          headerStatusBarHeight: pixelNormalize(10),
          headerRight: () => (
            <Image
              source={require("../../../assets/Images/Background/ele.png")}
              style={{ width: pixelNormalize(36), height: pixelNormalize(36) }}
            />
          ),
          headerRightContainerStyle: { marginRight: pixelNormalize(10) },
          headerStyle: {
            backgroundColor: "#0d0d0d",
            height: 104,
          },
        }}
      />
    </Stack.Navigator>
  );
};
export default TabOneStack;
