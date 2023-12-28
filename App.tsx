import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Login from "./src/Components/Login/Login";
import Register from "./src/Components/Register/Register";
import Home from "./src/Components/Home/Home";
import Profile from "./src/Components/Profile/Profile";

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen
          name="Login"
          component={Login}
          options={{
            drawerItemStyle: {
              display: "none",
            },
            headerShown: false,
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
          options={{ headerShown: false }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
