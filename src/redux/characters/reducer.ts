import {
  CharacterListAction,
  CharacterListReducer,
  Character,
  CharactersListType,
} from './types';

const initialState: Character = {
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
  [CharactersListType.GET_CHARACTERS, requestData],
]);

const reducer = (
  state: Character = initialState,
  action: CharacterListAction<Character>,
): Character => {
  const characterListReducer = CharacterListMap.get(action.type);

  if (characterListReducer) return characterListReducer(state, action);

  return state;
};

export default reducer;
