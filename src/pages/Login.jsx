import LoginLayout from "../components/LoginLayout";
import LoginForm from "../components/LoginForm";
import InputField from "../components/InputField";
import { Link } from "react-router";

function Login() {
  return (
    <LoginLayout>
      <LoginForm buttonText="Login" formTitle="Login">
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
        <span className="flex gap-1 text-light-100">
          <p className="text-sm!">Don't have an account?</p>
          <Link className="cursor-pointer text-sm!" to="/signup">
            Signup
          </Link>
        </span>
        <Link className="cursor-pointer text-sm! text-light-100" to="/forgot-password">
          Forgot your password?
        </Link>
      </LoginForm>
    </LoginLayout>
  );
}

export default Login;
