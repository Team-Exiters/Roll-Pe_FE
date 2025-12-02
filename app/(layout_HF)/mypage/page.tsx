"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { StaticImageData } from "next/image";
import Apple from "@/public/images/icons/icon_apple.svg";
import Kakao from "@/public/images/icons/icon_kakao.svg";
import Google from "@/public/images/icons/icon_google.svg";
import Image from "next/image";
import Link from "next/link";
import Loading from "@/app/_components/molecules/ui/loading/Loading";
import { useUserRollpeList } from "@/public/lib/hooks/fetching/rollpe/useUserRollpeList";
import { useCheckLogin } from "@/public/lib/hooks/fetching/auth/useCheckLogin";
import { useLogout } from "@/public/lib/hooks/fetching/auth/useLogout";
import localFont from "next/font/local";
import UserRollpeStatus from "@/app/_components/molecules/userInfo/UserRollpeStatus";

const hakgyoansim = localFont({
  src: "../../../public/fonts/HakgyoansimR.woff2",
  weight: "400",
  display: "swap",
});

const USER_PROVIDER: Record<string, StaticImageData> = {
  Apple: Apple,
  Google: Google,
  Kakao: Kakao,
};

const MyPage: React.FC = () => {
  const { data: userRollpeCount } = useUserRollpeList("main");
  const { mutate, isPending } = useLogout();
  const user = useCheckLogin();

  return isPending ? (
    <Loading />
  ) : (
    user && userRollpeCount && (
      <MyPageWrapper className={hakgyoansim.className}>
        <MyPageContainer>
          <h1>마이페이지</h1>

          <MyPageProfileWrapper>
            <ProfileContainer>
              <BasicInfoWrapper>
                <div className={"user-name-container"}>
                  <div className={"user-name"}>{user.name}님</div>
                  {user.provider && (
                    <div className={`social-icon-wrapper ${user.provider}`}>
                      <div className={"image-wrapper"}>
                        <Image
                          src={USER_PROVIDER[user.provider]}
                          alt={`${user.provider} 로그인`}
                        />
                      </div>
                    </div>
                  )}
                </div>
                <div className={"user-id"}>{user.email}</div>
              </BasicInfoWrapper>

              <UserRollpeStatus />
            </ProfileContainer>
          </MyPageProfileWrapper>

          <MyPageMenuContainer>
            <li>
              <Link href={"#"}>VIP 구매</Link>
            </li>
            <li>
              <Link href={"/mypage/settings/change-password"}>
                비밀번호 변경
              </Link>
            </li>
            <li>
              <Link href={"/mypage/my-rollpe"}>내 롤페</Link>
            </li>
            <li>
              <Link href={"/mypage/invited-rollpe"}>초대받은 롤페</Link>
            </li>
            <li>
              <button
                className={"logout"}
                onClick={() => {
                  mutate();
                }}
              >
                로그아웃
              </button>
            </li>
            <li>회원탈퇴</li>
          </MyPageMenuContainer>
        </MyPageContainer>
      </MyPageWrapper>
    )
  );
};

const MyPageWrapper = styled.main`
  padding-bottom: 10.375rem;
  width: 100%;
  color: ${COLORS.ROLLPE_SECONDARY};
`;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5rem 1.25rem;

  width: calc(100% - 2.5rem);

  & > h1 {
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const MyPageProfileWrapper = styled.div`
  display: flex;
  width: 100%;
`;

const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
`;

const BasicInfoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  margin-top: 3.375rem;

  & > .user-name-container {
    display: flex;
    align-items: center;
    gap: 0.25rem;

    & > .user-name {
      font-size: 1.5rem;
    }

    & > .social-icon-wrapper {
      all: unset;
      display: flex;
      justify-content: center;
      align-items: center;

      width: 1.25rem;
      height: 1.25rem;
      border-radius: 50%;

      & > .image-wrapper {
        position: relative;
        width: 0.625rem;
        height: 0.625rem;
      }

      & > .Apple {
        background-color: ${COLORS.ROLLPE_SECONDARY};
      }

      & > .Google {
        background-color: ${COLORS.ROLLPE_PRIMARY};
      }

      & > .Kakao {
        background-color: #fee500;
      }
    }
  }
`;

const MyPageMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin-top: 3rem;
  padding-left: 0px;
  width: 100%;
  list-style: none;

  & > li {
    font-size: 1.25rem;

    cursor: pointer;

    & > a {
      all: unset;
    }

    & > button {
      all: unset;
      cursor: pointer;
    }
  }

  & > li:first-child,
  li:last-child {
    color: ${COLORS.ROLLPE_GRAY};
  }
`;

export default MyPage;
