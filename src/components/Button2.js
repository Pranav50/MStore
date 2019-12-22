import styled from 'styled-components';

export const ButtonContainer2 = styled.button`
  text-transform:capitalize;
  font-size: 1.4rem;
  background: transparent;
  color: #222f3e;
  border-color: ${props => 
    props.cart ? "#ff9f43": "#c8d6e5"};
  border-radius: 20px;
  &:hover{
    background: ${props => 
      props.cart ? "#feca57": "#c8d6e5"};;
    color:#273c75;
    outline: none !important;
  }
  transition: all 0.3s ease-in-out;
`