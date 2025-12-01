"use client";
import styled from "styled-components";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, useTransition } from "react";
import { getRollpeDetail } from "@/public/utils/apis/rollpe";
import Loading from "@/app/_components/molecules/ui/loading/Loading";
import { Rollpe } from "@/public/utils/types";
import HeartModal from "@/app/_components/molecules/ui/modal/HeartEditModal";
import RollpeWhole from "@/app/_components/rollpe/RollpeWhole";
import Image from "next/image";
import Close from "@/public/images/icons/icon_close.svg";

const RollpeEnterPage: React.FC = () => {
  const [rollpeCode, setRollpeCode] = useState<string>("");
  const [rollpeDetail, setRollpeDetail] = useState<Rollpe | null>();
  const [selectedHeart, setSelectedHeart] = useState<number>(0);
  const [isHeartModalOpen, setIsHeartModalOpen] = useState<boolean>(false);
  const [isPending, startTransition] = useTransition();
  const rollpeId = useParams().rollpeId;
  const router = useRouter();

  const onClickBackHandler = () => {
    router.back();
  };

  useEffect(() => {
    if (rollpeId) {
      let pcode = "";
      typeof rollpeId === "string" &&
        rollpeId.split("-").forEach((item: string) => {
          pcode += item;
        });
      console.log(pcode);
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
              alert("에러 발생");
            }
          });
      });
  }, [rollpeCode]);

  // selectedHeart Log
  // useEffect(() => {
  //   console.log("selectedHeart", selectedHeart);
  // }, [selectedHeart]);

  return isPending || !rollpeDetail ? (
    <Loading />
  ) : (
    <RollpeEnterPageWrapper>
      <RollpeEnterPageHeader>
        <button className={"back"} onClick={onClickBackHandler}>
          <Image src={Close} layout="responsive" alt={"뒤로가기"} />
        </button>
      </RollpeEnterPageHeader>
      <RollpeWhole
        rollpeData={rollpeDetail}
        isEditOpen={isHeartModalOpen}
        setIsEditOpen={setIsHeartModalOpen}
        selectedHeart={selectedHeart}
        setSelectedHeart={setSelectedHeart}
      />
      {isHeartModalOpen && (
        <HeartModal
          paperFk={rollpeDetail.id}
          location={selectedHeart}
          setModalState={setIsHeartModalOpen}
        />
      )}
    </RollpeEnterPageWrapper>
  );
};

const RollpeEnterPageWrapper = styled.main`
  /* width: 100%; */
  height: 100svh;
  overflow: scroll;
`;

const RollpeEnterPageHeader = styled.div`
  position: fixed;
  z-index: 5;
  display: flex;
  align-items: center;
  padding: 0.5rem;

  width: calc(100% - 1rem);

  & > .back {
    flex: 1;
    all: unset;
    cursor: pointer;
    width: 2rem;
    height: 2rem;
  }
`;

export default RollpeEnterPage;
