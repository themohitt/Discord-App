import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Custom from "../../screens/custom";
import Preview from "../../screens/Preview";
import Tab1Stack from "./Tab1Stack";
import ScreenThree from "../../screens/ScreenThree";
import ScreenTwo from "../../screens/ScreenTwo";

import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ScreenFour from "../../screens/ScreenFour";
import {pixelNormalize} from "../../constants/Size";
import {Image} from "react-native";
const Tab1Bottom = () => {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          position: "absolute",
          elevation: 0,
          height: 70,
          backgroundColor: "#0d0d0d",
          borderTopWidth: 1,
          borderTopColor: "#191919",
        },
        tabBarActiveTintColor:'#e8ab1c',
          tabBarInactiveTintColor:'#ffffff'
      }}>
      <Tab.Screen
        name="Tab1Stack"
        component={Tab1Stack}
        options={{
          headerStyle: { backgroundColor: "white",  },
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <Entypo
              name="home"
              size={30}
              color={color}
              style={{ height: 30, width: 30 }}
            />
          ),
        }}
      />
      <Tab.Screen
        name=" Discord "
        component={Preview}
        options={{
          tabBarIcon: ({ color }) => (
            <Foundation
              name="heart"
              size={30}
              color={color}
              style={{ height: 30, width: 30 }}
            />
          ),
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
            },
        }}
      />
      <Tab.Screen
        name="  Discord"
        component={ScreenThree}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-add-circle-sharp" size={50} color={color}/>
          ),
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
            },
        }}
      />
      <Tab.Screen
        name="Discord "
        component={ScreenTwo}
        options={{
          tabBarIcon: ({ color }) => (
            <Octicons
              name="bell-fill"
              size={30}
              color={color}
              style={{ height: 30, width: 30 }}
            />
          ),
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
            },
        }}
      />
      <Tab.Screen
        name=" Discord"
        component={ScreenFour}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="person"
              size={30}
              color={color}
              style={{ height: 30, width: 30 }}
            />
          ),
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
            },
        }}
      />
    </Tab.Navigator>
  );
};
export default Tab1Bottom;
