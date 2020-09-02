import React from "react";
import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Login from "./components/Login";
import Posts from "./components/Posts";
import { TextInput } from "react-native-gesture-handler";

const Stack = createStackNavigator();

const UselessTextInput = () => {
  const [value, onChangeText] = React.useState("Useless Placeholder");

  return (
    <TextInput
      style={{ height: 40, borderColor: "gray", borderWidth: 1 }}
      onChangeText={(text) => onChangeText(text)}
      value={value}
    />
  );
};

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Login"
          component={Login}
          title="Login"
          options={{ headerShown: false }}
        />
        {/* <Stack.Screen name="Posts" component={Posts} /> */}
        <Stack.Screen name="Posts" component={UselessTextInput} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
