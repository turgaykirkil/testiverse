import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import MainStyles from '../Utils/MainStyles';

const ScreenHeader = ({mainTitle, subTitle}) => {
  return (
    <View style={MainStyles.textContainer}>
      <Text style={MainStyles.title}>{mainTitle}</Text>
      <Text style={MainStyles.subtitle}>{subTitle}</Text>
    </View>
  );
};

export default ScreenHeader;
