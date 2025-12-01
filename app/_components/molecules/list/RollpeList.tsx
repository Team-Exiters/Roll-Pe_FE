"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

import {
  Rollpe,
  RollpeListItemProps,
  // RollpeListProps,
  SearchRollpeProps,
} from "@/public/utils/types";
import { RollpeListItem, RollpeSearchListItem } from "./RollpeListItem";
import Image from "next/image";
import NoneList from "@/public/images/icons/icon_non_list.svg";
import { useEffect } from "react";

interface RollpeListProps {
  list: Rollpe[];
  count: number;
  resultText: string;
}

export const RollpeList: React.FC<RollpeListProps> = (
  listData: RollpeListProps
) => {
  const { list, count, resultText } = listData;

  useEffect(() => {
    console.log(list);
  }, [list]);

  return (
    <RollpeListWrapper>
      <div className={"count-wrapper"}>
        <em>
          총 {count}개{resultText}
        </em>
      </div>
      <RollpeListContainer>
        {list.map((rollpe: Rollpe, _: number) => (
          <RollpeListItem key={rollpe.code} {...rollpe} />
        ))}
      </RollpeListContainer>
    </RollpeListWrapper>
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
  height: 36rem;
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
      font-family: var(--font-hakgyoansim);
      color: ${COLORS.ROLLPE_GRAY};
      text-align: center;
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
`;
