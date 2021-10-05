import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';

import CharacterItem from '../';

describe('CharacterItem component', () => {
  describe('In case the character is a favorite', () => {
    it('must show the characters name and not show the favorite button', () => {
      const {queryByText, queryByTestId} = render(
        <CharacterItem page="favorites" onPress={jest.fn()} text="Luke" />,
      );
      expect(queryByText('Luke')).toBeTruthy();
      expect(queryByTestId('favorite-button')).toBeFalsy();
    });
    //Query ver se ele existe
    //Get ver as funcionalidas / ativar props
    it('should call onClick props when details button is pressed', () => {
      const onClick = jest.fn();
      const {getByTestId} = render(
        <CharacterItem
          page="favorites"
          onPress={jest.fn()}
          text="Luke"
          onClick={onClick}
        />,
      );
      fireEvent.press(getByTestId('details-button'));
      expect(onClick).toHaveBeenCalled();
    });
  });
});
