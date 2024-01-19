import React, {useState} from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import * as Colors from '../Utils/Colors';
import Icons from './Icon';

const SearchBar = React.memo(({navigation}) => {
  const [searchText, setSearchText] = useState('');

  const handleSearch = () => {
    navigation.navigate('SearchResult', {searchText});
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Sınav Ara..."
        value={searchText}
        onChangeText={text => setSearchText(text)}
        returnKeyType="search"
        onSubmitEditing={handleSearch}
      />
      <Icons
        name="magnify"
        color={Colors.PRIMARY_COLOR}
        onPress={handleSearch}
      />
    </View>
  );
});

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    margin: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: Colors.PRIMARY_COLOR,
  },
  searchButton: {
    marginLeft: 10,
    padding: 10,
    backgroundColor: '#3498db',
    borderRadius: 8,
  },
});

export default SearchBar;
