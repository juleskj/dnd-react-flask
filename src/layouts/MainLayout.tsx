import type { ReactNode } from "react";

function MainLayout({
  children,
  headerTitle,
  color = "purple",
  css,
}: {
  children: ReactNode;
  headerTitle: string;
  color?: "purple" | "teal";
  css?: string;
}) {
  const colors = {
    purple: "bg-accent-300",
    teal: "bg-main-300",
  };

  return (
    <div className={` my-8`}>
      <h2
        className={` ${colors[color]} w-full text-center text-light-100 p-4 first-letter:capitalize`}
      >
        {headerTitle}
      </h2>
      <section className={`${css} my-4 mx-4 lg:mx-32 lg:my-8`}>
        {children}
      </section>
    </div>
  );
}

export default MainLayout;
