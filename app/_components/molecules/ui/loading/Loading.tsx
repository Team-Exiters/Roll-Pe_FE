"use client";
import styled from "styled-components";
import Image from "next/image";
import LoadingAnimation from "@/public/images/icons/icon_loading.gif";

const Loading: React.FC = () => {
  return (
    <LoadingWrapper>
      <div className={"loading-image"}>
        <Image src={LoadingAnimation} alt={"로딩 중"} layout="responsive" />
      </div>
    </LoadingWrapper>
  );
};

const LoadingWrapper = styled.div`
  position: absolute;
  z-index: 10;
  top: 0;

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);

  & > .loading-image {
    width: 15%;
    height: auto;

    & > img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default Loading;
