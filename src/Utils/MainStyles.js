import {StyleSheet} from 'react-native';
import * as Colors from './Colors';

const MainStyles = StyleSheet.create({
  container: {
    flex: 1,
  },
  textContainer: {
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: Colors.PRIMARY_COLOR,
  },
  mainTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    fontFamily: 'Roboto',
    color: Colors.PRIMARY_COLOR,
  },
  subtitle: {
    fontSize: 20,
    fontFamily: 'Roboto',
    color: Colors.ACCENT_COLOR2,
  },
});

export default MainStyles;
