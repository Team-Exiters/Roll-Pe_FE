import OnBoardingGuide01 from "./OnBoardingSections/OnBoardingGuide01";
import OnBoardingGuide02 from "./OnBoardingSections/OnBoardingGuide02";
import OnBoardingIntro from "./OnBoardingSections/OnBoardingIntro";
import Footer from "../ui/layouts/Footer";
import { OnBoardingPageWrapper } from "../ui/sections/MainSection";
import localFont from "next/font/local";

const hakgyoansim = localFont({
  src: "../../../public/fonts/HakgyoansimR.woff2",
  weight: "400",
  display: "swap",
});

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
