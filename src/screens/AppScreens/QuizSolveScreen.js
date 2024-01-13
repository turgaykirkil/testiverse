import React, {useState, useLayoutEffect, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import {data} from '../../Utils/Data';
import * as Colors from '../../Utils/Colors';
import LottieView from 'lottie-react-native';

// ... Diğer import'lar

const QuizSolveScreen = ({route, navigation}) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correct, setCorrect] = useState(0);
  const [wrong, setWrong] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState({});
  const [disableOptions, setDisableOptions] = useState(false);
  const [timer, setTimer] = useState(25 * 60); // 25 dakika

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (!showScore) {
        setTimer(prevTimer => prevTimer - 1);
      }
    }, 1000);

    return () => clearInterval(intervalId);
  }, [showScore]);

  useEffect(() => {
    if (timer <= 0) {
      setShowScore(true);
    }
  }, [timer]);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(
      remainingSeconds,
    ).padStart(2, '0')}`;
  };

  const handleAnswer = selectedAnswer => {
    if (!disableOptions) {
      const isCorrect = selectedAnswer === data[currentQuestion].correctAnswer;
      setSelectedOptions({
        ...selectedOptions,
        [currentQuestion]: selectedAnswer,
      });

      if (!selectedOptions[currentQuestion]) {
        // Eğer daha önce seçilmiş bir seçenek yoksa
        if (isCorrect) {
          setCorrect(prevCorrect => prevCorrect + 1);
        } else {
          setWrong(prevWrong => prevWrong + 1);
        }
      }

      setDisableOptions(true);
    }
  };

  useEffect(() => {
    if (selectedOptions[currentQuestion]) {
      handleAnswer(selectedOptions[currentQuestion]);
    }
  });

  const handlePrevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setShowScore(false);
      setDisableOptions(false);
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestion < data.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setShowScore(false);
      setDisableOptions(false);
    } else if (currentQuestion === data.length - 1) {
      setShowScore(true);
    }
  };

  const handleBackToQuizList = () => {
    // QuizListScreen'e geri dön
    navigation.goBack();
  };

  const isCorrectOption = optionKey => {
    return optionKey === data[currentQuestion].correctAnswer;
  };

  const calculateProgressBar = () => {
    const totalQuestions = data.length;
    const answeredQuestions = Object.keys(selectedOptions).length;
    const correctAnswers = Object.values(selectedOptions).filter(
      option => option === data[Object.keys(selectedOptions)[0]].correctAnswer,
    ).length;
    const wrongAnswers = answeredQuestions - correctAnswers;

    const progress = (answeredQuestions / totalQuestions) * 100;

    return {
      progress,
      correctAnswers,
      wrongAnswers,
      unansweredQuestions: totalQuestions - answeredQuestions,
    };
  };

  const renderProgressBar = () => {
    const {progress, correctAnswers, wrongAnswers, unansweredQuestions} =
      calculateProgressBar();

    return (
      <View style={styles.progressBarContainer}>
        <View
          style={{
            ...styles.progressBar,
            width: `${progress}%`,
            backgroundColor: 'green',
          }}></View>
        <View
          style={{
            ...styles.progressBar,
            width: `${unansweredQuestions}%`,
            backgroundColor: 'grey',
          }}></View>
        <View
          style={{
            ...styles.progressBar,
            width: `${correctAnswers}%`,
            backgroundColor: 'green',
          }}></View>
        <View
          style={{
            ...styles.progressBar,
            width: `${wrongAnswers}%`,
            backgroundColor: 'red',
          }}></View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {showScore ? (
        <View style={styles.scoreContainer}>
          <LottieView
            source={require('../../assets/lottie/result.json')}
            autoPlay
            loop
            style={[styles.lottie, {width: 300, height: 300}]}
            speed={1}
            autoSize
            resizeMode="contain"
          />
          <Text style={styles.scoreText}>
            <Text style={styles.tableHeader}>Toplam Soru:</Text>
            <Text>{data.length}</Text> {'\n'}
            <Text style={styles.tableHeader}>Doğru Sayısı:</Text>
            <Text>{correct}</Text> {'\n'}
            <Text style={styles.tableHeader}>Yanlış Sayısı:</Text>
            <Text>{wrong}</Text> {'\n'}
            <Text style={styles.tableHeader}>Net:</Text>
            <Text>{(correct * 4 - wrong) / 4}</Text> {'\n'}
            <Text style={styles.tableHeader}>Sınav Süresi:</Text>
            <Text>{formatTime(25 * 60 - timer)}</Text>
          </Text>
          <TouchableOpacity
            style={styles.backButton}
            onPress={handleBackToQuizList}>
            <Text style={styles.buttonText}>Sorulara Geri Dön</Text>
          </TouchableOpacity>
        </View>
      ) : (
        <SafeAreaView>
          <View style={styles.timerContainer}>
            <LottieView
              source={require('../../assets/lottie/clock.json')}
              autoPlay
              loop
              style={styles.lottie}
              speed={0.1}
              autoSize
              resizeMode="contain"
            />
            <Text style={styles.timerText}>{formatTime(timer)}</Text>
          </View>
          {renderProgressBar()}
          <View style={styles.questionContainer}>
            <ScrollView>
              <Text style={styles.questionText}>
                {data[currentQuestion].question}
              </Text>
              {Object.entries(data[currentQuestion].options).map(
                ([optionKey, optionValue]) => {
                  const isSelected =
                    selectedOptions[currentQuestion] === optionKey;
                  const isCorrect = isCorrectOption(optionKey);

                  let optionColor = 'black';

                  if (isSelected && disableOptions) {
                    optionColor = isCorrect
                      ? Colors.CORRECT_COLOR // Doğru cevap yeşil
                      : Colors.WRONG_COLOR; // Yanlış cevap kırmızı
                  } else if (!isSelected && isCorrect && disableOptions) {
                    optionColor = Colors.CORRECT_COLOR; // Yanlış cevap seçilmediyse ve bu doğru cevapsa yeşil
                  }

                  return (
                    <TouchableOpacity
                      key={optionKey}
                      onPress={() => {
                        handleAnswer(optionKey);
                      }}
                      style={[
                        styles.optionContainer,
                        {
                          borderColor: optionColor,
                        },
                      ]}
                      disabled={disableOptions}>
                      <Text
                        style={[
                          styles.optionText,
                          {
                            color: optionColor,
                          },
                        ]}>{`${optionKey}: ${optionValue}`}</Text>
                    </TouchableOpacity>
                  );
                },
              )}

              <View style={styles.buttonContainer}>
                <TouchableOpacity
                  style={[styles.button, styles.prevButton]}
                  onPress={handlePrevQuestion}>
                  <Text style={styles.buttonText}>Önceki Soru</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={[styles.button, styles.nextButton]}
                  onPress={handleNextQuestion}>
                  <Text style={styles.buttonText}>Sonraki Soru</Text>
                </TouchableOpacity>
              </View>
            </ScrollView>
          </View>
        </SafeAreaView>
      )}
    </View>
  );
};

// ... Diğer stil tanımlamaları

export default QuizSolveScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  timerContainer: {
    flexDirection: 'row',
    //alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  timerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 4,
    marginLeft: 10,
  },
  questionContainer: {
    flex: 1,
    padding: 10,
    margin: 10,
    borderRadius: 10,
    justifyContent: 'center',
    marginBottom: 90,
  },
  questionText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  optionContainer: {
    borderColor: 'black',
    borderWidth: 2,
    borderRadius: 10,
    marginTop: 15,
  },
  optionText: {
    padding: 10,
    fontSize: 12,
    alignSelf: 'flex-start',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  button: {
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  prevButton: {
    backgroundColor: Colors.ACCENT_COLOR2,
  },
  nextButton: {
    backgroundColor: Colors.ACCENT_COLOR,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  backButton: {
    backgroundColor: Colors.RANDOM_COLOR3,
    padding: 15,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 20,
  },
  scoreContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  lottie: {
    width: 40,
    height: 40,
    marginBottom: 20,
  },
  scoreText: {
    fontSize: 16,
    lineHeight: 24,
    flexDirection: 'row',
    flexWrap: 'wrap',
    borderColor: 'black',
    borderWidth: 1,
    padding: 8,
  },
  tableHeader: {
    fontWeight: 'bold',
    marginRight: 5,
  },
  progressBarContainer: {
    flexDirection: 'row',
    height: 20,
    marginTop: 10,
  },
  progressBar: {
    flex: 1,
  },
});
