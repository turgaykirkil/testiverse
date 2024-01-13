// NoteScreen.js
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
import AdBanner from '../../components/AdBanner';
import NoteCard from '../../components/NoteCard';
import * as Colors from '../../Utils/Colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const QuizScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();

  const handleQuizListPress = selectedList => {
    // Burada QuizListScreen'e yönlendirme yapabilirsin
    navigation.navigate('QuizList', {selectedList});
  };

  return (
    <SafeAreaView>
      <ScrollView
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}>
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
            <NoteCard
              title={'Sınavlar'}
              subtitle="derslere göre alfabetik olarak sıralanmıştır"
              list={['Çözülmeyen Testler', 'Çözülen Testler']}
              bgColor={Colors.ACCENT_COLOR2}
              onPressItem={selectedItem => handleQuizListPress(selectedItem)}
            />
            <AdBanner />
            <NoteCard
              title={'Testler'}
              subtitle="derslere göre alfabetik olarak sıralanmıştır"
              list={['Derslere Göre Testler', 'Döneme Göre Testler']}
              bgColor={Colors.ACCENT_COLOR3}
              onPressItem={selectedItem => handleQuizListPress(selectedItem)}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </SafeAreaView>
  );
};

export default QuizScreen;
