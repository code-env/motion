import clsx from "clsx";
import { HTMLAttributes, FC } from "react";

interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
  label: string;
  roundedFull?: boolean;
  //   secondary?: boolean;
}

const Button: FC<ButtonProps> = ({
  label,
  roundedFull,
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
        roundedFull && "rounded-full"
      )}
    >
      {label}
    </button>
  );
};

export default Button;
