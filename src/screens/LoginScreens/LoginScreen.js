import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Image,
  StyleSheet,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import {FontAwesome, AntDesign} from '@expo/vector-icons';

// Renk Bilgileri
import {
  PRIMARY_COLOR,
  SECONDARY_COLOR,
  SOFT_RANDOM_COLOR1,
  SOFT_RANDOM_COLOR2,
  SOFT_RANDOM_COLOR3,
  SOFT_RANDOM_COLOR4,
} from './../../Utils/Colors';

const AuthScreen = ({navigation}) => {
  const [activeScreen, setActiveScreen] = useState('login');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login:', email, password);
    navigation.navigate('BottomTabs');
  };

  const handleRegister = () => {
    console.log('Register:', email, password);
    setActiveScreen('verifyEmail');
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password:', email);
    setActiveScreen('forgotPassword');
  };

  const handleVerifyEmail = () => {
    console.log('Verify Email:', email);
  };

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={[styles.container, {backgroundColor: '#fff'}]}>
        <Image
          source={require('../../assets/logo.png')} // Logo için uygun bir dosya yolu belirt
          style={styles.logo}
        />
        {activeScreen === 'login' && (
          <View style={styles.formContainer}>
            <Text style={styles.title}>Giriş Yap</Text>
            <TextInput
              style={[styles.input, {borderColor: SOFT_RANDOM_COLOR1}]}
              placeholder="E-mail"
              placeholderTextColor={SOFT_RANDOM_COLOR1}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={[styles.input, {borderColor: SOFT_RANDOM_COLOR2}]}
              placeholder="Şifre"
              placeholderTextColor={SOFT_RANDOM_COLOR2}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={[styles.button, {backgroundColor: PRIMARY_COLOR}]}
              onPress={handleLogin}>
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: SECONDARY_COLOR}]}
              onPress={() => setActiveScreen('register')}>
              <Text style={styles.buttonText}>Kayıt Ol</Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={handleForgotPassword}
              style={styles.forgotPassword}>
              <Text style={styles.forgotPasswordText}>Şifremi Unuttum</Text>
            </TouchableOpacity>
            <View style={styles.socialLoginContainer}>
              <TouchableOpacity
                style={[
                  styles.socialLoginButton,
                  {backgroundColor: '#1877f2'},
                ]}>
                <FontAwesome name="facebook" size={24} color="white" />
                <Text style={styles.socialLoginButtonText}>
                  Facebook ile Giriş
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={[
                  styles.socialLoginButton,
                  {backgroundColor: '#db4a39'},
                ]}>
                <AntDesign name="google" size={24} color="white" />
                <Text style={styles.socialLoginButtonText}>
                  Google ile Giriş
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {activeScreen === 'register' && (
          <View style={styles.formContainer}>
            <Text style={styles.title}>Kayıt Ol</Text>
            <TextInput
              style={[styles.input, {borderColor: SOFT_RANDOM_COLOR1}]}
              placeholder="E-mail"
              placeholderTextColor={SOFT_RANDOM_COLOR1}
              value={email}
              onChangeText={setEmail}
            />
            <TextInput
              style={[styles.input, {borderColor: SOFT_RANDOM_COLOR2}]}
              placeholder="Şifre"
              placeholderTextColor={SOFT_RANDOM_COLOR2}
              secureTextEntry
              value={password}
              onChangeText={setPassword}
            />
            <TouchableOpacity
              style={[styles.button, {backgroundColor: PRIMARY_COLOR}]}
              onPress={handleRegister}>
              <Text style={styles.buttonText}>Kayıt Ol</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, {backgroundColor: SECONDARY_COLOR}]}
              onPress={() => setActiveScreen('login')}>
              <Text style={styles.buttonText}>Giriş Yap</Text>
            </TouchableOpacity>
          </View>
        )}

        {activeScreen === 'forgotPassword' && (
          <View style={styles.formContainer}>
            <Text style={styles.title}>Şifremi Unuttum</Text>
            <TextInput
              style={[styles.input, {borderColor: SOFT_RANDOM_COLOR3}]}
              placeholder="E-mail"
              placeholderTextColor={SOFT_RANDOM_COLOR3}
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity
              style={[styles.button, {backgroundColor: SECONDARY_COLOR}]}
              onPress={handleForgotPassword}>
              <Text style={styles.buttonText}>Şifremi Sıfırla</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.goBack}
              onPress={() => setActiveScreen('login')}>
              <Text style={styles.goBackText}>Geri Dön</Text>
            </TouchableOpacity>
          </View>
        )}

        {activeScreen === 'verifyEmail' && (
          <View style={styles.formContainer}>
            <Text style={styles.title}>E-mail Doğrulama</Text>
            <Text style={styles.subtitle}>
              Hesabınızı doğrulamak için e-mail adresinize gönderilen kodu
              girin.
            </Text>
            <TextInput
              style={[styles.input, {borderColor: SECONDARY_COLOR}]}
              placeholder="Doğrulama Kodu"
              placeholderTextColor={SECONDARY_COLOR}
              value={email}
              onChangeText={setEmail}
            />
            <TouchableOpacity
              style={[styles.button, {backgroundColor: PRIMARY_COLOR}]}
              onPress={handleVerifyEmail}>
              <Text style={styles.buttonText}>Doğrula</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.goBack}
              onPress={() => setActiveScreen('login')}>
              <Text style={styles.goBackText}>Geri Dön</Text>
            </TouchableOpacity>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200, // İstediğin boyutları belirle
    height: 200, // İstediğin boyutları belirle
    marginBottom: 20,
  },
  formContainer: {
    width: '80%',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: PRIMARY_COLOR,
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  input: {
    backgroundColor: 'white',
    height: 40,
    paddingHorizontal: 10,
    marginBottom: 15,
    borderRadius: 8,
    borderWidth: 1,
  },
  button: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    borderRadius: 8,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    marginTop: 10,
  },
  forgotPasswordText: {
    color: SECONDARY_COLOR,
  },
  goBack: {
    marginTop: 20,
  },
  goBackText: {
    color: SECONDARY_COLOR,
    fontWeight: 'bold',
  },
  socialLoginContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  socialLoginButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 40,
    borderRadius: 8,
    marginRight: 10,
  },
  socialLoginButtonText: {
    color: 'white',
    marginLeft: 8,
    fontWeight: 'bold',
  },
});

export default AuthScreen;
