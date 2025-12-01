"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { useRouter } from "next/navigation";
import React from "react";
import { Rollpe } from "@/public/utils/types";
import localFont from "next/font/local";
import Link from "next/link";

const pretendard = localFont({
  src: "../../../../../public/fonts/PretendardVariable.woff2",
  weight: "400",
  display: "swap",
});

interface ButtonProps {
  text: string;
  onClickHandler?: () => void;
}

interface SubmitProps {
  text: string;
  isDisabled?: boolean;
}

interface ButtonLinkProps {
  text: string;
  href: string;
}

// 기본 버튼
export const ButtonPrimary: React.FC<ButtonProps> = ({
  text,
  onClickHandler,
}) => {
  return (
    onClickHandler && (
      <ButtonWrapper className={pretendard.className} onClick={onClickHandler}>
        {text}
      </ButtonWrapper>
    )
  );
};

// 세컨더리 버튼
export const ButtonSecondary: React.FC<ButtonProps> = ({
  text,
  onClickHandler,
}) => {
  return (
    onClickHandler && (
      <StyledButtonSecondary
        className={pretendard.className}
        onClick={onClickHandler}
      >
        {text}
      </StyledButtonSecondary>
    )
  );
};

// 서브밋 버튼
export const ButtonSubmit: React.FC<SubmitProps> = ({ text, isDisabled }) => {
  return isDisabled ? (
    <ButtonSubmitWrapper value={text} disabled />
  ) : (
    <ButtonSubmitWrapper value={text} />
  );
};

// 더보기 버튼
export const ButtonMore: React.FC<ButtonProps> = ({ text, onClickHandler }) => {
  return <StyledMore>{text}</StyledMore>;
};

// 링크 버튼 (단순 페이지 이동)
export const ButtonLink: React.FC<ButtonLinkProps> = ({ text, href }) => {
  return (
    <ButtonLinkWrapper className={pretendard.className} href={href}>
      {text}
    </ButtonLinkWrapper>
  );
};

const ButtonWrapper = styled.button`
  padding: 0.75rem;
  width: 100%;

  border-radius: 0.5rem;
  border: 2px solid ${COLORS.ROLLPE_MAIN};
  background-color: ${COLORS.ROLLPE_MAIN};

  color: ${COLORS.ROLLPE_PRIMARY};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;

  cursor: pointer;

  &:hover {
    background-color: ${COLORS.ROLLPE_PRIMARY};
    color: ${COLORS.ROLLPE_MAIN};
    transition: all 0.2s ease;
  }
`;

const ButtonSubmitWrapper = styled.input.attrs({ type: "submit" })`
  padding: 0.75rem;
  width: 100%;

  border-radius: 0.5rem;
  border: 2px solid ${COLORS.ROLLPE_MAIN};
  background-color: ${COLORS.ROLLPE_MAIN};

  color: ${COLORS.ROLLPE_PRIMARY};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
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

const ButtonLinkWrapper = styled(Link)`
  padding: 0.75rem;
  width: calc(100% - 1.5rem);

  border-radius: 0.5rem;
  border: 2px solid ${COLORS.ROLLPE_MAIN};
  background-color: ${COLORS.ROLLPE_MAIN};

  color: ${COLORS.ROLLPE_PRIMARY};
  text-align: center;
  font-size: 1rem;
  font-style: normal;
  font-weight: 600;
  line-height: 1.5rem;
  text-decoration: none;

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

const StyledMore = styled(ButtonWrapper)`
  border: 2px solid ${COLORS.ROLLPE_SECONDARY};
  background-color: ${COLORS.ROLLPE_PRIMARY};
  color: ${COLORS.ROLLPE_SECONDARY};
`;

export const StyledButtonSecondary = styled(ButtonWrapper)`
  background-color: ${COLORS.ROLLPE_PRIMARY};
  color: ${COLORS.ROLLPE_MAIN};

  &:hover {
    background-color: ${COLORS.ROLLPE_MAIN};
    color: ${COLORS.ROLLPE_PRIMARY};
    transition: all 0.2s ease;
  }
`;
