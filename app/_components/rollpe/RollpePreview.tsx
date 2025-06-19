"use client";
import styled from "styled-components";
import { Heart, Rollpe } from "@/public/utils/types";
import { useRouter } from "next/navigation";
import { HeartPaper, HeartPaperPreview } from "./commons/HeartPaper";

// 마음 별 각도 상수화
const HORIZONTAL_DEG = [
  -2.72, 0, 5.39, 0.22, -1.6, 2.78, 3.1, -1.98, 4.03, -1.98, -0.5, -2.83,
];

const VERTICAL_DEG = [
  0.86, -0.26, 0.15, 0.42, 0.07, 0.86, -0.74, 0.76, 1.45, -0.11, 1.23, -0.66,
];

const HORIZONTAL_MARGIN = [
  "0rem 0rem 0.5rem 0rem",
  "0.5rem 0rem 0rem 0rem",
  "0rem 0rem 0.5rem 0rem",
  "1rem 0rem 0rem 0rem",
  "0rem 0rem 0rem 0rem",
  "0rem 0rem 0rem 0rem",
  "0rem 0rem 0rem 0rem",
  "0rem 0rem 0.5rem 0rem",
  "0rem 0rem 0.5rem 0rem",
  "0rem 0rem 0rem 0rem",
  "0rem 0rem 0.5rem 0rem",
  "0rem 0rem 0rem 0rem",
];

const VERTICAL_MARGIN = [
  "0rem 0rem 0.5rem 0rem",
  "0.5rem 0rem 0rem 0rem",
  "0rem 0rem 0.5rem 0rem",
  "1rem 0rem 0rem 0rem",
  "0rem 0rem 0rem 0rem",
  "1rem 0rem 0rem 0rem",
  "0rem 0rem 0rem 0rem",
  "1rem 0rem 0rem 0rem",
  "1rem 0rem 0rem 0rem",
  "0rem 0rem 0rem 0rem",
  "1rem 0rem 0rem 0rem",
  "0rem 0rem 0rem 0rem",
];

const RollpePreview: React.FC<Rollpe> = (rollpeData: Rollpe) => {
  const { ratio, theme, code, hearts, title } = rollpeData;
  const router = useRouter();

  const previewOnClickHandler = () => {
    // 롤페 미리보기 클릭시 전체보기 페이지로 이동.
    router.push(`/rollpe/whole/${code}`);
  };

  return ratio === "가로" ? (
    <RollpePreviewWrapper onClick={previewOnClickHandler}>
      <RollpePreviewContainer>
        <HorizontalRow>
          <HeartPaperPreview
            deg={HORIZONTAL_DEG[0]}
            margin={HORIZONTAL_MARGIN[0]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 0)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={HORIZONTAL_DEG[1]}
            margin={HORIZONTAL_MARGIN[1]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 1)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={HORIZONTAL_DEG[2]}
            margin={HORIZONTAL_MARGIN[2]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 2)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={HORIZONTAL_DEG[3]}
            margin={HORIZONTAL_MARGIN[3]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 3)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={HORIZONTAL_DEG[4]}
            margin={HORIZONTAL_MARGIN[4]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 4)[0]
                : undefined
            }
          />
        </HorizontalRow>
        <HorizontalTitleRow>
          <HeartPaperPreview
            deg={HORIZONTAL_DEG[5]}
            margin={HORIZONTAL_MARGIN[5]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 5)[0]
                : undefined
            }
          />
          <div className={"title-wrapper"}>
            <h1>{rollpeData.title}</h1>
          </div>
          <HeartPaperPreview
            deg={HORIZONTAL_DEG[6]}
            margin={HORIZONTAL_MARGIN[6]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 6)[0]
                : undefined
            }
          />
        </HorizontalTitleRow>
        <HorizontalRow>
          <HeartPaperPreview
            deg={HORIZONTAL_DEG[7]}
            margin={HORIZONTAL_MARGIN[7]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 7)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={HORIZONTAL_DEG[8]}
            margin={HORIZONTAL_MARGIN[8]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 8)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={HORIZONTAL_DEG[9]}
            margin={HORIZONTAL_MARGIN[9]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 9)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={HORIZONTAL_DEG[10]}
            margin={HORIZONTAL_MARGIN[10]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 10)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={HORIZONTAL_DEG[11]}
            margin={HORIZONTAL_MARGIN[11]}
            isVertical={false}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 11)[0]
                : undefined
            }
          />
        </HorizontalRow>
      </RollpePreviewContainer>
    </RollpePreviewWrapper>
  ) : (
    <RollpePreviewVerticalWrapper onClick={previewOnClickHandler}>
      <RollpePreviewContainer>
        <VerticalTitleRow>
          <h1>{title}</h1>
        </VerticalTitleRow>
        <VerticalRow>
          <HeartPaperPreview
            deg={VERTICAL_DEG[0]}
            margin={VERTICAL_MARGIN[0]}
            isVertical={true}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 0)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={VERTICAL_DEG[1]}
            margin={VERTICAL_MARGIN[1]}
            isVertical={true}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 1)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={VERTICAL_DEG[2]}
            margin={VERTICAL_MARGIN[2]}
            isVertical={true}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 2)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={VERTICAL_DEG[3]}
            margin={VERTICAL_MARGIN[3]}
            isVertical={true}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 3)[0]
                : undefined
            }
          />
        </VerticalRow>
        <VerticalRow>
          <HeartPaperPreview
            deg={VERTICAL_DEG[4]}
            margin={VERTICAL_MARGIN[4]}
            isVertical={true}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 4)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={VERTICAL_DEG[5]}
            margin={VERTICAL_MARGIN[5]}
            isVertical={true}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 5)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={VERTICAL_DEG[6]}
            margin={VERTICAL_MARGIN[6]}
            isVertical={true}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 6)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={VERTICAL_DEG[7]}
            margin={VERTICAL_MARGIN[7]}
            isVertical={true}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 7)[0]
                : undefined
            }
          />
        </VerticalRow>
        <VerticalRow>
          <HeartPaperPreview
            deg={VERTICAL_DEG[8]}
            margin={VERTICAL_MARGIN[8]}
            isVertical={true}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 8)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={VERTICAL_DEG[9]}
            margin={VERTICAL_MARGIN[9]}
            isVertical={true}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 9)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={VERTICAL_DEG[10]}
            margin={VERTICAL_MARGIN[10]}
            isVertical={true}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 10)[0]
                : undefined
            }
          />
          <HeartPaperPreview
            deg={VERTICAL_DEG[11]}
            margin={VERTICAL_MARGIN[11]}
            isVertical={true}
            heartData={
              hearts.count > 0
                ? hearts.data.filter((heart) => heart.index === 11)[0]
                : undefined
            }
          />
        </VerticalRow>
      </RollpePreviewContainer>
    </RollpePreviewVerticalWrapper>
  );
};

const RollpePreviewWrapper = styled.button`
  all: unset;
  aspect-ratio: 297 / 210;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  width: 100%;
  height: 100%;
  cursor: pointer;
`;

const RollpePreviewVerticalWrapper = styled(RollpePreviewWrapper)`
  aspect-ratio: 210 / 297;
`;

const RollpePreviewContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  padding: 0.5rem;
  width: calc(100% - 1rem);
  height: calc(100% - 1rem);
`;

const HorizontalRow = styled.div`
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  width: 100%;
  height: 4rem;
`;

const HorizontalTitleRow = styled(HorizontalRow)`
  grid-template-columns: 1fr 3fr 1fr;
  height: 4rem;

  & > .title-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;

    padding: 0.2rem;
    width: calc(100% - 0.4rem);
    height: 4rem;

    & > h1 {
      text-align: center;
      font-size: 1.25rem;
      font-family: var(--font-jalnan);
      line-height: auto;
    }
  }
`;

const VerticalTitleRow = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  & > h1 {
    width: 70%;
    font-size: 1.5rem;
    font-family: var(--font-jalnan);
    text-align: center;
  }
`;
const VerticalRow = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
  height: 6rem;
`;

export default RollpePreview;
