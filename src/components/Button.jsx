export default function Button({
  buttonText,
  buttonType = "submit",
  center = true,
  ...props
}) {
  return (
    <button
      type={buttonType}
      className={`w-52 bg-main-100 text-main-400 h-10 rounded-3xl ${center && "m-auto"}  cursor-pointer`}
      {...props}
    >
      {buttonText}
    </button>
  );
}
