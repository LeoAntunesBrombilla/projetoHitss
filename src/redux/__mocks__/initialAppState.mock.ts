import {RootState} from '../reducers';

export const initialAppState: RootState = {
  _persist: {
    version: -1,
    rehydrated: false,
  },
  characterReducer: {
    characterLists: [],
    isLoading: false,
    error: undefined,
    previous: null,
    next: null,
    count: Number.NaN,
  },
};
