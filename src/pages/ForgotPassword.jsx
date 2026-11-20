import LoginLayout from "../components/LoginLayout";
import LoginForm from "../components/LoginForm";
import InputField from "../components/InputField";

function ForgotPassword() {
  return (
    <LoginLayout>
      <LoginForm buttonText="Confirm" formTitle="Forgot password">
        <InputField iDhtmlFor="email" inputName="email" labelText="Email" />
        <p className="text-sm! text-light-100">Put in your email to create a new password.</p>
      </LoginForm>
    </LoginLayout>
  );
}

export default ForgotPassword;
