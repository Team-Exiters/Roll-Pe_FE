"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import localFont from "next/font/local";

export const dunggeunmo = localFont({
  src: "../../../../public/fonts/DungGeunMo.woff2",
  weight: "400",
  display: "swap",
  preload: true,
});

const Footer: React.FC = () => {
  return (
    <FooterWrapper className={dunggeunmo.className}>
      <h2>Team Exiters</h2>

      <CopyrightWrapper>
        <em>team.exiters@gmail.com</em>
        <em>Copyright 2025 Team Exiters. All rights reserved.</em>
      </CopyrightWrapper>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: center;

  width: 100%;
  min-height: 8.125rem;
  background-color: #555555;

  & > h2 {
    color: ${COLORS.ROLLPE_PRIMARY};
    text-align: center;
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 62.5%;
  }

  & > .copyright {
  }
`;

const CopyrightWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > em {
    color: ${COLORS.ROLLPE_PRIMARY};
    text-align: center;
    font-family: var(--font-pretendard);
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 400;
    line-height: 150%;
  }
`;

export default Footer;
