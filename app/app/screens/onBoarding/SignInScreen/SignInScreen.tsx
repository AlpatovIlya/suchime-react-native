import React from 'react';
import {Image, ImageBackground, Linking, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Button} from '../../../components';
import {logoImage} from '../../../images';
import {bgImage} from './images';
import styles from './styles';
// @ts-expect-error
import {CONFIRMATION_URL} from '@env';

const SignInScreen = () => {
  const onPressConfirmation = () => {
    Linking.openURL(CONFIRMATION_URL);
  };

  return (
    <ImageBackground style={styles.wrapper} source={bgImage}>
      <SafeAreaView style={styles.body}>
        <Image style={styles.logo} source={logoImage} />
        <Text style={styles.title}>Welcome Back</Text>
        <Text style={styles.subTitle}>Sign in to continue</Text>
        <Button style={styles.button} themeButton="black">
          SIGN IN AS GUEST
        </Button>
        <View>
          <Text style={styles.confirmation}>
            By logging in you agree to sushime{' '}
            <Text style={styles.link} onPress={onPressConfirmation}>
              Terms and services, Privecy policy and Content policy
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default SignInScreen;
