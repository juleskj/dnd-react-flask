import wizardSVG from "../assets/login-wizard.svg";
import signupWizard from "../assets/signup-wizard.svg";

export default function LoginLayout({ children, variant = "default" }) {
  return (
    <main className={`grid sm:grid-cols-2 sm:gap-2 items-center ${variant === "dark" ? "sm:bg-main-300 content-center" : "sm:bg-light-100"} `}>
      <section className={`order-last sm:order-first lg:mx-16 p-8 lg:p-16 h-dvh grid sm:items-center ${variant === "dark" ? "bg-main-400" : "bg-main-300"}`}>{children}</section>
      <section className={`bg-main-300 w-full ${variant === "dark" ? "bg-main-400 sm:bg-main-300 grid content-center" : "sm:bg-light-100"}`}>
        <div
          className={`bg-light-100 w-48 h-48 rounded-full grid self-start mx-auto mt-6 sm:mt-0 ${variant === "dark" ? "md:w-80 lg:w-163 md:h-80 lg:h-163" : "sm:w-full sm:h-dvh"}`}
        >
          <img src={variant === "dark" ? signupWizard : wizardSVG} alt="Wizard" className="mx-auto md:mx-auto self-center w-2/3 sm:w-9/12" />
        </div>
      </section>
    </main>
  );
}
