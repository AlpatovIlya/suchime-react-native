import AsyncStorage from '@react-native-async-storage/async-storage';
import {Dispatch} from 'react';
import {
  applicationReducerTypes,
  applicationSetError,
  applicationSetLoadingStatus,
  applicationSetOnBoardingStatus,
} from '../types/applicationReducerTypes';

const IS_FINISHT_ONBOARDING = 'ONBOARDING/IS_FINISHT_ONBOARDIND';

const setError = (error: string | null): applicationSetError => {
  return {
    type: '@application/setError',
    payload: error,
  };
};

const setLoading = (loading: boolean): applicationSetLoadingStatus => {
  return {
    type: '@application/loading',
    payload: loading,
  };
};

const setOnBoardingStatus = (
  isFinished: boolean,
): applicationSetOnBoardingStatus => {
  AsyncStorage.setItem(IS_FINISHT_ONBOARDING, isFinished ? 'finish' : '');
  return {
    type: '@application/onBoarding',
    payload: isFinished,
  };
};

const init = () => {
  return async (dispatch: Dispatch<applicationReducerTypes>) => {
    dispatch(setLoading(true));
    try {
      const isFinishOnBoarding = await AsyncStorage.getItem(
        IS_FINISHT_ONBOARDING,
      );
      dispatch(setOnBoardingStatus(!!isFinishOnBoarding));
    } catch (e) {
      setError('Упс... что-то пошло не так');
    }
    dispatch(setLoading(false));
  };
};

const applicationActions = {init, setOnBoardingStatus};

export default applicationActions;
