import {put, call} from 'redux-saga/effects';

import {characterListActions} from '../';
import {CharacterBuildMock} from '../__mocks__/CharacterBuildMock.mock';

import * as sagas from '../sagas';
import * as repository from '../repository';

const character = new CharacterBuildMock().withName('Nome').build();

describe('Character Sagas', () => {
  test('deve realizar o request de Characters corretamente', () => {
    const action = characterListActions.requestCharacters();
    const gen = sagas.requestCharacters(action);

    expect(gen.next().value).toEqual(put(characterListActions.setError()));

    expect(gen.next().value).toEqual(
      call(repository.requestCharacters, action.payload),
    );

    const response = {
      count: 82,
      next: 'https://swapi.dev/api/people/?page=3',
      previous: 'https://swapi.dev/api/people/?page=1',
      results: [character],
    };

    expect(gen.next(response).value).toEqual(
      put(characterListActions.setCharacterLists([character])),
    );

    expect(gen.next().value).toEqual(
      put(
        characterListActions.setPageInfo({previous: '1', next: '3', count: 82}),
      ),
    );

    expect(gen.next().done).toBe(true);
  });
});
