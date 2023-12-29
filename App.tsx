import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Front from "./src/Components/Front/Front";
import Login from "./src/Components/Login/Login";
import Register from "./src/Components/Register/Register";
import Home from "./src/Components/Home/Home";
import Profile from "./src/Components/Profile/Profile";
import SelectPickLocation from "./src/Components/SelectPickLocation/SelectPickLocation";
import History from "./src/Components/History/History";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Front"
          component={Front}
          options={{
            drawerItemStyle: {
              display: "none",
            },
            headerShown: false,
            drawerStyle: { width: 0, display: "none" },
          }}
        />
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            drawerItemStyle: {
              display: "none",
            },
            headerShown: false,
            drawerStyle: { width: 0, display: "none" },
          }}
        />
        <Drawer.Screen
          name="Register"
          component={Register}
          options={{
            drawerItemStyle: {
              display: "none",
            },
            headerShown: false,
            drawerStyle: { width: 0, display: "none" },
          }}
        />
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{ headerShown: false }}
        />
        <Drawer.Screen
          name="Profile"
          component={Profile}
          options={{
            drawerItemStyle: {
              display: "none",
            },
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="SelectPickLocation"
          component={SelectPickLocation}
          options={{
            drawerItemStyle: {
              display: "none",
            },
            headerShown: false,
          }}
        />
        <Drawer.Screen
          name="Your Rides"
          component={History}
          options={{
            headerShown: false,
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
