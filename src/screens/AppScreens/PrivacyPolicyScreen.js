import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getColors } from '../../styles/colors';

const PrivacyPolicyScreen = () => {
  const [privacyPolicyText, setPrivacyPolicyText] = useState('');
  const { isDarkMode } = useTheme();
  const colors = getColors(isDarkMode);

  useEffect(() => {
    // Metin dosyasını oku ve state'e set et
    const readPrivacyPolicy = async () => {
      try {
        const response = await fetch('../../assets/txt/privacyPolicy.txt'); // Dosya yolu uygulamaya bağlı olarak güncellenmelidir.
        const text = await response.text();
        setPrivacyPolicyText(text);
      } catch (error) {
        console.error('Gizlilik Politikası Okuma Hatası:', error);
      }
    };

    readPrivacyPolicy();
  }, []);

  return (
    <ScrollView style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.privacyPolicyText, { color: colors.text }]}>{privacyPolicyText}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  privacyPolicyText: {
    fontSize: 16,
  },
});

export default PrivacyPolicyScreen;
