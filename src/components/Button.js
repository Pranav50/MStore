import styled from 'styled-components';

export const ButtonContainer = styled.button`
  text-transform:capitalize;
  font-size: 1.4rem;
  background: transparent;
  color: #222f3e;
  border-color: #48dbfb;
  border-radius: 20px;
  &:hover{
    background: #c7ecee;
    color:#273c75;
    outline: none !important;
  }
  transition: all 0.3s ease-in-out;
`