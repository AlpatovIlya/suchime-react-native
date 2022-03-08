import AsyncStorage from '@react-native-async-storage/async-storage';
import React, {useEffect, useState} from 'react';
import {SafeAreaView, Text} from 'react-native';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import {OnBoardingNavigator} from './app/navigators';
import combineReducers from './app/store/store';
const store = createStore(combineReducers);

const IS_FINISHT_ONBOARDIND = 'ONBOARDING/IS_FINISHT_ONBOARDIND';

const App = () => {
  const [loadingApp, setloadingApp] = useState(true);
  const [isFinishOnBoarding, setisFinishOnBoarding] = useState(false);
  const onEnterApp = async () => {
    const isFinishOnBoarding = await AsyncStorage.getItem(
      IS_FINISHT_ONBOARDIND,
    );
    setisFinishOnBoarding(!!isFinishOnBoarding);
    setloadingApp(false);
  };
  useEffect(() => {
    onEnterApp();
  }, []);

  if (loadingApp) {
    return (
      <SafeAreaView>
        <Text>.....Загруууууузка</Text>
      </SafeAreaView>
    );
  }

  return (
    <Provider store={store}>
      <SafeAreaProvider>
        <OnBoardingNavigator />
      </SafeAreaProvider>
    </Provider>
  );
};

export default App;
