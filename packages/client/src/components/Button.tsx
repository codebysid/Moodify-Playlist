import { forwardRef, ReactNode, RefObject } from "react";

interface IButton {
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children?: ReactNode;
  type?: "submit" | "button" | "reset";
  ref?: RefObject<HTMLButtonElement>;
  variant?: "primary" | "ghost";
}

const Button = forwardRef<HTMLButtonElement, IButton>(function Button(
  { className, disabled, onClick, type, children, icon, variant = "primary" },
  ref
) {
  return (
    <button
      ref={ref}
      className={`flex flex-row justify-center items-center gap-3  px-4 py-2 rounded-lg transition-all duration-300 border-2 border-transparent font-semibold whitespace-nowrap  hover:bg-opacity-50 hover:border-2  ${
        variant == "primary" && `bg-primary hover:border-primary`
      } ${variant == "ghost" && `bg-transparent`} ${className}`}
      onClick={onClick}
      disabled={disabled}
      type={type}
    >
      {children}
      {icon && icon}
    </button>
  );
});

export default Button;
