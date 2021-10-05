import React from 'react';
import {render, fireEvent} from '@testing-library/react-native';
import TestRenderer from 'react-test-renderer';

import {Item, DetailsButton} from '../styles';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import IconEntypo from 'react-native-vector-icons/Entypo';

describe('Item component', () => {
  it('dont display text when there are no text', () => {
    const {getByText} = render(<Item></Item>);
    expect(getByText('')).not.toBeNull();
  });

  it('display the correct text', () => {
    const {queryByText} = render(<Item>Oi</Item>);
    expect(queryByText('Oi')).not.toBeNull();
  });
});

describe('Favorite Icon component', () => {
  it('display with the correct icon and color', () => {
    const testRendererIcon = TestRenderer.create(
      <Icon name="star-four-points" color="white" size={25} />,
    );

    expect(testRendererIcon.getInstance()?.props.name).toBe('star-four-points');
    expect(testRendererIcon.getInstance()?.props.color).toBe('white');
    expect(testRendererIcon.getInstance()?.props.size).toBe(25);
  });
});

describe('Details Icon component', () => {
  it('display with the correct icon and color', () => {
    const testRendererIcon = TestRenderer.create(
      <IconEntypo name="magnifying-glass" color="white" size={25} />,
    );

    expect(testRendererIcon.getInstance()?.props.name).toBe('magnifying-glass');
    expect(testRendererIcon.getInstance()?.props.color).toBe('white');
    expect(testRendererIcon.getInstance()?.props.size).toBe(25);
  });
});

describe('Details Button component', () => {
  const onPressMock = jest.fn();

  it('receive the action from pressing the button', () => {
    const {getByTestId} = render(
      <DetailsButton onPress={onPressMock}>
        <IconEntypo
          name="magnifying-glass"
          size={25}
          color="white"
          testID="icon"
        />
      </DetailsButton>,
    );

    fireEvent.press(getByTestId('icon'));
    expect(onPressMock).toHaveBeenCalled();
  });
});
