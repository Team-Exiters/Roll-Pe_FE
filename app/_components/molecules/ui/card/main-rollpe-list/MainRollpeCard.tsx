"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";
import { User } from "@/public/utils/types";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

interface MainRollpeCardProps {
  receivingDate: string;
  title: string;
  host: User;
  id: number;
  code: string;
  theme: string;
}

const MainRollpeCard: React.FC<MainRollpeCardProps> = ({
  receivingDate,
  title,
  host,
  id,
  theme,
  code,
}: MainRollpeCardProps) => {
  const today = new Date();
  const targetDate = new Date(receivingDate);
  const timeDifference = targetDate.getTime() - today.getTime();
  const dDay = Math.ceil(timeDifference / (1000 * 3600 * 24));

  const router = useRouter();

  //TODO: theme에 따른 배경색 지정

  const onClickCardHandler = () => {
    router.push(`/rollpe/${code}`);
  };

  return (
    <CardContainer onClick={onClickCardHandler}>
      <div className={"card-image"}>
        <Badge>
          <p>D-{dDay}</p>
        </Badge>

        <Image
          src={"/images/image/image_dummy_cake.png"}
          width={50}
          height={46}
          alt={""}
        />
      </div>
      <div className={"card-contents"}>
        <div className={"card-title"}>
          <p>{title}</p>
        </div>
        <p className={"card-user"}>{host.name}</p>
      </div>
    </CardContainer>
  );
};

const CardContainer = styled.button`
  all: unset;

  display: flex;
  flex-direction: column;
  align-items: center;

  width: 100%;
  max-height: 9.188rem;

  border-radius: 1rem;
  overflow: hidden;

  font-family: var(--font-hakgyoansim);

  cursor: pointer;

  & > .card-image {
    position: relative;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 5.875rem;
    background-color: #ffd6f8;
  }

  & > .card-contents {
    display: flex;
    flex-direction: column;
    gap: 0.125rem;
    height: 3.3125rem;

    padding: 0.75rem;

    width: calc(100% - 1.5rem);

    background-color: ${COLORS.ROLLPE_PRIMARY};

    & > .card-title {
      width: 100%;
      height: 1rem;

      & > p {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        max-width: 100%;
        height: 100%;
        font-size: 1rem;
        font-weight: 400;
        font-style: normal;
        line-height: normal;
      }
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

  & > p {
    color: ${COLORS.ROLLPE_PRIMARY};
    text-align: center;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

export default MainRollpeCard;
