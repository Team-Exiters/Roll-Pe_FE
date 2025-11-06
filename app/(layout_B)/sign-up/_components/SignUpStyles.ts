"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

export const SignUpWrapper = styled.main`
  padding: 7rem 1.25rem;
  width: calc(100% - 2.5rem);
`;

export const SignUpContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.75rem;
  width: 100%;

  & > .title-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1.25rem;

    & > .logo-wrapper {
      width: 6.5rem;
      height: 3.25rem;

      & > img {
        width: 100%;
        height: 100%;
      }
    }

    & > h1 {
      color: ${COLORS.ROLLPE_SECONDARY};
      text-align: center;
      font-family: var(--font-pretendard);
      font-size: 1.25rem;
      font-style: normal;
      font-weight: 400;
      line-height: 100%;
    }
  }
`;