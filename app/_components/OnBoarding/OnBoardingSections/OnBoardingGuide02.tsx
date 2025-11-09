import {
  MainImageWrapper,
  OnBoardingGuide02Wrapper,
  StyledIntroImage,
  OnBoardingGuideWrapper,
  GuideContainer,
  GuideSectionTitle,
} from "../../ui/sections/MainSection";
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
        <MainImageWrapper>
          <StyledIntroImage
            src={sectionImage}
            alt={"롤페 설명1"}
            width={0}
            height={0}
            sizes="100%"
          />
        </MainImageWrapper>
      </GuideContainer>
    </OnBoardingGuide02Wrapper>
  );
};

export default OnBoardingGuide02;
