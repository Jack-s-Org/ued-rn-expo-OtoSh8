import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "@expo/vector-icons/Ionicons";
import HomeScreen from "./HomeScreen";
import NotificationsScreen from "./NotificationsScreen";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import MeScreen from "./MeScreen";
import DiscoverScreen from "./DiscoverScreen";
import AppDrawer from "./AppDrawer";
import SettingsScreen from "./SettingsScreen";
import AddScreen from "./AddScreen";
import {TouchableOpacity, Image } from 'react-native';

const MainStacks = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Empty = () => null;

const MainTabs = ({ navigation }) => {
  const [unreadCount, setUnreadCount] = useState(3);
  const [page, setPageCount] = useState(0);

  return (
    <AppDrawer navigation={navigation}>
      <SafeAreaView style={{ height: "100%" }}>

        
        <Tab.Navigator
          screenOptions={{
            headerShown: false,
            tabBarActiveTintColor: "#408086",

            tabBarStyle: {
              height: 90,
              width: 350,
              alignSelf: 'center',
              backgroundColor: "#171717",
              paddingLeft: 2,
              paddingRight: 2,
              borderRadius: 9,
              bottom: 12,
            },
            tabBarItemStyle: {
              width: 84,
              height: 88,
            },
            
          }}
        >


          <Tab.Screen
            name="Home"
            component={HomeScreen}
            options={{
              tabBarIcon: ({focused, color, size }) => {
                let iconame = (page == 0) ? require('@/assets/HomePressed.png') : require('@/assets/Home.png');

                  return (<Image style={{height: 84, width: 84}}  source={iconame}/>);
                },
              tabBarLabel: () => null,
            }}
            listeners={{
              tabPress: () => {
                setPageCount(0);
              },
            }}
          />

          <Tab.Screen
            name="Discover"
            component={DiscoverScreen}
            options={{
              tabBarIcon: ({focused, color, size }) => {
                let iconame = (page == 1) ? require('@/assets/RadarPressed.png') : require('@/assets/Radar.png');

                  return (<Image style={{height: 84, width: 84}}  source={iconame}/>);
                },
              tabBarLabel: () => null,
            }}
            listeners={{
              tabPress: () => {
                setPageCount(1);
              },
            }}
          />

          {/* <Tab.Screen
            name="AddTab"
            component={Empty} // this is a workaround to show a full screen when this tab is pressed
            options={{
              tabBarIcon: ({ color }) => (
                <Ionicons name="add" size={36} color={color} />
              ),
              tabBarLabel: () => null,
            }}
            listeners={{
              tabPress: (e) => {
                e.preventDefault(); // stop default navigation
                navigation.navigate("Add"); // manually navigate to the stack screen outside of the tab navigators
              },
            }}
          /> */}

          <Tab.Screen
            name="Inbox"
            component={NotificationsScreen}
            options={{
              tabBarIcon: ({focused, color, size }) => {
                return (<Image style={{height: 84, width: 84}}  source={require('@/assets/Community.png')}/>);
              },
              tabBarLabel: () => null,
              tabBarButton: (props) => (
                <TouchableOpacity
                  {...props}
                  disabled={true}/>
              ),
            }}
            listeners={{
              tabPress: () => {
                setPageCount(2);
              },
            }}
            
          />

          <Tab.Screen
            name="SettingsDrawer"
            component={MeScreen}
            options={{
              tabBarIcon: ({focused, color, size }) => {
                return (<Image style={{height: 84, width: 84}}  source={require('@/assets/Profile.png')}/>);
              },
              tabBarLabel: () => null,
              tabBarButton: (props) => (
                <TouchableOpacity
                  {...props}
                  disabled={true}/>
              ),
            }}
            listeners={{
              tabPress: () => {
                setPageCount(3);
              },
            }}
          />
        </Tab.Navigator>
      </SafeAreaView>
    </AppDrawer>
  );
};

const MainScreens = () => {
  return (
    <MainStacks.Navigator>
      <MainStacks.Screen
        name="MainTabs"
        component={MainTabs}
        options={{ headerShown: false }}
      />
      <MainStacks.Screen
        name="Add"
        component={AddScreen}
        options={{ animation: "fade_from_bottom" }}
      />
      <MainStacks.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ animation: "fade_from_bottom" }}
      />
    </MainStacks.Navigator>
  );
};

export default MainScreens;
