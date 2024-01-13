import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  Platform,
} from 'react-native';

const generateRandomColor = () => {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
};

const generateRandomData = () => {
  const data = [];
  const numberOfItems = 15; // Değiştirebilirsin
  const colors = Array.from({length: numberOfItems}, generateRandomColor);

  for (let i = 0; i < numberOfItems; i++) {
    const item = {
      id: i.toString(),
      lessonName: `Ders ${i + 1}`,
      departmentName: `Bölüm ${i + 1}`,
      unsolvedQuestions: Math.floor(Math.random() * 50) + 1,
      totalQuestions: Math.floor(Math.random() * 100) + 1,
      backgroundColor: colors[i],
    };
    data.push(item);
  }

  return data;
};

const QuizListScreen = ({route, navigation}) => {
  const {selectedList} = route.params;
  const data = generateRandomData();
  const [paddingBottom, setPaddingBottom] = useState(0);

  useEffect(() => {
    navigation.setOptions({
      headerTitle: selectedList, // Burada istediğin başlık olabilir
    });
  }, [navigation, selectedList]);

  const handleScroll = event => {
    const scrollPosition = event.nativeEvent.contentOffset.y;
    const scrollViewHeight = event.nativeEvent.layoutMeasurement.height;
    const contentHeight = event.nativeEvent.contentSize.height;

    let paddingBottomValue = 0;

    if (Platform.OS === 'ios') {
      paddingBottomValue = 60;
    } else if (Platform.OS === 'android') {
      paddingBottomValue = 80;
    }

    if (
      scrollPosition + scrollViewHeight >=
      contentHeight - paddingBottomValue
    ) {
      setPaddingBottom(paddingBottomValue);
    } else {
      setPaddingBottom(0);
    }
  };

  const renderItem = ({item}) => (
    <TouchableOpacity
      onPress={() => {
        // QuizSolveScreen ekranına geçiş yapalım
        navigation.navigate('QuizSolve', {
          selectedLesson: item.lessonName,
          selectedDepartment: item.departmentName,
        });
      }}>
      <View style={[styles.card, {backgroundColor: item.backgroundColor}]}>
        <Text style={styles.text}>{item.lessonName}</Text>
        <Text style={styles.text}>{item.departmentName}</Text>
        <Text style={styles.text}>
          {`${item.unsolvedQuestions} / ${item.totalQuestions}`}
        </Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={[styles.innerContainer, {paddingBottom}]}>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          showsVerticalScrollIndicator={false}
          onScroll={handleScroll}
          scrollEventThrottle={16}
        />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  innerContainer: {
    flex: 1,
    padding: 10,
  },
  card: {
    margin: 10,
    padding: 20,
    borderRadius: 10,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});

export default QuizListScreen;
