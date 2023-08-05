import { FC, HTMLAttributes } from "react";
import clsx from "clsx";

interface GradientTextProps extends HTMLAttributes<HTMLHeadingElement> {
  label: string;
}

const GradientText: FC<GradientTextProps> = ({
  label,
  className,
  ...others
}) => {
  return (
    <h1
      {...others}
      className={clsx(
        "bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 bg-clip-text text-transparent",
        className
      )}
    >
      {label}
    </h1>
  );
};

export default GradientText;
