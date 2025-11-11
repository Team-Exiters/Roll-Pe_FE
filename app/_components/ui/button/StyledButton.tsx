"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { useRouter } from "next/navigation";
import React from "react";
import { Rollpe } from "@/public/utils/types";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../../../../public/fonts/PretendardVariable.woff2",
  display: "swap",
});

interface ButtonProps {
  text: string;
  onClickHandler?: () => void;
  route?: string;
}

interface MoreButtonProps extends ButtonProps {
  nextLink: string;
  setList: React.Dispatch<React.SetStateAction<Rollpe[]>>;
}

interface SubmitProps {
  text: string;
  isDisabled?: boolean;
}

// Basic General Button Component
export const Button: React.FC<ButtonProps> = ({
  text,
  onClickHandler,
  route,
}) => {
  const router = useRouter();
  return route && !onClickHandler ? (
    <StyledButton
      className={pretendard.className}
      onClick={() => {
        router.push(route);
      }}
    >
      {text}
    </StyledButton>
  ) : (
    <StyledButton onClick={onClickHandler}>{text}</StyledButton>
  );
};

// Secondary General Button Component
export const ButtonSecondary: React.FC<ButtonProps> = ({
  text,
  onClickHandler,
  route,
}) => {
  const router = useRouter();
  return route && !onClickHandler ? (
    <StyledButtonSecondary
      onClick={() => {
        router.push(route);
      }}
    >
      {text}
    </StyledButtonSecondary>
  ) : (
    <StyledButtonSecondary onClick={onClickHandler}>
      {text}
    </StyledButtonSecondary>
  );
};

export const ButtonMore: React.FC<ButtonProps> = ({ text, onClickHandler }) => {
  return <StyledMore>{text}</StyledMore>;
};

export const ButtonSubmit: React.FC<SubmitProps> = ({ text, isDisabled }) => {
  return isDisabled ? (
    <StyledSubmit value={text} disabled />
  ) : (
    <StyledSubmit value={text} />
  );
};

const StyledSubmit = styled.input.attrs({ type: "submit" })`
  padding: 0.75rem;
  width: 100%;
  flex-shrink: 0;

  border-radius: 0.5rem;
  border: 2px solid ${COLORS.ROLLPE_MAIN};
  background-color: ${COLORS.ROLLPE_MAIN};

  color: ${COLORS.ROLLPE_PRIMARY};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  font-family: var(--font-pretendard);
  line-height: 1.5rem;

  cursor: pointer;

  &:hover {
    background-color: ${COLORS.ROLLPE_PRIMARY};
    color: ${COLORS.ROLLPE_MAIN};
    transition: all 0.2s ease;
  }

  &:disabled {
    opacity: 0.8;
    cursor: not-allowed;
  }
`;

const StyledButton = styled.button`
  padding: 0.75rem;
  width: 100%;
  flex-shrink: 0;

  border-radius: 0.5rem;
  border: 2px solid ${COLORS.ROLLPE_MAIN};
  background-color: ${COLORS.ROLLPE_MAIN};

  color: ${COLORS.ROLLPE_PRIMARY};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  font-family: var(--font-pretendard);
  line-height: 1.5rem;

  cursor: pointer;

  &:hover {
    background-color: ${COLORS.ROLLPE_PRIMARY};
    color: ${COLORS.ROLLPE_MAIN};
    transition: all 0.2s ease;
  }
`;

const StyledMore = styled(StyledButton)`
  border: 2px solid ${COLORS.ROLLPE_SECONDARY};
  background-color: ${COLORS.ROLLPE_PRIMARY};
  color: ${COLORS.ROLLPE_SECONDARY};
`;

export const StyledButtonSecondary = styled(StyledButton)`
  background-color: ${COLORS.ROLLPE_PRIMARY};
  color: ${COLORS.ROLLPE_MAIN};

  &:hover {
    background-color: ${COLORS.ROLLPE_MAIN};
    color: ${COLORS.ROLLPE_PRIMARY};
    transition: all 0.2s ease;
  }
`;
