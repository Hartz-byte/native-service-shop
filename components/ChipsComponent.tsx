import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as React from "react";
import { LinearGradient } from "expo-linear-gradient";

import ContructionImage from "../assets/images/construction.png";
import EntertainmentImage from "../assets/images/entertainment.png";
import EventsImage from "../assets/images/events.png";
import HealthcareImage from "../assets/images/healthcare.png";
import HomecareImage from "../assets/images/homecare.png";
import PetcareImage from "../assets/images/petcare.png";

const ChipsComponent = () => {
  return (
    <View style={styles.mainContainer}>
      {/* construction and entertainment */}
      <View style={styles.flex}>
        {/* construction */}
        <TouchableOpacity>
          <LinearGradient
            colors={["#FFFFFF", "#CBE0FF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.container, { width: 134 }]}
          >
            <Image source={ContructionImage} style={styles.image} />
            <Text style={styles.text}>Construction</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* entertainment */}
        <TouchableOpacity>
          <LinearGradient
            colors={["#FFFFFF", "#FFE9BE"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.container, { width: 142 }]}
          >
            <Image source={EntertainmentImage} style={styles.image} />
            <Text style={styles.text}>Entertainment</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* pet care, home care and events */}
      <View style={styles.flex}>
        {/* pet care */}
        <TouchableOpacity>
          <LinearGradient
            colors={["#FEF2F3", "#FFB0DD"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.container, { width: 106 }]}
          >
            <Image source={PetcareImage} style={styles.image} />
            <Text style={styles.text}>Pet Care</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* home care */}
        <TouchableOpacity>
          <LinearGradient
            colors={["#FFFFFF", "#C0FCF6"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.container, { width: 123 }]}
          >
            <Image source={HomecareImage} style={styles.image} />
            <Text style={styles.text}>Home Care</Text>
          </LinearGradient>
        </TouchableOpacity>

        {/* events */}
        <TouchableOpacity>
          <LinearGradient
            colors={["#FFFFFF", "#FFC8AB"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.container, { width: 95 }]}
          >
            <Image source={EventsImage} style={styles.image} />
            <Text style={styles.text}>Events</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>

      {/* health care */}
      <View style={styles.flex}>
        <TouchableOpacity>
          <LinearGradient
            colors={["#FFFFFF", "#CFCFFF"]}
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            style={[styles.container, { width: 106 }]}
          >
            <Image source={HealthcareImage} style={styles.image} />
            <Text style={styles.text}>Health Care</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    paddingHorizontal: 20,
  },
  container: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 5,
    alignItems: "center",
    height: 40,
    borderRadius: 20,
    borderColor: "#CBE0FF",
    borderWidth: 1,
    paddingHorizontal: 10,
  },
  image: {},
  text: {
    fontFamily: "SFPRODISPLAYSEMIBOLDITALIC",
    fontSize: 12,
    lineHeight: 14.32,
    color: "#333333",
  },
  flex: {
    flexDirection: "row",
    gap: 10,
    marginTop: 10,
  },
});

export default ChipsComponent;
