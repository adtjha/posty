import React from "react";
import "react-native-gesture-handler";
import { StyleSheet, Text, TouchableOpacity, Dimensions } from "react-native";

const styles = StyleSheet.create({
  appButtonContainer: {
    width: Dimensions.get("window").width * 0.4,
    elevation: 8,
    backgroundColor: "#fff",
    borderRadius: 10,
    marginTop: 20,
    marginBottom: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: 10,
  },
  appButtonText: {
    fontSize: 18,
    color: "#8f8f8f",
    alignSelf: "center",
    textTransform: "uppercase",
    fontSize: 24,
    paddingRight: 20,
    paddingLeft: 20,
    paddingTop: 10,
    paddingBottom: 10,
  },
});

export const AppButton = ({ onPress, title }) => (
  <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
    <Text style={styles.appButtonText}>{title}</Text>
  </TouchableOpacity>
);
