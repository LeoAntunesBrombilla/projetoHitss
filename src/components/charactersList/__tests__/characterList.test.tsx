import React from 'react';
import {render} from '@testing-library/react-native';

import {FlatList} from 'react-native';

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
    const componentTree = render(
      <FlatList
        data={mockDataCharacters}
        renderItem={renderCharacters}
        keyExtractor={item => item.name}
        nestedScrollEnabled
        testID="flatlist"
      />,
    );

    expect(componentTree).toBeTruthy();
    expect(componentTree.getAllByTestId('flatlist').length).toBe(1);
  });
});
