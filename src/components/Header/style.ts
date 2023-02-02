import styled, { css } from 'styled-components';

export const Header = styled.div`
  ${({ theme }) => css`
    height: 200px;
    background: ${theme.colors.Gray700};
    display: flex;
    align-items: center;
    justify-content: center;
    padding-bottom: 4rem;

    
  `}
`;
