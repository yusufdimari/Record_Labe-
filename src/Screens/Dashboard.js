import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import AppScreen from "../Components/AppScreen";
import { Colors, Fonts } from "../Components/Constants";
import MIcons from "@expo/vector-icons/MaterialCommunityIcons";
import IIcons from "@expo/vector-icons/Ionicons";

export default function Dashboard() {
  const tracks = [
    {
      id: 1,
      title: "testing to see the length of overflow",
      artist: "Dev Mana",
      image: require("../../assets/default.png"),
    },
    {
      id: 1,
      title: "On the Low",
      artist: "Dev Mana",
      image: require("../../assets/default.png"),
    },
    {
      id: 1,
      title: "On the Low",
      artist: "Dev Mana",
      image: require("../../assets/default.png"),
    },
    {
      id: 1,
      title: "On the Low",
      artist: "Dev Mana",
      image: require("../../assets/default.png"),
    },
    {
      id: 1,
      title: "On the Low",
      artist: "Dev Mana",
      image: require("../../assets/default.png"),
    },
    {
      id: 1,
      title: "On the Low",
      artist: "Dev Mana",
      image: require("../../assets/default.png"),
    },
    {
      id: 1,
      title: "On the Low",
      artist: "Dev Mana",
      image: require("../../assets/default.png"),
    },
    {
      id: 1,
      title: "On the Low",
      artist: "Dev Mana",
      image: require("../../assets/default.png"),
    },
    {
      id: 1,
      title: "On the Low",
      artist: "Dev Mana",
      image: require("../../assets/default.png"),
    },
    {
      id: 1,
      title: "On the Low",
      artist: "Dev Mana",
      image: require("../../assets/default.png"),
    },
    {
      id: 1,
      title: "On the Low",
      artist: "Dev Mana",
      image: require("../../assets/default.png"),
    },
    {
      id: 1,
      title: "On the Low",
      artist: "Dev Mana",
      image: require("../../assets/default.png"),
    },
  ];
  const [search, setSearch] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <AppScreen>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Text style={styles.title}>Welcome Hassanu Jiddah</Text>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <IIcons name="cart-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <View>
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchInput}
            onChangeText={(text) => setSearch(text)}
            placeholder={"Search for Records"}
          />
          <MIcons name="magnify" size={20} color={Colors.primary} />
        </View>
        <TouchableOpacity style={{ marginRight: 20 }}>
          <IIcons name="options-outline" size={20} color={Colors.primary} />
        </TouchableOpacity>
      </View>
      <View style={styles.header}></View>
      <ScrollView>
        <View style={styles.container}>
          {tracks.map((track) => {
            return (
              <TouchableOpacity
                style={styles.track}
                onLongPress={() => console.log("pressed")}
              >
                <Image source={track.image} style={styles.cover}></Image>
                <Text style={styles.trackTitle}>{track.title}</Text>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </AppScreen>
  );
}

const styles = StyleSheet.create({
  title: {
    fontSize: Fonts.size.medium,
    fontWeight: Fonts.weight.bold,
    color: Colors.primary,
    marginLeft: 20,
    marginBottom: 10,
    marginTop: 20,
  },
  container: {
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    // overflow: "scroll",
  },
  searchContainer: {
    borderWidth: 1,
    borderColor: Colors.primary,
    marginBottom: 10,
    marginHorizontal: 20,
    padding: 10,
    borderRadius: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  searchInput: {
    backgroundColor: Colors.white,
    padding: 5,
    width: "90%",
  },
  track: {
    width: 150,
    margin: 10,
  },
  cover: {
    width: 150,
    height: 150,
    borderRadius: 20,
    borderColor: Colors.primary,
    borderWidth: 1,
    marginBottom: 10,
  },
  trackTitle: {
    textAlign: "center",
    textTransform: "capitalize",
  },
});
