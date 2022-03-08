import {StyleSheet} from 'react-native';
import {rootTheme} from '../themes';

const rootStyles = StyleSheet.create({
  text: {
    fontFamily: rootTheme.fonts.main,
    color: rootTheme.colors.mainTextColor,
    fontWeight: '500',
    fontSize: 13,
  },
});

export default rootStyles;
