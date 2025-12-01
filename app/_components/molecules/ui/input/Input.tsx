"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";
import SearchIcon from "@/public/images/icons/icon_search.svg";
import Link from "next/link";
import { useState } from "react";

interface CheckboxProps {
  checkboxId: string;
  label: string;
  link?: string;
  isLabelBlack?: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface SearchInputProps {
  setSearchText: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchInput: React.FC<SearchInputProps> = ({ setSearchText }) => {
  const [inputText, setInputText] = useState<string>("");
  const onClickHandler = () => {
    setSearchText(inputText);
  };

  return (
    <SearchInputWrapper>
      <input
        type={"text"}
        placeholder={"검색어를 입력하세요."}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setInputText(e.target.value);
        }}
      />
      <button onClick={onClickHandler}>
        <Image
          src={SearchIcon}
          alt={"검색"}
          layout="responsive"
          width={23}
          height={21}
        />
      </button>
    </SearchInputWrapper>
  );
};

export const Checkbox: React.FC<CheckboxProps> = ({
  checkboxId,
  label,
  link,
  isLabelBlack,
  onChange,
}) => {
  return (
    <CheckboxWrapper isLabelBlack={isLabelBlack}>
      <StyledCheckbox
        id={checkboxId}
        value={checkboxId}
        onChange={(e) => {
          onChange(e);
        }}
      />
      <label htmlFor={checkboxId}>{label}</label>
      {link && <Link href={link}>보기</Link>}
    </CheckboxWrapper>
  );
};

const SearchInputWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem 1rem;
  width: calc(100% - 2rem);

  border-radius: 1rem;
  border: 2px solid ${COLORS.ROLLPE_SECONDARY};

  & > input {
    all: unset;
    width: calc(100% - 3rem);
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    &::placeholder {
      color: ${COLORS.ROLLPE_GRAY};
    }
  }

  & > button {
    all: unset;
    width: 1.375rem;
    height: 1.375rem;
    cursor: pointer;

    & > img {
      width: 100%;
      height: 100%;
    }
  }
`;

export const StyledInput = styled.input`
  padding: 1rem;
  width: calc(100% - 2rem);
  border-radius: 1rem;
  border: 2px solid ${COLORS.ROLLPE_GRAY};
  background: ${COLORS.ROLLPE_PRIMARY};
  font-family: var(--font-hakgyoansim);
  color: ${COLORS.ROLLPE_SECONDARY};
  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  &::placeholder {
    color: ${COLORS.ROLLPE_GRAY};
  }

  &:focus {
    border: 2px solid ${COLORS.ROLLPE_SECONDARY};
  }
`;

const CheckboxWrapper = styled.div<{ isLabelBlack?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.25rem;
  font-family: var(--font-hakgyoansim);

  & > label {
    color: ${(props) =>
      props.isLabelBlack && props.isLabelBlack
        ? COLORS.ROLLPE_SECONDARY
        : COLORS.ROLLPE_GRAY};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & > a {
    all: unset;
    margin-left: auto;
    color: ${COLORS.ROLLPE_GRAY};
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
  appearance: none;

  box-sizing: border-box;
  background-clip: content-box;
  padding: 0.25em;
  width: 1.25rem;
  height: 1.25rem;
  border-radius: 0.25rem;
  border: 2px solid ${COLORS.ROLLPE_GRAY};
  cursor: pointer;

  &:checked {
    background-color: ${COLORS.ROLLPE_MAIN};
  }
`;
