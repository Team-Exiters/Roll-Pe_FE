"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

import { Rollpe, SearchRollpeProps } from "@/public/utils/types";
import { RollpeListItem, RollpeSearchListItem } from "./RollpeListItem";
import Image from "next/image";
import NoneList from "@/public/images/icons/icon_non_list.svg";
import { ButtonMore } from "../ui/button/StyledButton";
import { useRollpeList } from "@/public/lib/hooks/fetching/rollpe/useRollpeList";
import Loading from "../ui/loading/Loading";

interface RollpeListTypeProps {
  type: "invited" | "main" | "hot" | "my";
}
export const RollpeList: React.FC<RollpeListTypeProps> = ({ type }) => {
  const { data, fetchNextPage, hasNextPage, isLoading } = useRollpeList(type);

  console.log(hasNextPage);

  return isLoading ? (
    <Loading />
  ) : (
    data && (
      <RollpeListWrapper>
        <div className={"count-wrapper"}>
          <em>
            총 {data.pages[0].count}개{data.pages[0].resultText}
          </em>
        </div>
        <RollpeListContainer>
          {data.pages.map((page) =>
            page.results.map((rollpe: Rollpe) => (
              <RollpeListItem key={rollpe.code} {...rollpe} />
            ))
          )}
        </RollpeListContainer>
        {hasNextPage && (
          <ButtonMore text={"더보기"} onClickHandler={fetchNextPage} />
        )}
      </RollpeListWrapper>
    )
  );
};

export const RollpeSearchList: React.FC<SearchRollpeProps> = ({
  rollpeList,
  resultText,
}) => {
  return (
    <RollpeListWrapper>
      <div className={"count-wrapper"}>
        <em>
          총 {rollpeList?.length}개{resultText}
        </em>
      </div>
      <RollpeListContainer>
        {rollpeList?.length !== 0 ? (
          rollpeList?.map((rollpe: Rollpe, _: number) => (
            <RollpeSearchListItem key={rollpe.id} {...rollpe} />
          ))
        ) : (
          <NonRollpeListContainer>
            <div className={"contents"}>
              <div className={"img-container"}>
                <Image
                  src={NoneList}
                  alt={"icon_non_list"}
                  layout="responsive"
                />
              </div>
              <p>검색 결과가 없습니다.</p>
            </div>
          </NonRollpeListContainer>
        )}
      </RollpeListContainer>
    </RollpeListWrapper>
  );
};

const RollpeListWrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  width: 100%;

  & > .count-wrapper {
    display: flex;
    align-items: center;
    width: 100%;

    & > em {
      color: ${COLORS.ROLLPE_SECONDARY};
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;

const RollpeListContainer = styled.ul`
  display: flex;
  flex-direction: column;
  width: 100%;
  /* height: 36rem; */
  padding-left: 0px;
`;

const NonRollpeListContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 36rem;

  & > .contents {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 2.5rem;

    & > .img-container {
      width: 4rem;
      height: 4rem;
    }

    & > p {
      color: ${COLORS.ROLLPE_GRAY};
      text-align: center;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
