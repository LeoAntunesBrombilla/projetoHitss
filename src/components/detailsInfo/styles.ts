import styled from 'styled-components/native';

export const DetailsInfoContainer = styled.View`
  display: flex;
  flex-direction: column;
  width: 70%;
  height: 60%;
  margin: 0 auto;
  align-self: center;
`;

export const DetailsText = styled.Text`
  font-size: 20px;
  font-weight: bold;
  align-self: center;
`;

export const DetailsRowContainer = styled.View`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 10%;
  justify-content: space-around;
`;

export const DetailsTitle = styled.Text`
  font-size: 30px;
  align-self: center;
  margin-top: 10%;
  font-weight: bold;
`;
