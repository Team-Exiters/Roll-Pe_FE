"use client";
import { COLORS } from "@/public/styles/colors";
import styled from "styled-components";
import { RollpeListItemProps } from "@/public/utils/types";
import { RollpeList } from "@/app/_components/ui/list/RollpeList";
import { Rollpe } from "@/public/utils/types";
import { useEffect, useState, useTransition } from "react";
import { getUserRollpeList } from "@/public/utils/apis/rollpe";
import Loading from "@/app/_components/ui/loading/Loading";
import { ButtonMore } from "@/app/_components/ui/button/StyledButton";

interface MyRollpeListData {
  count: number;
  next: string | null;
  previous: string | null;
  results: Rollpe[];
}

const MyRollpePage: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [myRollpeData, setMyRollpeData] = useState<MyRollpeListData>();
  const [myRollpeList, setMyRollpeList] = useState<Rollpe[]>();

  const getMyRollpeList = () => {
    startTransition(async () => {
      await getUserRollpeList("my")
        .then((res) => {
          console.log(res);
          setMyRollpeData(res);
        })
        .catch((error) => {
          console.error(error);
        });
    });
  };

  useEffect(() => {
    getMyRollpeList();
  }, []);

  useEffect(() => {
    console.log(myRollpeData);
    if (myRollpeData) {
      setMyRollpeList(myRollpeData.results);
    }
  }, [myRollpeData]);

  return isPending ? (
    <Loading />
  ) : (
    <MyRollpeWrapper>
      <MyRollpeContainer>
        <div className={"title-wrapper"}>
          <h1>내 롤페</h1>
        </div>
        {myRollpeList && (
          <RollpeList
            list={myRollpeList}
            count={myRollpeData ? myRollpeData.count : 0}
            resultText={""}
          />
        )}
        <ButtonMore text="더보기" />
      </MyRollpeContainer>
    </MyRollpeWrapper>
  );
};

const MyRollpeWrapper = styled.main`
  padding: 5rem 1.25rem;
  width: calc(100% - 2.5rem);
  font-family: var(--font-hakgyoansim);
`;

const MyRollpeContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;

  width: 100%;

  & > .title-wrapper > h1 {
    color: ${COLORS.ROLLPE_SECONDARY};
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export default MyRollpePage;
