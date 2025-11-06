"use client";
import styled from "styled-components";
import Image from "next/image";
import {
  MainContentSectionWrapper,
  OnBoardingGuideWrapper,
  GuideContainer,
  GuideSectionTitle,
} from "../../ui/sections/MainSection";
import { COLORS } from "@/public/styles/colors";
import sectionImage from "@/public/images/image/image_section_2.png";

const OnBoardingGuide02: React.FC = () => {
  return (
    <OnBoardingGuide02Wrapper>
      <GuideContainer>
        <GuideSectionTitle>
          함께 나누었던 추억,
          <br />
          언제 어디서나
        </GuideSectionTitle>
        <div className={"main-image-wrapper"}>
          <Image
            src={sectionImage}
            layout="responsive"
            width={305}
            height={406}
            alt={"롤페 설명1"}
            loading="lazy"
          />
        </div>
      </GuideContainer>
    </OnBoardingGuide02Wrapper>
  );
};

const OnBoardingGuide02Wrapper = styled(OnBoardingGuideWrapper)`
  background-color: ${COLORS.ROLLPE_SECTION_BACKGROUND};
`;

export default OnBoardingGuide02;
