import 'react-native-gesture-handler';
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from '@react-navigation/drawer';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Login" component={Login} options={{
            drawerItemStyle: {
              display: 'none',
          },
          headerShown: false
          }} />
        <Drawer.Screen name="Register" component={Register} options={{
            drawerItemStyle: {
              display: 'none',
          },
          headerShown: false
          }} />
        <Drawer.Screen name="Home" component={Home} options={{headerShown: false}} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};
