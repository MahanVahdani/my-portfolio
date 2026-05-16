"use client";

import React from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "outlined" | "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
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

const sizeClasses: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm rounded-lg",
  md: "px-6 py-3 text-sm rounded-xl",
  lg: "px-8 py-3.5 text-base rounded-xl",
};

const Button = ({
  variant = "primary",
  size = "md",
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
        "inline-flex items-center justify-center gap-2 font-medium duration-200 transition-all",
        "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40 focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        "disabled:pointer-events-none disabled:opacity-50 hover:scale-[1.02] cursor-pointer",

        variantClasses[variant],
        sizeClasses[size],
        className,
      )}
    >
      {children}
    </button>
  );
};

export default Button;
