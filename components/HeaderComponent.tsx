import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Octicons, Ionicons, Feather } from "@expo/vector-icons";

import PawImage1 from "../assets/images/paw1.png";
import PawImage2 from "../assets/images/paw2.png";
import AnimalImage1 from "../assets/images/animal1.png";
import AnimalImage2 from "../assets/images/animal2.png";
import AnimalImage3 from "../assets/images/animal3.png";

const HeaderComponent = () => {
  return (
    <LinearGradient colors={["#FCB2B5", "#F2A7BD"]} style={styles.topContainer}>
      {/* buttons */}
      <View style={styles.flex}>
        {/* Three lines icon */}
        <TouchableOpacity>
          <Octicons name="three-bars" size={28} color="black" />
        </TouchableOpacity>

        {/* Infinite icon */}
        <TouchableOpacity>
          <Ionicons
            name="infinite"
            size={30}
            color="white"
            style={styles.rotatedIcon}
          />
        </TouchableOpacity>

        {/* bell notification */}
        <TouchableOpacity style={styles.bellButton}>
          <Feather name="bell" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* text */}
      <Text style={styles.helloText}>
        Hello,{"\n"}
        <Text style={styles.fancyText}>Fancy for a wash today!</Text>
      </Text>

      {/* paw images */}
      <View>
        <Image source={PawImage1} style={styles.paw1} />
        <Image source={PawImage2} style={styles.paw2} />
      </View>

      {/* animals images */}
      <View style={styles.animalContainer}>
        <Image source={AnimalImage1} style={styles.animal1} />
        <Image source={AnimalImage2} style={styles.animal2} />
        <Image source={AnimalImage3} style={styles.animal3} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  topContainer: {
    width: "100%",
    height: 250,
    padding: 20,
    paddingTop: 60,
    backgroundColor: "#FCB2B5",
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  infiniteIconContainer: {
    position: "relative",
    alignItems: "center",
  },
  rotatedIcon: {
    transform: [{ rotateY: "180deg" }],
  },
  bellButton: {
    width: 40,
    height: 40,
    backgroundColor: "rgba(255, 255, 255, 0.2)",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 9,
  },
  helloText: {
    fontFamily: "SFPRODISPLAYBOLD",
    fontSize: 20,
    lineHeight: 23.87,
    marginTop: 10,
  },
  fancyText: {
    fontFamily: "SFPRODISPLAYMEDIUM",
    fontSize: 16,
  },
  paw1: {
    left: 10,
    top: 10,
  },
  paw2: {
    position: "absolute",
    right: -20,
    bottom: 60,
  },
  animalContainer: {
    flexDirection: "row",
  },
  animal1: {
    bottom: 45,
    left: 160,
  },
  animal2: {
    bottom: 45,
    left: 155,
  },
  animal3: {
    bottom: 45,
    left: 150,
  },
});

export default HeaderComponent;
