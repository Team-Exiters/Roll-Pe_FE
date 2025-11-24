"use client";

import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

export const OnBoardingPageWrapper = styled.main`
  /* position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%; */
`;

export const IntroWrapper = styled.section`
  position: relative;
  z-index: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2.5rem 1.25rem;
  width: calc(100% - 2.5rem);

  min-height: 100vh;
  min-height: 100dvh;
  min-height: 100svh;

  .background-wrapper {
    position: absolute;
    inset: 0;
    z-index: 0;

    .gradient-overlay {
      position: absolute;
      inset: 0;
      background: linear-gradient(
        to top,
        rgba(255, 255, 255, 1) 0%,
        rgba(255, 255, 255, 0.4) 40%,
        rgba(255, 255, 255, 0) 100%
      );
      z-index: 1;
    }
  }

  & > .scroll-down {
    position: absolute;
    bottom: 8rem;
    z-index: 3;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.25rem;

    & > img {
      animation: float 2s ease-in-out infinite;

      @keyframes float {
        0% {
          transform: translateY(0);
        }
        50% {
          transform: translateY(-0.625rem);
        }
        100% {
          transform: translateY(0);
        }
      }
    }

    & > em {
      color: ${COLORS.ROLLPE_GRAY};
      text-align: center;
      font-size: 1rem;
      font-style: normal;
      font-weight: 400;
      line-height: 1.25rem;
    }
  }
`;

export const IntroContentsContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;

  & > .intro {
    color: ${COLORS.ROLLPE_SECONDARY};
    text-align: center;
    font-size: 1.25rem;
    font-style: normal;

    font-weight: 400;
    line-height: 1.25rem;
    margin: 1.25rem 0rem 3.75rem 0rem;
  }

  & > button {
    position: relative;
    z-index: 1;
  }
`;

export const MainLogoWrapper = styled.div`
  position: relative;
  width: 10.5rem;
  aspect-ratio: 168 / 84;
`;
