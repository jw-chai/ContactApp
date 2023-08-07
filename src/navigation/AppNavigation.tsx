// In App.js in a new project

import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EditContactScreen from '../views/ContactScreen/EditContactScreen';
import ContactScreen from '../views/ContactScreen/ContactScreen';

const Stack = createNativeStackNavigator();

const AppNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="ContactScreen" component={ContactScreen} />
        <Stack.Screen name="EditContactScreen" component={EditContactScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigation;
