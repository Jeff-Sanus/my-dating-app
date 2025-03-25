

import React from "react";
import { View, Text, Button } from "react-native";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text>Welcome to My Dating App</Text>
      <Button title="Go to Chat" onPress={() => navigation.navigate("Chat")} />
    </View>
  );
}