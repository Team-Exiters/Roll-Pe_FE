"use client";
import Link from "next/link";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";
import background from "@/public/images/image/image_background.png";
import logo from "@/public/images/logos/logo.korean.png";
import KakaoLogo from "@/public/images/icons/icon_kakao.svg";
import Google from "@/public/images/icons/icon_google.svg";
import SignInForm from "./SignInForm";

const KAKAO_API_KEY = process.env.NEXT_PUBLIC_KAKAO_REST_API_KEY;
const GOOGLE_CLIENT_ID = process.env.NEXT_PUBLIC_GOOGLE_CLIENT_KEY;

const REDIRECT_URI = {
  kakao: "http://localhost:3000/oauth/callback/kakao",
  google: "http://localhost:3000/oauth/callback/google",
};

export const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${KAKAO_API_KEY}&redirect_uri=${REDIRECT_URI.kakao}&scope=account_email`;
export const GOOGLE_AUTH_URL = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${GOOGLE_CLIENT_ID}&redirect_uri=${REDIRECT_URI.google}&response_type=code&scope=email profile`;

const SignIn: React.FC = () => {
  return (
    <SignInWrapper>
      <SignInIntro>
        <div className={"background-wrapper"}>
          <Image
            src={background}
            alt={"배경 이미지"}
            fill
            style={{ objectFit: "cover", objectPosition: "center" }}
          />
          <div className={"gradient-overlay"} />
        </div>
        <div className={"logo-wrapper"}>
          <Image
            src={logo}
            alt={"롤페 로고"}
            layout="responsive"
            width={168}
            height={84}
          />
        </div>
        <p>
          다같이 한 마음으로
          <br />
          사랑하는 사람에게 전달해보세요
        </p>
      </SignInIntro>
      <SignInForm />
      <OtherMenuContainer>
        <div className={"account-menu-container"}>
          <Link href={"#"}>
            <p>계정 찾기</p>
          </Link>
          <p>|</p>
          <Link href={"#"}>
            <p>계정 찾기</p>
          </Link>
          <p>|</p>
          <Link href={"#"}>
            <p>회원가입</p>
          </Link>
        </div>

        <div className={"social-login-container"}>
          <Link href={KAKAO_AUTH_URL} className={"social-item kakao"}>
            <Image
              src={KakaoLogo}
              width={20}
              height={17.5}
              alt={"카카오 로그인"}
            />
          </Link>

          <Link href={GOOGLE_AUTH_URL} className={"social-item google"}>
            <Image src={Google} width={20} height={20} alt={"Google 로그인"} />
          </Link>
        </div>

        <div className={"account-menu-container service-menu-container"}>
          <Link href={"/terms-of-service"}>
            <p>서비스 이용약관</p>
          </Link>
          <p>|</p>
          <Link href={"/privacy-policy"}>
            <p>개인정보처리방침</p>
          </Link>
        </div>
      </OtherMenuContainer>
    </SignInWrapper>
  );
};

const SignInWrapper = styled.main`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;

  padding-bottom: 5.25rem;

  width: 100%;

  .background-wrapper {
    position: absolute;
    inset: 0;
    z-index: -99;

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
`;

const SignInIntro = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  margin-top: 6rem;

  & > .logo-wrapper {
    width: 10.5rem;
    height: 5.25rem;

    & > img {
      width: 100%;
      height: 100%;
    }
  }

  & > p {
    text-align: center;
    color: ${COLORS.ROLLPE_SECONDARY};

    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`;

const OtherMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${COLORS.ROLLPE_GRAY};
  text-align: center;
  font-size: 0.875rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  & > .account-menu-container {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-top: 1.25rem;
  }

  & > .service-menu-container {
    margin-top: 3.75rem;
    font-family: var(--font-pretendard);
  }

  & > .social-login-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.25rem;

    & > .social-item {
      all: unset;

      display: flex;
      align-items: center;
      justify-content: center;

      width: 3rem;
      height: 3rem;
      border-radius: 50%;

      cursor: pointer;
    }

    & > .kakao {
      background-color: #fee500;
    }

    & > .google {
      border: 1px solid ${COLORS.ROLLPE_SECONDARY};
      background-color: ${COLORS.ROLLPE_PRIMARY};
    }

    & > .apple {
      background-color: ${COLORS.ROLLPE_SECONDARY};
    }
  }
`;

export default SignIn;
