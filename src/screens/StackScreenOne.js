import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
  FlatList,
} from "react-native";
import SearchBar from "../component/SearchBar";
import { pixelNormalize } from "../constants/Size";
import { useNavigation } from "@react-navigation/native";

const DATA = [
  {
    id: "1",
    image: require("../../assets/Kevin.png"),
    title: "Kevin Kenneth",
    message: "Hello Mandeep",
    time: "04:55 AM",
    number: "1",
  },
  {
    id: "2",
    image: require("../../assets/Steven.png"),
    title: "Steven Paul",
    message: "Hello Mandeep",
    time: "04:47 AM",
    number: "6",
  },
  {
    id: "3",
    image: require("../../assets/Images/Christopher/Chirs.png"),
    title: "Christopher Mark",
    message: "Hello Mandeep",
    time: "03:29 AM",
    number: "3",
  },
  {
    id: "4",
    image: require("../../assets/Images/Richard/Ric.png"),
    title: "Richard Thomas",
    message: "Hello Mandeep",
    time: "03:20 AM",
    number: "2",
  },
  {
    id: "5",
    image: require("../../assets/Images/James/James.png"),
    title: "James David",
    message: "Hello Mandeep",
    time: "02:24 AM",
    number: "4",
  },

  {
    id: "6",
    image: require("../../assets/Kevin.png"),
    title: "Kevin Kenneth",
    message: "Hello Mandeep",
    time: "04:55 AM",
    number: "1",
  },
  {
    id: "7",
    image: require("../../assets/Steven.png"),
    title: "Steven Paul",
    message: "Hello Mandeep",
    time: "04:47 AM",
    number: "6",
  },
  {
    id: "8",
    image: require("../../assets/Images/Christopher/Chirs.png"),
    title: "Christopher Mark",
    message: "Hello Mandeep",
    time: "03:29 AM",
    number: "3",
  },
  {
    id: "9",
    image: require("../../assets/Images/Richard/Ric.png"),
    title: "Richard Thomas",
    message: "Hello Mandeep",
    time: "03:20 AM",
    number: "2",
  },
  {
    id: "10",
    image: require("../../assets/Images/James/James.png"),
    title: "James David",
    message: "Hello Mandeep",
    time: "02:24 AM",
    number: "4",
  },

  {
    id: "11",
    image: require("../../assets/Kevin.png"),
    title: "Kevin Kenneth",
    message: "Hello Mandeep",
    time: "04:55 AM",
    number: "1",
  },
  {
    id: "12",
    image: require("../../assets/Steven.png"),
    title: "Steven Paul",
    message: "Hello Mandeep",
    time: "04:47 AM",
    number: "6",
  },
  {
    id: "13",
    image: require("../../assets/Images/Christopher/Chirs.png"),
    title: "Christopher Mark",
    message: "Hello Mandeep",
    time: "03:29 AM",
    number: "3",
  },
  {
    id: "14",
    image: require("../../assets/Images/Richard/Ric.png"),
    title: "Richard Thomas",
    message: "Hello Mandeep",
    time: "03:20 AM",
    number: "2",
  },
  {
    id: "15",
    image: require("../../assets/Images/James/James.png"),
    title: "James David",
    message: "Hello Mandeep",
    time: "02:24 AM",
    number: "4",
  },
];

const StackScreenOne = () => {
  const navigation = useNavigation();
  return (
    <ScrollView style={styles.mainContainer}>
      <View style={styles.searchBarStyles}>
        <View>
          <SearchBar />
        </View>
      </View>
      <View
        style={styles.image}
        // <ImageBackground></ImageBackground>
        // // resizeMode="cover"
        // source={require('../assets/Images/Background/four.png')} style={styles.image}
      >
        <View style={styles.innerContainer}>
          <View
            style={{
              flex: 0.12,
              margin: pixelNormalize(10),
              justifyContent: "center",
              width: pixelNormalize(155),
              height: pixelNormalize(21),
              alignItems: "center",
            }}
          >
            <Text
              style={{
                color: "white",
                fontSize: 14,
                fontFamily: "Poppins-bold",
              }}
            >
              All Discord Members
            </Text>
          </View>
          <FlatList
            style={styles.flatlistStyles}
            data={DATA}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.chatContainerOne}
                onPress={() => {
                  navigation.push("Discord ");
                }}
              >
                <View style={styles.containerOne}>
                  <Image source={item.image} style={styles.imageStyle} />
                </View>
                <View style={styles.containerTwo}>
                  <View style={styles.text}>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "Poppins-bold",
                        textAlign: "left",
                        fontSize: pixelNormalize(14),
                      }}
                    >
                      {item.title}
                    </Text>
                  </View>
                  <Text style={styles.messageStyles}>{item.message}</Text>
                </View>

                <View style={styles.containerThree}>
                  <Text style={styles.leftText}>{item.time}</Text>
                  <Text style={styles.numberStyleTwo}>{item.number}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item) => item.id}
          ></FlatList>
        </View>
      </View>
    </ScrollView>
  );
};
export default StackScreenOne;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "black",
    width: pixelNormalize(414),
  },
  textConatainer: {
    color: "#ffffff",
    fontFamily: "Poppins-bold",
    fontSize: pixelNormalize(20),
    flex: 0.16,
  },
  image: {
    flex: 0.82,
    justifyContent: "center",
    backgroundColor: "#0d0d0d",
  },
  searchBarStyles: {
    flex: 0.18,
    alignItems: "center",
    justifyContent: "center",
    borderBottomLeftRadius: pixelNormalize(100),
    backgroundColor: "#0d0d0d",
  },
  innerContainer: {
    backgroundColor: "#000000",
    borderTopRightRadius: pixelNormalize(100),
    flex: 1,
    justifyContent: "center",
  },
  text: {
    width: pixelNormalize(108),
    height: pixelNormalize(21),
  },
  textAboveChat: {
    color: "#ffffff",
    fontFamily: "Poppins-bold",
    fontSize: pixelNormalize(15),
    flex: 0.11,
    marginTop: pixelNormalize(10),
    marginLeft: pixelNormalize(20),
  },
  chatContainerOne: {
    color: "#ffffff",
    fontFamily: "Poppins-bold",
    fontSize: pixelNormalize(20),
    flex: 0.17,
    flexDirection: "row",
    margin: pixelNormalize(10),
  },
  containerOne: {
    color: "#ffffff",
    fontSize: pixelNormalize(20),
    flex: 0.25,
    marginLeft: pixelNormalize(15),
  },
  containerTwo: {
    color: "#ffffff",
    fontSize: pixelNormalize(20),
    flex: 0.5,
    marginRight: pixelNormalize(55),
  },
  containerThree: {
    color: "#ffffff",
    fontSize: pixelNormalize(20),
    flex: 0.25,
    alignItems: "center",
  },
  leftText: {
    color: "#ffffff",
    textAlign: "right",
    fontFamily: "Poppins-bold",
    width: pixelNormalize(59),
    height: pixelNormalize(19),
    fontSize: pixelNormalize(13),
  },
  imageStyle: {
    height: pixelNormalize(54),
    width: pixelNormalize(54),
  },
  numberStyle: {
    backgroundColor: "#e8ab1c",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: pixelNormalize(30),
    padding: pixelNormalize(2),
    marginTop: pixelNormalize(5),
    fontFamily: "Poppins-bold",
    width: pixelNormalize(22),
    height: pixelNormalize(22),
  },
  messageStyles: {
    color: "white",
    fontFamily: "Poppins-regular",
    fontSize: pixelNormalize(13),
    width: pixelNormalize(101),
    height: pixelNormalize(19),
  },
  numberStyleTwo: {
    backgroundColor: "#191919",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: pixelNormalize(30),
    padding: pixelNormalize(2),
    marginTop: pixelNormalize(5),
    fontFamily: "Poppins-bold",
    color: "#ffffff",
    width: pixelNormalize(22),
    height: pixelNormalize(22),
  },
  flatlistStyles: {
    flex: 0.88,
  },
});
