import styled from 'styled-components/native';

export const Container = styled.View`
  background-color: #e5e5e5;
  display: flex;
  flex-direction: row;
  padding: 2%;
  margin: 2% auto;
  width: 70%;
  border-radius: 10px;
`;

export const Item = styled.Text`
  font-size: 20;
  font-weight: bold;
  align-self: flex-start;
  width: 90%;
`;

export const IsFavoriteButton = styled.TouchableOpacity`
  width: 10%;
  border: black solid 2px;
`;
