"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Apple from "@/public/images/icons/icon_apple.svg";
import Image from "next/image";
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/public/redux/store";
import { useTransition } from "react";
import { logOutOk } from "@/public/utils/apis/logOut";
import Loading from "@/app/_components/ui/loading/Loading";
import { persistor } from "@/public/redux/store";
import { useRouter } from "next/navigation";
import { getUserRollpe } from "@/public/utils/apis/rollpe";
import { userIntroResponse } from "@/public/utils/types";

const MyPage: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const user = useSelector((state: RootState) => state.simpleUser);
  const [userRollpeCount, setUserRollpeCount] = useState<userIntroResponse>({
    heart: 0,
    host: 0,
  });
  const router = useRouter();

  const logOutHandler = async () => {
    startTransition(async () => {
      await logOutOk()
        .then((res) => {
          persistor.purge();
          alert("로그아웃 되었습니다.");
          router.push("/");
        })
        .catch((error) => {
          console.log(error);
        });
    });
  };

  const getUserIntroInfo = () => {
    startTransition(async () => {
      await getUserRollpe("main")
        .then((res) => {
          setUserRollpeCount(res);
        })
        .catch((error) => {
          console.log("에러나따");
          persistor.purge();
          alert("시간이 경과되어 로그아웃 되었습니다.\n다시 로그인해주세요.");
          setTimeout(() => {
            router.push("/sign-in");
          }, 500);
        });
    });
  };

  useEffect(() => {
    const notLoginHandler = () => {
      if (!user.name) {
        alert("로그인이 필요한 페이지입니다.\n로그인 페이지로 이동합니다.");
        router.push("/sign-in");
      } else {
        getUserIntroInfo();
      }
    };

    notLoginHandler();
  }, []);

  return isPending ? (
    <Loading />
  ) : (
    <MyPageWrapper>
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

            <div className={"user-rollpe-status-container"}>
              <p>{userRollpeCount.host}개의 롤페를 만드셨어요.</p>
              <p>{userRollpeCount.heart}개의 마음을 작성하셨어요.</p>
            </div>
          </div>
        </MyPageProfileWrapper>

        <MyPageMenuContainer>
          <li>
            <Link href={"#"}>VIP 구매</Link>
          </li>
          <li>
            <Link href={"/mypage/settings/change-password"}>비밀번호 변경</Link>
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
                logOutHandler();
              }}
            >
              로그아웃
            </button>
          </li>
          <li>회원탈퇴</li>
        </MyPageMenuContainer>
      </MyPageContainer>
    </MyPageWrapper>
  );
};

const MyPageWrapper = styled.main`
  padding-bottom: 10.375rem;
  width: 100%;
  font-family: var(--font-hakgyoansim);
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
