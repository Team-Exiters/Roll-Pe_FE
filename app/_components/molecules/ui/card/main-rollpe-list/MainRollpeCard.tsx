"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { StaticImageData } from "next/image";
import Image from "next/image";
import { User } from "@/public/utils/types";
import { useRouter } from "next/navigation";
import CONGRATS from "@/public/images/image/image_dummy_cake.png";
import RIP from "@/public/images/image/image_rip.png";
import WHITE from "@/public/images/image/image_white.png";
import localFont from "next/font/local";

const pretendard = localFont({
  src: "../../../../../../public/fonts/PretendardVariable.woff2",
  weight: "400",
  display: "swap",
});

interface MainRollpeCardProps {
  receivingDate: string;
  title: string;
  host: User;
  id: number;
  code: string;
  theme: string;
}

const THEME_THUMBNAIL: Record<string, StaticImageData> = {
  축하: CONGRATS,
  추모: RIP,
  화이트: WHITE,
};

const THEME_COLOR: Record<string, string> = {
  축하: "#FFD6F8",
  추모: COLORS.ROLLPE_SECONDARY,
  화이트: COLORS.ROLLPE_PRIMARY,
};

const MainRollpeCard: React.FC<MainRollpeCardProps> = ({
  receivingDate,
  title,
  host,
  theme,
  code,
}: MainRollpeCardProps) => {
  const today = new Date();
  const targetDate = new Date(receivingDate);
  const timeDifference = targetDate.getTime() - today.getTime();
  const dDay = Math.ceil(timeDifference / (1000 * 3600 * 24));

  const router = useRouter();

  const onClickCardHandler = () => {
    router.push(`/rollpe/${code}`);
  };

  return (
    <CardContainer onClick={onClickCardHandler} $theme={THEME_COLOR[theme]}>
      <div className={"card-image"}>
        <Badge className={pretendard.className}>
          {dDay < 0 ? "마감" : `D-${dDay}`}
        </Badge>

        <div className={"image-wrapper"}>
          <Image src={THEME_THUMBNAIL[theme]} alt={"축하"} fill priority />
        </div>
      </div>
      <div className={"card-contents"}>
        <div className={"card-title"}>{title}</div>
        <div className={"card-user"}>{host.name}</div>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.button<{ $theme: string }>`
  all: unset;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-height: 9.188rem;

  border-radius: 1rem;
  overflow: hidden;

  cursor: pointer;

  & > .card-image {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    min-height: 5.875rem;
    background-color: ${(props) => props.$theme};

    & > .image-wrapper {
      position: relative;
      width: 3.125rem;
      height: 3.125rem;
    }
  }

  & > .card-contents {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;

    padding: 0.75rem;

    width: calc(100% - 1.5rem);
    min-height: 3.3125rem;

    background-color: ${COLORS.ROLLPE_PRIMARY};

    & > .card-title {
      width: 100%;
      height: 1rem;

      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      max-width: 100%;
      font-size: 1rem;
      font-weight: 400;
      font-style: normal;
      line-height: normal;
    }

    & > .card-user {
      color: #aaa;
      font-size: 0.75rem;
      font-weight: 400;
      font-style: normal;
      line-height: normal;
    }
  }
`;

const Badge = styled.div`
  position: absolute;
  top: 0.75rem;
  left: 0.75rem;
  z-index: 1;

  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0.25rem 0.5rem;

  border-radius: 0.625rem;
  background-color: ${COLORS.ROLLPE_MAIN};

  color: ${COLORS.ROLLPE_PRIMARY};
  text-align: center;
  font-size: 0.75rem;
`;

export default MainRollpeCard;
