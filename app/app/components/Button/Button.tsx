import React, {ReactNode} from 'react';
import {
  Text,
  TextStyle,
  TouchableHighlightProps,
  TouchableOpacity,
} from 'react-native';
import styles, {
  blackButtonStyle,
  lightButtonStyle,
  subButtonStyle,
} from './styles';

type ThemeButton = 'light' | 'sub' | 'black';

const getStyleByThemeButton = (themeButton: ThemeButton = 'light') => {
  switch (themeButton) {
    case 'light':
      return lightButtonStyle;
    case 'sub':
      return subButtonStyle;
    case 'black':
      return blackButtonStyle;
    default:
      return lightButtonStyle;
  }
};

type Props = {
  children?: ReactNode;
  textStyle?: TextStyle;
  themeButton?: ThemeButton;
};

const Button = ({
  children,
  textStyle,
  style,
  themeButton,
  ...props
}: Props & TouchableHighlightProps) => {
  const btnStyle = getStyleByThemeButton(themeButton);
  return (
    <TouchableOpacity
      style={[styles.wrapper, btnStyle.wrapper, style]}
      {...props}>
      <Text style={[styles.text, btnStyle.text, textStyle]}>{children}</Text>
    </TouchableOpacity>
  );
};

export default Button;
