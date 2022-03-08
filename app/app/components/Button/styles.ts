import {StyleSheet} from 'react-native';
import {rootTheme} from '../../themes';

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 24,
    borderRadius: 15,
  },
  text: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '600',
  },
  lightWrapper: {
    backgroundColor: rootTheme.colors.background,
  },
  lightText: {
    color: rootTheme.colors.main,
  },
  subWrapper: {
    backgroundColor: rootTheme.colors.sub,
  },
  subText: {
    color: rootTheme.colors.textColorInBlackBackground,
  },
  blackWrapper: {
    backgroundColor: rootTheme.colors.main,
  },
  blackText: {
    color: rootTheme.colors.textColorInBlackBackground,
  },
});

const lightButtonStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: rootTheme.colors.background,
  },
  text: {
    color: rootTheme.colors.main,
  },
});

const subButtonStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: rootTheme.colors.sub,
  },
  text: {
    color: rootTheme.colors.textColorInBlackBackground,
  },
});

const blackButtonStyle = StyleSheet.create({
  wrapper: {
    backgroundColor: rootTheme.colors.main,
  },
  text: {
    color: rootTheme.colors.textColorInBlackBackground,
  },
});

export {lightButtonStyle, subButtonStyle, blackButtonStyle};
export default styles;
