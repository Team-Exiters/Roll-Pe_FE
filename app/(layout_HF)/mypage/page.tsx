"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Apple from "@/public/images/icons/icon_apple.svg";
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
            <div className={"profile-container"}>
              <div className={"basic-info-wrapper"}>
                <div className={"user-name-container"}>
                  <h2 className={"user-name"}>{user.name}님</h2>
                  <button className={"social-icon-wrapper apple"}>
                    <Image
                      src={Apple}
                      width={10}
                      height={10}
                      alt={"Apple 로그인"}
                    />
                  </button>
                </div>
                <p className={"user-id"}>{user.email}</p>
              </div>

              <UserRollpeStatus />
            </div>
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
`;

const MyPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 5rem 1.25rem;

  width: calc(100% - 2.5rem);

  & > h1 {
    color: ${COLORS.ROLLPE_SECONDARY};
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

  & > .profile-container {
    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    & > .basic-info-wrapper {
      display: flex;
      flex-direction: column;
      gap: 0.25rem;
      margin-top: 3.375rem;

      & > p {
        color: ${COLORS.ROLLPE_SECONDARY};
        font-size: 0.875rem;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      & > .user-name-container {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        & > h2 {
          color: ${COLORS.ROLLPE_SECONDARY};
          font-size: 1.5rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }

        & > .social-icon-wrapper {
          all: unset;
          display: flex;
          justify-content: center;
          align-items: center;

          width: 1.25rem;
          height: 1.25rem;
          border-radius: 50%;

          cursor: pointer;
        }

        & > .apple {
          background-color: ${COLORS.ROLLPE_SECONDARY};
        }
      }
    }
  }

  & > .user-rollpe-status-container {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;
  }
`;

const MyPageMenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  margin-top: 3rem;
  width: 100%;

  & > li {
    color: ${COLORS.ROLLPE_SECONDARY};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    cursor: pointer;

    & > a {
      all: unset;
    }

    & > button {
      all: unset;
      cursor: pointer;
    }
  }

  & > li:last-child {
    color: ${COLORS.ROLLPE_GRAY};
  }
`;

export default MyPage;
