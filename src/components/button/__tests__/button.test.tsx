import React from 'react';
import {render} from '@testing-library/react-native';

import {Button} from '..';

describe('Button Component', () => {
  describe('In the case where the button is to the next page (right)', () => {
    it('must not show the left arrow, the favorite icon or the home icon', () => {
      const {queryByTestId} = render(
        <Button onPress={jest.fn()} icon="right" />,
      );

      expect(queryByTestId('right-arrow')).toBeTruthy();
      expect(queryByTestId('left-arrow')).toBeFalsy();
      expect(queryByTestId('favorite-icon')).toBeFalsy();
      expect(queryByTestId('home-icon')).toBeFalsy();
    });
  });

  describe('In the case where the button is to the previous page (left)', () => {
    it('must not show the right arrow, the favorite icon or the home icon', () => {
      const {queryByTestId} = render(
        <Button onPress={jest.fn()} icon="left" />,
      );

      expect(queryByTestId('left-arrow')).toBeTruthy();
      expect(queryByTestId('right-arrow')).toBeFalsy();
      expect(queryByTestId('favorite-icon')).toBeFalsy();
      expect(queryByTestId('home-icon')).toBeFalsy();
    });
  });

  describe('In the case where the button is to the favorites page', () => {
    it('must not show the right arrow, the left arrow or the home icon', () => {
      const {queryByTestId} = render(
        <Button onPress={jest.fn()} icon="star-four-points" />,
      );

      expect(queryByTestId('favorite-icon')).toBeTruthy();
      expect(queryByTestId('left-arrow')).toBeFalsy();
      expect(queryByTestId('right-arrow')).toBeFalsy();
      expect(queryByTestId('home-icon')).toBeFalsy();
    });
  });

  describe('In the case where the button is to the home page', () => {
    it('must not show the right arrow, the left arrow or the home icon', () => {
      const {queryByTestId} = render(<Button onPress={jest.fn()} icon="" />);

      expect(queryByTestId('home-icon')).toBeTruthy();
      expect(queryByTestId('favorite-icon')).toBeFalsy();
      expect(queryByTestId('left-arrow')).toBeFalsy();
      expect(queryByTestId('right-arrow')).toBeFalsy();
    });
  });
});
