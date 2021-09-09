/* Repositories are classes or components that encapsulate the logic required to access data sources. */

import api from '../../api';
import {Character} from './types';
import {AxiosResponse} from 'axios';

//TODO
/*
Vai precisar de id? para paginação?
*/

/*
const requestLists = (characterId: string) =>
  api.get<Character[]>(`people/${characterId}`).then((response: AxiosResponse) => {
    console.warn(response.data);
  });
*/

api.get<Character[]>(`people/1`).then((response: AxiosResponse) => {
  console.warn(response.data);
});
