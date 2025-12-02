"use client";
import styled from "styled-components";
import { useUserRollpeList } from "@/public/lib/hooks/fetching/rollpe/useUserRollpeList";

const UserRollpeStatus: React.FC = () => {
  const { data } = useUserRollpeList("main");

  return (
    data && (
      <StatusWrapper>
        <div>{data.host}개의 롤페를 만드셨어요.</div>
        <div>{data.heart}개의 마음을 작성하셨어요.</div>
      </StatusWrapper>
    )
  );
};

const StatusWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
  width: 100%;
  font-size: 1rem;
`;

export default UserRollpeStatus;
