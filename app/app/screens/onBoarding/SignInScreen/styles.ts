import {StyleSheet} from 'react-native';
import rootStyles from '../../../rootStyles';
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
    fontFamily: rootTheme.fonts.main,
    fontStyle: 'normal',
    fontWeight: '600',
    fontSize: 32,
    textAlign: 'center',
    color: rootTheme.colors.background,
    marginBottom: 10,
  },
  subTitle: {
    ...rootStyles.text,
    color: rootTheme.colors.background,
    fontSize: 18,
    marginBottom: 39,
  },
  button: {
    width: '100%',
    marginBottom: 48,
  },
  confirmation: {
    ...rootStyles.text,
    color: rootTheme.colors.textColorInBlackBackground,
    textAlign: 'center',
    fontWeight: '300',
  },
  link: {
    color: rootTheme.colors.sub,
  },
});

export default styles;
