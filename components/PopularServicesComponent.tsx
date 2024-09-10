import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

import { Entypo } from "@expo/vector-icons";

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
    </View>
  );
};

const styles = StyleSheet.create({
  exploreContainer: {
    paddingHorizontal: 20,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  exploreText: {
    fontWeight: "bold",
    lineHeight: 16.94,
  },
});

export default PopularServicesComponent;
