import {put, call} from 'redux-saga/effects';

import {characterListActions} from '../';
import {CharacterBuildMock} from '../__mocks__/CharacterBuildMock.mock';

import * as sagas from '../sagas';

const character = new CharacterBuildMock().withName('Nome').build();

describe('Character Sagas', () => {
  test('deve realizar o request de Characters corretamente', () => {
    const action = characterListActions.requestCharacters();
    const gen = sagas.requestCharacters(action);

    expect(gen.next().value).toEqual(put(characterListActions.setError()));

    expect(gen.next().value).toEqual(call(sagas.requestCharacters));

    expect(gen.next([character]).value).toEqual(
      put(characterListActions.setCharacterLists([character])),
    );

    expect(gen.next().done).toBe(true);
  });
});
