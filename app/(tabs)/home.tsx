import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Octicons, Ionicons } from "@expo/vector-icons";

import ExploreCategories from "@/components/ExploreCategories";
import PopularSectors from "@/components/PopularSectors";
import RecommendedComponent from "@/components/RecommendedComponent";
import WelcomeBoxComponent from "@/components/WelcomeBoxComponent";

const Home = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      {/* linear gradient, and side buttons */}
      <LinearGradient
        colors={["#9766FF", "#F7F3FF"]}
        style={styles.purpleDesign}
      >
        {/* Three lines icon */}
        <TouchableOpacity>
          <Octicons name="three-bars" size={28} color="white" />
        </TouchableOpacity>

        {/* Infinite icon */}
        <View style={styles.infiniteIconContainer}>
          <TouchableOpacity>
            <Ionicons name="infinite" size={30} color="white" />
          </TouchableOpacity>

          {/* Notification circle */}
          <View style={styles.notificationCircle} />
        </View>
      </LinearGradient>

      {/* welcome box component */}
      <WelcomeBoxComponent />

      {/* radius design */}
      <View style={styles.radiusContainer}>
        <View style={styles.radiusDesign} />
      </View>

      {/* explore categories component */}
      <ExploreCategories />

      {/* popular sectors component */}
      <PopularSectors />

      {/* recommended for you component */}
      <RecommendedComponent />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    position: "relative",
    backgroundColor: "white",
  },
  purpleDesign: {
    width: "100%",
    height: 200,
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottomLeftRadius: 50,
    borderBottomRightRadius: 50,
    padding: 20,
    paddingTop: 60,
  },
  infiniteIconContainer: {
    position: "relative",
    alignItems: "center",
  },
  notificationCircle: {
    position: "absolute",
    top: -5,
    right: -5,
    width: 12,
    height: 12,
    backgroundColor: "#FF8A00",
    borderRadius: 6,
  },
  radiusContainer: {
    top: 115,
    backgroundColor: "#EDFFCE",
    width: 250,
  },
  radiusDesign: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    borderTopLeftRadius: 30,
  },
});

export default Home;
