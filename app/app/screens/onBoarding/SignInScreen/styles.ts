import {StyleSheet} from 'react-native';
import {rootTheme} from '../../../themes';

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  body: {
    alignItems: 'center',
    paddingHorizontal: 35,
  },
  logo: {
    width: 166,
    height: 49,
    marginBottom: 21,
  },
  title: {
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 32,
    textAlign: 'center',
    color: rootTheme.colors.background,
    marginBottom: 10,
  },
  subTitle: {
    color: rootTheme.colors.background,
    fontSize: 18,
    marginBottom: 39,
  },
  button: {
    width: '100%',
    marginBottom: 48,
  },
  confirmation: {
    color: rootTheme.colors.textColorInBlackBackground,
    textAlign: 'center',
    fontWeight: '300',
  },
  link: {
    color: rootTheme.colors.sub,
  },
});

export default styles;
