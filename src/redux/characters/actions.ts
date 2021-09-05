import {CharactersListType} from './types';

const actions = {
  requestList: () => ({
    type: CharactersListType.GET_CHARACTERS,
  }),
  addFavorite: () => ({
    type: CharactersListType.ADD_FAVORITE,
  }),
};

export default actions;
