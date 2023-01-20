import React from "react";
import styled from "styled-components";

type RotateImageProps = {
  src: string;
  alt: string;
  deg: number;
  style?: React.CSSProperties;
  width?: number;
  height?: number;
};

const Image = styled.img<RotateImageProps>`
  display: inline-block;
  width: ${(props) => props.width ?? "300px"};
  height: ${(props) => props.height ?? "300px"};

  transition: transform 2s cubic-bezier(1, -0.01, 0.175, 0.97);
  transform: translate(-50%, -50%) rotate(${(props) => `${props.deg}deg`});
`;

function RoulleteImage(props: RotateImageProps) {
  return <Image {...props} />;
}

export default RoulleteImage;
