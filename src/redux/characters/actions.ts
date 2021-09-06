import {CharacterListTypes, CharacterLists, CharacterListAction} from './types';

const actions = {
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
