import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Dimensions,
  Alert,
  Image,
} from "react-native";
import { useState } from "react";

import { AppButton } from "./AppButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    maxHeight: 240,
    width: Dimensions.get("window").width * 0.8,
    marginHorizontal: 10,
    flex: 1,
    justifyContent: "space-evenly",
  },
  box: {
    width: Dimensions.get("window").width * 0.8,
    fontSize: 24,
    padding: 10,
    borderWidth: 1,
    borderColor: "#afafaf",
    borderStyle: "dashed",
    borderRadius: 10,
  },
  label: {
    paddingHorizontal: 20,
    marginVertical: 20,
    fontWeight: "bold",
    color: "#afafaf",
  },
  text: {
    height: 80,
    fontSize: 24,
  },
});

function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const verify = () => {
    if (user === "ADTJHA" && pass === "yay") {
      navigation.navigate("Posts");
    } else {
      Alert.alert(
        "Wrong Credentials",
        "Please enter only verified username and password.",
        {
          text: "OK",
        }
      );
    }
  };

  return (
    <NavigationContainer independent={true}>
      <View style={styles.container}>
        <Image
          style={{
            marginTop: 20,
          }}
          source={require("../assets/icon.png")}
        />
        <View style={styles.input}>
          <Text style={styles.box}>
            <Text style={styles.label}>USER</Text>
            <TextInput
              style={styles.text}
              onSubmitEditing={() => {}}
              onChangeText={(text) => setUser(text)}
              value={user}
            />
          </Text>
          <Text style={styles.box}>
            <Text style={styles.label}>PASS</Text>
            <TextInput
              style={styles.text}
              secureTextEntry={true}
              onSubmitEditing={() => {}}
              onChangeText={(text) => setPass(text)}
              value={pass}
            />
          </Text>
        </View>
        <AppButton onPress={verify} title="LOGIN" />
      </View>
    </NavigationContainer>
  );
}

export default Login;
