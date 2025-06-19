"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

const Footer: React.FC = () => {
  return (
    <FooterWrapper>
      <h2>Team Exiters</h2>

      <div className={"copyright"}>
        <p>team.exiters@gmail.com</p>
        <p>Copyright 2025 Team Exiters. All rights reserved.</p>
      </div>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
  z-index: -1;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  padding: 1.75rem 0 1.75rem 0;
  width: 100%;
  max-height: 8.125rem;
  background-color: #555555;

  & > h2 {
    color: ${COLORS.ROLLPE_PRIMARY};
    text-align: center;
    font-family: var(--font-dunggeunmo);
    font-size: 2rem;
    font-style: normal;
    font-weight: 400;
    line-height: 62.5%;
  }

  & > .copyright {
    display: flex;
    flex-direction: column;
    align-items: center;

    & > p {
      color: ${COLORS.ROLLPE_PRIMARY};
      text-align: center;
      font-family: var(--font-pretendard);
      font-size: 0.625rem;
      font-style: normal;
      font-weight: 400;
      line-height: 200%;
    }
  }
`;

export default Footer;
