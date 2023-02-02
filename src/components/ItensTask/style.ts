import styled, { css } from 'styled-components';

export const Wrapper = styled.div`
  ${({ theme }) => css`
  width: 46rem;
  margin: 0 auto;
  margin-top: 64px;
  min-height: 287px;

  > header{
    display: flex;
    align-items: center;
    justify-content: space-between;

    div {
      font-weight: bold;
      font-size: 0.875rem;
      span{
        padding: 0.125rem 0.5rem;
        background: ${theme.colors.Gray400};
        font-size: 0.75rem;
        font-weight: bold;
        color: ${theme.colors.Gray200};
        margin-left: 0.5rem;
        border-radius: 10px;
      }
    }

    div:first-child {
      color: ${theme.colors.Blue};
    }

    div:last-child {
      color: ${theme.colors.Purple};
    }

  }

 
  `}
`;


export const NoList = styled.main`
  ${({ theme }) => css`
  
    margin-top: 24px;
    height: 244px;
    border-radius: 4px;
    border-top: 1px solid ${theme.colors.Gray400};
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    img{
      margin-bottom: 1rem;
    }

     strong, span {
      color: ${theme.colors.Gray300};
    }
    
  `}
`;

export const WithList = styled.main`
  ${({ theme }) => css`
  
    margin-top: 1.5rem;
    min-height: 244px;
    border-radius: 4px;
    border-top: 1px solid ${theme.colors.Gray400};
  
    div + div {
      margin-top: 0.75rem;
    }
    
  `}
`;


// main {
//   margin-top: 24px;
//   height: 244px;
//   border-radius: 4px;
//   border-top: 1px solid ${theme.colors.Gray400};
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   flex-direction: column;

//   img{
//     margin-bottom: 1rem;
//   }

//    strong, span {
//     color: ${theme.colors.Gray300};
//   }
// }