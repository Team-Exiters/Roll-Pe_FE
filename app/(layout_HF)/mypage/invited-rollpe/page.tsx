"use client";
import { COLORS } from "@/public/styles/colors";
import styled from "styled-components";
import { RollpeListProps } from "@/public/utils/types";
import { RollpeList } from "@/app/_components/molecules/list/RollpeList";
import { useTransition, useState, useEffect } from "react";
import { Rollpe } from "@/public/utils/types";
import { useRollpeList } from "@/public/lib/hooks/fetching/rollpe/useRollpeList";
import localFont from "next/font/local";

const hakgyoansim = localFont({
  src: "../../../../public/fonts/HakgyoansimR.woff2",
  weight: "400",
  display: "swap",
});

const InvitedRollpePage: React.FC = () => {
  return (
    <MyRollpeWrapper className={hakgyoansim.className}>
      <MyRollpeContainer>
        <div className={"title-wrapper"}>
          <h1>초대받은 롤페</h1>
        </div>
        <RollpeList type={"invited"} />
      </MyRollpeContainer>
    </MyRollpeWrapper>
  );
};

const MyRollpeWrapper = styled.main`
  padding: 5rem 1.25rem;
  width: calc(100% - 2.5rem);
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

export default InvitedRollpePage;
