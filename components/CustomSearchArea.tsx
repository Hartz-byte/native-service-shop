import React from "react";
import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { Feather } from "@expo/vector-icons";

import PreferenceIcon from "../assets/images/PreferenceIcon.png";

type CustomSearchAreaProps = {
  type: "type1" | "type2";
};

const CustomSearchArea = ({ type }: CustomSearchAreaProps) => {
  const isType1 = type === "type1";

  return (
    <View style={[styles.container, isType1 ? styles.type1 : styles.type2]}>
      <Feather
        name="search"
        size={24}
        color={isType1 ? "#FF8A00" : "#FF6694"}
        style={styles.icon}
      />
      <TextInput
        placeholder="What are you looking for?"
        placeholderTextColor={isType1 ? "#959595" : "#FF6694"}
        style={[styles.input, isType1 ? styles.type1Input : styles.type2Input]}
      />

      {type === "type2" && (
        <TouchableOpacity>
          <Image source={PreferenceIcon} style={styles.image} />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    borderRadius: 12,
  },
  icon: {
    marginLeft: 10,
  },
  input: {
    flex: 1,
    height: 46,
    paddingHorizontal: 10,
    fontSize: 16,
  },
  type1: {
    width: 240,
    backgroundColor: "white",
  },
  type2: {
    width: 342,
    backgroundColor: "#FFEDF2",
  },
  type1Input: {
    color: "#000",
  },
  type2Input: {
    color: "#FF6694",
  },
  image: {
    marginRight: 15,
  },
});

export default CustomSearchArea;
