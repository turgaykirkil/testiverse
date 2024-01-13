import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import NoteScreen from '../screens/AppScreens/NoteScreen';
import ProfileNativeStack from '../navigation/ProfileNativeStack';

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
        name="Note"
        component={NoteScreen}
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
