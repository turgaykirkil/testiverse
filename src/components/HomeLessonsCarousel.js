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
const HomeLessonsCarousel = ({list}) => {
  return (
    <ScrollView>
      <View style={MainStyles.textContainer}>
        <Text style={MainStyles.mainTitle}>Bölüm Dersleriniz</Text>
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
            Henüz yarım kalan dersleriniz yok...
          </Text>
        )}
      </View>
    </ScrollView>
  );
};

export default HomeLessonsCarousel;

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 150,
    marginTop: 10,
    borderRadius: 10,
    backgroundColor: Colors.ACCENT_COLOR2,
    marginRight: 10,
    alignItems: 'center',
    justifyContent: 'center',
    overflow: 'hidden',
  },
});
