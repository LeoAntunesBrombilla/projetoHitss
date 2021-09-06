export enum CharacterListTypes {
  REQUEST_LIST = '@@CHARACTERS/REQUEST_LIST',
  ADD_FAVORITE = '@@CHARACTERS/ADD_FAVORITE',
  SET_CHARACTER_LISTS = '@@CHARACTERS/SET_CHARACTER_LISTS',
}

export type Character = {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  skin_color: string;
  eye_color: string;
  birth_year: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: string[];
  vehicles: string[];
  starshpis: string[];
  created: string;
  edited: string;
  url: string;
};

export type CharacterLists = Array<Character>;

export interface CharacterListState {
  isLoading: boolean;
  characterLists: CharacterLists;
  error?: string;
}

export type CharacterListAction<Payload> = {
  type: CharacterListTypes;
  payload: Payload;
};

export type CharacterListReducer = (
  state: Character,
  payload: CharacterListAction<Character>,
) => Character;
