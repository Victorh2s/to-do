import styled, { css } from 'styled-components';
export const Wrapper = styled.div``


export const Form = styled.form`
  ${({ theme }) => css`
  
  width: 46rem;
  margin: 0 auto;
  display: flex;
  margin-top: -1.5rem; 
  }

  input{
    flex: 1;
    height: 50px;
    border-radius: 5px;
    border: 1px solid ${theme.colors.Gray700};
    padding: 1rem;
    font-size: 1rem;
    background: ${theme.colors.Gray500};
    font-weight: 500;
    transition: border 0.2s ease-in-out;
    color: ${theme.colors.Gray100};
    &:focus {
        outline: none;
        border-color: ${theme.colors.PurpleFocus};
    }
  }
  

  button {
    background: ${theme.colors.BlueDark};
    border: 0;
    color: ${theme.colors.Gray100};
    margin-left: 0.5rem;
    padding: 1rem;
    border-radius: 5px;
    display: flex;
    align-items: center;
    font-size: 0.875rem;
    font-weight: bold;
    transition: background 0.2s ease-in-out;
    cursor: pointer;

    svg{
      margin-left: 0.5rem;
    }

    &:hover{
      background: ${theme.colors.Blue};
    }
  `}
`;

