import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

import Image1 from "../assets/images/vector1.png";
import Image2 from "../assets/images/vector2.png";
import Image3 from "../assets/images/vector3.png";
import Image4 from "../assets/images/vector4.png";

// banner data
const banners = [
  {
    id: 1,
    text: "Now share the Construction\nSectors with your anyone and\ncan save it as bookmark",
    updatedTime: "Updated | 06:30 AM",
  },
  {
    id: 2,
    text: "Explore the Healthcare\nSectors and find new\nopportunities today!",
    updatedTime: "Updated | 09:45 AM",
  },
];

const RecommendedComponent = () => {
  return (
    <View>
      {/* text and button */}
      <View style={[styles.exploreContainer, { marginTop: 30 }]}>
        <Text style={styles.recommendedText}>Recommended for you</Text>

        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* banners */}
      {banners.map((banner) => (
        <View key={banner.id} style={styles.bannerContainer}>
          <View style={styles.squareBox} />

          {/* text, date and explore */}
          <View style={styles.textContainer}>
            <Text style={styles.text}>{banner.text}</Text>

            <View style={styles.flex}>
              <Text style={styles.timeText}>{banner.updatedTime}</Text>

              <TouchableOpacity style={styles.exploreButton}>
                <Text style={styles.exploreText}>Explore</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* left design */}
          <View style={styles.leftDesign}>
            <Image source={Image3} style={styles.image3} />
            <Image source={Image4} style={styles.image4} />
          </View>

          {/* right design */}
          <View style={styles.rightDesign}>
            <Image source={Image1} style={styles.image1} />
            <Image source={Image2} style={styles.image2} />
          </View>
        </View>
      ))}
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
  recommendedText: {
    fontWeight: "bold",
    lineHeight: 16.94,
  },
  bannerContainer: {
    width: 341,
    height: 115,
    backgroundColor: "#F6F4FF",
    borderRadius: 15,
    marginLeft: 20,
    marginTop: 10,
    marginBottom: 10,
    alignItems: "center",
    paddingHorizontal: 15,
    flexDirection: "row",
    gap: 10,
  },
  squareBox: {
    width: 84,
    height: 81,
    backgroundColor: "#FFC5C5",
    borderRadius: 10,
  },
  textContainer: {
    height: 81,
  },
  text: {
    fontFamily: "SFPRODISPLAYBLACKITALIC",
    fontSize: 12,
    lineHeight: 18,
  },
  flex: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  timeText: {
    fontSize: 10,
    lineHeight: 24,
  },
  exploreButton: {
    width: 76,
    height: 24,
    backgroundColor: "#995BFF",
    borderRadius: 100,
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 50,
  },
  exploreText: {
    color: "#fff",
    fontFamily: "SFPRODISPLAYBLACKITALIC",
    fontSize: 10,
  },
  leftDesign: {
    position: "absolute",
    bottom: 0,
  },
  rightDesign: {
    position: "absolute",
    top: 0,
    right: 0,
  },
  image4: {
    borderBottomLeftRadius: 20,
  },
  image3: {
    bottom: -27,
    borderBottomLeftRadius: 20,
  },
  image1: {
    borderTopRightRadius: 20,
  },
  image2: {
    right: -18,
    top: -64,
    borderTopRightRadius: 20,
  },
});

export default RecommendedComponent;
