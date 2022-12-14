import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import LoginScreen from "../Screens/Auth/LoginScreen";
import Dashboard from "../Screens/Dashboard";
import MIcons from "@expo/vector-icons/MaterialCommunityIcons";
import { Colors } from "../Components/Constants";
import ProfileScreen from "../Screens/ProfileScreen";
import AlbumsScreen from "../Screens/AlbumsScreen";

export default function BottomTabNavigator() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: { backgroundColor: Colors.white },
        tabBarActiveTintColor: Colors.primary,
      }}
    >
      {/* <Tab.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={{
          tabBarIcon: () => {
            return <MIcons name="login" color={Colors.primary} size={25} />;
          },
        }}
      /> */}
      <Tab.Screen
        name="DashBoard"
        component={Dashboard}
        options={{
          tabBarIcon: () => {
            return <MIcons name="home" color={Colors.primary} size={25} />;
          },
        }}
      />
      <Tab.Screen
        name="AlbumsScreen"
        component={AlbumsScreen}
        options={{
          tabBarIcon: () => {
            return <MIcons name="album" color={Colors.primary} size={25} />;
          },
          title: "Albums",
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: () => {
            return <MIcons name="account" color={Colors.primary} size={25} />;
          },
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({});
