"use client";
import styled from "styled-components";
import { StyledInput } from "@/app/_components/ui/input/Input";
import { Button } from "@/app/_components/ui/button/StyledButton";
import Image from "next/image";
import Logo from "@/public/images/logos/logo.korean.png";
import { COLORS } from "@/public/styles/colors";
import { useState, useTransition } from "react";
import { postForgotPassword } from "@/public/utils/apis/forgotPassword";

const ForgotPasswordPage: React.FC = () => {
  const [, startTransition] = useTransition();
  const [email, setEmail] = useState<string>("");
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const onClickHandler = () => {
    if (!emailRegex.test(email)) {
      alert("이메일 형식을 확인해주세요.");
    } else {
      startTransition(() => {
        postForgotPassword(email)
          .then((res) => {
            setTimeout(() => {
              alert(res);
            }, 500);
          })
          .catch(() => {
            setTimeout(() => {
              alert("오류가 발생했습니다. 다시 시도해주세요.");
            }, 500);
          });
      });
    }
  };

  return (
    <ForgotPasswordWrapper>
      <ForgotPasswordContainer>
        <IntroWrapper>
          <div className={"img-wrapper"}>
            <Image src={Logo} alt={"로고"} layout="responsive" />
          </div>
          <p>비밀번호 찾기</p>
        </IntroWrapper>
        <EmailForm>
          <StyledInput
            type={"email"}
            placeholder={"이메일 입력"}
            onChange={(e) => onChangeHandler(e)}
          />
          <Button text={"이메일 인증"} onClickHandler={onClickHandler} />
        </EmailForm>
      </ForgotPasswordContainer>
    </ForgotPasswordWrapper>
  );
};

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

const EmailForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.5rem;
  width: 100%;
`;

export default ForgotPasswordPage;
