"use client";
import { useState } from "react";
import styled from "styled-components";
import { SearchInput } from "../../../input/Input";
import { COLORS } from "@/public/styles/colors";
import { Button } from "../../../button/StyledButton";
import Image from "next/image";
import Check from "@/public/images/icons/icon_check.svg";

interface ReceiverSelectItemProps {
  name: string;
  selectedReceiver: string;
  setSelectedReceiver: React.Dispatch<React.SetStateAction<string>>;
}

const ReceiverSelect: React.FC = () => {
  const [selectedReceiver, setSelectedReceiver] = useState<string>("");
  return (
    <ReceiverSelectContainer>
      {/* <SearchInput /> */}
      <ReceiverSelectList>
        <ReceiverListItem
          name={"김테스트1"}
          selectedReceiver={selectedReceiver}
          setSelectedReceiver={setSelectedReceiver}
        />
        <ReceiverListItem
          name={"김테스트2"}
          selectedReceiver={selectedReceiver}
          setSelectedReceiver={setSelectedReceiver}
        />
        <ReceiverListItem
          name={"김테스트3"}
          selectedReceiver={selectedReceiver}
          setSelectedReceiver={setSelectedReceiver}
        />
        <ReceiverListItem
          name={"김테스트4"}
          selectedReceiver={selectedReceiver}
          setSelectedReceiver={setSelectedReceiver}
        />
        <ReceiverListItem
          name={"김테스트5"}
          selectedReceiver={selectedReceiver}
          setSelectedReceiver={setSelectedReceiver}
        />
        <ReceiverListItem
          name={"김테스트6"}
          selectedReceiver={selectedReceiver}
          setSelectedReceiver={setSelectedReceiver}
        />
      </ReceiverSelectList>
      <Button text={"선택완료"} onClickHandler={() => {}} />
    </ReceiverSelectContainer>
  );
};

const ReceiverListItem: React.FC<ReceiverSelectItemProps> = ({
  name,
  selectedReceiver,
  setSelectedReceiver,
}) => {
  //TODO : 리스트에 들어올 사용자별 정보 처리 필요
  return (
    <ReceiverListItemContainer
      onClick={() => {
        setSelectedReceiver(name);
      }}
    >
      {selectedReceiver === name && (
        <div className={"selected"}>
          <Image src={Check} alt={"선택됨"} layout={"responsive"} />
        </div>
      )}
      {name}
    </ReceiverListItemContainer>
  );
};

const ReceiverSelectContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;
`;

const ReceiverSelectList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.75rem;
  padding: 1rem;

  width: calc(100% - 2rem);
  border: 2px solid ${COLORS.ROLLPE_SECONDARY};
  border-radius: 1rem;
`;

const ReceiverListItemContainer = styled.li`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 1rem;
  width: calc(100% - 2rem);
  border-bottom: 2px solid ${COLORS.ROLLPE_GRAY};

  font-size: 1.25rem;
  font-style: normal;
  font-weight: 400;
  line-height: normal;

  cursor: pointer;

  & > .selected {
    width: 0.8rem;
    height: 0.8rem;

    & > img {
      width: 100%;
      height: 100%;
    }
  }
`;

export default ReceiverSelect;
