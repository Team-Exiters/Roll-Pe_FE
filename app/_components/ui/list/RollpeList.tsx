"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

import { RollpeListItemProps, RollpeListProps } from "@/public/utils/types";
import { RollpeListItem, RollpeSearchListItem } from "./RollpeListItem";

export const RollpeList: React.FC<RollpeListProps> = ({
  rollpeList,
  resultText,
}) => {
  return (
    <RollpeListWrapper>
      <div className={"count-wrapper"}>
        <em>
          총 {rollpeList.length}개{resultText}
        </em>
      </div>
      <RollpeListContainer>
        {rollpeList.map((rollpe: RollpeListItemProps, _: number) => (
          <RollpeListItem
            key={rollpe.rollpeId}
            rollpeId={rollpe.rollpeId}
            rollpeTitle={rollpe.rollpeTitle}
            rollpeOwner={rollpe.rollpeOwner}
            createdAt={rollpe.createdAt}
            dDay={rollpe.dDay}
            isPublic={rollpe.isPublic}
            thumbnail={rollpe.thumbnail}
          />
        ))}
      </RollpeListContainer>
    </RollpeListWrapper>
  );
};

export const RollpeSearchList: React.FC<RollpeListProps> = ({
  rollpeList,
  resultText,
}) => {
  return (
    <RollpeListWrapper>
      <div className={"count-wrapper"}>
        <em>
          총 {rollpeList.length}개{resultText}
        </em>
      </div>
      <RollpeListContainer>
        {rollpeList.map((rollpe: RollpeListItemProps, _: number) => (
          <RollpeSearchListItem
            key={rollpe.rollpeId}
            rollpeId={rollpe.rollpeId}
            rollpeTitle={rollpe.rollpeTitle}
            rollpeOwner={rollpe.rollpeOwner}
            createdAt={rollpe.createdAt}
            dDay={rollpe.dDay}
            isPublic={rollpe.isPublic}
            thumbnail={rollpe.thumbnail}
          />
        ))}
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
`;
