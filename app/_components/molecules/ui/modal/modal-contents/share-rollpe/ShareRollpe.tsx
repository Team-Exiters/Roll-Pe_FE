"use client";
import { COLORS } from "@/public/styles/colors";
import styled from "styled-components";
import ShareLogo from "@/public/images/icons/icon_share.svg";
import KakaoLogo from "@/public/images/icons/icon_kakao.svg";
import Close from "@/public/images/icons/icon_close.svg";

import Image from "next/image";

interface ShareRollpeProps {
  close: React.Dispatch<React.SetStateAction<boolean>>;
  pcode: string | string[];
}
const ShareRollpe: React.FC<ShareRollpeProps> = ({ close, pcode }) => {
  return (
    <ShareRollpeWrapper>
      <div className={"title-wrapper"}>
        <div className={"dummy"}></div>
        <h3 className={"modal-title"}>공유하기</h3>
        <button className="close" onClick={() => close(false)}>
          <Image src={Close} alt={"닫기"} layout="responsive" />
        </button>
      </div>
      <p className={"rollpe-code"}>{pcode}</p>
      <div className={"share-button-wrapper"}>
        <button className={"share"}>
          <div className={"image-wrapper"}>
            <Image src={ShareLogo} alt={"공유 로고"} layout="responsive" />
          </div>
        </button>
        <button className={"share kakao"}>
          <div className={"image-wrapper"}>
            <Image src={KakaoLogo} alt={"카카오톡 로고"} layout="responsive" />
          </div>
        </button>
      </div>
    </ShareRollpeWrapper>
  );
};

const ShareRollpeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;

  .title-wrapper {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 2.5rem;
    width: calc(100% - 2rem);

    & > .dummy {
      flex: 0.8;
    }

    & > .modal-title {
      flex: 1;
      font-size: 1rem;
    }

    & > .close {
      flex: 1;
      all: unset;
      cursor: pointer;
      width: 1.25rem;
      height: 1.25rem;
    }
  }

  & > .rollpe-code {
    font-size: 0.75rem;
  }

  & > .share-button-wrapper {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-top: 0.75rem;

    & > .share {
      all: unset;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 2.5rem;
      height: 2.5rem;
      background-color: ${COLORS.ROLLPE_GRAY};
      border-radius: 50%;

      & > .image-wrapper {
        width: 1rem;
        height: 1rem;
      }
    }

    & > .kakao {
      & > .image-wrapper {
        width: 1rem;
        height: 0.875rem;
      }
      background-color: #fee500;
    }
  }
`;

export default ShareRollpe;
