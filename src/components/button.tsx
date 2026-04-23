import classNames from "classnames";
import { AnchorHTMLAttributes, FC, HTMLProps, ReactNode } from "react";

interface ButtonProps extends HTMLProps<HTMLAnchorElement> {
  color: "primary" | "black";
  variant: "solid" | "outlined";
  dimension?: "md" | "lg" | "sm";
  icon?: ReactNode;
}

const Button: FC<ButtonProps> = ({
  color,
  variant,
  dimension,
  children,
  icon,
  ...anchorProps
}) => {
  dimension = dimension ?? "md";

  const buttonClassName = classNames(
    "inline-flex items-center gap-2 rounded-lg transition-all transform hover:scale-105 cursor-pointer",
    {
      "px-5 py-3 text-xl": dimension === "lg",
      "px-4 py-2 text-lg": dimension === "md",
      "px-2 py-1 text-md": dimension === "sm",
      border: variant === "outlined",
      "text-white bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-400":
        variant === "solid" && color === "primary",
      "border-indigo-600 dark:border-indigo-500 text-indigo-600 dark:text-indigo-500 hover:border-indigo-700 hover:border-indigo-400 hover:text-indigo-600 dark:hover:text-indigo-400":
        variant === "outlined" && color === "primary",
      "bg-black text-white": variant === "solid" && color === "black",
      "border-black text-black": variant === "outlined" && color === "black",
    }
  );

  return (
    <a className={buttonClassName} {...anchorProps}>
      {icon}
      {children}
    </a>
  );
};

export default Button;
