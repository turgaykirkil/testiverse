import React from 'react';
import {
  TouchableWithoutFeedback,
  View,
  Keyboard,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import MainStyles from '../../Utils/MainStyles';
import MainHeader from '../../components/MainHeader';
import SearchBar from '../../components/SearchBar';
import ScreenHeader from '../../components/ScreenHeader';
import AdBanner from '../../components/AdBanner';
import TopQuizCarousel from '../../components/TopQuizCarousel';
import HomeLessonsCarousel from '../../components/HomeLessonsCarousel';

const HomeScreen = ({navigation}) => {
  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
        <>
          <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View
              style={[
                MainStyles.container,
                {paddingHorizontal: 10, paddingBottom: 90},
              ]}>
              <MainHeader
                title="Testiverse"
                onPress={() => {
                  navigation.navigate('Profile');
                }}
              />
              <SearchBar navigation={navigation} />
              <ScreenHeader
                mainTitle="Testiverse"
                subTitle="Hoşgeldin Turgay"
              />
              <AdBanner />
              <TopQuizCarousel
                list={['Quiz 1', 'Quiz 2', 'Quiz 3', 'Quiz 4', 'Quiz 5']}
              />
              <HomeLessonsCarousel
                list={[
                  'Lesson 1',
                  'Lesson 2',
                  'Lesson 3',
                  'Lesson 4',
                  'Lesson 5',
                ]}
              />
            </View>
          </TouchableWithoutFeedback>
        </>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;
