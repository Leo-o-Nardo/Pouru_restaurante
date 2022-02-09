import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer, useNavigationContainerRef  } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Text, Button, StyleSheet, TouchableOpacity } from 'react-native';
import Icons from 'react-native-vector-icons/FontAwesome5'

// import ImmersiveMode from 'react-native-immersive-mode';

import EndOrderScreen from './app/screens/endOrderScreen';
import FoodMenuScreen from './app/screens/foodMenuScreen';

// ImmersiveMode.setBarMode('Full');
// ImmersiveMode.fullLayout(true);

console.disableYellowBox = true;

const Drawer = createDrawerNavigator();
function MyDrawer() {
  return (
    <Drawer.Navigator 
      initialRouteName="FoodMenuScreen" 
      screenOptions={{ drawerType: 'front', headerShown: false, gestureEnabled: false, swipeEnabled: false }} 
    >
      <Drawer.Screen 
        name="iniScreen"
        component={FoodMenuScreen} 
        options={{ title: 'Início', drawerIcon: ({ focused }) => (
          <Icons name='home' size={focused ? 40 : 30 } color={focused ? '#880606' : '#999999'} />
        )}} 
      />

      <Drawer.Screen 
        name="endScreen" 
        component={EndOrderScreen} 
        options={{ title: 'Finalizar Pedido', drawerIcon: ({ focused }) => (
          <Icons name='money-check-alt' size={focused ? 40 : 30 } color={focused ? '#880606' : '#999999'} />
        )}} 
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  global.naviContainerRef = useNavigationContainerRef();

  return (
    <NavigationContainer ref={global.naviContainerRef}>
      
      {/* <TouchableOpacity onPress={() => global.naviContainerRef.navigate('endScreen', {itemId: 86, otherParam: 'anything you want here',})}>
        <Text> Go home </Text>
      </TouchableOpacity> */}

      <MyDrawer />
    </NavigationContainer>
  );
}
