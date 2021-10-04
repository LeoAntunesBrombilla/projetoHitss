import React from 'react';
import {render} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';

import {Item} from '../styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

describe('Test if the character item works correctly', () => {
  it('dont display any text when there are no text', () => {
    const {getByText} = render(<Item></Item>);
    expect(getByText('')).not.toBeNull();
  });

  it('display correct text', () => {
    const {queryByText} = render(<Item>Oi</Item>);
    expect(queryByText('Oi')).not.toBeNull();
  });

  it('display with the correct icon and color', () => {
    const testRendererIcon = TestRenderer.create(
      <Icon name="star-four-points" color="white" />,
    );

    expect(testRendererIcon.getInstance()?.props.name).toBe('star-four-points');
    expect(testRendererIcon.getInstance()?.props.color).toBe('white');
  });
});
