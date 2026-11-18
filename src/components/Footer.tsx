const colorSchemes = {
  light: {
    backGround: "bg-light-100 bg-dark-100",
    border: "border-light-200",
  },
  dark: {
    backGround: "bg-main-200 text-light-200",
    border: "border-light-300",
  },
} as const;

export default function Footer({
  colorScheme = "light",
}: {
  colorScheme?: keyof typeof colorSchemes;
}) {
  return (
    <footer
      className={`${colorSchemes[colorScheme].backGround} p-4 md:p-16`}
    ></footer>
  );
}
