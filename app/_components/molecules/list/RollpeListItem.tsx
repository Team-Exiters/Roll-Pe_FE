"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";
import CONGRATS from "@/public/images/image/image_congrats.png";
import RIP from "@/public/images/image/image_rip.png";
import WHITE from "@/public/images/image/image_white.png";
import { Rollpe, RollpeListItemProps } from "@/public/utils/types";
import { useRouter } from "next/navigation";
import { StaticImageData } from "next/image";
import Link from "next/link";

const THEME_THUMBNAIL: Record<string, StaticImageData> = {
  축하: CONGRATS,
  추모: RIP,
  화이트: WHITE,
};

export const RollpeListItem: React.FC<Rollpe> = (data: Rollpe) => {
  const { viewStat, receive, title, host, createdAt, theme, code } = data;
  const today = new Date();
  const targetDate = new Date(receive.receivingDate);
  const timeDifference = targetDate.getTime() - today.getTime();
  const dDay = Math.ceil(timeDifference / (1000 * 3600 * 24));
  const createdDate = new Date(createdAt).toLocaleDateString();

  return (
    <RollpeListItemContainer>
      <BadgeContainer>
        <span className={`badge-item ${viewStat ? "public" : "private"}`}>
          {viewStat ? "공개" : "비공개"}
        </span>
        <span className={"badge-item d-day"}>
          {dDay < 0 ? "마감" : `D-${dDay}`}
        </span>
      </BadgeContainer>
      <div className={"info-wrapper"}>
        <div className={"thumb-wrapper"}>
          <Image
            src={THEME_THUMBNAIL[theme] || CONGRATS}
            alt={"썸네일"}
            fill
            priority
            sizes="48px"
          />
        </div>
        <div className={"title-wrappper"}>
          <div className={"title"}>
            <RollpeLink href={`/rollpe/${code}`}>{title}</RollpeLink>
          </div>
          <div className={"desc"}>
            {host.name} 주최 | {createdDate} 생성
          </div>
        </div>
      </div>
    </RollpeListItemContainer>
  );
};

export const RollpeSearchListItem: React.FC<Rollpe> = (data: Rollpe) => {
  const { code, receive, host, title, createdAt, theme } = data;
  const today = new Date();
  const targetDate = new Date(receive.receivingDate);
  const timeDifference = targetDate.getTime() - today.getTime();
  const dDay = Math.ceil(timeDifference / (1000 * 3600 * 24));
  const createdDate = new Date(createdAt).toLocaleDateString();

  return (
    <RollpeListItemContainer>
      <div className={"info-wrapper"}>
        <div className={"thumb-wrapper"}>
          <Image
            src={THEME_THUMBNAIL[theme] || CONGRATS}
            alt={"썸네일"}
            fill
            priority
            sizes="48px"
          />
        </div>
        <div className={"title-wrappper"}>
          <div className={"title"}>
            <BadgeContainer>
              <span className={"badge-item d-day"}>
                {" "}
                {dDay < 0 ? "마감" : `D-${dDay}`}
              </span>
            </BadgeContainer>
            <div className={"title-text"}>
              <RollpeLink href={`/rollpe/${code}`}>{title}</RollpeLink>
            </div>
          </div>
          <div className={"desc"}>
            {host.name} 주최 | {createdDate} 생성
          </div>
        </div>
      </div>
    </RollpeListItemContainer>
  );
};

const RollpeLink = styled(Link)`
  all: unset;
  cursor: pointer;
`;

const RollpeListItemContainer = styled.li`
  display: flex;
  flex-direction: column;
  padding: 1.25rem 0rem;
  gap: 0.625rem;
  width: 100%;

  border-bottom: 2px solid ${COLORS.ROLLPE_GRAY};

  & > .info-wrapper {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    & > .thumb-wrapper {
      position: relative;
      width: 3rem;
      height: 3rem;
      border-radius: 50%;
      border: 1px solid ${COLORS.ROLLPE_SECONDARY};
      overflow: hidden;
    }

    & > .title-wrappper {
      display: flex;
      flex-direction: column;
      gap: 0.5rem;
      width: calc() (100% - 2rem);
      color: ${COLORS.ROLLPE_SECONDARY};
      font-size: 1.25rem;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      & > .title {
        display: flex;
        align-items: center;
        gap: 0.5rem;
        width: calc(100% - 1.5rem);

        & > .title-text {
          color: ${COLORS.ROLLPE_SECONDARY};
          font-size: 1.25rem;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }
      }

      & > .desc {
        color: ${COLORS.ROLLPE_GRAY};
        font-size: 1rem;
        font-weight: 400;
      }
    }
  }
`;

const BadgeContainer = styled.div`
  flex-shrink: 0;
  display: flex;
  align-items: center;
  gap: 0.25rem;

  .badge-item {
    padding: 0.25rem 0.5rem;
    border-radius: 0.625rem;

    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  .public {
    border: 1px solid ${COLORS.ROLLPE_MAIN};
    background-color: ${COLORS.ROLLPE_PRIMARY};
    color: ${COLORS.ROLLPE_MAIN};
  }

  .private {
    border: 1px solid ${COLORS.ROLLPE_GRAY};
    background-color: ${COLORS.ROLLPE_PRIMARY};
    color: ${COLORS.ROLLPE_GRAY};
  }

  .d-day {
    border: 1px solid ${COLORS.ROLLPE_MAIN};
    background-color: ${COLORS.ROLLPE_MAIN};
    color: ${COLORS.ROLLPE_PRIMARY};
  }
`;
