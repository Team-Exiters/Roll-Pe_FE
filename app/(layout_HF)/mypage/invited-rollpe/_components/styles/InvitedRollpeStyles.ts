"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

export const MyRollpeWrapper = styled.main`
  padding: 5rem 1.25rem;
  width: calc(100% - 2.5rem);
`;

export const MyRollpeContainer = styled.div`
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
