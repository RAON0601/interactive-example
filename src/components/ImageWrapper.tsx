import React from "react";
import styled from "styled-components";

type ImageWrapperProps = {
  children: React.ReactNode;
};

const StyledImageWrapper = styled.div`
  position: fixed;
  top: 35%;
  left: 45%;
  transform: translate(-50%, -50%);
`;

function ImageWrapper({ children }: ImageWrapperProps) {
  return <StyledImageWrapper>{children}</StyledImageWrapper>;
}

export default ImageWrapper;
