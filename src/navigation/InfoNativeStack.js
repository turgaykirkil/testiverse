import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import InfoScreen from '../screens/AppScreens/InfoScreen';
import ProfileNativeStack from './ProfileNativeStack';

const Stack = createNativeStackNavigator();

function NativeStack() {
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
        component={InfoScreen}
      />
      <Stack.Screen
        options={{headerShown: false}}
        name="Profile"
        component={ProfileNativeStack}
      />
    </Stack.Navigator>
  );
}

export default NativeStack;
