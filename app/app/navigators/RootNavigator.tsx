import React, {useEffect} from 'react';
import {Text} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useDispatch} from 'react-redux';
import {OnBoardingNavigator} from '.';
import {FullScreenLoader} from '../components';
import {useTypedSelector} from '../hooks';
import applicationActions from '../store/actions/applicationActions';
import MainNavigator from './MainNavigator';

const RootNavigator = () => {
  const dispatch = useDispatch();
  const application = useTypedSelector(state => state.application);

  useEffect(() => {
    dispatch(applicationActions.init());
  }, []);

  if (application.loading) {
    return <FullScreenLoader />;
  }
  if (application.isFinishOnBoarding) return <MainNavigator />;
  return <OnBoardingNavigator />;
};

export default RootNavigator;
