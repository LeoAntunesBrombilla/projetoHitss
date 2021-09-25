import api from '../../api';
import {CharacterWithFavorite} from './types';

export interface CharacterResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: CharacterWithFavorite[];
}

const requestCharacters = async (page: string = '1') => {
  const response = await api.get<CharacterResponse>(`people/?page=${page}`);
  return response.data;
};

export {requestCharacters};
