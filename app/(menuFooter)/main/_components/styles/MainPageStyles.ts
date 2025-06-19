"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

export const MainPageWrapper = styled.main`
  width: 100%;
  min-height: 100%;
  position: relative;
`;

export const MainPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  font-family: var(--font-hakgyoansim);
`;

export const DashboardWrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;

  padding: 2.5rem 1.25rem 2.188rem 1.25rem;
  width: calc(100% - 2.5rem);

  & > .intro {
    display: flex;
    flex-direction: column;

    width: 100%;

    & > h2 {
      color: ${COLORS.ROLLPE_SECONDARY};
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 0.5rem;
    }

    & > p {
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
      margin-bottom: 0.25rem;
    }
  }

  & > .button-wrapper {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;

    width: 100%;
  }
`;

export const RecentRollpeWrapper = styled.section`
  width: 100%;

  background: ${COLORS.ROLLPE_SECTION_BACKGROUND};

  & > .contents {
    display: flex;
    flex-direction: column;
    gap: 2.5rem;

    padding: 2.5rem 1.25rem;
    width: calc(100% - 2.5rem);
    height: 100%;

    & > h2 {
      font-size: 1.5rem;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
    
  }
`;