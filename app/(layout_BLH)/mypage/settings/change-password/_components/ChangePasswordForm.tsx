"use client";
import styled from "styled-components";
import { ButtonSubmit } from "@/app/_components/molecules/ui/button/StyledButton";
import { COLORS } from "@/public/styles/colors";
import { StyledInput } from "@/app/_components/molecules/ui/input/Input";
import { useForm } from "react-hook-form";
import { useState } from "react";

interface ChangePasswordInputs {
  currentPassword: string;
  newPassword: string;
  newPasswordCheck: string;
}

const ChangePasswordForm: React.FC = () => {
  const [passwordError, setPasswordError] = useState<string>("");
  const [samePasswordError, setSamePasswordError] = useState<string>("");

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<ChangePasswordInputs>();

  const passwordCheck = (newPassword: string) => {
    if (newPassword !== watch("newPassword")) {
      setPasswordError("비밀번호가 일치하지 않습니다.");
    } else {
      setPasswordError("");
    }
  };

  const samePasswordCheck = (newPassword: string) => {
    if (watch("currentPassword") === newPassword) {
      setSamePasswordError("현재 비밀번호와 다른 비밀번호를 입력해주세요.");
    } else {
      setSamePasswordError("");
    }
  };

  const onSubmit = (data: ChangePasswordInputs) => {};

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <StyledInput
        placeholder={"현재 비밀번호"}
        type={"password"}
        {...register("currentPassword")}
        required
      />
      <StyledInput
        placeholder={"새 비밀번호"}
        type={"password"}
        {...register("newPassword")}
        onChange={(e) => {
          samePasswordCheck(e.target.value);
        }}
        required
      />
      {samePasswordError && (
        <span className={"error-message"}>{samePasswordError}</span>
      )}
      <StyledInput
        placeholder={"새 비밀번호 확인"}
        type={"password"}
        {...register("newPasswordCheck")}
        onChange={(e) => {
          passwordCheck(e.target.value);
        }}
        required
      />
      {passwordError && (
        <span className={"error-message"}>{passwordError}</span>
      )}
      <ButtonSubmit text={"변경하기"} isDisabled={false} />
    </Form>
  );
};

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
  margin-top: 3.25rem;
  width: 100%;

  & > input[type="submit"] {
    margin-top: 2rem;
  }

  & > .error-message {
    width: 100%;
    text-align: left;
    color: ${COLORS.ROLLPE_MAIN};
    font-size: 0.875rem;
  }
`;

export default ChangePasswordForm;
