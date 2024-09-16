import { DefaultTheme, DarkTheme } from '@react-navigation/native';

export const lightTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#FFFFFF',
    text: '#000000',
    // ... diğer renkler
  },
};

export const darkTheme = {
  ...DarkTheme,
  colors: {
    ...DarkTheme.colors,
    background: '#121212',
    text: '#FFFFFF',
    // ... diğer renkler
  },
};
