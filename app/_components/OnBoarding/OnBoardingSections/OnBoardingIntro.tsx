import Image from "next/image";
import { ButtonPrimary } from "../../ui/button/StyledButton";
import background from "@/public/images/image/image_background.png";
import logo from "@/public/images/logos/logo.korean.png";
import arrowDown from "@/public/images/icons/icon_arrow_down.svg";
import {
  IntroWrapper,
  IntroContentsContainer,
  MainLogoWrapper,
} from "./styles/OnBoardingStyles";

const OnBoardingIntro: React.FC = () => {
  return (
    <IntroWrapper>
      <div className={"background-wrapper"}>
        <Image
          src={background}
          alt={"배경 이미지"}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className={"gradient-overlay"} />
      </div>

      <IntroContentsContainer>
        <MainLogoWrapper>
          <Image
            src={logo}
            alt={"롤페 로고"}
            fill
            style={{ objectFit: "contain" }}
            sizes="10.5rem"
            priority
          />
        </MainLogoWrapper>
        <p className={"intro"}>
          다같이 한 마음으로
          <br />
          사랑하는 사람에게 전달해보세요
        </p>
        <ButtonPrimary text={"롤페 시작하기"} route={"/main"} />
      </IntroContentsContainer>
      <div className={"scroll-down"}>
        <Image src={arrowDown} width={15} height={15} alt={"scroll down"} />
        <em>아래로 스크롤 해보아요!</em>
      </div>
    </IntroWrapper>
  );
};

export default OnBoardingIntro;
