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
import localFont from "next/font/local";

const hakgyoansim = localFont({
  src: "../../../../public/fonts/HakgyoansimR.woff2",
  weight: "400",
  display: "swap",
});

const pretendard = localFont({
  src: "../../../../public/fonts/PretendardVariable.woff2",
  weight: "400",
  display: "swap",
});

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
    <SignInWrapper className={hakgyoansim.className}>
      <div className={"background-wrapper"}>
        <Image
          src={background}
          alt={"배경 이미지"}
          fill
          style={{ objectFit: "cover", objectPosition: "center" }}
        />
        <div className={"gradient-overlay"} />
      </div>

      <SignInContainer>
        <SignInIntroSection>
          <SignInIntroContainer>
            <div className={"logo-wrapper"}>
              <Image
                src={logo}
                alt={"롤페 로고"}
                fill
                style={{ objectFit: "contain" }}
                sizes="10.5rem"
                priority
              />
            </div>
            <div>
              다같이 한 마음으로
              <br />
              사랑하는 사람에게 전달해보세요
            </div>
          </SignInIntroContainer>
        </SignInIntroSection>

        <SignInFormSection>
          <SignInForm />
          <OtherMenuContainer>
            <AccountMenuContainer>
              <Link href={"forgot-password"}>
                <em>계정 찾기</em>
              </Link>
              <em>|</em>
              <Link href={"/sign-up"}>
                <em>회원가입</em>
              </Link>
            </AccountMenuContainer>

            <div className={"social-login-container"}>
              <Link href={KAKAO_AUTH_URL} className={"social-item kakao"}>
                <Image
                  src={KakaoLogo}
                  fill
                  style={{
                    objectFit: "contain",
                    transform: "scale(0.5)",
                    transformOrigin: "center",
                  }}
                  alt={"카카오 로그인"}
                  priority
                />
              </Link>

              <Link href={GOOGLE_AUTH_URL} className={"social-item google"}>
                <Image
                  src={Google}
                  fill
                  style={{
                    objectFit: "contain",
                    transform: "scale(0.7)",
                    transformOrigin: "center",
                  }}
                  alt={"Google 로그인"}
                  priority
                />
              </Link>
            </div>
          </OtherMenuContainer>
        </SignInFormSection>

        <TermsMenuSection>
          <TermsMenuContainer className={pretendard.className}>
            <Link href={"/terms-of-service"}>
              <em>서비스 이용약관</em>
            </Link>
            <em>|</em>
            <Link href={"/privacy-policy"}>
              <em>개인정보처리방침</em>
            </Link>
          </TermsMenuContainer>
        </TermsMenuSection>
      </SignInContainer>
    </SignInWrapper>
  );
};

const SignInWrapper = styled.main`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-end;

  width: 100%;

  min-height: 100vh;
  min-height: 100dvh;
  min-height: 100svh;

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

const SignInContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  min-height: 100vh;
  min-height: 100dvh;
  min-height: 100svh;
`;

const SignInIntroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const SignInIntroContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 1.25rem;
  padding-top: 15rem;

  & > .logo-wrapper {
    position: relative;
    width: 10.5rem;
    aspect-ratio: 168/84;
  }

  & > div {
    text-align: center;
    color: ${COLORS.ROLLPE_SECONDARY};

    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`;

const SignInFormSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
  width: 100%;
`;

const OtherMenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > .service-menu-container {
    margin-top: 3.75rem;
  }

  & > .social-login-container {
    display: flex;
    align-items: center;
    gap: 1rem;
    margin-top: 1.25rem;

    & > .social-item {
      all: unset;

      position: relative;
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
  }
`;

const AccountMenuContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;

  & > a {
    text-decoration: none;
  }

  em {
    color: ${COLORS.ROLLPE_GRAY};
    text-align: center;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const TermsMenuSection = styled.section`
  display: flex;
  justify-content: center;
  padding-top: 10rem;
`;

const TermsMenuContainer = styled(AccountMenuContainer)``;

export default SignIn;
