import { Platform, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { Colors } from "./Constants";

export default function AppScreen({ children }) {
  return (
    <SafeAreaView
      style={{
        marginTop: Platform.OS == "android" ? 40 : 0,
        backgroundColor: Colors.white,
        flex: 1,
      }}
    >
      {children}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
