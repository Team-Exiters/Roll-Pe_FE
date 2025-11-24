import OnBoardingGuide from "./OnBoardingSections/OnBoardingGuide";
import OnBoardingIntro from "./OnBoardingSections/OnBoardingIntro";
import Footer from "../ui/layouts/Footer";
import localFont from "next/font/local";
import introImage01 from "@/public/images/image/image_section_1.png";
import introImage02 from "@/public/images/image/image_section_2.png";
import { OnBoardingPageWrapper } from "./OnBoardingSections/styles/OnBoardingStyles";

const hakgyoansim = localFont({
  src: "../../../public/fonts/HakgyoansimR.woff2",
  weight: "400",
  display: "swap",
});

const OnBoarding: React.FC = () => {
  return (
    <OnBoardingPageWrapper className={`${hakgyoansim.className}`}>
      <OnBoardingIntro />
      <OnBoardingGuide
        image={introImage01}
        title={
          <>
            쉽게 만드는
            <br />
            우리만의 롤페
          </>
        }
        sectionNum={1}
      />
      <OnBoardingGuide
        image={introImage02}
        title={
          <>
            함께 나누었던 추억,
            <br />
            언제 어디서나
          </>
        }
        sectionNum={2}
      />
      <Footer />
    </OnBoardingPageWrapper>
  );
};

export default OnBoarding;
