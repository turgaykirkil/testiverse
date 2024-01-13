import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import HomeScreen from '../screens/AppScreens/HomeScreen';
import ProfileNativeStack from './ProfileNativeStack';
const Stack = createNativeStackNavigator();

function HomeNativeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        animation: 'slide_from_right',
        animationTypeForReplace: 'pop',
        gestureEnabled: true,
        gestureDirection: 'vertical',
        headerBackTitle: 'Geri',
      }}>
      <Stack.Screen
        options={{headerShown: false}}
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Profile"
        component={ProfileNativeStack}
      />
    </Stack.Navigator>
  );
}

export default HomeNativeStack;
