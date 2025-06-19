"use client";
import MainIntroSection from "./_components/sections/main/MainIntroSection";
import MainRollpeGuideSection01 from "./_components/sections/main/MainRollpeGuideSection01";
import MainRollpeGuideSection02 from "./_components/sections/main/MainRollpeGuideSection02";
import styled from "styled-components";
import Footer from "./_components/ui/layouts/Footer";

const Home: React.FC = () => {
  return (
    <MainPageContentsContainer>
      <MainIntroSection />
      <MainRollpeGuideSection01 />
      <MainRollpeGuideSection02 />
      <Footer />
    </MainPageContentsContainer>
  );
};

const MainPageContentsContainer = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 100%;

  position: relative;
`;

export default Home;
