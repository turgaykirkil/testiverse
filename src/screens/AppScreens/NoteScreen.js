import React from 'react';
import {TouchableWithoutFeedback, View, Keyboard} from 'react-native';
import MainStyles from '../../Utils/MainStyles';
import MainHeader from '../../components/MainHeader';
import SearchBar from '../../components/SearchBar';
import AdBanner from '../../components/AdBanner';
import NoteCard from '../../components/NoteCard';
import * as Colors from '../../Utils/Colors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

const NoteScreen = ({navigation}) => {
  const insets = useSafeAreaInsets();
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View
        style={[
          MainStyles.container,
          {paddingHorizontal: 10, paddingBottom: 90, marginTop: insets.top},
        ]}>
        <MainHeader
          title="Testiverse"
          onPress={() => {
            navigation.navigate('Profile');
          }}
        />
        <SearchBar />
        <AdBanner />
        <NoteCard
          title={'Notlar'}
          list={['Sınav hakkında notlar', 'Sorular hakkında notlar']}
          bgColor={Colors.ACCENT_COLOR2}
          onPressItem={item => {}}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

export default NoteScreen;
