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
    <footer className={`${colorSchemes[colorScheme].backGround} relative w-full items-start p-4 rounded-xl overflow-hidden`}>
      <div className="flex justify-start items-start md:justify-around gap-2">
        <img src={DnDPlannerText} alt="Wizard" className="w-40 sm:w-md" />
        <div className="grid gap-4">
          <div className="bg-light-100 w-64 h-64 rounded-full grid self-start -mt-12 gap-14">
            <img src={wizardSVG} alt="Wizard" className="mx-auto self-center w-2/3" />
          </div>
          <button className="w-full bg-main-100 text-main-400 h-10 rounded-3xl m-auto cursor-pointer hidden sm:block">Logout</button>
        </div>
      </div>
      <button className="min-w-80 max-w-96 bg-main-100 text-main-400 h-10 rounded-3xl m-auto cursor-pointer sm:hidden mt-6">Logout</button>
    </footer>
  );
}
