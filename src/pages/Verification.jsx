import Button from "../components/Button";
import Circles from "../assets/bg-circles.svg";
import WizardSVG from "../assets/fortune-telling-wizard.svg";

function Verification() {
  return (
    <section className="bg-main-400 sm:bg-main-300 h-dvh relative">
      <img
        className="hidden sm:block absolute h-11/12 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-0 pointer-events-none"
        src={Circles}
        alt="decorative circle icons"
      />
      <div className="relative sm:w-1/2 z-10 bg-main-400 sm:h-dvh mx-auto grid items-center">
        <div className={`sm:hidden bg-light-100 w-72 h-72 rounded-full grid self-start mx-auto mt-6 sm:mt-0`}>
          <img src={WizardSVG} alt="Wizard" className="mx-auto md:mx-auto self-center w-2/3 sm:w-9/12" />
        </div>

        <div className="grid gap-8">
          <h1 className="text-light-100! text-center mb-0! mt-2">Verify your email</h1>
          <p className="text-light-100! text-center">Click the button to verify your email.</p>
          <Button buttonText="Verify" />
        </div>
      </div>
    </section>
  );
}

export default Verification;
