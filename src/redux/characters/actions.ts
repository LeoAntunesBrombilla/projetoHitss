import {
  CharacterListTypes,
  CharacterListAction,
  CharacterLists,
  Character,
} from './types';

const actions = {
  setError: (error?: string): CharacterListAction<{error?: string}> => ({
    type: CharacterListTypes.SET_ERROR,
    payload: {error},
  }),
  requestCharacters: (urlPath: string = '1') => ({
    type: CharacterListTypes.REQUEST_CHARACTERS,
    payload: urlPath,
  }),
  setCharacterLists: (
    characterLists: CharacterLists,
  ): CharacterListAction<{characterLists: CharacterLists}> => ({
    type: CharacterListTypes.SET_CHARACTER_LISTS,
    payload: {characterLists},
  }),
  setPageInfo: (payload: {
    count: number;
    next: string | null;
    previous: string | null;
  }): CharacterListAction<{
    count: number;
    next: string | null;
    previous: string | null;
  }> => ({
    type: CharacterListTypes.SET_PAGE_INFO,
    payload,
  }),
  setFavorite: (payload: {
    Character: Character;
  }): CharacterListAction<{
    Character: Character;
  }> => ({
    type: CharacterListTypes.SET_FAVORITE,
    payload,
  }),
};

export default actions;
