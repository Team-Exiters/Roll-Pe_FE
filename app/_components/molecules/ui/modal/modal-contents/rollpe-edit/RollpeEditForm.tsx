"use client";
import styled from "styled-components";
import {
  ButtonSecondary,
  ButtonSubmit,
} from "@/app/_components/molecules/ui/button/StyledButton";
import { useForm } from "react-hook-form";
import { COLORS } from "@/public/styles/colors";
import { useState } from "react";
import { StyledInput } from "../../../input/Input";

const RollpeEditForm: React.FC = () => {
  const [isPublic, setIsPublic] = useState<boolean>(true);

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onPublicClickHandler = () => {
    setIsPublic(!isPublic);
  };

  return (
    <FormWrapper>
      <Form>
        <div className={"sec"}>
          <h3>공개 설정</h3>
          <Tab isPublic={isPublic}>
            <button
              className={"tab-item public"}
              onClick={onPublicClickHandler}
            >
              <p>공개</p>
            </button>
            <button
              className={"tab-item private"}
              onClick={onPublicClickHandler}
            >
              <p>비공개</p>
            </button>
          </Tab>
          {isPublic || (
            <StyledInput type={"password"} placeholder={"비밀번호"} />
          )}
        </div>
        <div className={"sec"}>
          <h3>종료 시간</h3>
          <StyledInput
            type={"datetime-local"}
            placeholder={"종료일을 선택해주세요"}
          />
        </div>

        <div className={"button-wrapper"}>
          <ButtonSecondary text={"롤페 종료하기"} onClickHandler={() => {}} />
          <ButtonSubmit text={"변경사항 저장"} />
        </div>
      </Form>
    </FormWrapper>
  );
};

const FormWrapper = styled.div`
  width: 100%;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.5rem;
  width: 100%;

  & > .sec {
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 1.25rem;
  }

  h3 {
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }

  & > .button-wrapper {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 0.5rem;
    width: 100%;
  }
`;

const Tab = styled.div<{ isPublic: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;

  width: calc(100% - 1rem);
  color: ${COLORS.ROLLPE_SECONDARY};
  background-color: #f1f1f1;
  border-radius: 1rem;

  & > .tab-item {
    all: unset;
    display: flex;
    justify-content: center;
    align-items: center;

    width: 45%;
    padding: 0.75rem 0.5rem;
    transition: color 0.2s ease;
    border-radius: 0.5rem;
    cursor: pointer;
  }

  .public {
    background-color: ${(props) =>
      props.isPublic ? COLORS.ROLLPE_PRIMARY : "transparent"};
  }

  .private {
    background-color: ${(props) =>
      !props.isPublic ? COLORS.ROLLPE_PRIMARY : "transparent"};
  }
`;

export default RollpeEditForm;
