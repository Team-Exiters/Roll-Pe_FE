import SignUpForm from "./_components/SignUpForm";
import { SignUpWrapper, SignUpContainer } from "./_components/SignUpStyles";
import SignUpLogo from "./_components/SignUpLogo";

const SignUpPage: React.FC = () => {
  return (
    <SignUpWrapper>
      <SignUpContainer>
        <div className={"title-container"}>
          <div className={"logo-wrapper"}>
            <SignUpLogo />
          </div>
          <h1>회원가입</h1>
        </div>
        <SignUpForm />
      </SignUpContainer>
    </SignUpWrapper>
  );
};

export default SignUpPage;
