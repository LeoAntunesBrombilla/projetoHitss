import React from 'react';
import {render} from '@testing-library/react-native';

import {Footer} from '../';

describe('Footer component', () => {
  it('should render the footer with only the home button', () => {
    const {queryByTestId} = render(
      <Footer
        previousPage={jest.fn()}
        nextPage={jest.fn()}
        navigateTo={jest.fn()}
        page="home"
      />,
    );
    expect(queryByTestId('home')).toBeTruthy();
  });

  it('should render the footer with the left, right and favorite buttons', () => {
    const {queryByTestId} = render(
      <Footer
        previousPage={jest.fn()}
        nextPage={jest.fn()}
        navigateTo={jest.fn()}
        page=""
      />,
    );
    expect(queryByTestId('home-left-right')).toBeTruthy();
  });
});
