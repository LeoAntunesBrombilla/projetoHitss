import {RootState} from '../reducers';

export const initialAppState: RootState = {
  characterReducer: {
    characterLists: [],
    isLoading: false,
    error: undefined,
    previous: null,
    next: null,
    count: Number.NaN,
  },
};
