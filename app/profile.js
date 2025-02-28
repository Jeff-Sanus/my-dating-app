import { View, Text, TextInput, Button, StyleSheet } from "react-native";
import { useState } from "react";

export default function ProfileScreen() {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>👤 Edit Profile</Text>
      
      <Text>Name:</Text>
      <TextInput style={styles.input} value={name} onChangeText={setName} placeholder="Enter your name" />
      
      <Text>Bio:</Text>
      <TextInput style={styles.input} value={bio} onChangeText={setBio} placeholder="Tell us about yourself" />
      
      <Button title="Save Profile" onPress={() => alert("Profile saved!")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  input: {
    width: "80%",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
