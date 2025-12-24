"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { LogoHeaderWrapper, BackButton, LogoButton } from "./HeadersStyles";
import Back from "@/public/images/icons/icon_arrow_left.svg";
import logo from "@/public/images/logos/logo.korean.png";

const HeaderBL = () => {
  const router = useRouter();

  const onClickBackHandler = () => {
    router.back();
  };

  const onClickLogoHandler = () => {
    router.push("/main");
  };

  return (
    <LogoHeaderWrapper left={true}>
      <BackButton onClick={() => onClickBackHandler()}>
        <Image src={Back} alt={"뒤로가기"} fill priority />
      </BackButton>
      <LogoButton onClick={() => onClickLogoHandler()}>
        <Image src={logo} fill priority alt={"홈으로"} />
      </LogoButton>
      <div className="dummy"></div>
    </LogoHeaderWrapper>
  );
};
