import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import AppNavigator from './src/AppNavigator';
import { ThemeProvider } from './src/context/ThemeContext';

const App = () => {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <StatusBar barStyle="dark-content" />
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
};

export default App;