export enum CharactersListType {
  GET_CHARACTERS = '@@CHARACTERS/GET_CHARACTERS',
  ADD_FAVORITE = '@@CHARACTERS/ADD_FAVORITE',
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

export interface SingleCharacter extends Character {
  id: string;
  isFavorite: boolean;
}

export type Characters = Array<SingleCharacter>;

export interface CharacterListState {
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
}

export type CharacterListAction<Payload> = {
  type: CharactersListType;
  payload: Payload;
};

export type CharacterListReducer = (
  state: CharacterListState,
  payload: CharacterListAction<CharacterListState>,
) => CharacterListState;
