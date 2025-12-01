"use client";
import styled from "styled-components";

import { useEffect, useState } from "react";

import UserIntroSection from "./_components/organisms/UserIntroSection";
import RecentHotRollpeSection from "./_components/organisms/RecentHotRollpeSection";
import Loading from "@/app/_components/molecules/ui/loading/Loading";

// import { getHotRollpeList } from "@/public/lib/apis/rollpe.api";
import { Rollpe } from "@/public/utils/types";

import localFont from "next/font/local";

const hakgyoansim = localFont({
  src: "../../../public/fonts/HakgyoansimR.woff2",
  weight: "100",
  display: "swap",
});

// Main 페이지 컴포넌트
const Main: React.FC = () => {
  const [hotRollpeList, setHotRollpeList] = useState<Rollpe[]>([]);

  return (
    <MainPageWrapper className={hakgyoansim.className}>
      {/**대시보드 및 롤페 쓰러 가기 섹션 */}
      <UserIntroSection />
      {/**지금 뜨고 있는 롤페 섹션 */}
      <RecentHotRollpeSection />
    </MainPageWrapper>
  );
};

const MainPageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0rem;

  width: 100%;
  height: 100%;
`;

export default Main;
