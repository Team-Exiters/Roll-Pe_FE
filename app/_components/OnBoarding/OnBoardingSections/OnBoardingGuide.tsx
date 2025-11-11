"use client";
import styled from "styled-components";
import Image, { StaticImageData } from "next/image";
import { COLORS } from "@/public/styles/colors";

interface GuideSectionProps {
  image: StaticImageData;
  title: React.ReactNode;
  sectionNum: number;
}

const OnBoardingGuide: React.FC<GuideSectionProps> = ({
  image,
  sectionNum,
  title,
}: GuideSectionProps) => {
  return (
    <GuideWrapper $sectionNum={sectionNum}>
      <GuideContainer>
        <GuideSectionTitle>{title}</GuideSectionTitle>
        <MainImageWrapper>
          <Image
            src={image}
            alt={`롤페 가이드 이미지 ${sectionNum}`}
            fill
            objectFit="contain"
          />
        </MainImageWrapper>
      </GuideContainer>
    </GuideWrapper>
  );
};

const GuideWrapper = styled.section<{ $sectionNum: number }>`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: ${({ $sectionNum }) =>
    $sectionNum === 1 ? "0rem 1.25rem 2.5rem 1.25rem" : "2.5rem 1.25rem"};
  width: calc(100% - 2.5rem);
  background-color: ${({ $sectionNum }) =>
    $sectionNum === 1
      ? COLORS.ROLLPE_PRIMARY
      : COLORS.ROLLPE_SECTION_BACKGROUND};

  min-height: 100vh;
  min-height: 100dvh;
  min-height: 100svh;
`;

const GuideContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 100%;
  gap: 2.5rem;
`;

const MainImageWrapper = styled.div`
  position: relative;
  width: 100%;
  aspect-ratio: 642 / 844;
`;

const GuideSectionTitle = styled.h2`
  color: ${COLORS.ROLLPE_SECONDARY};
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export default OnBoardingGuide;
