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
  SafeAreaView,
} from "react-native";
import { useState } from "react";

import { AppButton } from "./AppButton";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingVertical: 50,
  },
  input: {
    maxHeight: 160,
    minHeight: 160,
    width: Dimensions.get("window").width * 0.9,
    marginHorizontal: 8,
    marginVertical: 16,
    flex: 1,
    justifyContent: "space-evenly",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#afafaf",
    borderStyle: "dashed",
    borderRadius: 10,
  },
  box: {
    height: 30,
    width: Dimensions.get("window").width * 0.8,
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 5,
  },
  label: {
    height: 40,
    width: 80,
    fontSize: 24,
    textAlign: "left",
    fontWeight: "bold",
    color: "#afafaf",
  },
  text: {
    height: 40,
    flex: 1,
    fontSize: 24,
    alignContent: "center",
    paddingHorizontal: 10,
    backgroundColor: "#efefef",
    borderRadius: 10,
  },
});

function Login({ navigation }) {
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  const verify = () => {
    if (user === "ADTJHA" && pass === "yaya") {
      navigation.navigate("Posts");
    } else {
      Alert.alert(
        "Wrong Credentials",
        "Please enter only verified username and password.",
        [
          {
            text: "OK",
            onPress: () => console.log("Re-enter username, password"),
          },
        ]
      );
    }
  };

  return (
    <NavigationContainer independent={true}>
      <SafeAreaView style={styles.container}>
        <Image
          style={{
            marginTop: 20,
          }}
          source={require("../assets/icon.png")}
        />
        <View style={styles.input}>
          <View style={styles.box}>
            <Text style={styles.label}>USER</Text>
            <TextInput
              style={styles.text}
              placeholder="type user name here."
              onSubmitEditing={() => {}}
              onChangeText={(text) => setUser(text)}
              value={user}
            />
          </View>
          <View style={styles.box}>
            <Text style={styles.label}>PASS</Text>
            <TextInput
              style={styles.text}
              placeholder="********"
              secureTextEntry={true}
              onSubmitEditing={() => {}}
              onChangeText={(text) => setPass(text)}
              value={pass}
            />
          </View>
        </View>
        <AppButton onPress={verify} title="LOGIN" />
      </SafeAreaView>
    </NavigationContainer>
  );
}

export default Login;
