import { FontAwesome } from '@expo/vector-icons'
import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Ionicons } from '@expo/vector-icons'; 

import Constants from "expo-constants";
const hasNotch = Constants.statusBarHeight;

const calculateHeight = () => {
    if (Platform.OS === "ios") {
      if (hasNotch > 24) {
        return 45;
      } else {
        return 30;
      }
    } else {
      if (hasNotch > 24) {
        return 45;
      } else {
        return 30;
      }
    }
  };

const Profile = () => {
    return (
        <View style={styles.profile}>
            <View style={styles.profile__header}>
                <Text>
                    hell_inheven
                </Text>
                <View style={{display:"flex", flexDirection: "row", alignItems: "center"}}>
                <FontAwesome name="plus-square" size={24} color={"black"} />
                <Ionicons name="ios-reorder-three" size={34} color="black" />
            
                </View>
            </View>
            <View style={styles.profile__details}>
                <Image
                style={styles.profile__details__image}
                />
                <View style={styles.profile__details__numbers}>
                <Text>36</Text>
                <Text>276</Text>
                <Text>455</Text>
                </View>
                <View style={styles.profile__details__numbers}>
                <Text>Posts</Text>
                <Text>Followers</Text>
                <Text>Following</Text>
                </View>
            </View>
            <View style={styles.profile__details__description}>
                <Text>Royal mech</Text>
                <Text>Royal mech</Text>
                <Text>Royal mech</Text>
                <Text>Royal mech</Text>
                <Text>Royal mech</Text>
                <Text>Royal mech</Text>
            </View>
            <View style={styles.profile__edit}>
                <Text>
                    Edit profile
                </Text>
            </View>
            <View style={styles.profile__photos}>
                <Image/>
                <Image/>
                <Image/>
            </View>
        </View>
    )
}

export default Profile

const styles = StyleSheet.create({
    profile: {
      height: "100%",
    paddingTop: calculateHeight()
    },
    profile__header: {
        display: "flex",
        flexDirection: "row",
        alignItems:"center",
        justifyContent: "space-between"
    }
  });
  