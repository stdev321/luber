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
import SelectDestLocation from "./src/Components/SelectDestLocation/SelectDestLocation";
import FullMapView from "./src/Components/MapView/FullMapView";
import { MaterialIcons } from "@expo/vector-icons";
import About from "./src/Components/About/About";
import InviteFriend from "./src/Components/InviteFriend/InviteFriend";
import { LocationProvider } from "./src/context/LocationContext";
import Payment from "./src/Components/Payment/Payment";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <LocationProvider>
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
            options={{
              drawerItemStyle: {
                display: "none",
              },
              headerShown: false,
            }}
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
            name="SelectDestLocation"
            component={SelectDestLocation}
            options={{
              drawerItemStyle: {
                display: "none",
              },
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="MapView"
            component={FullMapView}
            options={{
              drawerItemStyle: {
                display: "none",
              },
              headerShown: false,
            }}
          />
          <Drawer.Screen
            name="History"
            component={History}
            options={{
              headerShown: false,
              drawerIcon: ({ focused, size }) => (
                <MaterialIcons
                  name="history"
                  size={size}
                  color={focused ? "#000" : "green"}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Payment"
            component={Payment}
            options={{
              headerShown: false,
              drawerIcon: ({ focused, size }) => (
                <MaterialIcons
                  name="payment"
                  size={size}
                  color={focused ? "green" : "#000"}
                />
              ),
            }}
          />
          <Drawer.Screen
            name="Support"
            component={History}
            options={{
              headerShown: false,
              drawerIcon: ({ focused, size }) => (
                <MaterialIcons
                  name="support"
                  size={size}
                  color={focused ? "green" : "#000"}
                />
              ),
            }}
          />
          <Drawer.Screen
          name="InviteFriend"
          component={InviteFriend}
          options={{
            drawerItemStyle: {
              display: "none",
            },
            headerShown: false,
          }}
        />
          <Drawer.Screen
            name="About"
            component={About}
            options={{
              headerShown: false,
              drawerIcon: ({ focused, size }) => (
                <MaterialIcons
                  name="info-outline"
                  size={size}
                  color={focused ? "green" : "#000"}
                />
              ),
            }}
          />
        </Drawer.Navigator>
      </LocationProvider>
    </NavigationContainer>
  );
}
