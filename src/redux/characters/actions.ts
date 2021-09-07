import {CharacterListTypes, CharacterListAction, CharacterLists} from './types';

const actions = {
  setError: (error?: string): CharacterListAction<{error?: string}> => ({
    type: CharacterListTypes.SET_ERROR,
    payload: {error},
  }),
  requestList: () => ({
    type: CharacterListTypes.REQUEST_LIST,
  }),
  setCharacterLists: (
    characterLists: CharacterLists,
  ): CharacterListAction<{characterLists: CharacterLists}> => ({
    type: CharacterListTypes.SET_CHARACTER_LISTS,
    payload: {characterLists},
  }),
  addFavorite: () => ({
    type: CharacterListTypes.ADD_FAVORITE,
  }),
};

export default actions;
