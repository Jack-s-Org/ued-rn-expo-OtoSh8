import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import SettingsScreen from "./SettingsScreen";
import AddScreen from "./AddScreen";
import RecipeScreen from "./RecipeScreen";
import LandingOne from "./Landing1";
import LandingThree from "./Landing3";
import LandingTwo from "./Landing2";
import { TouchableOpacity, GestureHandlerRootView } from "react-native-gesture-handler";

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const LandingScreens = ({navigation}) => {



  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="Landing1"
        component={LandingOne}
        options={{ animation: "slide_from_right",
          headerShown: false,
         }}
      />
      <MainStacks.Screen
        name="Landing2"
        component={LandingTwo}
        options={{ animation: "slide_from_right",
          headerShown: false,
         }}
      />
      <MainStacks.Screen
        name="Landing3"
        component={LandingThree}
        options={{ animation: "slide_from_right",
          headerShown: false,
         }}
      />
    </MainStacks.Navigator>
  );
};

export default LandingScreens;
