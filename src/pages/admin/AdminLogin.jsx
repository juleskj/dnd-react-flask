import LoginLayout from "../../components/LoginLayout";
import LoginForm from "../../components/LoginForm";
import InputField from "../../components/InputField";
import wizardSVG from "../../assets/login-wizard.svg";

function AdminLogin() {
  return (
    <LoginLayout variant="dark" image={wizardSVG}>
      <LoginForm buttonText="Login" formTitle="Admin Login">
        <InputField iDhtmlFor="email" inputName="email" labelText="Email" />
        <InputField
          iDhtmlFor="password"
          type="password"
          inputName="password"
          labelText="Password"
          required={true}
          inputRequirements="min 8 characters and max 20"
          maxlength={20}
          minlength={8}
        />
      </LoginForm>
    </LoginLayout>
  );
}

export default AdminLogin;
