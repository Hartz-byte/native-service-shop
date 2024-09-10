import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import HeaderComponent from "@/components/HeaderComponent";
import CustomSearchArea from "@/components/CustomSearchArea";

const Petcare = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      {/* header component */}
      <HeaderComponent />

      <View style={styles.container}>
        {/* custom search area */}
        <CustomSearchArea type="type2" />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: "#fff",
  },
  container: {
    width: "100%",
    height: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    top: -20,
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
});

export default Petcare;
