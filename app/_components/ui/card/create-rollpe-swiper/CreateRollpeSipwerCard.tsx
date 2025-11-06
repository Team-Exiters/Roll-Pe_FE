"use client";
import Image from "next/image";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { RollpeRequestBody } from "@/app/(layout_BL)/rollpe/create/_components/form/RollpeCreateForm";

interface CreateRollpeCardProps {
  id: number;
  isSelected: RollpeRequestBody;
  setIsSelected: React.Dispatch<React.SetStateAction<RollpeRequestBody>>;
}

export interface RatioSwiperCardProps extends CreateRollpeCardProps {
  title: string;
}

export interface ThemeSwiperCardProps extends CreateRollpeCardProps {
  title: string;
}

export interface SizeSwiperCardProps extends CreateRollpeCardProps {
  title: string;
  max: number;
}

interface Exam {
  [key: string]: { exam: React.ReactNode };
}

const RATIO_EXAM: Exam = {
  가로: {
    exam: (
      <div
        style={{
          width: "5rem",
          height: "3.438rem",
          boxShadow: "0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25)",
          background: `${COLORS.ROLLPE_PRIMARY}`,
        }}
      ></div>
    ),
  },
  세로: {
    exam: (
      <div
        style={{
          width: "3.438rem",
          height: "5rem",
          boxShadow: "0rem 0.25rem 0.25rem 0rem rgba(0, 0, 0, 0.25)",
          background: `${COLORS.ROLLPE_PRIMARY}`,
        }}
      ></div>
    ),
  },
};

const THEME_EXAM: Exam = {
  생일: {
    exam: <></>,
  },
  화이트: {
    exam: <></>,
  },
  블랙: {
    exam: <></>,
  },
};

export const RatioSwiperCard: React.FC<RatioSwiperCardProps> = ({
  id,
  title,
  isSelected,
  setIsSelected,
}) => {
  const onClickHandler = () => {
    setIsSelected((prevState) => ({ ...prevState, ratioFK: id }));
  };

  return (
    <RatioCardContainer
      isActive={isSelected.ratioFK === id}
      onClick={() => onClickHandler()}
    >
      {RATIO_EXAM[title].exam}
      <p className={"title"}>{title}</p>
    </RatioCardContainer>
  );
};

export const ThemeSwiperCard: React.FC<ThemeSwiperCardProps> = ({
  id,
  isSelected,
  title,
  setIsSelected,
}) => {
  const onClickHandler = () => {
    setIsSelected((prevState) => ({ ...prevState, themeFK: id }));
  };

  return (
    <ThemeCardWrpper>
      <ThemeCardContainer
        isActive={isSelected.themeFK === id}
        onClick={() => onClickHandler()}
      >
        {THEME_EXAM[title].exam}
      </ThemeCardContainer>
      <p>{title}</p>
    </ThemeCardWrpper>
  );
};

export const SizeSwiperCard: React.FC<SizeSwiperCardProps> = ({
  id,
  title,
  isSelected,
  setIsSelected,
  max,
}) => {
  const onClickHandler = () => {
    setIsSelected((prevState) => ({ ...prevState, sizeFK: id }));
  };

  return (
    <SizeSwiperCardWrapper
      isActive={isSelected.sizeFK === id}
      onClick={() => onClickHandler()}
    >
      <div className={"size-swiper-container"}>
        <p className={"title"}>{title}</p>
        <p className={"max-person"}>최대 {max}명</p>
      </div>
    </SizeSwiperCardWrapper>
  );
};

const SizeSwiperCardWrapper = styled.button<{ isActive: boolean }>`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;

  width: 5rem;
  height: 5rem;

  color: ${(props) =>
    props.isActive ? `${COLORS.ROLLPE_SECONDARY}` : `${COLORS.ROLLPE_GRAY}`};
  border: 2px solid
    ${(props) =>
      props.isActive ? `${COLORS.ROLLPE_SECONDARY}` : `${COLORS.ROLLPE_GRAY}`};
  border-radius: 50%;

  cursor: pointer;

  & > .size-swiper-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;

    text-align: center;
    font-family: var(--font-hakgyoansim);
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    & > .title {
      font-size: 1.5rem;
    }

    & > .max-person {
      font-size: 0.625rem;
    }
  }
`;

const RatioCardContainer = styled.button<{ isActive: boolean }>`
  all: unset;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.75rem 1.25rem;

  width: 5rem;
  height: 8.25rem;

  color: ${(props) =>
    props.isActive ? `${COLORS.ROLLPE_SECONDARY}` : `${COLORS.ROLLPE_GRAY}`};
  border: 2px solid
    ${(props) =>
      props.isActive ? `${COLORS.ROLLPE_SECONDARY}` : `${COLORS.ROLLPE_GRAY}`};
  border-radius: 1rem;

  cursor: pointer;

  & > .title {
    width: 100%;
    text-align: center;
    font-family: var(--font-hakgyoansim);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ThemeCardWrpper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;

  & > p {
    width: 100%;
    text-align: center;
    font-family: var(--font-hakgyoansim);
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 125%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;

const ThemeCardContainer = styled(RatioCardContainer)`
  all: unset;
  display: flex;
  justify-content: center;
  width: 5rem;
  height: 5rem;

  align-items: center;
  border-radius: 50%;
  border: 2px solid
    ${(props) =>
      props.isActive ? `${COLORS.ROLLPE_SECONDARY}` : `${COLORS.ROLLPE_GRAY}`};
  color: ${(props) =>
    props.isActive ? `${COLORS.ROLLPE_SECONDARY}` : `${COLORS.ROLLPE_GRAY}`};
  overflow: hidden;
`;
