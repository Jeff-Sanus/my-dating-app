import React, { useState } from "react";
import { View, Text, StyleSheet, Image } from "react-native"; // ✅ FIX: Import StyleSheet
import Swiper from "react-native-deck-swiper";

const users = [
  { id: 1, name: "Emily", age: 25, image: "https://randomuser.me/api/portraits/women/44.jpg" },
  { id: 2, name: "Jake", age: 27, image: "https://randomuser.me/api/portraits/men/45.jpg" },
  { id: 3, name: "Sophie", age: 23, image: "https://randomuser.me/api/portraits/women/46.jpg" },
];

export default function SwipeScreen() {
  const [index, setIndex] = useState(0);

  return (
    <View style={styles.container}>
      <Swiper
        cards={users}
        renderCard={(user) => (
          <View style={styles.card}>
            <Image source={{ uri: user.image }} style={styles.image} />
            <Text style={styles.text}>{user.name}, {user.age}</Text>
          </View>
        )}
        onSwipedRight={() => alert("Liked!")}
        onSwipedLeft={() => alert("Disliked!")}
        onSwiped={(cardIndex) => setIndex(cardIndex + 1)}
        onSwipedAll={() => alert("No more users!")}
        stackSize={2}
        backgroundColor={"#fff"}
        cardVerticalMargin={20}
      />
    </View>
  );
}

const styles = StyleSheet.create({ // ✅ FIX: StyleSheet is now defined
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: 300,
    height: 400,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
  },
  image: {
    width: 250,
    height: 300,
    borderRadius: 10,
  },
  text: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
  },
});
