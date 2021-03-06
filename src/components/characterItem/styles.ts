import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: black;
  display: flex;
  flex-direction: row;
  padding: 2.5%;
  margin: 2% auto;
  width: 75%;
  border-radius: 10px;
`;

interface WidthProp {
  width: string;
}

export const Item = styled.Text<WidthProp>`
  font-size: 20px;
  color: white;
  align-self: flex-start;
  width: ${props => props.width};
  margin-right: 4%;
`;

export const IsFavoriteButton = styled.TouchableOpacity`
  width: 10%;
  margin-right: 3%;
`;

export const DetailsButton = styled.TouchableOpacity`
  width: 10%;
`;
