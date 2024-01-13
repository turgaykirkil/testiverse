// ProfileScreen.js

import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Platform,
} from 'react-native';
import profileData from '../../Utils/profileData.json';
import {useNavigation} from '@react-navigation/native';
import Icons from 'react-native-vector-icons/MaterialIcons';

const ProfileScreen = ({route}) => {
  const {personalInfo, scoreboard, settings, appInfo, imprint} = profileData;
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  React.useLayoutEffect(() => {
    if (Platform.OS === 'ios') {
      navigation.setOptions({
        headerLeft: () => (
          <TouchableOpacity
            onPress={handleGoBack}
            style={styles.backButtonContainer}>
            <Icons name="arrow-back-ios" size={24} color="#007BFF" />
            <Text style={styles.backButton}>Geri</Text>
          </TouchableOpacity>
        ),
      });
    }
  });

  return (
    <ScrollView contentContainerStyle={[styles.container, {paddingBottom: 90}]}>
      <Section title="Kişisel Bilgiler">
        <ProfileItem label="Ad" value={personalInfo.firstName} />
        <ProfileItem label="Soyad" value={personalInfo.lastName} />
        <ProfileItem label="E-posta" value={personalInfo.email} />
        <ProfileItem label="Doğum Tarihi" value={personalInfo.birthDate} />
        <ProfileItem label="Cinsiyet" value={personalInfo.gender} />
      </Section>

      <Section title="Skorbord">
        <ProfileItem
          label="Toplam Soru Sayısı"
          value={scoreboard.totalQuestions}
        />
        <ProfileItem
          label="Doğru Cevaplanan Sorular"
          value={scoreboard.correctAnswers}
        />
        <ProfileItem
          label="Yanlış Cevaplanan Sorular"
          value={scoreboard.wrongAnswers}
        />
        <ProfileItem label="Net Sayısı" value={scoreboard.netScore} />
        <ProfileItem label="En Yüksek Skor" value={scoreboard.highestScore} />
      </Section>

      <Section title="Ayarlar">
        <ProfileItemSwitch
          label="Bildirim Ayarları"
          value={settings.notification ? 'Açık' : 'Kapalı'}
        />
        <ProfileItemSwitch label="Tema Ayarları" value={settings.theme} />
        <ProfileItemDropdown label="Dil Ayarı" options={settings.language} />
        <ProfileItemButton
          label="Hesap Ayarları"
          onPress={() => console.log('Hesap Ayarları')}
        />
      </Section>

      <Section title="Uygulama Bilgileri">
        <ProfileItem label="Uygulama Sürümü" value={appInfo.appVersion} />
        <ProfileItem label="Güncelleme Bilgileri" value={appInfo.updateInfo} />
        <ProfileItem label="Lisans Bilgileri" value={appInfo.licenseInfo} />
      </Section>

      <Section title="Künye">
        <ProfileItem label="Uygulama Sahibi" value={imprint.owner} />
        <ProfileItem label="İletişim Bilgileri" value={imprint.contactInfo} />
        <ProfileItemButton
          label="Gizlilik Politikası"
          onPress={() => navigation.navigate('Gizlilik Politikası')}
        />
        <ProfileItemButton
          label="Kullanım Koşulları"
          onPress={() => navigation.navigate('Kullanım Koşulları')}
        />
      </Section>

      <TouchableOpacity
        style={styles.logoutButton}
        onPress={() => console.log('Çıkış Yap')}>
        <Text style={styles.logoutButtonText}>Çıkış Yap</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const Section = ({title, children}) => (
  <View style={styles.section}>
    <Text style={styles.sectionTitle}>{title}</Text>
    {children}
  </View>
);

const ProfileItem = ({label, value}) => (
  <View style={styles.profileItem}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{value}</Text>
  </View>
);

const ProfileItemSwitch = ({label, value}) => (
  <View style={styles.profileItem}>
    <Text style={styles.label}>{label}</Text>
    {/* Switch component here */}
  </View>
);

const ProfileItemDropdown = ({label, options}) => (
  <View style={styles.profileItem}>
    <Text style={styles.label}>{label}</Text>
    {/* Dropdown component with options here */}
  </View>
);

const ProfileItemButton = ({label, onPress}) => (
  <TouchableOpacity style={styles.profileItem} onPress={onPress}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.value}>{'>'}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  section: {
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 20,
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
    color: '#555',
  },
  logoutButton: {
    backgroundColor: 'red',
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  logoutButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backButtonContainer: {
    marginLeft: -7.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    fontSize: 16, // Geri butonunun yazı boyutu
    //fontWeight: 'bold', // Yazı kalınlığı
    color: '#007BFF', // Yazı rengi
  },
});

export default ProfileScreen;
