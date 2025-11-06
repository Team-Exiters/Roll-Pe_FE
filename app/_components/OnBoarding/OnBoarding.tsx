import OnBoardingGuide01 from "./OnBoardingSections/OnBoardingGuide01";
import OnBoardingGuide02 from "./OnBoardingSections/OnBoardingGuide02";
import OnBoardingIntro from "./OnBoardingSections/OnBoardingIntro";

const OnBoarding: React.FC = () => {
  return (
    <>
      <OnBoardingIntro />
      <OnBoardingGuide01 />
      <OnBoardingGuide02 />
    </>
  );
};

export default OnBoarding;
