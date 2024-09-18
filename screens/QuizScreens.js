import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "./SettingsScreen";
import AddScreen from "./AddScreen";
import RecipeScreen from "./RecipeScreen";
import LandingOne from "./Landing1";
import LandingThree from "./Landing3";
import LandingTwo from "./Landing2";
import { TouchableOpacity, GestureHandlerRootView } from "react-native-gesture-handler";
import QuizOne from "./Quiz1";
import QuizTwo from "./Quiz2";
import QuizThree from "./Quiz3";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const QuizScreens = ({navigation}) => {



  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="Quiz1"
        component={QuizOne}
        options={{ animation: "slide_from_right",
          headerShown: false,
         }}
      />
      <MainStacks.Screen
        name="Quiz2"
        component={QuizTwo}
        options={{ animation: "slide_from_right",
          headerShown: false,
         }}
      />
      <MainStacks.Screen
        name="Quiz3"
        component={QuizThree}
        options={{ animation: "slide_from_right",
          headerShown: false,
         }}
      />
    </MainStacks.Navigator>
  );
};

export default QuizScreens;
