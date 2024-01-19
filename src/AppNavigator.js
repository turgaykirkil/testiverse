import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabs from './navigation/BottomTabs';
import LoginScreen from './screens/LoginScreens/LoginScreen';
import OnBoardingScreen from './screens/OnBoardingScreens/OnBoardingScreen';

const Stack = createNativeStackNavigator();

const AppNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen
      name="OnBoardingScreen"
      component={OnBoardingScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="LoginScreen"
      component={LoginScreen}
      options={{headerShown: false}}
    />
    <Stack.Screen
      name="BottomTabs"
      component={BottomTabs}
      options={{headerShown: false}}
    />
  </Stack.Navigator>
);

export default AppNavigator;
