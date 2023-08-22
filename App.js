
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import cover from "./Screens/cover";
import Task from "./Screens/Task";
import todotask from "./Screens/todotask";
import completedtask from "./Screens/completedtask";
const Stack = createNativeStackNavigator()
const App = () => {

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="cover" component={cover} />
        <Stack.Screen name="Task" component={Task} />
        <Stack.Screen name="todotask" component={todotask} />
        <Stack.Screen name="completedtask" component={completedtask} />

      </Stack.Navigator>
    </NavigationContainer>
  )
};
export default App;
