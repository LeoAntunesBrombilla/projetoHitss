import {AppStateMockBuilder} from '../../__mocks__/AppStateMockBuilder';

import {CharacterBuildMock} from '../__mocks__/CharacterBuildMock.mock';

import * as selectors from '../selectors';

describe('Character Selector', () => {
  const mockCharacter = new CharacterBuildMock().withName('Luke').build();

  const mockState = new AppStateMockBuilder()
    .withCharacter({
      isLoading: false,
      characterLists: [mockCharacter],
      next: '3',
      previous: '1',
      count: 82,
    })
    .build();

  const getCharacterList = [
    'getCharacterList',
    selectors.getCharacterList(mockState),
    [mockCharacter],
  ];

  const getNextPage = ['getNextPage', selectors.getNextPage(mockState), '3'];

  const getPreviousPage = [
    'getPreviousPage',
    selectors.getPreviousPage(mockState),
    '1',
  ];

  const getCharactersCount = [
    'getCharactersCount',
    selectors.getCharactersCount(mockState),
    82,
  ];

  const isLoading = ['isLoading', selectors.isLoading(mockState), false];

  test.each([
    getCharacterList,
    getNextPage,
    getPreviousPage,
    isLoading,
    getCharactersCount,
  ] as Array<[string, typeof selectors, any]>)(
    'deve retornar corretamente os dados do selector %s',
    (describe, selector, expected) => {
      expect(selector).toEqual(expected);
    },
  );
});
