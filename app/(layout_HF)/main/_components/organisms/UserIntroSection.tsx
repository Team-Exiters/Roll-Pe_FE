"use client";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { useUserRollpeList } from "@/public/lib/hooks/fetching/rollpe/useUserRollpeList";
import { useEffect, useState, useTransition } from "react";
import { persistor, RootState } from "@/public/redux/store";
import { userIntroResponse } from "@/public/utils/types";
import { useRouter } from "next/navigation";
import {
  ButtonLink,
  ButtonPrimary,
  ButtonSecondary,
} from "@/app/_components/molecules/ui/button/StyledButton";
import { GeneralSection } from "@/public/styles/styled-components/main/main.style";

const UserIntroSection: React.FC = () => {
  const { data, isError } = useUserRollpeList("main");
  const router = useRouter();
  const user = useSelector((state: RootState) => state.simpleUser);

  if (isError) {
    persistor.purge();
    alert("시간이 경과되어 로그아웃 되었습니다.\n다시 로그인해주세요.");
    setTimeout(() => {
      router.push("/sign-in");
    }, 500);
  }

  return (
    data && (
      <SectionWrapper>
        <IntroWrapper>
          <h1>유저 롤페 현황 및 작성하러 가기{/**이거 hidden, SEO용 */}</h1>
          <em>{user.name}님은</em>
          <div>{data.host}개의 롤페를 만드셨어요.</div>
          <div>{data.heart}개의 마음을 작성하셨어요.</div>
        </IntroWrapper>
        <div className={"button-wrapper"}>
          {/** 버튼 컨테이너 */}
          <ButtonLink text="초대받은 롤페" href={"/mypage/invited-rollpe"} />
          {/*TODO ButtonSecondary Link 필요 */}
          <ButtonSecondary text="롤페 만들기" />
        </div>
      </SectionWrapper>
    )
  );
};
// route={"/rollpe/create"}
const SectionWrapper = styled(GeneralSection)`
  & > .button-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;
  }
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
  font-size: 1rem;

  & > h1 {
    visibility: hidden;
  }

  & > em {
    font-style: normal;
    margin-bottom: 0.5rem;
    font-size: 1.5rem;
  }
`;

export default UserIntroSection;
