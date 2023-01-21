import React from "react";
import styled from "styled-components";

type ImageProps = {
  src: string;
  alt: string;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
  className?: string;
};

const StyledImage = styled.img<ImageProps>`
  display: inline-block;
  width: ${(props) => props.width ?? "300px"};
  height: ${(props) => props.height ?? "300px"};
`;

function Image(props: ImageProps) {
  return <StyledImage {...props} />;
}

export default Image;
