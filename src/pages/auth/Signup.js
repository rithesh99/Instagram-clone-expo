import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  Button,
  TextInput,
  ToastAndroid,
  TouchableOpacity,
} from "react-native";

import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import firebase from "firebase";

function Signup() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorField, setErrorField] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = () => {
    if (!email) {
      Toastr("Email", "Enter a valid email");
    } else if (!name) {
      Toastr("Name", "Enter a valid name");
    } else if (!username) {
      Toastr("Username", "Enter a valid username");
    } else if (!password) {
      Toastr("Password", "Enter a valid password");
    } else {
      firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((authenticate) => {
          return authenticate.user
            .updateProfile({
              name: name,
              username: username,
            })
            .then(() => {
              setEmail("");
              setName("");
              setUsername("");
              setPassword("");
            })
            .then(() => {
              navigation.navigate("DashboardPage");
            });
        })
        .catch((error) => {
          Toastr("Error", error.message);
        });
    }
  };
  const Toastr = (field, msg) => {
    Toast.show({
      type: "error",
      position: "top",
      text1: field,
      text2: `${msg} 👋`,
      visibilityTime: 3000,
      autoHide: true,
      topOffset: 30,
      bottomOffset: 40,
      onShow: () => {},
      onHide: () => {},
      onPress: () => {},
    });
  };
  return (
    <View style={styles.signup}>
      <View style={styles.signup__border}>
        <Image
          style={styles.signup__logo}
          source={{ uri: "https://fontmeme.com/images/instagram-new-logo.png" }}
          resizeMode={"contain"}
        />
        <Text style={styles.signup__text__1}>
          Sign up to see photos and videos from your friends.
        </Text>
        <Text style={styles.signup__text__2}>
          <AntDesign name="facebook-square" size={14} color="white" /> Log in
          with Facebook
        </Text>
        <Text
          style={{ textAlign: "center", color: "#c1c1c1", paddingVertical: 5 }}
        >
          {" "}
          OR{" "}
        </Text>

        <TextInput
          style={[styles.signup__textinput, { marginTop: 8 }]}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={[styles.signup__textinput, { marginTop: 8 }]}
          onChangeText={setName}
          value={name}
          placeholder="Full Name"
        />
        <TextInput
          style={[styles.signup__textinput, { marginTop: 8 }]}
          onChangeText={setUsername}
          value={username}
          placeholder="Username"
        />
        <TextInput
          style={[styles.signup__textinput, { marginTop: 8 }]}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
        />
        <TouchableOpacity onPress={() => handleSubmit()}>
          <Text style={styles.signup__text__2}>Sign up</Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.signup__text__1,
            { fontWeight: "500", color: "#c4c4c4" },
          ]}
        >
          By signing up, you agree to our Terms, Data Policy and Cookies Policy.
        </Text>
      </View>

      <View style={styles.signup__border__2}>
        <Text style={styles.signup__border__2__text}>Have an account?</Text>
        <TouchableOpacity onPress={() => navigation.navigate("Login")}>
          <Text style={{ color: "#0da6ff" }}> Log in</Text>
        </TouchableOpacity>
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </View>
  );
}

export default Signup;

const styles = StyleSheet.create({
  signup: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  signup__border: {
    height: 520,
    width: 300,
    borderColor: "#e1e1e1",
    borderWidth: 2,
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  signup__logo: {
    width: "100%",
    height: 55,
  },
  signup__text__1: {
    textAlign: "center",
    fontSize: 14,
    color: "#a1a1a1",
    fontWeight: "600",
    fontFamily: "system-ui",
    paddingVertical: 5,
  },
  signup__text__2: {
    marginVertical: 10,
    paddingVertical: 8,
    backgroundColor: "#2e8fff",
    color: "white",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "500",
  },
  signup__textinput: {
    borderColor: "#c1c1c1",
    borderWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: "#f5f6f7",
  },
  signup__border__2: {
    height: 70,
    width: 300,
    borderColor: "#e1e1e1",
    borderWidth: 2,
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 10,
    marginTop: 15,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
});
