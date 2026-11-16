import wizardSVG from "../assets/wizard.svg";
import DnDPlannerText from "../assets/dnd-planner.svg";
const colorSchemes = {
  light: {
    backGround: "bg-light-100 bg-main-400",
    border: "border-light-200",
  },
  dark: {
    backGround: "bg-main-200 text-light-200",
    border: "border-light-300",
  },
} as const;

export default function Footer({ colorScheme = "light" }: { colorScheme?: keyof typeof colorSchemes }) {
  return (
    <footer className={`${colorSchemes[colorScheme].backGround} relative w-full h-80 flex justify-start items-start p-4 rounded-xl overflow-hidden gap-2 md:justify-around`}>
      <img src={DnDPlannerText} alt="Wizard" className="w-40 sm:w-1/2" />
      <div className="bg-light-100 w-64 h-64 rounded-full grid self-start -mt-12">
        <img src={wizardSVG} alt="Wizard" className="ml-14 self-center w-2/3" />
      </div>
    </footer>
  );
}
