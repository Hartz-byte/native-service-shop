import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import {
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
} from "@expo/vector-icons";

import ReviewImage1 from "../assets/images/review1.png";
import ReviewImage2 from "../assets/images/review2.png";
import Vector8 from "../assets/images/vector8.png";

// review map
const review = [
  { id: 1, image: ReviewImage1 },
  { id: 2, image: ReviewImage2 },
];

const RatingsComponent = () => {
  return (
    <View>
      {/* text and button */}
      <View style={[styles.exploreContainer, { marginTop: 30 }]}>
        <Text style={styles.exploreText}>Ratings</Text>

        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* reviews and button */}
      <View style={[styles.exploreContainer, { marginTop: 15 }]}>
        <Text style={styles.reviewText}>13 Reviews</Text>

        <View style={[styles.exploreContainer, { gap: 15 }]}>
          <Text style={styles.reviewText}>WRITE A REVIEW</Text>

          <TouchableOpacity>
            <FontAwesome5 name="edit" size={16} color="#FF6694" />
          </TouchableOpacity>
        </View>
      </View>

      {/* banner */}
      {review.map((item) => (
        <View style={styles.bannerContainer} key={item.id}>
          {/* texts */}
          <View>
            <Text style={styles.name}>Pooja Jain</Text>

            {/* bone ratings */}
            <View style={styles.boneContainer}>
              <MaterialCommunityIcons name="bone" size={22} color="#FFB800" />
              <MaterialCommunityIcons name="bone" size={22} color="#FFB800" />
              <MaterialCommunityIcons name="bone" size={22} color="#FFB800" />
              <MaterialCommunityIcons name="bone" size={22} color="#FFB800" />
              <MaterialCommunityIcons name="bone" size={22} color="gray" />
            </View>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur. Eget{"\n"}commodo ipsum.
            </Text>
          </View>

          {/* image */}
          <Image source={item.image} style={styles.image} />

          {/* design */}
          <Image source={Vector8} style={styles.design} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  exploreContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  exploreText: {
    fontWeight: "bold",
    lineHeight: 16.94,
  },
  reviewText: {
    color: "#FF6694",
    fontFamily: "SFPRODISPLAYBOLD",
  },
  bannerContainer: {
    marginTop: 15,
    width: 342,
    height: 99,
    borderRadius: 15,
    borderWidth: 2,
    borderColor: "#FFCCD2",
    paddingLeft: 15,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    fontFamily: "SFPRODISPLAYBOLD",
  },
  text: {
    fontFamily: "SFPRODISPLAYMEDIUM",
    fontSize: 10,
  },
  boneContainer: {
    flexDirection: "row",
  },
  image: {
    borderTopRightRadius: 15,
    borderBottomRightRadius: 15,
  },
  design: {
    position: "absolute",
    left: 0,
    bottom: 0,
    borderTopLeftRadius: 15,
    borderBottomLeftRadius: 15,
    zIndex: -9,
  },
});

export default RatingsComponent;
