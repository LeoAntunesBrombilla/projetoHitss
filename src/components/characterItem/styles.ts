import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #e5e5e5;
  display: flex;
  padding: 2.5%;
  margin: 2% auto;
  width: 70%;
`;

export const Item = styled.Text`
  font-size: 20;
  font-weight: bold;
`;

export const IsFavoriteButton = styled.TouchableOpacity`
  background-color: black;
  width: 10%;
  align-self: flex-end;
`;
