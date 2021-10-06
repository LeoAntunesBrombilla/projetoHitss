import styled from 'styled-components/native';

export const DetailsInfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 80%;
  justify-content: center;
  align-items: center;
  align-self: center;
`;

export const DetailsText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  width: 20%;
`;

export const DetailsRowContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 80%;
  height: 20%;
  justify-content: space-around;
`;

export const DetailsTitle = styled.Text`
  font-size: 30px;
  align-self: center;
  margin-top: 20%;
  font-weight: bold;
`;
