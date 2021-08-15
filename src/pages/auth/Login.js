import React, { useState } from "react";
import { Text, View, StyleSheet, Image, Button, TextInput, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import firebase from "firebase";
import Toast from "react-native-toast-message";

function Login() {
  const navigation = useNavigation();

  const [email, setEmail] = useState("user@gmail.com");
  const [password, setPassword] = useState("12345678");

  const handleSubmit = () => {
    if(!email){ 
      Toastr("Email", "Enter a valid email");
    } else if(!password){
      Toastr("Password", "Enter a valid password");
    } else {
      firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate("DashboardPage");
      })
      .catch(error => {
        Toastr("Error", error.message);
      });
    }
  }

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
    <View style={styles.login}>
      <View style={styles.login__border}>
        <Image
          style={styles.login__logo}
          source={{ uri: "https://fontmeme.com/images/instagram-new-logo.png" }}
          resizeMode={"contain"}
        />

        <TextInput
          style={[styles.login__textinput, { marginTop: 8 }]}
          onChangeText={setEmail}
          value={email}
          placeholder="Email"
        />
        <TextInput
          style={[styles.login__textinput, { marginTop: 8 }]}
          onChangeText={setPassword}
          value={password}
          placeholder="Password"
        />
        <TouchableOpacity onPress={() => handleSubmit()}>
          <Text style={styles.login__text__2}>Log in</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.login__forget}>forget password ?</Text>
        </TouchableOpacity>
        <Text
          style={{ textAlign: "center", color: "#c1c1c1", paddingVertical: 5 }}
        >
          OR
        </Text>
        <Text style={styles.login__text__2}>
          <AntDesign name="facebook-square" size={14} color="white" /> Log in
          with Facebook
        </Text>
      </View>

      <View style={styles.login__border__2}>
        <Text style={styles.login__border__2__text}>
          Don't have an account?
        </Text>
        <TouchableOpacity onPress={() => navigation.navigate("Signup")}>
          <Text style={{ color: "#0da6ff" }}> Sign up</Text>
        </TouchableOpacity>
      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />

    </View>
  );
}

export default Login;

const styles = StyleSheet.create({
  login: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  login__border: {
    height: 360,
    width: 300,
    borderColor: "#e1e1e1",
    borderWidth: 2,
    backgroundColor: "white",
    paddingHorizontal: 30,
    paddingVertical: 10,
  },
  login__logo: {
    width: "100%",
    height: 55,
  },
  login__text__1: {
    textAlign: "center",
    fontSize: 14,
    color: "#a1a1a1",
    fontWeight: "600",
    fontFamily: "system-ui",
    paddingVertical: 5,
  },
  login__text__2: {
    marginVertical: 10,
    paddingVertical: 8,
    backgroundColor: "#2e8fff",
    color: "white",
    textAlign: "center",
    fontSize: 12,
    fontWeight: "800",
  },
  login__forget: {
    paddingVertical: 8,
    textAlign: "center",
    color: "#5100ff",
  },
  login__textinput: {
    borderColor: "#c1c1c1",
    borderWidth: 0.5,
    paddingVertical: 10,
    paddingHorizontal: 8,
    backgroundColor: "#f5f6f7",
  },
  login__border__2: {
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
