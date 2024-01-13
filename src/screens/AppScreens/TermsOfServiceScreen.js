import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';

const TermsOfServiceScreen = () => {
  const [termsOfServiceText, setTermsOfServiceText] = useState('');

  useEffect(() => {
    // Metin dosyasını oku ve state'e set et
    const readTermsOfService = async () => {
      try {
        const response = await fetch('../../assets/txt/termsOfService.txt'); // Dosya yolu uygulamaya bağlı olarak güncellenmelidir.
        const text = await response.text();
        setTermsOfServiceText(text);
      } catch (error) {
        console.error('Kullanım Koşulları Okuma Hatası:', error);
      }
    };

    readTermsOfService();
  }, []);

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.termsOfServiceText}>{termsOfServiceText}</Text>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  termsOfServiceText: {
    fontSize: 16,
  },
});

export default TermsOfServiceScreen;
