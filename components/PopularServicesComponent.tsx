import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

import ServiceImage1 from "../assets/images/service1.png";
import ServiceImage2 from "../assets/images/service2.png";
import ServiceImage3 from "../assets/images/service3.png";
import ServiceImage4 from "../assets/images/service4.png";
import ServiceImage5 from "../assets/images/service5.png";

const PopularServicesComponent = () => {
  return (
    <View>
      {/* text and button */}
      <View style={[styles.exploreContainer, { marginTop: 30 }]}>
        <Text style={styles.exploreText}>Popular Services</Text>

        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* services cards */}
      <View style={styles.cardsContainer}>
        {/* left column */}
        <View style={styles.leftCards}>
          {/* pet grooming */}
          <View style={styles.card1}>
            <Image source={ServiceImage1} style={{ marginLeft: 25 }} />

            <Text style={styles.cardText}>Pet Grooming</Text>

            {/* circle designs */}
            <>
              <View style={styles.circle1} />
              <View style={styles.circle2} />
            </>
          </View>

          {/* pet dating */}
          <View style={styles.card2}>
            <Image source={ServiceImage2} />

            <Text style={styles.cardText}>Pet Dating</Text>

            {/* circle designs */}
            <>
              <View style={styles.circle3} />
              <View style={styles.circle4} />
            </>
          </View>

          {/* pet adoption */}
          <View style={styles.card1}>
            <Image source={ServiceImage3} />

            <Text style={styles.cardText}>Pet Adoption</Text>

            {/* circle designs */}
            <>
              <View style={styles.circle1} />
              <View style={styles.circle2} />
            </>
          </View>
        </View>

        {/* right column */}
        <View style={[styles.leftCards, { marginTop: 30 }]}>
          {/* pet walking */}
          <View style={styles.card2}>
            <Image source={ServiceImage4} />

            <Text style={styles.cardText}>Pet Walking</Text>

            {/* circle designs */}
            <>
              <View style={styles.circle5} />
              <View style={styles.circle6} />
            </>
          </View>

          {/* pet training */}
          <View style={styles.card1}>
            <Image source={ServiceImage5} />

            <Text style={styles.cardText}>Pet Training</Text>

            <>
              <View style={styles.circle7} />
              <View style={styles.circle8} />
            </>
          </View>
        </View>
      </View>
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
  cardsContainer: {
    marginTop: 10,
    flexDirection: "row",
    gap: 10,
  },
  leftCards: {
    gap: 10,
  },
  card1: {
    width: 166,
    height: 193,
    borderRadius: 30,
    backgroundColor: "#FFE7EA",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    overflow: "hidden",
  },
  card2: {
    width: 166,
    height: 140,
    borderRadius: 30,
    backgroundColor: "#FFE7EA",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
    overflow: "hidden",
  },
  cardText: {
    fontFamily: "SFPRODISPLAYBOLD",
    fontSize: 16,
  },
  circle1: {
    width: 85,
    height: 85,
    borderRadius: 50,
    backgroundColor: "#FFCBCB",
    position: "absolute",
    left: -20,
    top: -20,
    zIndex: -9,
  },
  circle2: {
    width: 89,
    height: 89,
    borderRadius: 50,
    backgroundColor: "#FFCBCB",
    position: "absolute",
    right: -44,
    bottom: -44,
    zIndex: -9,
  },
  circle3: {
    width: 92,
    height: 92,
    borderRadius: 50,
    backgroundColor: "#FFCBCB",
    position: "absolute",
    left: -35,
    bottom: -30,
    zIndex: -9,
  },
  circle4: {
    width: 61,
    height: 61,
    borderRadius: 50,
    backgroundColor: "#FFCBCB",
    position: "absolute",
    right: -20,
    top: -20,
    zIndex: -9,
  },
  circle5: {
    width: 61,
    height: 61,
    borderRadius: 50,
    backgroundColor: "#FFCBCB",
    position: "absolute",
    right: -20,
    top: -25,
    zIndex: -9,
  },
  circle6: {
    width: 61,
    height: 61,
    borderRadius: 50,
    backgroundColor: "#FFCBCB",
    position: "absolute",
    left: -28,
    bottom: -25,
    zIndex: -9,
  },
  circle7: {
    width: 61,
    height: 61,
    borderRadius: 50,
    backgroundColor: "#FFCBCB",
    position: "absolute",
    left: -10,
    top: -20,
    zIndex: -9,
  },
  circle8: {
    width: 61,
    height: 61,
    borderRadius: 50,
    backgroundColor: "#FFCBCB",
    position: "absolute",
    right: -25,
    bottom: -25,
    zIndex: -9,
  },
});

export default PopularServicesComponent;
