export enum CharacterListTypes {
  REQUEST_CHARACTERS = '@@CHARACTERS/REQUEST_CHARACTERS',
  SET_FAVORITE = '@@CHARACTERS/ADD_FAVORITE',
  SET_CHARACTER_LISTS = '@@CHARACTERS/SET_CHARACTER_LISTS',
  SET_ERROR = '@@CHARACTERS/SET_ERROR',
  SET_PAGE_INFO = '@@CHARACTERS/SET_PAGE_INFO',
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
  starships: string[];
  created: string;
  edited: string;
  url: string;
};

export interface CharacterWithFavorite extends Character {
  isFavorite: boolean;
}

export type CharacterLists = Array<CharacterWithFavorite>;

export interface CharacterListState {
  isLoading: boolean;
  next: string | null;
  previous: string | null;
  characterLists: CharacterLists;
  error?: string;
  count: number;
}

export type CharacterListAction<Payload> = {
  type: CharacterListTypes;
  payload: Payload;
};

export type CharacterListReducer = (
  state: CharacterListState,
  payload: CharacterListAction<CharacterListState>,
) => CharacterListState;
