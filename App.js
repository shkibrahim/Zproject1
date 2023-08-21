import { LogBox } from 'react-native';
import 'react-native-gesture-handler';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreLogs([{ level: 'error' }]);
LogBox.ignoreAllLogs();
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SplashScreen from './Screens/SplashScreen';
import Calculator from './Screens/Calculator';
import Location from './Screens/Location';
import ChangeAppicons from './Screens/ChangeAppicons';
import Task5 from './Screens/Task5';
import Task6 from './Screens/Task6';
import Task1 from './Screens/Task1';

navigator.geolocation = require('@react-native-community/geolocation');
const Drawer = createDrawerNavigator();
const Stack = createNativeStackNavigator();

// ... (previous imports and code) ...

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Calculator" component={Calculator} />
      <Drawer.Screen name="Location" component={Location} />
      <Drawer.Screen name="ChangeAppicons" component={ChangeAppicons} />
      <Stack.Screen name="Task5" component={Task5} />
        <Stack.Screen name="Task6" component={Task6}  />
    </Drawer.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Task1" screenOptions={{ headerShown: false }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
         <Stack.Screen name="Task1" component={Task1} />
        <Stack.Screen name="DrawerNavigator" component={DrawerNavigator} />
     
      </Stack.Navigator>
    </NavigationContainer>
  );
}




export default App;
