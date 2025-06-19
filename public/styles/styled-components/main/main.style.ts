"use clinet";
import styled from "styled-components";
import { COLORS } from "../../colors";

// General Styles
// General Section Styles
export const GeneralSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  padding: 2.5rem 1.25rem 2.188rem 1.25rem;
  width: calc(100% - 2.5rem);
`;

export const MainPageContainer = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  background: ${COLORS.ROLLPE_PRIMARY};
`;

export const MainPageContentsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 74px;

  width: 100%;
  height: 100%;

  position: relative;
`;

export const ContentSection = styled.section`
  box-sizing: border-box;
  padding: 0px 20px 40px 20px;
  width: 100%;
  max-height: 600px;
`

export const MainContentSection = styled(ContentSection)`
    display: flex;
    flex-direction: column;
    align-items: center;

    padding: 200px 20px 40px 20px;
    height: 100%;
  
    background: url("images/image/image_background.png") no-repeat center center;
    background-size: cover;
    position: relative;
    overflow: hidden;

    &::after {
      content: "";
      
      position: absolute;
      bottom: 0;
      left: 0;
      padding: 0 20px;
      width: 100%;
      height: 50px; /* Adjust the height as needed */
      background: linear-gradient(to top, rgba(255, 255, 255, 1), transparent);
    }

    & > .intro {
      color: ${COLORS.ROLLPE_SECONDARY};
      text-align: center;
      font-size: 1.24rem;
      font-style: normal;
      font-family: var(--font-hakgyoansim);
      font-weight: 400;
      line-height: 1.24rem;
      margin-bottom: 60px;
    }

    & > img {
      margin-bottom: 20px;
    }

    & > .scroll-down {
      z-index: 3;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 0.24rem;
      margin-top: auto;

      & > em {
        color:${COLORS.ROLLPE_GRAY};
        text-align: center;
        font-family: var(--font-hakgyoansim);
        font-size: 1rem;
        font-style: normal;
        font-weight: 400;
        line-height: 1.24rem;
      }
    }
`;

export const MainIntroSection = styled(ContentSection)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;

  position: relative;

  & > .section-title {
    color: ${COLORS.ROLLPE_SECONDARY};
    font-family: var(--font-hakgyoansim);
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 400;
    line-height:normal;
  }

`;