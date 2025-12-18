"use client";
import { useState } from "react";
import Image from "next/image";
import { HeaderWrapper, MenuButton } from "./HeadersStyles";
import SlideMenu from "../SlideMenu";
import Menu from "@/public/images/icons/icon_menu.svg";

export const HeaderDefault: React.FC = () => {
  const [isSlideOpen, setIsSlideOpen] = useState<boolean>(false);

  const onClickMenuHandler = () => {
    setIsSlideOpen(true);
  };

  return (
    <>
      <HeaderWrapper left={false}>
        <MenuButton onClick={() => onClickMenuHandler()}>
          <Image src={Menu} alt={"메뉴 아이콘"} fill priority />
        </MenuButton>
      </HeaderWrapper>
      {<SlideMenu isSlideOpen={isSlideOpen} setIsSlideOpen={setIsSlideOpen} />}
    </>
  );
};
