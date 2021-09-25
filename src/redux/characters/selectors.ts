import {RootState} from '../reducers';

export const getCharacterList = (state: RootState) =>
  state.characterReducer.characterLists;

export const getNextPage = (state: RootState) => state.characterReducer.next;

export const getPreviousPage = (state: RootState) =>
  state.characterReducer.previous;

export const getFavorite = (state: RootState) =>
  state.characterReducer.isFavorite;

export const getCharactersCount = (state: RootState) =>
  state.characterReducer.count;

export const isLoading = (state: RootState) => state.characterReducer.isLoading;
