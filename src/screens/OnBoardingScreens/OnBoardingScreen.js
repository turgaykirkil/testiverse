import React from 'react';
import {StyleSheet, View, Text, Dimensions} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import LottieView from 'lottie-react-native';
import {useNavigation} from '@react-navigation/native';
import * as Colors from '../../Utils/Colors';
import {setItem} from '../../Utils/AsyncStorage';

const {width, height} = Dimensions.get('window');

const OnBoardingScreen = () => {
  const navigation = useNavigation();
  const handleDone = async () => {
    await setItem('onboarded', '0');
    console.log('Onboarding completed'); // Log ekleyin
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      <Onboarding
        onDone={handleDone}
        onSkip={handleDone}
        skipLabel="Atla"
        nextLabel="Sonraki"
        containerStyle={{paddingHorizontal: 20}}
        pages={[
          {
            backgroundColor: Colors.SOFT_RANDOM_COLOR1,
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../../assets/lottie/hosgeldiniz.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: 'Keşfetmeye Hazır Mısın?',
            subtitle:
              'Uygulamamıza hoş geldin! Başarıya giden yolculuğuna başlamak için hazır mısın?',
          },
          {
            backgroundColor: Colors.SOFT_RANDOM_COLOR2,
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../../assets/lottie/performance.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: 'Kolay Kullanım',
            subtitle:
              'Sade arayüzümüz ile hızlı ve kolay bir şekilde uygulamamızı kullanabilirsin.',
          },
          {
            backgroundColor: Colors.SOFT_RANDOM_COLOR3,
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../../assets/lottie/update.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: 'Güvenli ve Güncel',
            subtitle:
              'Uygulamamız her zaman güncel ve güvenli. Soruları çözerken içi rahat olsun!',
          },
          {
            backgroundColor: Colors.SOFT_RANDOM_COLOR4,
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../../assets/lottie/advertise.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: 'En Az Reklam',
            subtitle:
              'Soruları çözerken sizi rahatsız edecek en az reklam. Odaklanın ve başarıya ulaşın!',
          },
          {
            backgroundColor: Colors.SOFT_RANDOM_COLOR5,
            image: (
              <View style={styles.lottie}>
                <LottieView
                  source={require('../../assets/lottie/start.json')}
                  autoPlay
                  loop
                  style={styles.lottie}
                />
              </View>
            ),
            title: 'Testiverse',
            subtitle:
              'Hemen başlayın ve Testiverse dünyasına adım atın! Soruları çözmeye başlayın ve başarıya ulaşın!',
          },
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  lottie: {
    width: width * 0.9,
    height: width,
  },
});

export default OnBoardingScreen;
