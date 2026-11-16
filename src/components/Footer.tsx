import { wizardSVG } from "../assets/wizard.svg";
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
    <footer className={`${colorSchemes[colorScheme].backGround} p-4 md:p-16 relative w-full h-80`}>
      <div className="bg-light-100 w-1/2 rounded-b-4xl absolute">
        <img src={wizardSVG} alt="" />
      </div>
    </footer>
  );
}
