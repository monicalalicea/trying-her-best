import { Tabs } from "expo-router";
import { Notebook } from "lucide-react-native"
import { Ionicons } from '@react-native-vector-icons/ionicons';

export default function TabLayout() {
  return (
    <Tabs>
      <Tabs.Screen 
        name="index" 
        options={{ 
          title: 'Home', 
          tabBarIcon: ({color, focused}) => <Notebook></Notebook>
        }} />
      <Tabs.Screen 
        name="period_tracker" 
        options={{ 
          title: 'Period Tracker' 
        }} />
      <Tabs.Screen 
        name="medical_stuff" 
        options={{
          title: 'Medical Stuff',
          tabBarIcon: ({color, focused}) => <Ionicons name="medical"></Ionicons>
        }} />
    </Tabs>
  );
}
