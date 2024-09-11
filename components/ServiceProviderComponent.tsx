import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Entypo } from "@expo/vector-icons";

import ProviderImage from "../assets/images/provider.png";
import VectorImage6 from "../assets/images/vector6.png";
import VectorImage7 from "../assets/images/vector7.png";

// providers map
const providers = [{ id: 1 }, { id: 2 }, { id: 3 }];

const ServiceProviderComponent = () => {
  return (
    <View>
      {/* text and button */}
      <View style={[styles.exploreContainer, { marginTop: 30 }]}>
        <Text style={styles.exploreText}>Service Providers</Text>

        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" size={24} color="black" />
        </TouchableOpacity>
      </View>

      {/* provider card */}
      {providers.map((provider) => (
        <View style={styles.cardContainer} key={provider.id}>
          {/* provider image */}
          <Image source={ProviderImage} />

          {/* text and button */}
          <View style={styles.container}>
            <Text style={styles.providerName}>Rohit Singhania</Text>

            <Text style={styles.text}>
              Lorem ipsum dolor sit amet consectetur. Eget{"\n"}commodo ipsum.
            </Text>

            <TouchableOpacity style={styles.button}>
              <Text style={styles.buttonText}>Know More</Text>
            </TouchableOpacity>
          </View>

          {/* design */}
          <>
            <Image source={VectorImage6} style={styles.image1} />
            <Image source={VectorImage7} style={styles.image2} />
          </>
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
  cardContainer: {
    marginTop: 10,
    paddingHorizontal: 20,
    gap: 20,
    flexDirection: "row",
    alignItems: "center",
    width: 342,
    height: 99,
    borderRadius: 15,
    backgroundColor: "#FFE7EA",
  },
  providerName: {
    fontFamily: "SFPRODISPLAYBOLD",
    lineHeight: 16.71,
  },
  text: {
    fontFamily: "SFPRODISPLAYMEDIUM",
    fontSize: 10,
  },
  button: {
    width: 66,
    height: 19,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#CF76DD",
  },
  buttonText: {
    color: "#ffffff",
    fontSize: 8,
    fontFamily: "SFPRODISPLAYBOLD",
  },
  container: {
    gap: 5,
  },
  image1: {
    position: "absolute",
    bottom: 0,
    zIndex: -9,
    borderBottomLeftRadius: 20,
  },
  image2: {
    position: "absolute",
    top: 0,
    right: 0,
    zIndex: -9,
    borderTopRightRadius: 20,
  },
});

export default ServiceProviderComponent;
