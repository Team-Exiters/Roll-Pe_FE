"use client";
import { useTransition, useEffect, useState } from "react";
import { getHotRollpeList } from "@/app/api/rollpe/route";
import MainRollpeCard from "@/app/_components/ui/card/main-rollpe-list/MainRollpeCard";
import styled from "styled-components";
import { useSelector } from "react-redux";
import { RootState } from "@/public/redux/store";
import { Rollpe } from "@/public/utils/types";

const HotRollpeList: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [hotRollpeList, setHotRollpeList] = useState<Rollpe[]>([]);
  const user = useSelector((state: RootState) => state.simpleUser);

  const notLoginHandler = () => {
    if (user.name) {
      getList();
    }
  };

  const getList = () => {
    startTransition(async () => {
      await getHotRollpeList()
        .then((res) => {
          setHotRollpeList(res);
        })
        .catch((err) => {
          console.log(err);
        });
    });
  };

  useEffect(() => {
    notLoginHandler();
  }, []);

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
`;

export default HotRollpeList;
