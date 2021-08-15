import React from "react";
import { Image, View, StyleSheet, Text } from "react-native";
import { SimpleLineIcons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Posts = ({ data }) => {
  return (
    <View style={styles.post}>
      <View style={styles.post__header}>
        <Image
          style={styles.post__header__image}
          source={{
            uri: `${data.uri}`,
          }}
          resizeMode={"cover"}
        />
        <Text style={styles.post__header__text}>{data.by}</Text>
        <SimpleLineIcons
          name="options-vertical"
          size={24}
          color="black"
          style={{ position: "absolute", right: 8 }}
        />
      </View>
      <Image
        style={styles.post__image}
        source={{
          uri: `${data.uri}`,
        }}
        resizeMode="contain"
      />
      <View style={styles.post__buttons}>
        <TouchableOpacity>
          <Feather
            name="heart"
            size={24}
            color="black"
            style={{ padding: 8 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <FontAwesome5
            name="comment"
            size={24}
            color="black"
            style={{ padding: 8 }}
          />
        </TouchableOpacity>
        <TouchableOpacity>
          <Feather name="send" size={24} color="black" style={{ padding: 8 }} />
        </TouchableOpacity>
      </View>
      <View style={styles.post__details}>
        <Text style={{ fontWeight: "bold" }}>{data.likes} likes</Text>
      </View>
    </View>
  );
};

export default Posts;

const styles = StyleSheet.create({
  post: {
    height: 420,
    backgroundColor: "white",
    marginBottom: 1,
  },
  post__header: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    height: 50,
  },
  post__header__image: {
    width: 30,
    height: 30,
    borderRadius: 50,
    marginRight: 10,
  },
  post__header__text: {
    fontSize: 20,
    fontWeight: "bold",
    // fontFamily: "Futura_Medium"
  },
  post__image: {
    height: 300,
    width: "auto",
    backgroundColor: "#f7f7f7",
  },
  post__buttons: {
    height: 50,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  },
  post__details: {
    height: 20,
    paddingLeft: 10,
  },
});
