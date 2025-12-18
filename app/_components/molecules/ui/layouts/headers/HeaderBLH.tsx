"use client";
import styled from "styled-components";
import { useState } from "react";
import { BackButton, LogoButton, MenuButton } from "./HeadersStyles";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Menu from "@/public/images/icons/icon_menu.svg";
import Back from "@/public/images/icons/icon_arrow_left.svg";
import logo from "@/public/images/logos/logo.korean.png";

export const HeaderBLH: React.FC = () => {
  const router = useRouter();
  const [isSlideOpen, setIsSlideOpen] = useState<boolean>(false);

  const onClickMenuHandler = () => {
    setIsSlideOpen(true);
  };

  const onClickBackHandler = () => {
    router.back();
  };

  const onClickLogoHandler = () => {
    router.push("/main");
  };

  return (
    <BLHWrapper>
      <BackButton onClick={() => onClickBackHandler()}>
        <Image src={Back} fill priority alt={"메뉴 아이콘"} />
      </BackButton>
      <LogoButton onClick={() => onClickLogoHandler()}>
        <Image src={logo} fill priority alt={"홈으로"} />
      </LogoButton>
      <MenuButton onClick={() => onClickMenuHandler()}>
        <Image src={Menu} fill priority alt={"메뉴 아이콘"} />
      </MenuButton>
      {/* {<SlideMenu isSlideOpen={isSlideOpen} setIsSlideOpen={setIsSlideOpen} />} */}
    </BLHWrapper>
  );
};

const BLHWrapper = styled.header`
  position: absolute;
  top: 0;
  z-index: 2;

  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.25rem;
  width: calc(100% - 2.5rem);
  background: transparent;
`;

export default HeaderBLH;
