import { StatusBar } from "expo-status-bar";
import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { HelloWorld } from "./app/HelloWorld";

export default function App() {
  return (
    <SafeAreaView>
      <View style={styles.container}>
        <HelloWorld />
        <StatusBar
          style="auto"
          animated
          backgroundColor="#B5C0D0"
          translucent
          hideTransitionAnimation="slide"
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F5E8DD",
  },
});
