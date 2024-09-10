import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { LinearGradient } from "expo-linear-gradient";
import { Octicons, Ionicons } from "@expo/vector-icons";

import CustomSearchArea from "@/components/CustomSearchArea";
import ExploreCategories from "@/components/ExploreCategories";
import PopularSectors from "@/components/PopularSectors";
import RecommendedComponent from "@/components/RecommendedComponent";

const Home = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      {/* Linear gradient, and side buttons */}
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

      {/* Welcome box */}
      <View style={styles.welcomeContainer}>
        {/* texts */}
        <View style={styles.textContainer}>
          <Text style={styles.welcomeText}>
            Welcome,{"\n"}
            <Text style={styles.dreamText}>Find Your{"\n"}Dream Sector!</Text>
          </Text>
        </View>

        {/* custom search area */}
        <View style={styles.searchArea}>
          <CustomSearchArea type="type1" />
        </View>

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

      {/* radius design */}
      <View style={styles.radiusDesign} />

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
  welcomeContainer: {
    position: "absolute",
    top: 120,
    width: 296,
    height: 230,
    backgroundColor: "#EDFFCE",
    borderRadius: 30,
    borderBottomLeftRadius: 0,
    zIndex: 9,
  },
  welcomeText: {
    fontFamily: "SFPRODISPLAYMEDIUM",
    fontSize: 20,
    lineHeight: 28.64,
  },
  dreamText: {
    fontFamily: "SFPRODISPLAYBOLD",
    fontSize: 24,
  },
  textContainer: {
    marginHorizontal: 20,
    marginVertical: 20,
  },
  searchArea: {
    marginLeft: 20,
  },
  designContainer: {
    position: "absolute",
    right: 0,
    overflow: "hidden",
    borderTopRightRadius: 30,
  },
  purpleCircle: {
    width: 32,
    height: 32,
    borderRadius: 50,
    backgroundColor: "#8002FF",
    top: 15,
    zIndex: -3,
  },
  whiteCircle: {
    width: 89,
    height: 89,
    borderRadius: 50,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    zIndex: -4,
    left: 22,
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
    left: 50,
    top: -70,
  },
  radiusDesign: {
    width: "100%",
    height: 40,
    backgroundColor: "white",
    zIndex: 99,
    top: 115,
    borderTopLeftRadius: 30,
  },
});

export default Home;
