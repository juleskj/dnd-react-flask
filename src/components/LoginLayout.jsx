import wizardSVG from "../assets/login-wizard.svg";
import signupWizard from "../assets/signup-wizard.svg";

export default function LoginLayout({ children, variant = "default" }) {
  return (
    <main className="grid sm:grid-cols-2 sm:gap-2 items-center">
      <section className={`order-last sm:order-first lg:mx-16 p-8 lg:p-16 h-dvh grid sm:items-center ${variant === "dark" ? "bg-main-400" : "bg-main-300"}`}>{children}</section>
      <section className="bg-main-300 sm:bg-light-100">
        <div className="bg-light-100 w-48 sm:w-full h-48 sm:h-dvh rounded-full grid self-start mx-auto mt-6 sm:mt-0">
          <img src={variant === "dark" ? signupWizard : wizardSVG} alt="Wizard" className="ml-8 md:ml-0 self-center w-2/3 sm:w-9/12" />
        </div>
      </section>
    </main>
  );
}
