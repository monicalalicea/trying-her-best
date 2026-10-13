import { Text, View, StyleSheet } from "react-native";
import { PieChart } from "react-native-gifted-charts";

export default function PeriodTracker() {
  const pieData = [
    {value: 5},
    {value: 9},
    {value: 3}
  ];
  return (
    <View style={styles.container}>
      <PieChart
        donut
        innerCircleBorderWidth={28}
        data = {pieData}
        ></PieChart>
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
