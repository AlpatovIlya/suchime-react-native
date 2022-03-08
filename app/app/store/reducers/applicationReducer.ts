import {applicationReducerTypes} from '../types/applicationReducerTypes';

type applicationStateType = {
  loading: boolean;
  isFinishOnBoarding: boolean;
  error: string | null;
};

const applicationState: applicationStateType = {
  loading: true,
  isFinishOnBoarding: false,
  error: null,
};

const applicationReducer = (
  state = applicationState,
  action: applicationReducerTypes,
): applicationStateType => {
  switch (action.type) {
    case '@application/setError':
      return {...state, error: action.payload};
    case '@application/loading':
      return {...state, loading: action.payload};
    case '@application/onBoarding':
      return {...state, isFinishOnBoarding: action.payload};
    default:
      return state;
  }
};

export default applicationReducer;
