/* Repositories are classes or components that encapsulate the logic required to access data sources. */

import api from '../../api';
import {Character} from './types';

export interface CharacterResponse {
  count: number;
  next: string | null;
  previous: string | null;
  results: Character[];
}

const requestCharacters = async (page: string = '1') => {
  const response = await api.get<CharacterResponse>(`people/?page=${page}`);
  return response.data;
};

export {requestCharacters};
