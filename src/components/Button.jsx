import React from 'react';
import styled from 'styled-components';

const Btn = styled.button`
  background-color: #f9bc03; 
  color: #333; 
  border: 0px; 
  border-radius: 3px;
  font-size: 14px;
  padding: 6px 12px;
  cursor: pointer;
  transition: all ease-in 500ms;
`;

const Button = props => (
  <Btn>{props.title}</Btn>
)

export default Button