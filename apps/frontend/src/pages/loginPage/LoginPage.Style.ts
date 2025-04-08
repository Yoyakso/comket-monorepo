import styled from 'styled-components';

export const title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.error};
`;

export const errorMessage = styled.p`
  font-size: 1rem;
  font-weight: 500;
  color: ${({ theme }) => theme.textPlaceholder};
  `