"use clinet";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { HeaderWrapper, BackButton } from "./HeadersStyles";
import Back from "@/public/images/icons/icon_arrow_left.svg";

const HeaderB: React.FC = () => {
  const router = useRouter();

  const onClickBackHandler = () => {
    router.back();
  };

  return (
    <HeaderWrapper left={true}>
      <BackButton onClick={() => onClickBackHandler()}>
        <Image
          src={Back}
          layout="responsive"
          fill
          priority
          alt={"메뉴 아이콘"}
        />
      </BackButton>
    </HeaderWrapper>
  );
};

export default HeaderB;
