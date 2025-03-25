import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>🏡 Welcome to the Home Screen!</Text>
      <Button title="Go to Explore" onPress={() => navigation.navigate('Explore')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 24,
    fontWeight: 'bold',
  },
});


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