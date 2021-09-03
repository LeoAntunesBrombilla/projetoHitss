import {CharactersType} from './types';

const actions = {
  requestList: () => ({
    type: CharactersType.GET_CHARACTERS,
  }),
  addFavorite: () => ({
    type: CharactersType.ADD_FAVORITE,
  }),
};

export default actions;
