"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

export const ChangePasswordPageWrapper = styled.main`
  padding: 5rem 1.25rem 23rem 1.25rem;
  width: calc(100% - 2.5rem);
  font-family: var(--font-hakgyoansim);
`;

export const ChangePasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  & > h1 {
    color: ${COLORS.ROLLPE_SECONDARY};
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;