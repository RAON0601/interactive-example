import React from "react";
import styled from "styled-components";

type ButtonGroupProps = {
  children: React.ReactNode;
};

const StyledButtonGroup = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 3rem;

  button {
    margin-right: 1.5rem;
    font-weight: bold;
    width: 100px;
  }
`;

function ButtonGroup({ children }: ButtonGroupProps) {
  return <StyledButtonGroup>{children}</StyledButtonGroup>;
}

export default ButtonGroup;
