"use client";
import styled from "styled-components";

import sectionImage from "@/public/images/image/image_section_1.png";
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
  console.log(typeof sectionImage);
  return (
    <GuideWrapper $sectionNum={sectionNum}>
      <GuideContainer>
        <GuideSectionTitle>{title}</GuideSectionTitle>
        <MainImageWrapper>
          <StyledIntroImage
            src={image}
            alt={`롤페 가이드 이미지 ${sectionNum}`}
            width={0}
            height={0}
            sizes="100%"
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
  width: 100%;
`;

const GuideSectionTitle = styled.h2`
  color: ${COLORS.ROLLPE_SECONDARY};
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const StyledIntroImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export default OnBoardingGuide;
