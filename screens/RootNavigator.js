import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MainScreens from "./MainScreens";
import LandingScreens from "./LandingScreens";
import QuizScreens from "./QuizScreens";

const Stack = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Landing" component={LandingScreens} />
        <Stack.Screen name="Main" component={MainScreens} />
        <Stack.Screen name="Quiz" component={QuizScreens} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;
