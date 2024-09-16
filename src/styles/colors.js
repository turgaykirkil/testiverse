export const lightColors = {
  background: '#FFFFFF',
  text: '#000000',
  primary: '#007AFF',
  card: '#F2F2F7',
};

export const darkColors = {
  background: '#1C1C1E',
  text: '#FFFFFF',
  primary: '#0A84FF',
  card: '#2C2C2E',
};

export const getColors = (isDark) => (isDark ? darkColors : lightColors);
