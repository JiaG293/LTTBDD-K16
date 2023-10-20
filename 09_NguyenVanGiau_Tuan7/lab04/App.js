import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Screen4a from "./views/Screen4a";
import Screen4b from "./views/Screen4b";

export default function App() {
  return (
    <View style={styles.container}>
      <Screen4a></Screen4a>
      {/* <Screen4b></Screen4b> */}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
