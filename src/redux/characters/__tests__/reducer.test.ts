import {CharacterBuildMock} from '../__mocks__/CharacterBuildMock.mock';
import actions from '../actions';
import reducer from '../reducer';

import {
  CharacterListTypes,
  CharacterListAction,
  CharacterListState,
} from '../types';

describe('Characters Reducers', () => {
  const initialState = {
    isLoading: false,
    characterLists: [],
    error: undefined,
    next: null,
    previous: null,
    count: Number.NaN,
  };

  const mockData = new CharacterBuildMock().withName('Luke').build();

  const any = ['any', {type: 'any' as CharacterListTypes}, {...initialState}];

  const setError = [
    'setError',
    actions.setError('error'),
    {...initialState, error: 'error'},
  ];

  const requestCharacters = [
    'requestCharacters',
    actions.requestCharacters(),
    {...initialState, isLoading: true, error: undefined},
  ];

  const setCharacterLists = [
    'setCharacterLists',
    actions.setCharacterLists([mockData]),
    {...initialState, characterLists: [mockData]},
  ];

  test.each([any, setError, requestCharacters, setCharacterLists] as Array<
    [string, CharacterListAction<CharacterListState>, CharacterListState]
  >)(
    'deve retornar corretamente o state para a action %s',
    (describe, action, expected) => {
      const response = reducer(initialState, action);

      expect(response).toEqual(expected);
    },
  );
});
