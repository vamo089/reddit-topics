import React from "react";
import styled, { keyframes } from "styled-components";

const animation = keyframes`
  0% {
    opacity: 0.5;
    transform: scale(1)
  }

  50% {
    opacity: 1;
    transform: scale(1.25)
  }
  100% {
    opacity: 0.5;
    transform: scale(1)
  }
`;
const Container = styled.div`
  display: inline-flex;
`;
const Item = styled.div`
  width: 10px;
  height: 10px;
  margin: 4px;
  border-radius: 5px;
  background-color: #1a1a1a;
  will-change: transform, opacity;
  animation: ${animation} 1.25s infinite ease;
  
  &:nth-child(1) {
    animation-delay: 250ms;
  }
  &:nth-child(2) {
    animation-delay: 500ms;
  }
  &:nth-child(3) {
    animation-delay: 750ms;
  }
`;
export const Loader = () => {
  return (
    <Container>
      <Item> </Item>
      <Item> </Item>
      <Item> </Item>
    </Container>
  );
};
