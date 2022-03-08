import React from 'react';
import {ImageBackground} from 'react-native';
import {fullScreenLoaderImage} from './images';
import styles from './styles';

const FullScreenLoading = () => {
  return (
    <ImageBackground style={styles.wrapper} source={fullScreenLoaderImage} />
  );
};

export default FullScreenLoading;
