import React from 'react';
import {Image, ImageBackground, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {Button} from '../../../components';
import {useOnBoardingNavigation, useTypedSelector} from '../../../hooks';
import {logoImage} from '../../../images';
import {userActions} from '../../../store/actions';
import {bgImage, titleImage} from './images';
import styles from './styles';

const WelcomeScreen = () => {
  const dispatch = useDispatch();
  const navigation = useOnBoardingNavigation();
  const {user} = useTypedSelector(state => state.user);

  const onPressNextStep = () => {
    navigation.navigate('SignIn');
  };

  return (
    <ImageBackground style={styles.wrapper} source={bgImage}>
      <SafeAreaView style={styles.body}>
        <View>
          <Image style={styles.logo} source={logoImage} />
        </View>
        <View>
          <Image style={styles.title} source={titleImage} />
          <Text style={styles.description}>
            The best sushi restaurant right in front of your doorsteps
          </Text>
          <Button onPress={onPressNextStep} style={styles.button}>
            Get Started
          </Button>
        </View>
      </SafeAreaView>
    </ImageBackground>
  );
};

export default WelcomeScreen;
