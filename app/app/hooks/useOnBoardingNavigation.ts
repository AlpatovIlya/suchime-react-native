import {NavigationProp, useNavigation} from '@react-navigation/core';
import {OnBoardingScreenTypes} from '../types/routeTypes';

const useOnBoardingNavigation = () => {
  return useNavigation<NavigationProp<OnBoardingScreenTypes>>();
};

export default useOnBoardingNavigation;
