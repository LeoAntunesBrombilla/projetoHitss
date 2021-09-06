import {characterListActions} from '.';

import {
  CharacterListAction,
  CharacterListReducer,
  CharacterListState,
  CharacterListTypes,
} from './types';

const initialState: CharacterListState = {
  isLoading: false,
  characterLists: [],
  error: undefined,
};

const requestData: CharacterListReducer = state => ({
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

const CharacterListMap = new Map([
  [CharacterListTypes.REQUEST_LIST, requestData],
]);

const reducer = (
  state: CharacterListState = initialState,
  action: CharacterListAction<CharacterListState>,
): CharacterListState => {
  const characterListReducer = CharacterListMap.get(action.type);

  if (characterListReducer) return characterListReducer(state, action);

  return state;
};

export default reducer;
