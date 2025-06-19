"use client";
import styled from "styled-components";
import { Heart } from "@/public/utils/types";
import { COLORS } from "@/public/styles/colors";
import { useEffect, useState } from "react";

// interface HeartPaperProps {
//   deg: number;
//   margin: React.CSSProperties["margin"];
//   vertical: boolean;
//   data?: Heart;
//   isExpend: boolean;
//   isEditOpen?: boolean;
//   isEditOpenHandler?: React.Dispatch<React.SetStateAction<boolean>>;
//   index: number;
//   setSelectedHeart?: React.Dispatch<React.SetStateAction<number>>;
// }

interface HeartPaperPreviewProps {
  deg: number;
  heartData: Heart | undefined;
  isVertical: boolean;
  margin: React.CSSProperties["margin"];
}

interface HeartPaperProps extends HeartPaperPreviewProps {
  isEditOpen?: boolean;
  setIsEditOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  index: number;
  setSelectedHeart?: React.Dispatch<React.SetStateAction<number>>;
}

// 미리보기용 HeartPaper
export const HeartPaperPreview: React.FC<HeartPaperPreviewProps> = ({
  deg,
  heartData,
  margin,
  isVertical,
}) => {
  //deg는 고정이지만 heartData는 undefined일 수 있지...?
  //heartData가 undefined일 때를 고려한 디스트럭쳐링.
  const { content, author, color } = heartData || {};

  return (
    <PreviewWrapper>
      {isVertical ? (
        <PreviewVerticalContainer
          deg={deg}
          color={color ? color : COLORS.ROLLPE_GRAY}
          style={{ margin: margin }}
        >
          <PreviewContentWrapper>
            <p className={"content"}>{content}</p>
            <p className={"author"}>{heartData ? `-${author?.name}` : ""}</p>
          </PreviewContentWrapper>
        </PreviewVerticalContainer>
      ) : (
        <PreviewContainer
          deg={deg}
          color={color ? color : COLORS.ROLLPE_GRAY}
          style={{ margin: margin }}
        >
          <PreviewContentWrapper>
            <p className={"content"}>{content}</p>
            <p className={"author"}>{heartData ? `-${author?.name}` : ""}</p>
          </PreviewContentWrapper>
        </PreviewContainer>
      )}
    </PreviewWrapper>
  );
};

// 크게보기용 HeartPaper
export const HeartPaper: React.FC<HeartPaperProps> = ({
  deg,
  margin,
  isVertical,
  heartData,
  isEditOpen,
  setIsEditOpen,
  index,
  setSelectedHeart,
}) => {
  const { author, content, color } = heartData || {};

  const onClickHandler = () => {
    if (content === undefined) {
      setSelectedHeart && setSelectedHeart(index);
      setIsEditOpen && setIsEditOpen(!isEditOpen);
    } else {
      alert("이미 작성된 마음입니다. 다른 위치를 선택해주세요.");
    }
  };

  return (
    <HeartPaperWrapper onClick={onClickHandler}>
      <HeartPaperPreviewContainer
        isActive={heartData ? true : false}
        color={color}
        deg={deg}
        style={{ margin: margin }}
        vertical={isVertical}
      >
        <ContentWrapper>
          <p className={"content"}>{content}</p>
          <p className={"author"}>{heartData ? `-${author?.name}` : ""}</p>
        </ContentWrapper>
      </HeartPaperPreviewContainer>
    </HeartPaperWrapper>
  );
};

const PreviewWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
`;

const PreviewContainer = styled.div<{ deg: number; color: string }>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  min-width: 3.5rem;
  height: 90%;
  max-height: 4rem;

  background: ${(props) =>
    props.color === `${COLORS.ROLLPE_GRAY}`
      ? COLORS.ROLLPE_GRAY
      : `#${props.color}`};
  //props로 넘어오는 컬러는 #가 없는 string임....
  ${(props) =>
    props.color === `${COLORS.ROLLPE_GRAY}`
      ? `border: 1px dashed ${COLORS.ROLLPE_SECONDARY};`
      : `border: none;`}
  transform: rotate(${(props) => props.deg}deg);
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: var(--font-nanumpen);
`;

const PreviewVerticalContainer = styled(PreviewContainer)`
  height: 100%;
  max-height: 6rem;
`;

const PreviewContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.5rem;
  width: calc(100% - 1rem);
  height: calc(80% - 1rem);

  & > p {
    width: 100%;
    text-align: center;
    font-size: 0.5rem;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
  }

  & > .content {
    height: 90%;
  }
`;

const HeartPaperWrapper = styled.button`
  all: unset;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 100%;
  cursor: pointer;

  &:hover {
    transform: translateY(-0.5em);
    transition: transform 0.3s ease-in-out;
  }
`;

const HeartPaperPreviewContainer = styled.div<{
  isActive: boolean;
  color?: string;
  deg: number;
  vertical: boolean;
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 90%;
  height: 90%;
  min-width: 10rem;
  min-height: 13rem;
  max-height: 15rem;

  /* @media (min-width: 768px) {
    max-height: 15em;
  } */

  /* max-height: ${(props) => (props.vertical ? "15em" : "4em")}; */

  transform: rotate(${(props) => props.deg}deg);
  background: ${(props) =>
    props.isActive ? `#${props.color}` : COLORS.ROLLPE_GRAY};
  ${(props) => (props.isActive ? "border: none" : `border: 1px dashed black`)};
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  font-family: var(--font-nanumpen);
  opacity: ${(props) => (props.isActive ? 1 : 0.5)};
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0.5rem;
  width: calc(100% - 1rem);

  & > p {
    width: 100%;
    text-align: center;
    font-size: 1.125;
    overflow: hidden;
    text-overflow: ellipsis;
    word-break: break-all;
    font-family: var(--font-nanumpen);
  }

  & > .content {
    height: 90%;
  }
`;
