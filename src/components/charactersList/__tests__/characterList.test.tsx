import React from 'react';
import {render} from '@testing-library/react-native';

import {CharactersList} from '../';

const mockDataCharacters = [
  {
    name: 'a',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: '',
    homeworld: '',
    films: [''],
    species: [''],
    vehicles: [''],
    starships: [''],
    created: '',
    edited: '',
    url: '',
  },
  {
    name: 'b',
    height: '',
    mass: '',
    hair_color: '',
    skin_color: '',
    eye_color: '',
    birth_year: '',
    gender: '',
    homeworld: '',
    films: [''],
    species: [''],
    vehicles: [''],
    starships: [''],
    created: '',
    edited: '',
    url: '',
  },
];

const renderCharacters = jest.fn();

describe('CharactersList component', () => {
  it('should render the data received', () => {
    const {queryByTestId} = render(
      <CharactersList
        data={mockDataCharacters}
        renderItem={renderCharacters}
        keyExtractor={item => item.name}
      />,
    );

    expect(queryByTestId('characters-list')).toBeTruthy();
  });
});
