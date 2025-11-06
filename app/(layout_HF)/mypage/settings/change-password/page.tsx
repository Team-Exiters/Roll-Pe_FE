"use server";
import ChangePasswordForm from "./_components/ChangePasswordForm";
import {
  ChangePasswordPageWrapper,
  ChangePasswordContainer,
} from "./_components/changePasswordStyles";

const ChangePasswordPage: React.FC = () => {
  return (
    <ChangePasswordPageWrapper>
      <ChangePasswordContainer>
        <h1>비밀번호 변경</h1>
        <ChangePasswordForm />
      </ChangePasswordContainer>
    </ChangePasswordPageWrapper>
  );
};

export default ChangePasswordPage;
