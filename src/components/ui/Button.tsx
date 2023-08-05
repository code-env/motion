import clsx from "clsx";
import { HTMLAttributes, FC } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  gradient?: boolean;
  roundedFull?: boolean;
  //   secondary?: boolean;
}

const Button: FC<ButtonProps> = ({
  label,
  roundedFull,
  gradient,
  //   secondary,
  className,

  ...others
}) => {
  return (
    <button
      {...others}
      className={clsx(
        "py-1 px-4 rounded text-gray-200",
        className,
        roundedFull && "rounded-full",
        gradient &&
          "bg-gradient-to-tl from-slate-800 via-violet-500 to-zinc-400 "
      )}
    >
      {label}
    </button>
  );
};

export default Button;
