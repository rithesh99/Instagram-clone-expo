import React from "react";
import { Text, View, StyleSheet, ScrollView } from "react-native";
import Header from "../components/Header";
import Posts from "../components/Post";
import Status from "../components/Status";

function Home() {
  const data = [
    {
      id: "1",
      uri: "https://images.pexels.com/photos/2811087/pexels-photo-2811087.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      by: "Crazy_footballer",
      likes: "19,344",
    },
    {
      id: "2",
      uri: "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      by: "Hell_in__heaven",
      likes: "21",
    },
    {
      id: "3",
      uri: "https://images.pexels.com/photos/3981337/pexels-photo-3981337.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      by: "dooby_boy",
      likes: "3",
    },
    {
      id: "4",
      uri: "https://images.pexels.com/photos/2739792/pexels-photo-2739792.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      by: "rockstar_raja",
      likes: "2,340",
    },
    {
      id: "5",
      uri: "https://images.pexels.com/photos/3437045/pexels-photo-3437045.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      by: "power_pandi",
      likes: "87",
    },
  ];
  return (
    <View style={styles.container}>
      <Header />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Status />
        {data &&
          data.map((post, i) => {
            return <Posts data={post} key={i} />;
          })}
      </ScrollView>
    </View>
  );
}

export default Home;

const styles = StyleSheet.create({
  container: {
    height: "100%",
  },
});
