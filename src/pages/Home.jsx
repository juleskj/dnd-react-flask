import { useState, useEffect } from "react";

import AddButton from "../components/AddButton";
import EditButton from "../components/EditButton";
import LoginForm from "../components/LoginForm";
import InputField from "../components/InputField";
import SessionCard from "../components/SessionCard";
import MainLayout from "../layouts/MainLayout";

function Home() {
  const [count, setCount] = useState(0);
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    fetch("/api/user")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.user);
      });
  }, []);

  return (
    <MainLayout css="my-4 mx-4  lg:mx-32 lg:my-8">
      <section>
        <section id="center">
          <LoginForm buttonText="Login" formTitle="Login" me="cursor-pointer">
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
            <div className="text-light-100">
              <span className="flex gap-1">
                <p className="text-sm!">Don't have an account?</p>{" "}
                <a className="cursor-pointer text-sm!">Login</a>
              </span>
              <a className="cursor-pointer text-sm!">Forgot your password?</a>
            </div>
          </LoginForm>

          <button
            type="button"
            className="counter"
            onClick={() => setCount((count) => count + 1)}
          >
            Count is {count}
          </button>
        </section>
        <div>
          <h1>Get started</h1>
          <h2 class="text-3xl font-bold underline">Hello world!</h2>
          <h2>the current time is {currentTime}</h2>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
          <LoginForm buttonText="Login" formTitle="Login" me="cursor-pointer">
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
            <div className="text-light-100">
              <span className="flex gap-1">
                <p className="text-sm!">Don't have an account?</p>{" "}
                <a className="cursor-pointer text-sm!">Login</a>
              </span>
              <a className="cursor-pointer text-sm!">Forgot your password?</a>
            </div>
          </LoginForm>
          <SessionCard sessionNumber="01" date="date" sessionLink="" />
        </div>
      </section>
    </MainLayout>
  );
}

export default Home;
