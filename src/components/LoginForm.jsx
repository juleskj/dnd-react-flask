import { useState } from "react";
export default function LoginForm({ children, formTitle, buttonText, formMethod = "POST", successHeader, successMessage, api }) {
    const [showToast, setShowToast] = useState(false);
    const [toast, setToast] = useState({
    state: "success",
    toastMessage: successHeader,
    toastHeader: successMessage})

    async function handleSubmit(e) {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        
        const formValues = {};
        formData.forEach((value, key) => {
            formValues[key] = value ;
        });

        try {
            const response = await fetch(`/api/${api}`, {
            method: formMethod,
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formValues),
            });

            if (!response.ok) {
              throw new Error("Failed to send email");
            }

            const data = await response.json();

            setToast({
                state: "success",
                toastHeader: successHeader,
                toastMessage: data.message,
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
    };

    function handleShow () {
        setShowToast(true);

        setTimeout(() => {
            setShowToast(false);
        }, 5000);
    };
    return <section>
        <h1 className="text-6xl text-primary-100 text-left">{formTitle}</h1>
        <form action="" className="grid gap-y-4 text-left" onSubmit={handleSubmit} method={formMethod}>
            {children}
            <button type="submit" className="w-52 bg-secondary-100 text-secondary-300 h-10 rounded-3xl m-auto">{buttonText}</button>
        </form>
    </section>
}