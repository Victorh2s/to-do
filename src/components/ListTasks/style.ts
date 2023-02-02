import styled, { css } from 'styled-components';

export const ListTaks = styled.div`
  ${({ theme }) => css`
  
  min-height: 72px;
  border-radius: 8px;
  padding: 1rem;
  background: ${theme.colors.Gray500};

 

  div{
    display: flex;
    align-items: flex-start;
    justify-content: space-around;
    padding: 0; 

  
  .container {
    display: block;
    position: relative;
    padding-left: 25px;
    margin-bottom: 12px;
    cursor: pointer;
    font-size: 22px;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
  }


.container input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}


.checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 20px;
  width: 20px;
  background-color: transparent;
  border: 2px solid ${theme.colors.Blue};
  border-radius: 15px;
}


.container:hover input ~ .checkmark {
  background-color: ${theme.colors.PurpleDark};
}


.container input:checked ~ .checkmark  {
  background-color: ${theme.colors.PurpleDark};
  border: none;
  
}




.checkmark:after {
  content: "";
  position: absolute;
  display: none;
}

.container input:checked ~ .checkmark:after {
  display: block;
}

/* Style the checkmark/indicator */
.container .checkmark:after {
  left: 8px;
  top: 5px;
  width: 3px;
  height: 7px;
  border: solid white;
  border-width: 0 2px 2px 0;
  -webkit-transform: rotate(45deg);
  -ms-transform: rotate(45deg);
  transform: rotate(45deg);
}


  span{
    font-size: 14px;
    width: 632px;
    color: ${theme.colors.Gray100};
  }
  

  button{
    display: flex;
    align-items: center;
    justify-content: center;
    background: transparent;
    border: none;
    cursor: pointer;
    svg{
      color: ${theme.colors.Gray300};
    }
  }
}

  `}
`;
