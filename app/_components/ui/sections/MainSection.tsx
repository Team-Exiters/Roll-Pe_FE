"use client";

import Image from "next/image";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

export const OnBoardingPageWrapper = styled.main`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
`;

export const MainContentSectionWrapper = styled.section`
  padding: 2.5rem 1.25rem;
  width: calc(100% - 2.5rem);
`;

export const OnBoardingGuideWrapper = styled(MainContentSectionWrapper)`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100svh;
`;

export const OnBoardingGuide02Wrapper = styled(OnBoardingGuideWrapper)`
  background-color: ${COLORS.ROLLPE_SECTION_BACKGROUND};
`;

export const GuideContainer = styled.div`
  padding: 2.5rem 0rem;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  width: calc(100% - 2.5rem);
`;

export const GuideSectionTitle = styled.h2`
  color: ${COLORS.ROLLPE_SECONDARY};
  font-family: var(--font-hakgyoansim);
  font-size: 1.75rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const MainImageWrapper = styled.div`
  width: 100%;
`;

export const StyledIntroImage = styled(Image)`
  width: 100%;
  height: auto;
`;
