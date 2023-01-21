import React, { useState } from "react";
import GradientBackGround from "../components/BackGround";
import Button from "../components/Button";
import ButtonGroup from "../components/ButtonGroup";
import Image from "../components/Image";
import Title from "../components/Title";

function Roullete() {
  const [imageDeg, setImageDeg] = useState<number>(0);

  const onRoulleteStart = () => {
    const nextDeg = Math.round(Math.random() * 720);
    setImageDeg(nextDeg);
  };

  const onDegReset = () => {
    setImageDeg(0);
  };

  return (
    <GradientBackGround
      hue={120}
      gradientStart={"#E6E8E7"}
      gradientEnd={"#72B505"}
    >
      <Title style={{ paddingTop: "40px" }}>룰렛</Title>

      <ButtonGroup>
        <Button onClick={onRoulleteStart}>시작!</Button>
        <Button onClick={onDegReset}>초기화</Button>
      </ButtonGroup>

      <Image
        src="/images/soju.png"
        alt="이미지"
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transition: `transform 2s cubic-bezier(1, -0.01, 0.175, 0.97)`,
          transform: `translate(-50%, -50%) rotate(${imageDeg}deg)`,
        }}
      />
    </GradientBackGround>
  );
}

export default Roullete;
