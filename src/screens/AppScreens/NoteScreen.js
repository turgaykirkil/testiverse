import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  StatusBar,
} from 'react-native';
import MainStyles from '../../Utils/MainStyles';
import MainHeader from '../../components/MainHeader';
import SearchBar from '../../components/SearchBar';
import AdBanner from '../../components/AdBanner';
import NoteCard from '../../components/NoteCard';
import * as Colors from '../../Utils/Colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useTheme } from '../../context/ThemeContext';
import { getColors } from '../../styles/colors';

const NoteScreen = ({navigation}) => {
  const { isDarkMode } = useTheme();
  const colors = getColors(isDarkMode);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background }}>
      <StatusBar
        backgroundColor={colors.background}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View
          style={[
            MainStyles.container,
            {
              paddingHorizontal: 10,
              paddingBottom: 90,
              backgroundColor: colors.background
            },
          ]}>
          <MainHeader
            title="Testiverse"
            onPress={() => {
              navigation.navigate('Profile');
            }}
            textColor={colors.text}
          />
          <SearchBar backgroundColor={colors.card} textColor={colors.text} />
          <AdBanner />
          <NoteCard
            title={'Notlar'}
            list={['Sınav hakkında notlar', 'Sorular hakkında notlar']}
            bgColor={Colors.ACCENT_COLOR2}
            textColor={colors.text}
            onPressItem={item => {}}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

export default NoteScreen;
