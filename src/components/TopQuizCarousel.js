import React from 'react';
import {
  FlatList,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import MainStyles from '../Utils/MainStyles';
import * as Colors from '../Utils/Colors';
const TopQuizCarousel = React.memo(({list}) => {
  return (
    <ScrollView>
      <View style={MainStyles.textContainer}>
        <Text style={MainStyles.mainTitle}>Son Çözülen Testler</Text>
        {list ? (
          <FlatList
            data={list}
            horizontal
            showsHorizontalScrollIndicator={false}
            renderItem={({item}) => (
              <TouchableOpacity onPress={() => {}} activeOpacity={0.5}>
                <View style={styles.card}>
                  <Text>{item}</Text>
                </View>
              </TouchableOpacity>
            )}
            keyExtractor={(item, index) => index.toString()}
            ListFooterComponent={() => <View style={{width: 10}} />}
          />
        ) : (
          <Text style={MainStyles.subtitle}>
            Henüz yarım kalan testleriniz yok...
          </Text>
        )}
      </View>
    </ScrollView>
  );
});

export default TopQuizCarousel;

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 150,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: Colors.ACCENT_COLOR,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
