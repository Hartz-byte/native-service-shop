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

const Home = () => {
  return (
    <View style={styles.mainContainer}>
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
      </View>

      {/* explore categories */}
      <View>
        <View style={styles.borderDesign} />
      </View>
    </View>
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
    padding: 30,
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
    marginHorizontal: 30,
    marginVertical: 20,
  },
  searchArea: {
    marginLeft: 30,
  },
  borderDesign: {
    width: "100%",
    height: 20,
    backgroundColor: "red",
    zIndex: 99,
    top: 115,
  },
});

export default Home;
