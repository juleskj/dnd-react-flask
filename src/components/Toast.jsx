export default function Toast({ state = "succes", toastMessage, toastHeader, showToast }: { state: string; toastMessage: string; toastHeader: string; showToast: any }) {
  const toastState: any = {
    success: "text-green-900 bg-green-200",
    error: "text-accent-200 bg-red-300",
  };

  return (
    <div
      className={`
          fixed top-6 left-1/2 z-50
          -translate-x-1/2
          w-[calc(100%-2rem)] max-w-md
          
          ${toastState[state]}
          p-4
          shadow-lg
          transition-all duration-500 ease-in-out

           ${showToast ? "translate-y-0 opacity-100" : "translate-y-[-150%] opacity-0"}
        `}
    >
      <p className="capitalize font-medium ">{state}</p>

      <h3 className="mt-1 font-semibold first-letter:capitalize">{toastHeader}</h3>
      <p className="mt-1  first-letter:capitalize">{toastMessage}</p>
    </div>
  );
}