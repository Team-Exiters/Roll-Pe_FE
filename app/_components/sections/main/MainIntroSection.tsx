"use client";
import Image from "next/image";
import styled from "styled-components";
import { Button } from "../../ui/button/StyledButton";
import { MainContentSectionWrapper } from "../../ui/sections/MainSection";
import { COLORS } from "@/public/styles/colors";
import logo from "@/public/images/logos/logo.korean.png";
import arrowDown from "@/public/images/icons/icon_arrow_down.svg";
import { useSelector } from "react-redux";
import { RootState } from "@/public/redux/store";
import { useRouter } from "next/navigation";

const MainIntroSection: React.FC = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.simpleUser);

  return (
    <MainIntroSectionWrapper>
      <MainIntroContentsContainer>
        <div className={"logo-wrapper"}>
          <Image
            src={logo}
            alt={"롤페 로고"}
            layout="responsive"
            width={168}
            height={84}
          />
        </div>
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
      </MainIntroContentsContainer>
      <div className={"scroll-down"}>
        <Image src={arrowDown} width={15} height={15} alt={"scroll down"} />
        <em>아래로 스크롤 해보아요!</em>
      </div>
    </MainIntroSectionWrapper>
  );
};

const MainIntroSectionWrapper = styled(MainContentSectionWrapper)`
  position: relative;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 100%;

  background: url("images/image/image_background.png") no-repeat center center;
  background-size: cover;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    bottom: 0;
    left: 0;
    right: 0;
    height: 6.25rem;
    background: linear-gradient(
      to bottom,
      rgba(255, 255, 255, 0) 0%,
      rgba(255, 255, 255, 1) 100%
    );
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
      font-family: var(--font-hakgyoansim);
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.25rem;
    }
  }
`;

const MainIntroContentsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  & > .logo-wrapper {
    width: 10.5rem;
    height: 5.25rem;
  }

  & > .intro {
    color: ${COLORS.ROLLPE_SECONDARY};
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;
    font-family: var(--font-hakgyoansim);
    font-weight: 400;
    line-height: 1.25rem;
    margin: 1.25rem 0rem 3.75rem 0rem;
  }

  & > button {
    position: relative;
    z-index: 1;
  }
`;

export default MainIntroSection;
