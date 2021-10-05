import React from 'react';
import {render} from '@testing-library/react-native';

import {Title} from '../styles';

describe('Title Component', () => {
  it('dont display text when there are no text', () => {
    const {getByText} = render(<Title></Title>);
    expect(getByText('')).not.toBeNull();
  });

  const props = 'oi';

  it('display the correct text', () => {
    const {queryByText} = render(<Title>{props}</Title>);
    expect(queryByText(props)).not.toBeNull();
  });
});
