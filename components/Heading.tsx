import clsx from "clsx";

type HeadingProps = {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  size?: "xl" | "lg" | "md" | "sm";
  children: React.ReactNode;
  className?: string;
};

export default function Heading({
  as: Comp = "h2",
  className,
  children,
  size = "md",
}: HeadingProps) {
  return (
    <Comp
      className={clsx(
        "font-bold leading-tight tracking-tight  text-slate-400",
        size === "xl" && "text-7xl md:text-9xl",
        size === "lg" && "text-6xl md:text-5xl",
        size === "md" && "text-5xl md:text-6xl",
        size === "sm" && "text-3xl md:text-4xl",
        className,
      )}
    >
      {children}
    </Comp>
  );
}