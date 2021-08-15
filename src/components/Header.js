import React from "react";
import { Image, View, StyleSheet, Text, Platform } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons, Feather } from "@expo/vector-icons";
import Constants from "expo-constants";
const hasNotch = Constants.statusBarHeight;

const calculateHeight = () => {
  if (Platform.OS === "ios") {
    if (hasNotch > 24) {
      return 85;
    } else {
      return 70;
    }
  } else {
    if (hasNotch > 24) {
      return 85;
    } else {
      return 70;
    }
  }
};
const Header = () => {
  return (
    <View style={styles.header}>
      <MaterialIcons name="camera-alt" size={24} color="black" />
      <Image
        style={styles.header__logo}
        source={{ uri: "https://fontmeme.com/images/instagram-new-logo.png" }}
        resizeMode={"contain"}
      />
      <Feather name="send" size={24} color="black" />
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  header: {
    paddingTop: 20,
    height: calculateHeight(),
    display: "flex",
    flexDirection: "row",
    backgroundColor: "white",
    alignItems: "center",
    paddingHorizontal: 15,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  header__logo: {
    width: "50%",
    height: "80%",
    flex: 1,
  },
});
