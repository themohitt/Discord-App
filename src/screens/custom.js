import { View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

const Custom = () => {
  const navigation = useNavigation();
  return (
    <View style={sty.mainContainer}>
      <TouchableOpacity
        style={sty.touchableStyles}
        onPress={() => {
          navigation.push("Preview");
        }}
      >
        <Text style={{ color: "white" }}>Home</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Custom;

const sty = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  touchableStyles: {
    backgroundColor: "black",
    padding: 20,
  },
});