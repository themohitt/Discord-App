import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Custom from "../../screens/custom";
import Favorite from "../../screens/Favorite";
import TabOneStack from "./TabOneStack";
import Posts from "../../screens/Posts";
import Bell from "../../screens/Bell";

import { Entypo } from "@expo/vector-icons";
import { Foundation } from "@expo/vector-icons";
import { Octicons } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import ScreenFour from "../../screens/ID";
import { pixelNormalize } from "../../constants/Size";
import { Image } from "react-native";
import ID from "../../screens/ID";
const TabOneBottom = () => {
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
        tabBarActiveTintColor: "#e8ab1c",
        tabBarInactiveTintColor: "#ffffff",
      }}
    >
      <Tab.Screen
        name="Tab1Stack"
        component={TabOneStack}
        options={{
          headerStyle: { backgroundColor: "white" },
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
        component={Favorite}
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
        component={Posts}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons name="md-add-circle-sharp" size={50} color={color} />
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
        component={Bell}
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
        component={ID}
        options={{
          tabBarIcon: ({ color }) => (
            <Ionicons
              name="person"
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
export default TabOneBottom;
