import {AnyTypeAnnotation} from '@babel/types';
import React from 'react';
import {Animated, ImageBackground, LayoutAnimationProperty} from 'react-native';
import {fullScreenLoaderImage} from './images';
import styles from './styles';

type Props = {
  animated: any;
};

const FullScreenLoading = ({animated}: Props) => {
  return (
    <Animated.Image
      style={[
        styles.wrapper,
        {
          opacity: animated,
        },
      ]}
      source={fullScreenLoaderImage}
    />
  );
};

export default FullScreenLoading;
