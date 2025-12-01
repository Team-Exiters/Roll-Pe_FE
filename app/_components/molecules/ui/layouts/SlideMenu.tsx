"use client";
import styled from "styled-components";
import { useSelector, useDispatch } from "react-redux";
import { setSlide } from "@/public/redux/redux";
import { AppDispatch, RootState } from "@/public/redux/store";
import { COLORS } from "@/public/styles/colors";
import { useRef, useEffect, useState } from "react";
import Close from "@/public/images/icons/icon_close.svg";
import Image from "next/image";
import Link from "next/link";

interface SlideMenuItem {
  name: string;
  link: string;
}

const MENU_ITEMS: SlideMenuItem[] = [
  {
    name: "홈",
    link: "/main",
  },
  {
    name: "검색",
    link: "/rollpe/search",
  },
  {
    name: "공지사항",
    link: "/notice",
  },
  {
    name: "1:1 문의",
    link: "/inquiry",
  },
  {
    name: "마이페이지",
    link: "/mypage",
  },
];

interface SlideMenuProps {
  isSlideOpen: boolean;
  setIsSlideOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const SlideMenu: React.FC<SlideMenuProps> = ({
  isSlideOpen,
  setIsSlideOpen,
}) => {
  const closeHandler = () => {
    setIsSlideOpen(false);
  };

  return (
    <SlideMenuPageWrapper isOpen={isSlideOpen}>
      <SlideMenuContainer isOpen={isSlideOpen}>
        <CloseButtonWrapper>
          <CloseButton onClick={() => closeHandler()}>
            <Image
              src={Close}
              layout="responsive"
              width={28}
              height={28}
              alt="닫기"
            />
          </CloseButton>
        </CloseButtonWrapper>

        <MenuContainer>
          {MENU_ITEMS.map((item: SlideMenuItem, index: number) => (
            <li key={index}>
              <Link href={item.link}>{item.name}</Link>
            </li>
          ))}
        </MenuContainer>

        <OtherMenuContainer>
          <li>서비스이용약관</li>
          <li>개인정보처리방침</li>
        </OtherMenuContainer>
      </SlideMenuContainer>
    </SlideMenuPageWrapper>
  );
};

const SlideMenuPageWrapper = styled.div<{ isOpen: boolean }>`
  ${(props) => (props.isOpen ? "display: flex;" : "display: none;")};
  position: absolute;
  z-index: 4;
  top: 0;

  /* display: flex; */
  justify-content: flex-end;

  width: 100%;
  height: 100svh;
  background: rgba(0, 0, 0, 0.5);
`;

const SlideMenuContainer = styled.div<{ isOpen: boolean }>`
  position: fixed;
  z-index: 5;
  top: 0;
  right: ${(props) => (props.isOpen ? "0" : "-90%")};

  padding: 2rem 1.25rem 1.25rem 2.5rem;
  width: calc(80% - 2.5rem);
  height: calc(100% - 3.3rem);
  background: ${COLORS.ROLLPE_PRIMARY};
  border-radius: 1rem 0rem 0rem 1rem;

  transition: right 0.2s ease-in;
`;

const CloseButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  width: calc(100%-3.25rem);
`;

const CloseButton = styled.button`
  all: unset;
  width: 1.75rem;
  height: 1.75rem;
  cursor: pointer;
`;

const MenuContainer = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 2.5rem;

  margin-top: 3.75rem;
  width: 100%;

  & > li {
    font-family: var(--font-hakgyoansim);
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    cursor: pointer;

    &:first-child {
      color: ${COLORS.ROLLPE_MAIN};
    }
  }
`;

const OtherMenuContainer = styled.ul`
  position: absolute;
  bottom: 1.25rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  & > li {
    color: ${COLORS.ROLLPE_GRAY};
    font-family: var(--font-pretenard);
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export default SlideMenu;
