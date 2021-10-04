import React from 'react';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

import {
  DetailsInfoContainer,
  DetailsText,
  DetailsTitle,
  DetailsRowContainer,
} from './styles';

interface Props {
  name: string;
  height: string;
  mass: string;
  hair_color: string;
  birth_year: string;
  movies?: string[];
}

//TODO create a separate component for this block of code

/*
<DetailsRowContainer>
    <Icon name="human-male-height" size={40} color="black" />
    <DetailsText>{`${props.height}cm`}</DetailsText>
</DetailsRowContainer>
*/

export const DetailInfo = (props: Props) => {
  return (
    <>
      <DetailsTitle>{props.name}</DetailsTitle>
      <DetailsInfoContainer>
        <DetailsRowContainer>
          <Icon name="human-male-height" size={35} color="black" />
          <DetailsText>{`${props.height} cm`}</DetailsText>
        </DetailsRowContainer>
        <DetailsRowContainer>
          <Icon name="weight-kilogram" size={35} color="black" />
          <DetailsText>{`${props.mass} kg`}</DetailsText>
        </DetailsRowContainer>
        <DetailsRowContainer>
          <Icon name="baby" size={35} color="black" />
          <DetailsText>{`${props.birth_year}`}</DetailsText>
        </DetailsRowContainer>
        <DetailsRowContainer>
          <Icon name="content-cut" size={35} color="black" />
          <DetailsText>{`${props.hair_color}`}</DetailsText>
        </DetailsRowContainer>
      </DetailsInfoContainer>
    </>
  );
};
