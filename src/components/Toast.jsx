import greenBanner from "../assets/green-banner-bg.svg";
import redBanner from "../assets/red-banner-bg.svg";

export default function Toast({
    state = "success",
    toastMessage,
    toastHeader,
    showToast
}) {
    const toastState = {
        success: {
            backgroundImage: greenBanner,
            textColor: "text-light-100",
        },
        error: {
            backgroundImage: redBanner,
            textColor: "text-main-400",
        },
    };

    const currentState = toastState[state] || toastState.success;

    return (
        <div
            style={{
                backgroundImage: `url("${currentState.backgroundImage}")`,
                backgroundSize: "100% 100%",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
            }}
            className={`
                fixed top-6 left-1/2 z-50
                -translate-x-1/2
                w-[calc(100%-2rem)] max-w-md
                ${currentState.textColor}
                p-4
                shadow-lg
                transition-all duration-500 ease-in-out
                ${showToast
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[-150%] opacity-0"
                }
            `}
        >
            <p className="capitalize font-medium">{state}</p>

            <h3 className="mt-1 font-semibold first-letter:capitalize font-heading">
                {toastHeader}
            </h3>

            <p className="mt-1 first-letter:capitalize">
                {toastMessage}
            </p>
        </div>
    );
}