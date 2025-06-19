"use client";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { getUserRollpe } from "@/public/utils/apis/rollpe";
import { useEffect, useState, useTransition } from "react";
import { persistor, RootState } from "@/public/redux/store";
import { userIntroResponse } from "@/public/utils/types";
import { useRouter } from "next/navigation";
import {
  Button,
  ButtonSecondary,
} from "@/app/_components/ui/button/StyledButton";
import { GeneralSection } from "@/public/styles/styled-components/main/main.style";

const UserIntroSection: React.FC = () => {
  const router = useRouter();
  const [userIntroInfo, setUserIntroInfo] = useState<userIntroResponse>({
    host: 0,
    heart: 0,
  });
  const user = useSelector((state: RootState) => state.simpleUser);

  useEffect(() => {
    getUserRollpe("main")
      .then((res) => {
        setUserIntroInfo(res);
      })
      .catch((error) => {
        persistor.purge();
        alert("시간이 경과되어 로그아웃 되었습니다.\n다시 로그인해주세요.");
        setTimeout(() => {
          router.push("/sign-in");
        }, 500);
      });
  }, [user, router]);

  return (
    <SectionWrapper>
      <div className={"intro-wrapper"}>
        <h1>유저 롤페 현황 및 작성하러 가기{/**이거 hidden, SEO용 */}</h1>
        <em>{user.name}님은</em>
        <p>{userIntroInfo.host}개의 롤페를 만드셨어요.</p>
        <p>{userIntroInfo.heart}개의 마음을 작성하셨어요.</p>
      </div>
      <div className={"button-wrapper"}>
        {/** 버튼 컨테이너 */}
        <Button text="초대받은 롤페" route={"/mypage/invited-rollpe"} />
        <ButtonSecondary text="롤페 만들기" route={"/rollpe/create"} />
      </div>
    </SectionWrapper>
  );
};

const SectionWrapper = styled(GeneralSection)`
  & > div {
    width: 100%;
    font-family: var(--font-hakgyoansim);
  }

  & > .intro-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.25rem;

    font-size: 1rem;

    & > h1 {
      visibility: hidden;
    }

    & > em {
      margin-bottom: 0.5rem;
      font-size: 1.5rem;
    }
  }

  & > .button-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
`;

export default UserIntroSection;
