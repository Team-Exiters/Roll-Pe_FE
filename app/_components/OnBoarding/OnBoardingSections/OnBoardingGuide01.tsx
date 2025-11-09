import {
  MainImageWrapper,
  StyledIntroImage,
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
    </OnBoardingGuideWrapper>
  );
};

export default OnBoardingGuide01;
