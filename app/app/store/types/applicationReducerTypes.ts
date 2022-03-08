export type applicationSetError = {
  type: '@application/setError';
  payload: string | null;
};

export type applicationSetLoadingStatus = {
  type: '@application/loading';
  payload: boolean;
};

export type applicationSetOnBoardingStatus = {
  type: '@application/onBoarding';
  payload: boolean;
};

export type applicationReducerTypes =
  | applicationSetError
  | applicationSetLoadingStatus
  | applicationSetOnBoardingStatus;
