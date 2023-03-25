import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { FC } from "react";
import BridgeScreen from "./screens/bridgescreen";
import MainScreen from "./screens/mainscreen";
import SearchScreen from "./screens/searchscreen";
import { RootNavigatorProps } from "./types";
import Ionicons from "@expo/vector-icons/Ionicons";
import Micons from "@expo/vector-icons/MaterialCommunityIcons";

const Tab = createBottomTabNavigator<RootNavigatorProps>();

const Main: FC = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerTitleAlign: "center" }}>
        <Tab.Screen
          options={{
            tabBarLabel: "Home",
            headerTitle: "Home",
            tabBarIcon: ({ color }) => (
              <Ionicons name="home" size={30} color={color} />
            ),
          }}
          name="mainscreen"
          component={MainScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Search",
            headerTitle: "Search",
            tabBarIcon: ({ color }) => (
              <Ionicons name="search" size={30} color={color} />
            ),
          }}
          name="searchscreen"
          component={SearchScreen}
        />
        <Tab.Screen
          options={{
            tabBarLabel: "Bridge",
            headerTitle: "Bridge",
            tabBarIcon: ({ color }) => (
              <Micons name="bridge" size={30} color={color} />
            ),
          }}
          name="bridgescreen"
          component={BridgeScreen}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default Main;
