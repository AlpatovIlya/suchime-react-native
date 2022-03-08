import {StyleSheet} from 'react-native';
import {rootTheme} from '../../../themes';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    paddingHorizontal: 50,
  },
  logo: {
    alignSelf: 'center',
    width: 110,
    height: 33,
    marginTop: 40,
  },
  body: {
    flex: 1,
    justifyContent: 'space-between',
  },
  title: {
    width: 154,
    height: 44,
    alignSelf: 'center',
    marginBottom: 28,
  },
  description: {
    fontSize: 16,
    marginBottom: 47,
    textAlign: 'center',
    alignSelf: 'center',
    maxWidth: 250,
    color: rootTheme.colors.textColorInBlackBackground,
  },
  button: {
    marginBottom: 37,
  },
});

export default styles;
