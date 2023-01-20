import React from "react";
import styled from "styled-components";

type BackGroundProps = {
  gradientStart?: string;
  gradientEnd?: string;
  hue?: number;
  children: React.ReactNode;
};

const StyledBackground = styled.div<BackGroundProps>`
  height: 100vh;
  background-image: ${(props) => {
    const { gradientStart, gradientEnd, hue } = props;
    if (gradientStart && gradientEnd && hue) {
      return `linear-gradient(${hue}deg, ${gradientStart}, ${gradientEnd})`;
    }
    return "white";
  }};
`;

function GradientBackGround({
  gradientStart,
  gradientEnd,
  hue,
  children,
}: BackGroundProps) {
  const gradientProps = { gradientStart, gradientEnd, hue };
  return <StyledBackground {...gradientProps}>{children}</StyledBackground>;
}

export default GradientBackGround;
