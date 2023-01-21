import React, { useEffect, useRef } from "react";
import PageSection from "../components/PageSection";
import Image from "../components/Image";
import ShoeInfo from "../components/ShoeInfo";
import ImageWrapper from "../components/ImageWrapper";
import { Point, PointerWrapper } from "../components/PointerPageNation";
import { throttle } from "../utils/throttle";

function ShoePage() {
  const showInfos = [
    {
      name: "나이키 에어맥스 테라스케이프",
      info: "에어맥스와 바삭바삭한 그래놀라가 만났습니다 내구성 좋은 소재와 90년대 부모님 세대의 사랑을 듬뿍 받은 스키 재킷을 떠올리게 하는 컬러가 만나 새로운 디자인으로 탄생했습니다. 웨빙 풀 탭은 클립 포인트 역할도 겸하므로 백팩에 간편하게 걸어 놓을 수 있습니다. 작지만 큰 힘을 발휘하는 아이템입니다. 클래식한 에어 기술은 트레일에서 말 그대로 공기 위를 걷는 듯한 착화감을 선사합니다.",
      image1: "/images/shoe1-1.webp",
      image2: "/images/shoe1-2.webp",
    },
    {
      name: "덩크 하이 프리미엄 남성 신발",
      info: "덩크 하이를 신고 기념 행사에 참여해 보세요. 트임이 들어간 디자인은 죽은 자들을 기리고 이들을 집으로 이끌어주는 제단의 예물에서 흔히 찾아볼 수 있는 소금과 물을 상징합니다. 전통에 따르면 소금은 몸이 본질을 잃지 않도록 지켜주고 물은 예물을 찾아오는 영혼의 갈증을 해소해 준다고 합니다. 생기 넘치는 색조가 에너지를 더하고, 부드러운 스웨이드와 정교한 자수가 핏의 룩과 느낌을 한층 높여줍니다. 머리와 가슴에 평생, 어쩌면 그 이상 간직될... 우리는 가족입니다.",
      image1: "/images/shoe2-1.jfif",
      image2: "/images/shoe2-2.jfif",
    },
    {
      name: "조던 맥스 아우라 4",
      info: "이 차세대 농구화에 적용된 경량의 쿠셔닝은 이전 모델로부터 아이디어를 가져왔습니다. 유행을 타지 않는 스타일과 구름 모양 힐이 코트에서 날아오를 수 있는 지지력을 제공합니다.",
      image1: "/images/shoe3-1.webp",
      image2: "/images/shoe3-2.webp",
    },
    {
      name: "나이키 알파플라이 2",
      info: "이 나이키 에어 줌 알파플라이 넥스트% 2를 신고 몇 걸음을 내디디면, 가장 좋아하던 오래된 레이싱화도 이전과는 다르게 느껴질 것입니다. 이 로켓선은 완주에 필요한 기본 기능은 포기하지 않으면서 개인 기록을 단축시킬 수 있게 도와줍니다. 러닝을 위해 두꺼우면서 가벼운 서포트 시스템이 편안함과 속도를 동시에 잡았습니다. 개인 기록에 도전하면서 나이키의 모든 레이싱화 중에서 가장 탁월한 에너지 반환력을 즐기세요.",
      image1: "/images/shoe4-1.webp",
      image2: "/images/shoe4-2.webp",
    },
    {
      name: "나이키 스트릭플라이",
      info: "나이키 사상 가장 가벼운 레이싱화인 나이키 스트릭플라이는 마일 런, 5K 및 10K 레이스 등 어떤 승부에서든 최고의 속도를 발휘할 수 있게 해줍니다. 날렵한 디테일을 적용한 로우 프로파일 디자인으로, 개인 최고 기록을 향한 여정에서 마치 신발을 신지 않은 듯한 착화감을 선사해 지면과 하나된 듯한 일체감을 느낄 수 있습니다.",
      image1: "/images/shoe5-1.webp",
      image2: "/images/shoe5-2.webp",
    },
    {
      name: "나이키 페가수스 39 프리미엄",
      info: "이 날개 달린 말은 과거에 안주하지 않습니다. 이전 모델보다 눈에 띄는 디테일과 편안한 착용감으로 완성되었으며, 푹신한 지지력과 매일 신기 좋은 안정감으로 믿고 선택할 수 있는 신발입니다. 인연을 맺으며 영감을 주는 인간 페이서에게서 영감을 받은 러닝 필수 필수품에 빛나는 반전을 더했습니다.",
      image1: "/images/shoe6-1.webp",
      image2: "/images/shoe6-2.webp",
    },
  ];

  const sectionRefs = useRef<any>([]);
  const pointerRefs = useRef<any>([]);

  const changePage = (pageNumber: number) => {
    const sections = sectionRefs.current;

    selectPage(pageNumber);
    window.scrollTo({
      top: sections[pageNumber].offsetTop,
      behavior: "smooth",
    });
  };

  const selectPage = (pageNumber: number) => {
    const length = sectionRefs.current.length;
    const sections = sectionRefs.current;
    const pointers = pointerRefs.current;

    for (let i = 0; i < length; i++) {
      const section = sections[i];
      const pointer = pointers[i];

      section.classList.remove("active");
      pointer.classList.remove("active");
    }

    sections[pageNumber].classList.add("active");
    pointers[pageNumber].classList.add("active");
  };

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const sections = sectionRefs.current;
    const length = sectionRefs.current.length;

    for (let pageNumber = 0; pageNumber < length; pageNumber++) {
      const section = sections[pageNumber];
      if (
        scrollY > section.offsetTop - window.outerHeight / 1.5 &&
        scrollY <
          section.offsetTop - window.outerHeight / 1.5 + section.offsetHeight
      ) {
        selectPage(pageNumber);
        break;
      }
    }
  };

  useEffect(() => {
    const throtaleHandler = throttle(handleScroll);
    window.addEventListener("scroll", throtaleHandler);

    return () => {
      window.removeEventListener("scroll", throtaleHandler);
    };
  });

  return (
    <>
      <PointerWrapper>
        {showInfos.map((_, index) => (
          <Point
            key={index}
            ref={(element) => {
              pointerRefs.current[index] = element;
            }}
            onClick={() => changePage(index)}
          />
        ))}
      </PointerWrapper>

      {showInfos.map((showInfo, index) => (
        <PageSection
          key={index}
          ref={(element) => {
            sectionRefs.current[index] = element;
          }}
        >
          <ShoeInfo name={showInfo.name} info={showInfo.info} />
          <ImageWrapper>
            <Image
              src={showInfo.image1}
              alt={`${showInfo.name}1`}
              width={400}
              height={400}
              className="left"
            />
            <Image
              src={showInfo.image2}
              alt={`${showInfo.name}2`}
              width={400}
              height={400}
              className="right"
            />
          </ImageWrapper>
        </PageSection>
      ))}
    </>
  );
}

export default ShoePage;
