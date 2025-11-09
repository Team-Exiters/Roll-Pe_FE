import OnBoardingGuide01 from "./OnBoardingSections/OnBoardingGuide01";
import OnBoardingGuide02 from "./OnBoardingSections/OnBoardingGuide02";
import OnBoardingIntro from "./OnBoardingSections/OnBoardingIntro";
import Footer from "../ui/layouts/Footer";
import { OnBoardingPageWrapper } from "../ui/sections/MainSection";
import { hakgyoansim } from "@/public/fonts/fonts";

const OnBoarding: React.FC = () => {
  return (
    <OnBoardingPageWrapper className={`${hakgyoansim.className}`}>
      <OnBoardingIntro />
      <OnBoardingGuide01 />
      <OnBoardingGuide02 />
      <Footer />
    </OnBoardingPageWrapper>
  );
};

export default OnBoarding;
