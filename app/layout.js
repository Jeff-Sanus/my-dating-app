import { Stack } from "expo-router";

export default function Layout() {
  return (
    <Stack
      screenOptions={{
        headerShown: true, // ✅ Shows the navigation bar
        headerStyle: { backgroundColor: "red" }, // Purple navbar
        headerTintColor: "#444", // White text
        headerTitleStyle: { fontWeight: "bold" }, // Bold title
      }}
    >
      <Stack.Screen name="index" options={{ title: "Home" }} />
      <Stack.Screen name="explore" options={{ title: "Explore" }} />
    </Stack>
  );
}
