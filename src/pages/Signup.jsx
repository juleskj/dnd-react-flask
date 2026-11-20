import LoginLayout from "../components/LoginLayout";
import LoginForm from "../components/LoginForm";
import InputField from "../components/InputField";
import { Link } from "react-router";

function Signup() {
  return (
    <LoginLayout variant="dark">
      <LoginForm buttonText="Signup" formTitle="Signup">
        <InputField iDhtmlFor="email" inputName="email" labelText="Email" required={true} />
        <InputField
          iDhtmlFor="username"
          type="username"
          inputName="text"
          labelText="Username"
          inputRequirements="min 6 characters and max 20"
          required={true}
          maxlength={20}
          minlength={6}
        />
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
        <span className="flex gap-1 text-light-100">
          <p className="text-sm!">Already have an account?</p>
          <Link className="cursor-pointer text-sm!" to="/login">
            Login
          </Link>
        </span>
      </LoginForm>
    </LoginLayout>
  );
}

export default Signup;
