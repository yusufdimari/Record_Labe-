import { StyleSheet, Text } from "react-native";
import React from "react";
import AppScreen from "../../Components/AppScreen";
import { Colors } from "../../Components/Constants";

export default function LoginScreen() {
  return (
    <AppScreen>
      <Text style={styles.title}>LoginScreen</Text>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    color: Colors.secondary,
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
  },
});
