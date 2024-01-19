import React, {useEffect, useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {getItem} from './src/Utils/AsyncStorage';

import BottomTabs from './src/navigation/BottomTabs';
import LoginScreen from './src/screens/LoginScreens/LoginScreen';
import OnBoardingScreen from './src/screens/OnBoardingScreens/OnBoardingScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  const [showOnboarding, setShowOnboarding] = useState(true);
  useEffect(() => {
    checkIfAlreadyOnBoarding();
  });

  const checkIfAlreadyOnBoarding = async () => {
    let onboarded = await getItem('onboarded');
    if (onboarded === '0') {
      setShowOnboarding(false);
    }
  };

  return (
    <SafeAreaProvider>
      <StatusBar barStyle="dark-content" />
      <NavigationContainer>
        <Stack.Navigator>
          {showOnboarding && (
            <Stack.Screen
              options={{headerShown: false}}
              name="OnBoardingScreen"
              component={OnBoardingScreen}
            />
          )}
          <Stack.Screen
            options={{headerShown: false}}
            name="BottomTabs"
            component={BottomTabs}
          />
          <Stack.Screen
            options={{headerShown: false}}
            name="LoginScreen"
            component={LoginScreen}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
