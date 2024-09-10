import { StyleSheet, Text, View } from "react-native";
import React from "react";

import CustomSearchArea from "./CustomSearchArea";

const WelcomeBoxComponent = () => {
  return (
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
  );
};

const styles = StyleSheet.create({
  welcomeContainer: {
    position: "absolute",
    top: 120,
    width: 296,
    height: 195,
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
});

export default WelcomeBoxComponent;
