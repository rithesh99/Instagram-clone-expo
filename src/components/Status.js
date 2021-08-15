import React from "react";
import { Image, View, StyleSheet, Text, ScrollView } from "react-native";
import { FontAwesome, FontAwesome5 } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { TouchableOpacity } from "react-native-gesture-handler";

const Status = () => {
  const data = [
    {
      id: "1",
      uri: "https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      by: "Crazy_fo..",
      seen: false,
    },
    {
      id: "2",
      uri: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      by: "Hell_hea..",
      seen: false,
    },
    {
      id: "3",
      uri: "https://images.pexels.com/photos/3981337/pexels-photo-3981337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      by: "dooby_b..",
      seen: true,
    },
    {
      id: "4",
      uri: "https://images.pexels.com/photos/2739792/pexels-photo-2739792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      by: "rockstara..",
      seen: true,
    },
    {
      id: "5",
      uri: "https://images.pexels.com/photos/3437045/pexels-photo-3437045.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      by: "p_pandi",
      seen: true,
    },
  ];

  return (
    <ScrollView
      style={styles.status}
      horizontal
      showsHorizontalScrollIndicator={false}
    >
      <View style={styles.status__circle}>
        <Image
          style={styles.status__circle__image__1}
          source={{
            uri: "https://c4.wallpaperflare.com/wallpaper/630/774/531/david-beckham-wallpaper-preview.jpg",
          }}
          resizeMode={"cover"}
        />
        <Ionicons
          name="ios-add-circle"
          size={22}
          color="#00aeff"
          style={{ position: "absolute", right: 0, bottom: 24 }}
        />
        <Text style={styles.status__text}>Your story</Text>
      </View>
      {data &&
        data.map((status, i) => {
          return (
            <View style={styles.status__circle} key={i}>
              <TouchableOpacity>
                <Image
                  style={[
                    styles.status__circle__image,
                    status.seen
                      ? { borderWidth: 2.5, borderColor: "orange" }
                      : { borderWidth: 2.5, borderColor: "grey" },
                  ]}
                  source={{
                    uri: `${status.uri}`,
                  }}
                  resizeMode={"cover"}
                  onPress={() => console.log("CLICKED")}
                />
                <Text style={styles.status__text}>{status.by}</Text>
              </TouchableOpacity>
            </View>
          );
        })}
    </ScrollView>
  );
};

export default Status;

const styles = StyleSheet.create({
  status: {
    height: "15%",
    backgroundColor: "#fffaff",
    marginTop: 1.5,
  },
  status__circle: {
    paddingHorizontal: 5,
    paddingVertical: 8,
    alignItems: "center",
    justifyContent: "space-between",
  },
  status__circle__image__1: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 5,
  },
  status__circle__image: {
    width: 60,
    height: 60,
    borderRadius: 50,
    marginBottom: 5,
  },
  status__text: {
    fontSize: 12,
  },
});
