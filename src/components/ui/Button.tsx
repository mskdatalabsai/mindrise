import Link from "next/link";
import type { ButtonHTMLAttributes, ReactNode } from "react";
import { cn } from "@/lib/utils";

type ButtonVariant = "primary" | "outline" | "subtle";
type ButtonSize = "sm" | "md" | "lg";

interface BaseProps {
  variant?: ButtonVariant;
  size?: ButtonSize;
  icon?: ReactNode;
  className?: string;
  children: ReactNode;
  onClick?: () => void;
}

interface ButtonAsLink extends BaseProps {
  href: string;
}

interface ButtonAsButton
  extends BaseProps,
    Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children" | "onClick"> {
  href?: undefined;
}

type ButtonProps = ButtonAsLink | ButtonAsButton;

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-gradient-to-r from-brand-blue to-brand-teal text-white shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-teal/25 hover:brightness-110 active:brightness-95",
  outline:
    "border border-brand-teal/50 text-brand-teal bg-transparent hover:bg-brand-teal/10 active:bg-brand-teal/15",
  subtle:
    "bg-slate-900/5 text-slate-900 border border-mist hover:bg-mist active:bg-mist/80",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "px-4 py-2 text-sm gap-1.5",
  md: "px-5 py-3 text-sm gap-2",
  lg: "px-7 py-3.5 text-base gap-2.5",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-200 whitespace-nowrap cursor-pointer disabled:opacity-50 disabled:pointer-events-none";

export function Button({
  variant = "primary",
  size = "md",
  icon,
  className,
  children,
  href,
  onClick,
  ...rest
}: ButtonProps) {
  const classes = cn(
    baseStyles,
    variantStyles[variant],
    sizeStyles[size],
    className
  );

  if (href) {
    const isAnchor = href.startsWith("#");
    if (isAnchor) {
      return (
        <a href={href} className={classes} onClick={onClick}>
          {children}
          {icon}
        </a>
      );
    }
    return (
      <Link href={href} className={classes} onClick={onClick}>
        {children}
        {icon}
      </Link>
    );
  }

  return (
    <button
      className={classes}
      onClick={onClick}
      {...(rest as ButtonHTMLAttributes<HTMLButtonElement>)}
    >
      {children}
      {icon}
    </button>
  );
}
