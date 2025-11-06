import OnBoardingGuide01 from "./OnBoardingSections/OnBoardingGuide01";
import OnBoardingGuide02 from "./OnBoardingSections/OnBoardingGuide02";
import OnBoardingIntro from "./OnBoardingSections/OnBoardingIntro";
import Footer from "../ui/layouts/Footer";
import { OnBoardingPageWrapper } from "../ui/sections/MainSection";

const OnBoarding: React.FC = () => {
  return (
    <OnBoardingPageWrapper>
      <OnBoardingIntro />
      <OnBoardingGuide01 />
      <OnBoardingGuide02 />
      <Footer />
    </OnBoardingPageWrapper>
  );
};

export default OnBoarding;
