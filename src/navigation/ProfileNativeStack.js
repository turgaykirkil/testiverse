// NativeStack.js

import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import ProfileScreen from '../screens/AppScreens/ProfileScreen';
import PrivacyPolicyScreen from '../screens/AppScreens/PrivacyPolicyScreen';
import TermsOfServiceScreen from '../screens/AppScreens/TermsOfServiceScreen';

const Stack = createNativeStackNavigator();

function NativeStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitle: 'Geri',
        gestureEnabled: true,
        gestureDirection: 'vertical',
      }}
      stackAnimation="slide_from_right" // Bu satırı ekledik
    >
      <Stack.Screen name="Profil" component={ProfileScreen} />
      <Stack.Screen
        name="Gizlilik Politikası"
        component={PrivacyPolicyScreen}
      />
      <Stack.Screen
        name="Kullanım Koşulları"
        component={TermsOfServiceScreen}
      />
    </Stack.Navigator>
  );
}

export default NativeStack;
