import { useState } from "react";
import Toast from "./Toast";
import Button from "./Button";

export default function LoginForm({ children, formTitle, buttonText, formMethod = "POST", successHeader, successMessage, api }) {
  const [showToast, setShowToast] = useState(false);
  const [toast, setToast] = useState({
    state: "success",
    toastHeader: successHeader,
    toastMessage: successMessage,
  });

  const handleShow = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 5000);
  };

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);

    const formValues = {};
    formData.forEach((value, key) => {
      formValues[key] = value;
    });

    try {
      // const response = await fetch(`/api/${api}`, {
      // method: formMethod,
      // headers: {
      //   "Content-Type": "application/json",
      // },
      // body: JSON.stringify(formValues),
      // });

      // if (!response.ok) {
      //   throw new Error("Failed to send email");
      // }

      // const data = await response.json();

      setToast({
        state: "success",
        toastHeader: "Welcome",
        toastMessage: "You have successfully logged in!",
      });

      form.reset();
    } catch (error) {
      setToast({
        state: "error",
        toastHeader: "Something went wrong",
        toastMessage: "Failed to login. Please try again.",
      });
    }

    handleShow();
  }

  return (
    <section>
      <Toast state={toast.state} toastMessage={toast.toastMessage && toast.toastMessage} toastHeader={toast.toastHeader} showToast={showToast}></Toast>
      <h1 className="text-6xl text-left font-heading text-light-100!">{formTitle}</h1>
      <form action="" className="grid gap-y-4 text-left" onSubmit={handleSubmit} method={formMethod}>
        {children}
        <Button buttonText="Login" buttonType />
      </form>
    </section>
  );
}
