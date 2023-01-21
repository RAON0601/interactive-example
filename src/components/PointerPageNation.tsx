import styled from "styled-components";

export const PointerWrapper = styled.ul`
  position: fixed;
  right: 3vw;
  top: 40%;
  z-index: 100;
`;

export const Point = styled.li`
  list-style: none;
  width: 12px;
  height: 12px;
  margin-top: 15px;
  cursor: pointer;
  background-color: #999;
  border-radius: 50%;
  transition: background 0.3s ease-out;

  &.active {
    background-color: #000;
  }
`;
