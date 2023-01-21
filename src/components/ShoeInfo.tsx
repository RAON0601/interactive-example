import React from "react";
import styled from "styled-components";

type ShoeInfoProps = {
  name: string;
  info: string;
};

const Wrapper = styled.div`
  width: 30vw;
  position: absolute;
  top: 35%;
  left: 200px;
`;

const Name = styled.h1`
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 2rem;
`;

const Info = styled.p`
  font-weight: 1.25rem;
  line-height: 1.5rem;
`;

function ShoeInfo({ name, info }: ShoeInfoProps) {
  return (
    <Wrapper>
      <Name>{name}</Name>
      <Info>{info}</Info>
    </Wrapper>
  );
}

export default ShoeInfo;
