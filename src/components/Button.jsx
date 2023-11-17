import React from "react";
import styled from "styled-components";

const Button = styled.button`
  font-size: 10px;
  border: 1px solid white;
  border-radius: 10px;
  width: 80px;
  padding: 5px;
  text-align: center;
  background: black;
  &:hover {
    background: white;
    color: black;
  }
  &:focus {
    background: ${(props) => (props.$bgColor ? "pink" : "black")};
  }
  color: white;
  user-select: none;
  cursor: pointer;
  margin: 5px;
`;

export default Button;
