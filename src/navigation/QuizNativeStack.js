import * as React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import QuizScreen from '../screens/AppScreens/QuizScreen';
import ProfileScreen from '../screens/AppScreens/ProfileScreen';
import QuizListScreen from '../screens/AppScreens/QuizListScreen';
import QuizSolveScreen from '../screens/AppScreens/QuizSolveScreen';

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
        component={QuizScreen}
      />
      <Stack.Screen
        options={{title: 'Profil'}}
        name="Profile"
        component={ProfileScreen}
      />
      <Stack.Screen
        options={{title: 'Sorular'}}
        name="QuizList"
        component={QuizListScreen}
      />
      <Stack.Screen
        options={{title: 'Sorular', headerShown: false}}
        name="QuizSolve"
        component={QuizSolveScreen}
      />
    </Stack.Navigator>
  );
}

export default NativeStack;
