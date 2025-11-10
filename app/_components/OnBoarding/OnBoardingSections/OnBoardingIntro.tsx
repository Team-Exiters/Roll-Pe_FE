"use client";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "../../ui/button/StyledButton";
import { COLORS } from "@/public/styles/colors";
import background from "@/public/images/image/image_background.png";
import logo from "@/public/images/logos/logo.korean.png";
import arrowDown from "@/public/images/icons/icon_arrow_down.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/public/redux/store";
import { useRouter } from "next/navigation";
import { MainContentSectionWrapper } from "../../ui/sections/MainSection";

const OnBoardingIntro: React.FC = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.simpleUser);

  return (
    <IntroWrapper>
      <div className={"background-wrapper"}>
        <Image
          src={background}
          alt={"배경 이미지"}
          fill
          objectFit="cover"
          objectPosition="center"
          priority={true}
        />
        <div className={"gradient-overlay"} />
      </div>

      <IntroContentsContainer>
        <MainLogoWrapper>
          <StyledLogoImage
            src={logo}
            alt={"롤페 로고"}
            width={0}
            height={0}
            sizes="100%"
            priority={true}
          />
        </MainLogoWrapper>
        <p className={"intro"}>
          다같이 한 마음으로
          <br />
          사랑하는 사람에게 전달해보세요
        </p>
        <Button
          text={"롤페 시작하기"}
          onClickHandler={() => {
            if (!user.name && !user.email) {
              router.push("/sign-in");
            } else {
              router.push("/main");
            }
          }}
        />
      </IntroContentsContainer>
      <div className={"scroll-down"}>
        <Image src={arrowDown} width={15} height={15} alt={"scroll down"} />
        <em>아래로 스크롤 해보아요!</em>
      </div>
    </IntroWrapper>
  );
};

const IntroWrapper = styled(MainContentSectionWrapper)`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100svh;

  .background-wrapper {
    position: absolute;
    inset: 0;
    z-index: 0;

    .gradient-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.4) 40%,
        rgba(255, 255, 255, 0) 100%
      );
      z-index: 1;
    }
  }

  & > .scroll-down {
    position: absolute;
    bottom: 8rem;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;

    & > img {
      animation: float 2s ease-in-out infinite;

      @keyframes float {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-0.625rem);
        }
        100% {
          transform: translateY(0);
        }
      }
    }

    & > em {
      color: ${COLORS.ROLLPE_GRAY};
      text-align: center;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.25rem;
    }
  }
`;

const IntroContentsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  & > .intro {
    color: ${COLORS.ROLLPE_SECONDARY};
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;

    font-weight: 400;
    line-height: 1.25rem;
    margin: 1.25rem 0rem 3.75rem 0rem;
  }

  & > button {
    position: relative;
    z-index: 1;
  }
`;

const MainLogoWrapper = styled.div`
  width: 10.5rem;
`;

const StyledLogoImage = styled(Image)`
  width: 100%;
  height: auto;
`;

export default OnBoardingIntro;
