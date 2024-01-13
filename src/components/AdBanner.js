import React from 'react';
import {View, Text, StyleSheet, Dimensions} from 'react-native';

const AdBanner = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>€</Text>
      {/* Buraya reklam bileşenini ekleyebilirsin */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get('window').width - 20,
    height: 250,
    backgroundColor: '#e0e0e0', // Reklam arkaplan rengi
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  text: {
    fontSize: 90,
    fontWeight: 'bold',
  },
});

export default AdBanner;
