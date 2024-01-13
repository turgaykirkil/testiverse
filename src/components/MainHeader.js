import {Platform, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Icons from './Icon';
import * as Colors from '../Utils/Colors';
import {removeItem} from '../Utils/AsyncStorage';

const MainHeader = ({title, onPress}) => {
  //const insets = useSafeAreaInsets();
  return (
    <View
      style={[
        styles.container,
        //{marginTop: insets.top}
      ]}>
      <Icons
        name="menu"
        color={Colors.PRIMARY_COLOR}
        onPress={() => {
          removeItem('onboarded');
        }}
      />
      <Text style={styles.title}>{title}</Text>
      <Icons
        name="account-circle"
        color={Colors.PRIMARY_COLOR}
        onPress={onPress}
      />
    </View>
  );
};

export default MainHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    padding: Platform.OS === 'android' ? 10 : 0,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: Colors.PRIMARY_COLOR,
  },
});
