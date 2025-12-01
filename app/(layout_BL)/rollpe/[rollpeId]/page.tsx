"use client";
import { useTransition } from "react";
import { COLORS } from "@/public/styles/colors";
import Image from "next/image";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import styled from "styled-components";
import DUMMY from "@/public/images/image/image_templete.png";
import {
  Button,
  ButtonSecondary,
} from "@/app/_components/molecules/ui/button/StyledButton";
import { Modal, BottomModal } from "@/app/_components/molecules/ui/modal/Modal";
import ParticipantsList from "@/app/_components/molecules/ui/modal/modal-contents/participants-list/ParticipantsList";
import RollpeEditForm from "@/app/_components/molecules/ui/modal/modal-contents/rollpe-edit/RollpeEditForm";
import ShareRollpe from "@/app/_components/molecules/ui/modal/modal-contents/share-rollpe/ShareRollpe";
import Marquee from "react-fast-marquee";
import { User, Rollpe } from "@/public/utils/types";
import { getRollpeDetail } from "@/public/utils/apis/rollpe";
import Loading from "@/app/_components/molecules/ui/loading/Loading";
import { useRouter } from "next/navigation";
import RollpePreview from "@/app/_components/rollpe/RollpePreview";

const RollpeDetailPage: React.FC = () => {
  const [isPending, startTransition] = useTransition();
  const [isShareModalOpen, setIsShareModalOpen] = useState<boolean>(false);
  const [isParticipantsModalOpen, setIsParticipantsModalOpen] =
    useState<boolean>(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState<boolean>(false);
  const [rollpeCode, setRollpeCode] = useState<string>("");
  const [rollpeDetail, setRollpeDetail] = useState<Rollpe | null>(null);
  const rollpeId = useParams().rollpeId;
  const router = useRouter();

  const onClickParticipantListOpen = () => {
    setIsParticipantsModalOpen(true);
  };

  const onClickEditOpen = () => {
    setIsEditModalOpen(true);
  };

  const onClickShareOpen = () => {
    setIsShareModalOpen(true);
  };

  useEffect(() => {
    if (rollpeId) {
      let pcode = "";
      typeof rollpeId === "string" &&
        rollpeId.split("-").forEach((item: string) => {
          pcode += item;
        });
      setRollpeCode(pcode);
    }
  }, [rollpeId]);

  useEffect(() => {
    rollpeCode &&
      startTransition(async () => {
        getRollpeDetail(rollpeCode)
          .then((res) => {
            console.log(res.data);
            setRollpeDetail(res.data);
          })
          .catch((err) => {
            if (err) {
              alert("해당 롤페에 대한 접근 권한이 없습니다.");
              setTimeout(() => {
                router.back();
              });
            }
          });
      });
  }, [rollpeCode, router]);

  return isPending || !rollpeDetail ? (
    <Loading />
  ) : (
    <>
      <RollpeDetailPageWrapper>
        <RollpeDetailPageContainer>
          <Marquee
            style={{ width: "100%", marginBottom: "3.25rem" }}
            pauseOnHover={true}
          >
            <h1 className={"title"}>{rollpeDetail?.title}</h1>
          </Marquee>

          <div className={"preview-wrapper"}>
            <div className={"rollpe-preview-wrapper"}>
              <RollpePreview {...rollpeDetail} />
              {/* <WhiteRollpe isExpend={false} data={rollpeDetail} /> */}
            </div>
            <p>롤페를 눌러 마음을 전달하세요!</p>
          </div>

          <div className={"writer-wrapper"}>
            <h4>작성자({rollpeDetail.invitingUser.length}/13)</h4>
            <ul className={"writer-container"}>
              {rollpeDetail.invitingUser.length !== 0 ? (
                // TODO : authors로 변경되어야 함.
                // TODO : invitingUser는 참여자 목록.
                rollpeDetail.invitingUser.map((user: User, _: number) => (
                  <li key={_}>
                    {user.name} ({user.identifyCode})
                  </li>
                ))
              ) : (
                <li>아직 참여한 유저가 없습니다.</li>
              )}
            </ul>
          </div>

          <div className={"participant-button-wrapper"}>
            <button
              className={"participant-list-open"}
              onClick={onClickParticipantListOpen}
            >
              참여자 목록 &gt;
            </button>
          </div>

          <div className={"menu-button-container"}>
            <Button
              text={"공유하기"}
              onClickHandler={() => {
                onClickShareOpen();
              }}
            />
            <ButtonSecondary
              text={"수정하기"}
              onClickHandler={onClickEditOpen}
            />
          </div>
        </RollpeDetailPageContainer>
      </RollpeDetailPageWrapper>
      {isParticipantsModalOpen && (
        <Modal title={"참여자 목록"} setModalState={setIsParticipantsModalOpen}>
          <ParticipantsList invitingUser={rollpeDetail?.invitingUser} />
        </Modal>
      )}
      {isEditModalOpen && (
        <Modal title={"수정하기"} setModalState={setIsEditModalOpen}>
          <RollpeEditForm />
        </Modal>
      )}
      {isShareModalOpen && (
        <BottomModal title={"공유하기"} setModalState={setIsShareModalOpen}>
          <ShareRollpe close={setIsShareModalOpen} pcode={rollpeId} />
        </BottomModal>
      )}
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

    & > .rollpe-preview-wrapper {
      width: 100%;
      aspect-ratio: 297 / 210;
      box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
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
    justify-content: space-between;
    margin-top: 2.5rem;
    width: 100%;

    & > button {
      width: 48%;
    }
  }
`;

export default RollpeDetailPage;
