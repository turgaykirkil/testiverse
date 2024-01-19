import React from 'react';
import {TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const Icons = React.memo(({onPress, name, color, size = 32}) => {
  const image = <Icon name={name} size={size} color={color} />;

  if (onPress) {
    return <TouchableOpacity onPress={onPress}>{image}</TouchableOpacity>;
  }
  return image;
});

export default Icons;
