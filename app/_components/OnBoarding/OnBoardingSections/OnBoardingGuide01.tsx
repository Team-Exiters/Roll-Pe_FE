"use client";
import styled from "styled-components";
import Image from "next/image";
import {
  MainContentSectionWrapper,
  OnBoardingGuideWrapper,
  GuideContainer,
  GuideSectionTitle,
} from "../../ui/sections/MainSection";
import sectionImage from "@/public/images/image/image_section_1.png";

const OnBoardingGuide01: React.FC = () => {
  return (
    <OnBoardingGuideWrapper>
      <GuideContainer>
        <GuideSectionTitle>
          쉽게 만드는
          <br />
          우리만의 롤페
        </GuideSectionTitle>
        <div className={"main-image-wrapper"}>
          <Image
            src={sectionImage}
            layout="responsive"
            width={305}
            height={406}
            alt={"롤페 설명1"}
            placeholder="blur"
            loading="lazy"
          />
        </div>
      </GuideContainer>
    </OnBoardingGuideWrapper>
  );
};

export default OnBoardingGuide01;
