import { Tabs } from "expo-router";
import { Foundation, Feather, FontAwesome5 } from "@expo/vector-icons";
import { View, Text } from "react-native";

export default function Layout() {
  return (
    <Tabs
      initialRouteName="home"
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: {
          backgroundColor: "white",
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.1,
          shadowRadius: 10,
          elevation: 5,
          borderTopWidth: 0,
          height: 64,
          paddingLeft: 10,
          paddingRight: 10,
        },
        tabBarActiveTintColor: "#CF76DD",
        tabBarInactiveTintColor: "#000",
      }}
    >
      {/* home */}
      <Tabs.Screen
        name="home"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: focused ? "#EEE6FF" : "transparent",
                borderRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 8,
                gap: 6,
              }}
            >
              <Foundation
                name="home"
                size={24}
                color={focused ? "#905CFF" : "#000"}
              />
              {focused && (
                <Text
                  style={{
                    color: "#060735",
                    fontSize: 14,
                    fontFamily: "Lato-Bold",
                  }}
                >
                  Home
                </Text>
              )}
            </View>
          ),
        }}
      />

      {/* search */}
      <Tabs.Screen
        name="search"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: focused ? "#EEE6FF" : "transparent",
                borderRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 8,
                gap: 6,
              }}
            >
              <Feather
                name="search"
                size={24}
                color={focused ? "#905CFF" : "#000"}
              />
              {focused && (
                <Text
                  style={{
                    color: "#060735",
                    fontSize: 14,
                    fontFamily: "Lato-Bold",
                  }}
                >
                  Search
                </Text>
              )}
            </View>
          ),
        }}
      />

      {/* video */}
      <Tabs.Screen
        name="video"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: focused ? "#EEE6FF" : "transparent",
                borderRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 8,
                gap: 6,
              }}
            >
              <Feather
                name="play-circle"
                size={24}
                color={focused ? "#905CFF" : "#000"}
              />
              {focused && (
                <Text
                  style={{
                    color: "#060735",
                    fontSize: 14,
                    fontFamily: "Lato-Bold",
                  }}
                >
                  Video
                </Text>
              )}
            </View>
          ),
        }}
      />

      {/* profile */}
      <Tabs.Screen
        name="profile"
        options={{
          headerShown: false,
          tabBarIcon: ({ focused, color, size }) => (
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                backgroundColor: focused ? "#EEE6FF" : "transparent",
                borderRadius: 20,
                paddingHorizontal: 20,
                paddingVertical: 8,
                gap: 6,
              }}
            >
              <FontAwesome5
                name="user"
                size={24}
                color={focused ? "#905CFF" : "#000"}
              />
              {focused && (
                <Text
                  style={{
                    color: "#060735",
                    fontSize: 14,
                    fontFamily: "Lato-Bold",
                  }}
                >
                  Profile
                </Text>
              )}
            </View>
          ),
        }}
      />
    </Tabs>
  );
}
