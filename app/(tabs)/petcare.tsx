import { ScrollView, StyleSheet, View } from "react-native";
import React from "react";

import HeaderComponent from "@/components/HeaderComponent";
import CustomSearchArea from "@/components/CustomSearchArea";
import CarouselComponent from "@/components/CarouselComponent";
import PopularServicesComponent from "@/components/PopularServicesComponent";
import ServiceProviderComponent from "@/components/ServiceProviderComponent";
import RatingsComponent from "@/components/RatingsComponent";

const Petcare = () => {
  return (
    <ScrollView style={styles.mainContainer}>
      {/* header component */}
      <HeaderComponent />

      <View style={styles.container}>
        {/* custom search area */}
        <CustomSearchArea type="type2" />

        {/* carousel component */}
        <CarouselComponent />

        {/* popular services component */}
        <PopularServicesComponent />

        {/* service providers component */}
        <ServiceProviderComponent />

        {/* ratings component */}
        <RatingsComponent />
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
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    top: -20,
    paddingHorizontal: 20,
    paddingTop: 40,
  },
});

export default Petcare;
