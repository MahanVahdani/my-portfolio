"use client";

import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "outlined" | "primary" | "secondary";

type ButtonProps = {
  variant?: ButtonVariant;
  className?: string;
  children: React.ReactNode;
  type?: "button" | "submit" | "reset";
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-white border-transparent hover:bg-primary/90 shadow-sm",
  secondary:
    "bg-secondary text-white border-transparent hover:bg-secondary/90 shadow-sm",
  outlined:
    "bg-transparent text-foreground border border-surface-border hover:bg-foreground/5",
};

const Button = ({
  variant = "primary",
  className,
  children,
  type = "button",
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-medium duration-200 transition-all hover:scale-[1.02] cursor-pointer",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-50",
        variantClasses[variant],
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
