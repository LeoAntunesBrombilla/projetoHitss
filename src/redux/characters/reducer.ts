import {characterListActions} from '.';

import {
  Character,
  CharacterListAction,
  CharacterListReducer,
  CharacterListState,
  CharacterListTypes,
} from './types';

const initialState: CharacterListState = {
  characterLists: [],
  favoriteCharacters: [],
  isLoading: false,
  error: undefined,
  previous: null,
  next: null,
  count: Number.NaN,
};

const requestCharacters: CharacterListReducer = state => ({
  ...state,
  isLoading: true,
  error: undefined,
});

const setCharacterLists: CharacterListReducer = (state, action) => {
  const {payload} = action as ReturnType<
    typeof characterListActions.setCharacterLists
  >;

  return {
    ...state,
    characterLists: payload.characterLists,
    isLoading: false,
    error: undefined,
  };
};

const favoriteArrays: Character[] = [];

const setFavorite: CharacterListReducer = (state, action) => {
  const {payload} = action as unknown as ReturnType<
    typeof characterListActions.setFavorite
  >;

  let index = favoriteArrays.findIndex(
    character => character.name === payload.Character.name,
  );

  if (index === -1) {
    favoriteArrays.push(payload.Character);
  } else {
    favoriteArrays.splice(index, 1);
  }

  return {
    ...state,
    favoriteCharacters: favoriteArrays,
    isLoading: false,
    error: undefined,
  };
};

const setPageInfo: CharacterListReducer = (state, action) => {
  const {
    payload: {count, previous, next},
  } = action as ReturnType<typeof characterListActions.setPageInfo>;

  return {
    ...state,
    isLoading: false,
    error: undefined,
    count,
    previous,
    next,
  };
};

const setError: CharacterListReducer = (state, action) => {
  const {payload} = action as ReturnType<typeof characterListActions.setError>;

  return {
    ...state,
    isLoading: false,
    error: payload.error,
  };
};

const CharacterListMap = new Map([
  [CharacterListTypes.SET_ERROR, setError],
  [CharacterListTypes.REQUEST_CHARACTERS, requestCharacters],
  [CharacterListTypes.SET_CHARACTER_LISTS, setCharacterLists],
  [CharacterListTypes.SET_PAGE_INFO, setPageInfo],
  [CharacterListTypes.SET_FAVORITE, setFavorite],
]);

const reducer = (
  state: CharacterListState = initialState,
  action: CharacterListAction<CharacterListState>,
): CharacterListState => {
  const characterListReducer = CharacterListMap.get(action.type);

  if (characterListReducer) {
    return characterListReducer(state, action);
  }

  return state;
};

export default reducer;
