"use client";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useState } from "react";
import styled from "styled-components";
import DUMMY from "@/public/images/image/image_templete.png";
import {
  Button,
  ButtonSecondary,
} from "@/app/_components/molecules/ui/button/StyledButton";
import Marquee from "react-fast-marquee";

const RollpeDetailPage: React.FC = () => {
  const [isParticipantsModalOpen, setIsParticipantsModalOpen] =
    useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(true);
  const rollpeId = useParams().rollpeId;

  const onClickParticipantListOpen = () => {
    setIsParticipantsModalOpen(true);
  };

  const onClickEditOpen = () => {
    setIsEditModalOpen(true);
  };

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
            <Button text={"이미지로 저장하기"} route={""} />
            <ButtonSecondary text={"마음이 담긴 롤페 전달하기"} route={""} />
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
    align-items: center;
    margin-top: 6rem;
    gap: 0.5rem;
    width: 100%;
  }
`;

export default RollpeDetailPage;
