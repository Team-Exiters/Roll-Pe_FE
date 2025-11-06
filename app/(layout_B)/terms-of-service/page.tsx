"use client";
import styled from "styled-components";
import Logo from "@/public/images/logos/logo.korean.png";
import Image from "next/image";
import { COLORS } from "@/public/styles/colors";

const TermsOfServicePage: React.FC = () => {
  return (
    <TermsOfServiceWrapper>
      <TermsOfServiceContainer>
        <TitleSection>
          <div className={"logo-wrapper"}>
            <Image
              src={Logo}
              layout="responsive"
              width={104}
              height={52}
              alt={"롤페 로고"}
            />
          </div>
          <p>서비스 이용 약관</p>
        </TitleSection>
        <ContentSection>
          <div>1. 어쩌구저쩌구</div>
        </ContentSection>
      </TermsOfServiceContainer>
    </TermsOfServiceWrapper>
  );
};

const TermsOfServiceWrapper = styled.main`
  padding: 2.5rem 1.25rem;
  width: calc(100% - 2.5rem);
  height: calc(100% - 5rem);
  font-family: var(--font-pretendard);
`;

const TermsOfServiceContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2.5rem;
  width: 100%;
`;

const TitleSection = styled.section`
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

  & > p {
    color: ${COLORS.ROLLPE_SECONDARY};
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`;

const ContentSection = styled.section`
  width: 100%;
  margin-top: 2.5rem;
`;

export default TermsOfServicePage;
