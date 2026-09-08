import { Tabs } from "expo-router";
import { Notebook } from "lucide-react-native"

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home', 
          tabBarIcon: ({color, focused}) => <Notebook></Notebook>}} />
      <Tabs.Screen name="period_tracker" options={{ title: 'Period Tracker' }} />
    </Tabs>);
}
