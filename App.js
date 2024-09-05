import RootNavigator from "./screens/RootNavigator";
import "./gesture-handler";
import "./app.css";
import * as Font from 'expo-font';

const loadFonts = async () => {
  await Font.loadAsync({
    'K2D': require('@/assets/fonts/K2D.ttf'),
    'K2DBOLD': require('@/assets/fonts/K2D-Bold.ttf'),
    // Add more fonts here if needed
  });
};

export default function App() {
  return <RootNavigator />;
}
