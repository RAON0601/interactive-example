import React, { ForwardedRef, forwardRef } from "react";
import styled from "styled-components";

type PageSectionProps = {
  children: React.ReactNode;
};

const Section = styled.section<PageSectionProps>`
  display: flex;
  position: relative;
  align-items: center;

  width: 100vw;
  height: 100vh;

  img {
    opacity: 0;
    transition: all 1s ease-in-out;
    position: absolute;
  }

  img.left {
    top: 0;
    left: 20px;
    transform: translate(-100px, -150px) rotate(-10deg);
  }

  img.right {
    top: 30px;
    left: 500px;
    transition-delay: 0.2s;
    transform: translate(100px, 150px) rotate(-10deg);
  }

  &.active img {
    opacity: 1;
    transform: translate(0px, 0px) rotate(0deg);
  }
`;

function PageSection(
  { children }: PageSectionProps,
  ref: ForwardedRef<HTMLElement>
) {
  return <Section ref={ref}>{children}</Section>;
}

export default forwardRef<HTMLElement, PageSectionProps>(PageSection);
