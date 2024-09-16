// ProfileScreen.js

import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
  Switch,
  StatusBar,
  TextInput,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeContext';
import { getColors } from '../../styles/colors';
import profileData from '../../Utils/profileData.json';
import { useNavigation } from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialIcons';
import * as FileSystem from 'expo-file-system';

const ProfileScreen = () => {
  const [profileInfo, setProfileInfo] = useState(profileData);
  const { isDarkMode, toggleTheme } = useTheme();
  const colors = getColors(isDarkMode);
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  const updateProfileData = async (newData) => {
    setProfileInfo(newData);
    try {
      const jsonString = JSON.stringify(newData, null, 2);
      await FileSystem.writeAsStringAsync(
        FileSystem.documentDirectory + 'profileData.json',
        jsonString
      );
    } catch (error) {
      console.error('Error saving profile data:', error);
    }
  };

  useEffect(() => {
    const loadProfileData = async () => {
      try {
        const fileInfo = await FileSystem.getInfoAsync(
          FileSystem.documentDirectory + 'profileData.json'
        );
        if (fileInfo.exists) {
          const jsonString = await FileSystem.readAsStringAsync(
            FileSystem.documentDirectory + 'profileData.json'
          );
          setProfileInfo(JSON.parse(jsonString));
        } else {
          await updateProfileData(profileData);
        }
      } catch (error) {
        console.error('Error loading profile data:', error);
      }
    };
    loadProfileData();
  }, []);

  React.useLayoutEffect(() => {
    navigation.setOptions({
      headerStyle: {
        height: 50,
        backgroundColor: colors.background,
      },
      headerTitleStyle: {
        color: colors.text,
      },
      headerLeft: () => (
        <TouchableOpacity
          onPress={handleGoBack}
          style={styles.backButtonContainer}>
          <Icons name="arrow-back-ios" size={24} color={colors.text} />
          <Text style={[styles.backButton, { color: colors.text }]}>Geri</Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation, colors, isDarkMode]);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <ScrollView 
        contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}
        showsVerticalScrollIndicator={false}
      >
        <Section title="Kişisel Bilgiler" titleColor={colors.text}>
          <ProfileItem
            label="Ad"
            value={profileInfo.personalInfo.firstName}
            onChangeText={(text) => {
              const newData = { ...profileInfo };
              newData.personalInfo.firstName = text;
              updateProfileData(newData);
            }}
            textColor={colors.text}
          />
          <ProfileItem
            label="Soyad"
            value={profileInfo.personalInfo.lastName}
            onChangeText={(text) => {
              const newData = { ...profileInfo };
              newData.personalInfo.lastName = text;
              updateProfileData(newData);
            }}
            textColor={colors.text}
          />
          <ProfileItem
            label="E-posta"
            value={profileInfo.personalInfo.email}
            onChangeText={(text) => {
              const newData = { ...profileInfo };
              newData.personalInfo.email = text;
              updateProfileData(newData);
            }}
            textColor={colors.text}
          />
          <ProfileItem
            label="Doğum Tarihi"
            value={profileInfo.personalInfo.birthDate}
            onChangeText={(text) => {
              const newData = { ...profileInfo };
              newData.personalInfo.birthDate = text;
              updateProfileData(newData);
            }}
            textColor={colors.text}
          />
          <ProfileItem
            label="Cinsiyet"
            value={profileInfo.personalInfo.gender}
            onChangeText={(text) => {
              const newData = { ...profileInfo };
              newData.personalInfo.gender = text;
              updateProfileData(newData);
            }}
            textColor={colors.text}
          />
        </Section>

        <Section title="Skorbord" titleColor={colors.text}>
          <ProfileItem
            label="Toplam Soru Sayısı"
            value={profileInfo.scoreboard.totalQuestions}
            onChangeText={(text) => {
              const newData = { ...profileInfo };
              newData.scoreboard.totalQuestions = parseInt(text) || 0;
              updateProfileData(newData);
            }}
            textColor={colors.text}
          />
          <ProfileItem
            label="Doğru Cevaplanan Sorular"
            value={profileInfo.scoreboard.correctAnswers}
            onChangeText={(text) => {
              const newData = { ...profileInfo };
              newData.scoreboard.correctAnswers = parseInt(text) || 0;
              updateProfileData(newData);
            }}
            textColor={colors.text}
          />
          <ProfileItem
            label="Yanlış Cevaplanan Sorular"
            value={profileInfo.scoreboard.wrongAnswers}
            onChangeText={(text) => {
              const newData = { ...profileInfo };
              newData.scoreboard.wrongAnswers = parseInt(text) || 0;
              updateProfileData(newData);
            }}
            textColor={colors.text}
          />
          <ProfileItem
            label="Net Sayısı"
            value={profileInfo.scoreboard.netScore}
            onChangeText={(text) => {
              const newData = { ...profileInfo };
              newData.scoreboard.netScore = parseInt(text) || 0;
              updateProfileData(newData);
            }}
            textColor={colors.text}
          />
          <ProfileItem
            label="En Yüksek Skor"
            value={profileInfo.scoreboard.highestScore}
            onChangeText={(text) => {
              const newData = { ...profileInfo };
              newData.scoreboard.highestScore = parseInt(text) || 0;
              updateProfileData(newData);
            }}
            textColor={colors.text}
          />
        </Section>

        <Section title="Ayarlar" titleColor={colors.text}>
          <ProfileItemSwitch
            label="Bildirim Ayarları"
            value={profileInfo.settings.notification}
            onToggle={() => {/* bildirim ayarlarını değiştirme fonksiyonu */}}
            textColor={colors.text}
          />
          <ProfileItemSwitch
            label="Karanlık Mod"
            value={isDarkMode}
            onToggle={toggleTheme}
            textColor={colors.text}
          />
          <ProfileItemSwitch
            label="Tema Ayarları"
            value={profileInfo.settings.theme === 'dark'}
            onToggle={() => {/* tema ayarlarını değiştirme fonksiyonu */}}
            textColor={colors.text}
          />
          <ProfileItemDropdown label="Dil Ayarı" options={profileInfo.settings.language} textColor={colors.text} />
          <ProfileItemButton
            label="Hesap Ayarları"
            onPress={() => console.log('Hesap Ayarları')}
            textColor={colors.text}
          />
        </Section>

        <Section title="Uygulama Bilgileri" titleColor={colors.text}>
          <ProfileItem label="Uygulama Sürümü" value={profileInfo.appInfo.appVersion} textColor={colors.text} />
          <ProfileItem label="Güncelleme Bilgileri" value={profileInfo.appInfo.updateInfo} textColor={colors.text} />
          <ProfileItem label="Lisans Bilgileri" value={profileInfo.appInfo.licenseInfo} textColor={colors.text} />
        </Section>

        <Section title="Künye" titleColor={colors.text}>
          <ProfileItem label="Uygulama Sahibi" value={profileInfo.imprint.owner} textColor={colors.text} />
          <ProfileItem label="İletişim Bilgileri" value={profileInfo.imprint.contactInfo} textColor={colors.text} />
          <ProfileItemButton
            label="Gizlilik Politikası"
            onPress={() => navigation.navigate('Gizlilik Politikası')}
            textColor={colors.text}
          />
          <ProfileItemButton
            label="Kullanım Koşulları"
            onPress={() => navigation.navigate('Kullanım Koşulları')}
            textColor={colors.text}
          />
        </Section>

        <TouchableOpacity
          style={[styles.logoutButton, { backgroundColor: colors.error }]}
          onPress={() => console.log('Çıkış Yap')}>
          <Text style={[styles.logoutButtonText, { color: colors.background }]}>Çıkış Yap</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

const Section = ({title, children, titleColor}) => (
  <View style={styles.section}>
    <Text style={[styles.sectionTitle, { color: titleColor }]}>{title}</Text>
    {children}
  </View>
);

const ProfileItem = ({ label, value, onChangeText, textColor }) => (
  <View style={styles.profileItem}>
    <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    <TextInput
      style={[styles.value, { color: textColor }]}
      value={String(value)} // Değeri string'e dönüştürüyoruz
      onChangeText={onChangeText}
    />
  </View>
);

const ProfileItemSwitch = ({ label, value, onToggle, textColor }) => {
  return (
    <View style={styles.profileItem}>
      <Text style={[styles.label, { color: textColor }]}>{label}</Text>
      <Switch
        value={value}
        onValueChange={onToggle}
        // Platform'a özgü özellikler
        trackColor={{ false: Platform.OS === 'ios' ? '#767577' : '#d3d3d3', true: Platform.OS === 'ios' ? '#81b0ff' : '#81b0ff' }}
        thumbColor={Platform.OS === 'ios' ? '#ffffff' : value ? '#f5dd4b' : '#f4f3f4'}
        ios_backgroundColor="#3e3e3e"
      />
    </View>
  );
};

const ProfileItemDropdown = ({label, options, textColor}) => (
  <View style={styles.profileItem}>
    <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    {/* Dropdown component with options here */}
  </View>
);

const ProfileItemButton = ({label, onPress, textColor}) => (
  <TouchableOpacity style={styles.profileItem} onPress={onPress}>
    <Text style={[styles.label, { color: textColor }]}>{label}</Text>
    <Text style={[styles.value, { color: textColor }]}>{'>'}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  profileItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  label: {
    fontSize: 16,
  },
  value: {
    fontSize: 16,
    flex: 1,
    textAlign: 'right',
  },
  logoutButton: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    fontWeight: 'bold',
  },
  backButtonContainer: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    fontSize: 16,
    marginLeft: 5,
  },
});

export default ProfileScreen;
