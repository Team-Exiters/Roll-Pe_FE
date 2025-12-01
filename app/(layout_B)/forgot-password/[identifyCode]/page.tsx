"use client";
import { useState, useEffect, useTransition } from "react";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { ButtonSubmit } from "@/app/_components/molecules/ui/button/StyledButton";
import { StyledInput } from "@/app/_components/molecules/ui/input/Input";
import { useForm } from "react-hook-form";
import Image from "next/image";
import Logo from "@/public/images/logos/logo.korean.png";
import { useParams, useRouter } from "next/navigation";
import { patchChangePassword } from "@/public/utils/apis/forgotPassword";
import Loading from "@/app/_components/molecules/ui/loading/Loading";

interface ChangePasswordInputs {
  password: string;
  passwordCheck: string;
}

const ForgotChangePasswordPage: React.FC = () => {
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
  } = useForm<ChangePasswordInputs>();
  const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,}$/;
  const [passwordError, setPasswordError] = useState<string>("");
  const [passwordCheckError, setPasswordCheckError] = useState<string>("");
  const identifyCode = useParams().identifyCode;

  const passwordChangeHandler = (password: string) => {
    if (password && !passwordRegex.test(password)) {
      setPasswordError(
        "비밀번호는 8자 이상, 대소문자, 숫자, 특수문자를 포함해야 합니다."
      );
    } else {
      setPasswordError("");
    }
  };

  const submitHandler = () => {
    identifyCode &&
      typeof identifyCode === "string" &&
      startTransition(async () => {
        await patchChangePassword(identifyCode, watch("password"))
          .then((res) => {
            setTimeout(() => {
              alert(res);
              router.push("/sign-in");
            }, 500);
          })
          .catch((err) => {
            setTimeout(() => {
              alert(
                "비밀번호 변경 중 오류가 발생했습니다.\n다시 시도해주세요."
              );
            });
          });
      });
  };

  useEffect(() => {
    passwordChangeHandler(watch("password"));
  }, [watch("password"), passwordChangeHandler]);

  return (
    <ForgotPasswordWrapper>
      {isPending && <Loading />}
      <ForgotPasswordContainer>
        <IntroWrapper>
          <div className={"img-wrapper"}>
            <Image src={Logo} alt={"로고"} layout="responsive" />
          </div>
          <p>비밀번호 찾기</p>
        </IntroWrapper>
        <EmailForm onSubmit={handleSubmit(submitHandler)}>
          <div className={"input-container"}>
            <StyledInput
              type={"password"}
              placeholder={"비밀번호"}
              {...register("password")}
            />
            <p className={"error-message"}>
              {passwordError !== "" && passwordError}
            </p>
            <StyledInput
              type={"password"}
              placeholder={"비밀번호 확인"}
              onChange={(e) => {
                if (watch("password") !== e.target.value)
                  setPasswordCheckError("비밀번호가 일치하지 않습니다");
                else setPasswordCheckError("");
              }}
            />
            <p className={"error-message"}>
              {passwordCheckError !== "" && passwordCheckError}
            </p>
          </div>
          <ButtonSubmit text={"비밀번호 변경"} />
        </EmailForm>
      </ForgotPasswordContainer>
    </ForgotPasswordWrapper>
  );
};

const EmailForm = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;

  & > .input-container {
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    width: 100%;

    & > .error-message {
      width: 100%;
      text-align: left;
      font-family: var(--font-hakgyoansim);
      font-size: 0.875rem;
      color: ${COLORS.ROLLPE_MAIN};
    }
  }
`;

const ForgotPasswordWrapper = styled.main`
  padding: 5rem 1.25rem;
  width: calc(100% - 2.5rem);
  height: 100%;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ForgotPasswordContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.75rem;
  width: 100%;
`;

const IntroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.25rem;

  & > .img-wrapper {
    width: 6.5rem;
    height: 3.25rem;
  }

  & > p {
    color: ${COLORS.ROLLPE_SECONDARY};
    text-align: center;
    font-family: var(--font-pretendard);
    font-size: 1.25rem;
  }
`;

export default ForgotChangePasswordPage;
