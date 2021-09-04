import {
  CharacterListAction,
  CharacterListState,
  CharacterListReducer,
  CharactersType,
} from './types';

const initialState: CharacterListState = {
  name: '',
  height: '',
  mass: '',
  hair_color: '',
  skin_color: '',
  eye_color: '',
  birth_year: '',
  gender: '',
  homeworld: '',
  films: [],
  species: [],
  vehicles: [],
  starshpis: [],
  created: '',
  edited: '',
  url: '',
};

const requestData: CharacterListReducer = state => ({
  ...state,
});

const CharacterListMap = new Map([
  [CharactersType.GET_CHARACTERS, requestData],
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
