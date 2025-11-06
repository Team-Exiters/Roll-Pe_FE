"use client";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";
import { useParams } from "next/navigation";
import styled from "styled-components";
import DUMMY from "@/public/images/image/image_templete.png";
import REPORT from "@/public/images/icons/icon_siren.svg";
import {
  Button,
  ButtonSecondary,
} from "@/app/_components/ui/button/StyledButton";
import Marquee from "react-fast-marquee";

const RollpeDetailPage: React.FC = () => {
  const rollpeId = useParams().rollpeId;

  return (
    <>
      <RollpeDetailPageWrapper>
        <RollpeDetailPageContainer>
          <Marquee
            style={{ width: "100%", marginBottom: "3.25rem" }}
            pauseOnHover={true}
          >
            <h1 className={"title"}>제목영역 롤페 아이디:{rollpeId}</h1>
          </Marquee>

          <div className={"preview-wrapper"}>
            <div className={"preview-image-wrapper"}>
              <Image src={DUMMY} alt={"미리보기 이미지"} layout="responsive" />
            </div>
            <p>롤페를 눌러 마음을 전달하세요!</p>
          </div>

          <div className={"writer-wrapper"}>
            <h4>작성자(3/13)</h4>
            <ul className={"writer-container"}>
              <li>김텐가(TengaSuki)</li>
              <li>김텐가(TengaSuki)</li>
              <li>김텐가(TengaSuki)</li>
            </ul>
          </div>

          <div className={"menu-button-container"}>
            <Button text={"공유하기"} route={""} />
            <div className={"sub-button-container"}>
              <ButtonSecondary text={"롤페 나가기"} route={""} />
              <button className={"report"}>
                <div className={"img-wrapper"}>
                  <Image src={REPORT} alt={"신고"} layout="responsive" />
                </div>
              </button>
            </div>
          </div>
        </RollpeDetailPageContainer>
      </RollpeDetailPageWrapper>
    </>
  );
};

const RollpeDetailPageWrapper = styled.main`
  padding: 5rem 1.25rem;
  width: calc(100% - 2.5rem);
  font-family: var(--font-hakgyoansim);
  color: ${COLORS.ROLLPE_SECONDARY};
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const RollpeDetailPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .title {
    font-size: 2rem;
  }

  & > .preview-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
    width: 100%;

    & > .preview-image-wrapper {
      width: 100%;
    }

    & > p {
      font-size: 1rem;
    }
  }

  & > .writer-wrapper {
    display: flex;
    flex-direction: column;
    gap: 1.25rem;
    margin-top: 2.5rem;
    width: 100%;

    & > h4 {
      font-size: 1.25rem;
    }

    & > .writer-container {
      display: flex;
      flex-direction: column;
      gap: 0.75rem;

      & > li {
        font-size: 1rem;
      }
    }
  }

  & > .participant-button-wrapper {
    display: flex;
    margin-top: 2.5rem;
    width: 100%;

    & > .participant-list-open {
      all: unset;
      font-size: 1.25rem;
      cursor: pointer;
    }
  }

  & > .menu-button-container {
    display: flex;
    flex-direction: column;
    margin-top: 6rem;
    gap: 0.5rem;
    width: 100%;

    & > .sub-button-container {
      display: flex;
      align-items: center;
      gap: 0.5rem;

      & > button {
        flex-shrink: 1;
      }

      & > .report {
        all: unset;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 3.5rem;
        height: 3rem;
        border: 2px solid ${COLORS.ROLLPE_MAIN};
        border-radius: 0.5rem;
        cursor: pointer;

        & > .img-wrapper {
          width: 1.1875rem;
          height: 1.1875rem;
        }
      }
    }
  }
`;

export default RollpeDetailPage;
