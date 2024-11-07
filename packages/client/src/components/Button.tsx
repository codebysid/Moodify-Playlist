import { forwardRef, ReactNode, RefObject } from "react";

interface IButton {
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  children: ReactNode;
  type?: "submit" | "button" | "reset";
  ref?: RefObject<HTMLButtonElement>;
}

const Button = forwardRef<HTMLButtonElement, IButton>(function Button(
  { className, disabled, onClick, type, children, icon },
  ref
) {
  return (
    <button
      ref={ref}
      className={`flex flex-row justify-center items-center gap-3 bg-primary px-4 py-2 rounded-lg transition-all duration-300 border-2 border-transparent font-semibold  hover:bg-opacity-50 hover:border-2 hover:border-primary ${className}`}
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
