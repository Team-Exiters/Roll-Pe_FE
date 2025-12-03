"use client";
import MainRollpeCard from "@/app/_components/molecules/ui/card/main-rollpe-list/MainRollpeCard";
import styled from "styled-components";
import { Rollpe } from "@/public/utils/types";

const HotRollpeList: React.FC<{
  hotRollpeList: Rollpe[];
}> = ({ hotRollpeList }) => {
  return (
    <ListContainer>
      {hotRollpeList &&
        hotRollpeList.map((rollpe) => (
          <MainRollpeCard
            key={rollpe.id}
            receivingDate={rollpe.receive.receivingDate}
            title={rollpe.title}
            host={rollpe.host}
            id={rollpe.id}
            code={rollpe.code}
            theme={rollpe.theme}
          />
        ))}
    </ListContainer>
  );
};

const ListContainer = styled.div`
  display: grid;
  gap: 1rem;
  grid-template-columns: 1fr 1fr;
  width: 100%;
`;

export default HotRollpeList;
