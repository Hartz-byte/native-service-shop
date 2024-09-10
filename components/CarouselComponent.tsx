import React, { useState } from "react";
import { StyleSheet, View, Text, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { LinearGradient } from "expo-linear-gradient";

import GrromingImage from "../assets/images/grooming.png";
import VectorImage from "../assets/images/vector5.png";

const CarouselComponent = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const data = ["Item 1", "Item 2", "Item 3"];

  return (
    <View style={styles.container}>
      <Carousel
        loop
        width={342}
        height={127}
        autoPlay={true}
        data={data}
        scrollAnimationDuration={1000}
        onSnapToItem={(index) => setCurrentIndex(index)}
        renderItem={({ item, index }) => (
          <LinearGradient
            colors={["#FCB2B5", "#F2A7BD"]}
            key={index}
            style={styles.carouselItem}
          >
            {/* discount */}
            <View style={styles.discountWrapper}>
              <View style={styles.discountContainer}>
                <Text style={styles.bookText}>BOOK{"\n"}NOW!</Text>
                <Text style={styles.percentageText}>-20%</Text>
              </View>
            </View>

            {/* text */}
            <Text style={styles.groomerText}>
              All-New{"\n"}Groomers{"\n"}in Town!
            </Text>

            {/* image */}
            <View>
              <Image source={GrromingImage} style={styles.groomingImage} />

              <Image source={VectorImage} style={styles.vectorImage} />
            </View>

            {/* Dots (Pagination) */}
            <View style={styles.paginationContainer}>
              {data.map((_, index) => (
                <View
                  key={index}
                  style={[
                    styles.dot,
                    currentIndex === index
                      ? styles.activeDot
                      : styles.inactiveDot,
                  ]}
                />
              ))}
            </View>
          </LinearGradient>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  carouselItem: {
    flex: 1,
    borderRadius: 20,
    marginHorizontal: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  discountWrapper: {
    width: 110,
    height: 137,
    overflow: "hidden",
    position: "relative",
    borderTopLeftRadius: 28,
    borderBottomLeftRadius: 28,
  },
  discountContainer: {
    width: 137,
    height: 137,
    backgroundColor: "#FFD7E5",
    borderRadius: 70,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: -40,
  },
  bookText: {
    fontFamily: "SFPRODISPLAYBLACKITALIC",
    fontSize: 15,
    color: "#FF6694",
    marginLeft: 20,
  },
  percentageText: {
    fontFamily: "SFPRODISPLAYBOLD",
    marginLeft: 40,
  },
  groomerText: {
    fontFamily: "SFPRODISPLAYBOLD",
    fontSize: 18,
  },
  groomingImage: {
    zIndex: 15,
  },
  vectorImage: {
    position: "absolute",
    right: 0,
    bottom: 0,
    borderTopRightRadius: 32,
  },
  paginationContainer: {
    position: "absolute",
    flexDirection: "row",
    marginTop: 10,
    bottom: 10,
    left: 140,
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  activeDot: {
    backgroundColor: "#FF6694",
  },
  inactiveDot: {
    backgroundColor: "#FFD7E5",
  },
});

export default CarouselComponent;
