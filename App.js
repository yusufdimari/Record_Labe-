import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import BottomTabNavigator from "./src/Navigation/BottomTabNavigator";
import StackNavigator from "./src/Navigation/StackNavigator";

export default function App() {
  return (
    <>
      <StatusBar barStyle={"dark-content"} />
      <NavigationContainer>
        {/* <StackNavigator /> */}
        <BottomTabNavigator />
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
