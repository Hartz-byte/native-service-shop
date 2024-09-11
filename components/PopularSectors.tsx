import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

import CardImage1 from "../assets/images/CardImage1.png";
import CardImage2 from "../assets/images/CardImage2.png";

const PopularSectors = () => {
  return (
    <View>
      {/* text and button */}
      <View style={[styles.exploreContainer, { marginTop: 30 }]}>
        <Text style={styles.exploreText}>Popular Sectors</Text>

        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* cards */}
      <View style={styles.cardsContainer}>
        {/* home service */}
        <View style={styles.homeserviceContainer}>
          {/* text */}
          <Text style={styles.text}>Home{"\n"}Service</Text>

          {/* image */}
          <Image source={CardImage1} style={styles.image} />

          {/* circle design */}
          <View style={styles.designContainer}>
            {/* purple circle */}
            <View style={styles.purpleCircle} />

            {/* yellow circle */}
            <View style={styles.whiteCircle}>
              <View style={styles.yellowCircle} />
            </View>

            {/* red circle */}
            <View style={styles.redCircle} />
          </View>
        </View>

        {/* health care */}
        <View style={styles.healthcareContainer}>
          {/* text */}
          <Text style={styles.text}>Healthcare</Text>

          {/* image */}
          <Image source={CardImage2} style={styles.image} />

          {/* circle design */}
          <View style={styles.designContainer}>
            {/* purple circle */}
            <View style={styles.purpleCircle} />

            {/* yellow circle */}
            <View style={styles.whiteCircle}>
              <View style={styles.yellowCircle} />
            </View>

            {/* red circle */}
            <View style={styles.redCircle} />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  exploreContainer: {
    paddingHorizontal: 20,
    marginTop: 115,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  exploreText: {
    fontWeight: "bold",
    lineHeight: 16.94,
  },
  cardsContainer: {
    flexDirection: "row",
    gap: 10,
    paddingHorizontal: 20,
    marginTop: 10,
  },
  homeserviceContainer: {
    width: 163,
    height: 140,
    backgroundColor: "#EDFFCE",
    borderRadius: 20,
  },
  healthcareContainer: {
    width: 163,
    height: 140,
    backgroundColor: "#CEFFF3",
    borderRadius: 20,
  },
  text: {
    fontFamily: "SFPRODISPLAYBOLD",
    paddingLeft: 15,
    paddingTop: 15,
    fontSize: 18,
  },
  image: {
    position: "absolute",
    right: 8,
    bottom: 0,
  },
  designContainer: {
    position: "absolute",
    right: 0,
    overflow: "hidden",
    borderTopRightRadius: 20,
    zIndex: -9,
  },
  purpleCircle: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: "#fff",
    top: 15,
    left: 20,
    zIndex: -3,
  },
  whiteCircle: {
    width: 89,
    height: 89,
    borderRadius: 50,
    backgroundColor: "#C9B0FF",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -4,
    left: 38,
    top: -60,
  },
  yellowCircle: {
    width: 60,
    height: 60,
    borderRadius: 50,
    backgroundColor: "#FFE600",
  },
  redCircle: {
    width: 17,
    height: 17,
    borderRadius: 50,
    backgroundColor: "#FF5E5E",
    zIndex: -3,
    left: 65,
    top: -70,
  },
});

export default PopularSectors;
