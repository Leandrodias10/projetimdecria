import { Slot } from "expo-router";
import { StyleSheet, View } from "react-native";
import { PaperProvider } from 'react-native-paper';

export default function Layout() {
  return (
    <PaperProvider>
    <View style={styles.container}>
    <Slot />
    </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ' #fff'
  }
});