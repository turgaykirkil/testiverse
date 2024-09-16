import React from 'react';
import { SafeAreaView, ScrollView, View, TouchableWithoutFeedback, Keyboard, StyleSheet } from 'react-native';
import { useTheme } from '../../context/ThemeContext';
import { getColors } from '../../styles/colors';
import MainHeader from '../../components/MainHeader';
import SearchBar from '../../components/SearchBar';
import ScreenHeader from '../../components/ScreenHeader';
import AdBanner from '../../components/AdBanner';
import TopQuizCarousel from '../../components/TopQuizCarousel';
import HomeLessonsCarousel from '../../components/HomeLessonsCarousel';

const HomeScreen = ({navigation}) => {
  const { isDarkMode } = useTheme();
  const colors = getColors(isDarkMode);

  return (
    <SafeAreaView style={[styles.safeArea, {backgroundColor: colors.background}]}>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <View style={[styles.container, {backgroundColor: colors.background}]}>
            <MainHeader
              title="Testiverse"
              onPress={() => {
                navigation.navigate('Profile');
              }}
              textColor={colors.text}
            />
            <SearchBar navigation={navigation} backgroundColor={colors.card} textColor={colors.text} />
            <ScreenHeader
              mainTitle="Testiverse"
              subTitle="Hoşgeldin Turgay"
              textColor={colors.text}
            />
            <AdBanner />
            <TopQuizCarousel
              list={['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 5']}
              backgroundColor={colors.card}
              textColor={colors.text}
            />
            <HomeLessonsCarousel
              list={[
                'Lesson 1',
                'Lesson 2',
                'Lesson 3',
                'Lesson 4',
                'Lesson 5',
              ]}
              backgroundColor={colors.card}
              textColor={colors.text}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 90,
  },
});

export default HomeScreen;
