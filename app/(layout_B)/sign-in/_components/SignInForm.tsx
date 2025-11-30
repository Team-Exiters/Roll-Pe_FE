"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import { useSignIn } from "@/public/lib/hooks/fetching/useSignIn";
import { ButtonSubmit } from "@/app/_components/ui/button/StyledButton";
import { StyledInput } from "@/app/_components/ui/input/Input";
import Loading from "@/app/_components/ui/loading/Loading";
import { SignInRequest, SignInResponse, ApiError } from "@/public/utils/types";

const SignInForm: React.FC = () => {
  const { mutate, isPending } = useSignIn();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInRequest>();

  const onSubmit = (data: SignInRequest) => {
    mutate(data);
  };

  return (
    <>
      {isPending && <Loading />}
      <FormWrapper>
        <Form onSubmit={handleSubmit(onSubmit)}>
          <StyledInput
            type={"email"}
            {...register("email")}
            placeholder={"이메일"}
            autoComplete="email"
          />
          <StyledInput
            type={"password"}
            {...register("password")}
            placeholder={"비밀번호"}
            autoComplete="current-password"
          />
          <ButtonSubmit text={"로그인"} />
        </Form>
      </FormWrapper>
    </>
  );
};

const FormWrapper = styled.div`
  padding: 0 1.25rem;
  width: calc(100% - 2.5rem);
  margin-top: 3.75rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;

  gap: 0.75rem;

  width: 100%;
`;

export default SignInForm;
