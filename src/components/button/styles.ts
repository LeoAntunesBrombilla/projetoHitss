import styled from 'styled-components/native';

export interface ButtonProps {
  borderRadius?: number;
  color?: string;
  textAling?: string;
}

export const PaginationButton = styled.Button<ButtonProps>`
  color: black;
  text-align: center;
  border-radius: 10px;
`;
