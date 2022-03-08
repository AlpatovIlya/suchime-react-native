import React, {useEffect, useRef, useState} from 'react';
import {Animated} from 'react-native';
import {useDispatch} from 'react-redux';
import {OnBoardingNavigator} from '.';
import {FullScreenLoader} from '../components';
import {useTypedSelector} from '../hooks';
import applicationActions from '../store/actions/applicationActions';
import MainNavigator from './MainNavigator';

const RootNavigator = () => {
  const [showLoader, setshowLoader] = useState(true);
  const animatedLoader = useRef(new Animated.Value(1)).current;
  const dispatch = useDispatch();
  const application = useTypedSelector(state => state.application);

  useEffect(() => {
    dispatch(applicationActions.init());
  }, []);

  useEffect(() => {
    if (application.loading) return;

    Animated.timing(animatedLoader, {
      toValue: 0,
      duration: 600,
      useNativeDriver: true,
    }).start(() => setshowLoader(false));
  }, [application.loading]);

  if (showLoader) {
    return <FullScreenLoader animated={animatedLoader} />;
  }
  if (application.isFinishOnBoarding) return <MainNavigator />;
  return <OnBoardingNavigator />;
};

export default RootNavigator;
