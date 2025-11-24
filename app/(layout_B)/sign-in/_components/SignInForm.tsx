"use client";
import styled from "styled-components";
import { COLORS } from "@/public/styles/colors";
import { useForm, SubmitHandler } from "react-hook-form";
import { signIn } from "@/public/utils/apis/signIn";
import { ButtonSubmit } from "@/app/_components/ui/button/StyledButton";
import { useTransition } from "react";
import { useRouter } from "next/navigation";
import { StyledInput } from "@/app/_components/ui/input/Input";
import { useDispatch } from "react-redux";
import { setUser } from "@/public/redux/slices/userSlice";
import Loading from "@/app/_components/ui/loading/Loading";

interface SignInInputs {
  email: string;
  password: string;
}

const SignInForm: React.FC = () => {
  const dispatch = useDispatch();
  const router = useRouter();
  const [isPending, startTransition] = useTransition();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInInputs>();

  const onSubmit: SubmitHandler<SignInInputs> = async (data) => {
    startTransition(async () => {
      await signIn(data.email, data.password)
        .then((res) => {
          dispatch(
            setUser({
              id: res.user.id,
              name: res.user.name,
              email: res.user.email,
              identifyCode: res.user.identifyCode,
              provider: res.user.provider,
            })
          );
          setTimeout(() => {
            router.push("/main");
          }, 500);
        })
        .catch((err) => {
          if (err instanceof Error) {
            console.log(err.message);
            alert(err.message);
          }
        });
    });
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
            autoComplete="username"
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
