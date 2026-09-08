import { Text, View, StyleSheet } from "react-native";

export default function PeriodTracker() {
  return (
    <View style={styles.container}>
      <Text>Period Tracker</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ffe4e1",
    alignItems: "center",
    justifyContent: "center",
  },
});
