"use client";
import styled from "styled-components";

import { useEffect, useState } from "react";

import UserIntroSection from "./_components/organisms/UserIntroSection";
import RecentHotRollpeSection from "./_components/organisms/RecentHotRollpeSection";
import Loading from "@/app/_components/ui/loading/Loading";

// import { getHotRollpeList } from "@/public/lib/apis/rollpe.api";
import { Rollpe } from "@/public/utils/types";

import localFont from "next/font/local";

const hakgyoansim = localFont({
  src: "../../../public/fonts/HakgyoansimR.woff2",
  weight: "400",
  display: "swap",
});

// Main 페이지 컴포넌트
const Main: React.FC = () => {
  const [hotRollpeList, setHotRollpeList] = useState<Rollpe[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  // // 로그인되지 않았을 때는 어차피 못불러오지? 아마도....
  // const getRecentHotRollpeList = async () => {
  //   await getHotRollpeList()
  //     .then((res) => {
  //       setHotRollpeList(res);
  //     })
  //     .catch((err) => {
  //       // TODO
  //       //에러 메시지 태은이가 작성해둔 것 참고하여 작성.
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

  // useEffect(() => {
  //   getRecentHotRollpeList();
  // }, []);

  return (
    <MainPageWrapper className={hakgyoansim.className}>
      {/**대시보드 및 롤페 쓰러 가기 섹션 */}
      <UserIntroSection />
      {/**지금 뜨고 있는 롤페 섹션 */}
      <RecentHotRollpeSection list={hotRollpeList} />
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
