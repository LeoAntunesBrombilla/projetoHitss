import {CharacterBuildMock} from '../__mocks__/CharacterBuildMock.mock';

import actions from '../actions';
import {CharacterListTypes} from '../types';

describe('Character Action', () => {
  const mockCharacter = new CharacterBuildMock().withName('Luke').build();

  const setError = [
    'setError',
    actions.setError('error'),
    {type: CharacterListTypes.SET_ERROR, payload: {error: 'error'}},
  ];

  const requestCharacters = [
    'requestCharacters',
    actions.requestCharacters(),
    {type: CharacterListTypes.REQUEST_CHARACTERS},
  ];

  /*
  const setPageInfo = [
    'setPageInfo',
    actions.setPageInfo(9, '', ''),
    {
      type: CharacterListTypes.SET_PAGE_INFO,
      payload: {count: 9, next: '', previous: ''},
    },
  ];
  */

  const setCharacterLists = [
    'setCharactersLists',
    actions.setCharacterLists([mockCharacter]),
    {
      type: CharacterListTypes.SET_CHARACTER_LISTS,
      payload: {characterLists: [mockCharacter]},
    },
  ];

  test.each([setError, requestCharacters, setCharacterLists])(
    'deve retornar as actions corretas %s',
    (describe, action, expected) => {
      expect(action).toEqual(expected);
    },
  );
});
