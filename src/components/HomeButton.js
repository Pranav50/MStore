import styled from 'styled-components';

export const HomeButton = styled.button`
  text-transform:capitalize;
  font-size: 1.4rem;
  background: transparent;
  color: #D980FA;
  border-color:transparent;
  
  &:hover{
    background: linear-gradient(45deg, #c7ecee, #7ed6df);
    color:#273c75;
    outline: none !important;
    border-color: #48dbfb;
    border-radius: 20px;
  }
  transition: all 0.3s ease-in-out;
`