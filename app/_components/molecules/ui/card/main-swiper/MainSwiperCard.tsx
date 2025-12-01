"use client";
import Image from "next/image";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";

export interface MainSwiperCardProps {
  imageSrc: string;
  title: string;
}

const MainSwiperCard: React.FC<MainSwiperCardProps> = ({ imageSrc, title }) => {
  return (
    <MainSwiperCardContainer>
      <Image src={imageSrc} alt={"더미템플릿"} width={136} height={94} />
      <MainSwiperCardTitle>{title}</MainSwiperCardTitle>
    </MainSwiperCardContainer>
  );
};

const MainSwiperCardContainer = styled.div`
  padding: 1.5rem 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;

  max-width: 10.626rem;

  border: 2px solid ${COLORS.ROLLPE_SECONDARY};
  border-radius: 1rem;
`;

const MainSwiperCardTitle = styled.p`
  width: 100%;
  color: ${COLORS.ROLLPE_SECONDARY};
  text-align: center;
  font-family: var(--font-hakgyoansim);
  font-size: 1rem;
  font-style: normal;
  font-weight: 400;
  line-height: 125%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export default MainSwiperCard;
