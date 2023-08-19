import type { ButtonHTMLAttributes } from "react";
import { cn } from "@utils/index";
import type { VariantProps } from "class-variance-authority";
import { cva } from "class-variance-authority";

// react-aria
// react-stately

export const buttonVariants = cva("button-ui", {
  variants: {
    variant: {
      unstyled: "shadow-none",
      primary: [
        "border border-zinc-300 dark:border-zinc-700",
        "bg-white dark:bg-zinc-900 dark:hover:bg-zinc-800",
      ],
      secondary: [
        "text-zinc-50",
        "bg-zinc-700 hover:bg-zinc-800 dark:hover:bg-zinc-600",
      ],
      dark: [
        "text-zinc-50",
        "bg-zinc-700 dark:bg-zinc-900 hover:bg-zinc-800 dark:hover:bg-zinc-800",
        "border border-zinc-700",
      ],
      light: [
        "border border-zinc-300 dark:border-zinc-700",
        "bg-white dark:bg-zinc-700 dark:hover:bg-zinc-600",
      ],
    },
    size: {
      md: "py-2.5 px-4",
      sm: "py-2 px-3.5",
      smSquare: "p-2 aspect-square",
      mdSquare: "p-2.5 aspect-square",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

interface Props
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  isLoading?: boolean;
  icon?: React.ReactNode;
}

const Button: React.FC<Props> = ({
  className,
  children,
  variant,
  size,
  isLoading,
  icon,
  ...props
}) => {
  return (
    <button
      className={cn(buttonVariants({ variant, size, className }))}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="h-5 w-5 animate-spin"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M5.636 5.636a9 9 0 1012.728 0M12"
          />
        </svg>
      ) : icon ? (
        <span className="min-w-[20px]">{icon}</span>
      ) : null}
      {children}
    </button>
  );
};

export default Button;
