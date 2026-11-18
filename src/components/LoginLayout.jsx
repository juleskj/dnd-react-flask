import wizardSVG from "../assets/login-wizard.svg";
import signupWizard from "../assets/signup-wizard.svg";

export default function LoginLayout({ children, variant = "default" }) {
  return (
    <main className="grid grid-cols-2 gap-2 items-center">
      <section className={`mx-16 p-16 h-dvh grid items-center ${variant === "dark" ? "bg-main-400" : "bg-main-300"}`}>{children}</section>
      <section>
        <img src={variant === "dark" ? signupWizard : wizardSVG} alt="wizard image" className="w-5/6" />
      </section>
    </main>
  );
}
