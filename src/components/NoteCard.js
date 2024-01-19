import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Dimensions,
} from 'react-native';
import MainStyles from '../Utils/MainStyles';
import * as Colors from '../Utils/Colors';
const NoteCardCarousel = React.memo(
  ({list, bgColor, title, subtitle = '', onPressItem = ''}) => {
    return (
      <View style={MainStyles.textContainer}>
        <Text style={MainStyles.mainTitle}>{title}</Text>
        {!subtitle ? null : <Text style={MainStyles.subtitle}>{subtitle}</Text>}
        {list ? (
          <FlatList
            data={list}
            scrollEnabled={false}
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => onPressItem(item)}
                activeOpacity={0.5}>
                <View style={[styles.card, {backgroundColor: bgColor}]}>
                  <Text>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={() => <View style={{width: 10}} />}
          />
        ) : (
          <Text style={MainStyles.subtitle}>
            Henüz yarım kalan dersleriniz yok...
          </Text>
        )}
      </View>
    );
  },
);

export default NoteCardCarousel;

const styles = StyleSheet.create({
  card: {
    width: Dimensions.get('window').width - 40,
    height: 150,
    marginTop: 10,
    borderRadius: 10,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
