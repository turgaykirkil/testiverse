import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const PrivacyPolicyScreen = () => {
  const [privacyPolicyText, setPrivacyPolicyText] = useState('');

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
    <ScrollView style={styles.container}>
      <Text style={styles.privacyPolicyText}>{privacyPolicyText}</Text>
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
