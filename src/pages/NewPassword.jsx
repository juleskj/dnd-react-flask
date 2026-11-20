import LoginLayout from "../components/LoginLayout";
import LoginForm from "../components/LoginForm";
import InputField from "../components/InputField";

function NewPassword() {
  return (
    <LoginLayout>
      <LoginForm buttonText="Confirm new password" formTitle="Insert new password">
        <InputField
          iDhtmlFor="password"
          type="password"
          inputName="password"
          labelText="Password"
          inputRequirements="min 8 characters and max 20"
          required={true}
          maxlength={20}
          minlength={8}
        />
        <InputField
          iDhtmlFor="repeated-password"
          type="password"
          inputName="repeated-password"
          labelText="Confirm password"
          required={true}
          inputRequirements="min 8 characters and max 20"
          maxlength={20}
          minlength={8}
        />
      </LoginForm>
    </LoginLayout>
  );
}

export default NewPassword;
